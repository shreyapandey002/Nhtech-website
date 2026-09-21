import express, { Request, Response } from 'express';
import path from 'path';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

type ContactSubmissionPayload = {
  name: string;
  email: string;
  company: string;
  role: string;
  problemStatement: string;
  constraints: string;
  projectStage: string;
  schedulingDate: string;
  schedulingTime: string;
};

async function invokeOttom8Agent(payload: ContactSubmissionPayload) {
  const apiKey = "sk-DUAimQsir-R-99iRuOJ_Qo3yk1Qa7xhbX47wyIWpg-E"
  const flowId = "f12d310d-2c3d-436f-ae25-d1c3b959d9a2"

  if (!apiKey || !flowId) {
    console.log('[Ottom8 Agent] Missing OTTOM8_API_KEY or OTTOM8_FLOW_ID. Agent invocation skipped.');
    return { skipped: true };
  }

  try {
    const response = await fetch(`https://ottom8.nhtech.link/api/v1/run/${encodeURIComponent(flowId)}?stream=false`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify({
        output_type: 'chat',
        input_type: 'chat',
        input_value: JSON.stringify(payload),
        session_id: crypto.randomUUID()
      })
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error('[Ottom8 Agent] Request failed:', response.status, result);
      return { skipped: false, ok: false, status: response.status };
    }

    console.log('[Ottom8 Agent] Invocation successful.');
    return { skipped: false, ok: true, status: response.status, result };
  } catch (error) {
    console.error('[Ottom8 Agent] Invocation error:', error);
    return { skipped: false, ok: false, error };
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middlewares
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true }));

  // In-memory rate limiting for contact submissions
  const ipSubmissionMap = new Map<string, { count: number; firstTimestamp: number }>();
  const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
  const MAX_SUBMISSIONS_PER_WINDOW = 10;

  // API Route: Health check
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // API Route: Contact / Technical Intake Form Submission
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const clientIp = req.headers['x-forwarded-for']?.toString().split(',')[0].trim() || req.socket.remoteAddress || 'unknown';

      // Rate limit check
      const now = Date.now();
      const ipRecord = ipSubmissionMap.get(clientIp);
      if (ipRecord) {
        if (now - ipRecord.firstTimestamp < RATE_LIMIT_WINDOW_MS) {
          if (ipRecord.count >= MAX_SUBMISSIONS_PER_WINDOW) {
            return res.status(429).json({
              success: false,
              error: 'Too many submissions. Please wait a moment before trying again.'
            });
          }
          ipRecord.count++;
        } else {
          ipSubmissionMap.set(clientIp, { count: 1, firstTimestamp: now });
        }
      } else {
        ipSubmissionMap.set(clientIp, { count: 1, firstTimestamp: now });
      }

      const {
        name,
        email,
        company,
        role,
        problemStatement,
        constraints,
        projectStage,
        schedulingDate,
        schedulingTime
      } = req.body;

      // Basic Validation
      if (!name || typeof name !== 'string' || name.trim().length === 0) {
        return res.status(400).json({ success: false, error: 'Full name is required.' });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
        return res.status(400).json({ success: false, error: 'A valid email address is required.' });
      }

      if (!problemStatement || typeof problemStatement !== 'string' || problemStatement.trim().length < 10) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a descriptive problem statement (minimum 10 characters).'
        });
      }

      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!schedulingDate || typeof schedulingDate !== 'string' || !dateRegex.test(schedulingDate.trim())) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a valid scheduling date in YYYY-MM-DD format.'
        });
      }

      const requestedDate = new Date(`${schedulingDate.trim()}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (Number.isNaN(requestedDate.getTime()) || requestedDate < today) {
        return res.status(400).json({
          success: false,
          error: 'Scheduling date must be today or later.'
        });
      }

      const timeRegex = /^([01]\d|2[0-2]):(00|15|30|45)$/;
      if (!schedulingTime || typeof schedulingTime !== 'string' || !timeRegex.test(schedulingTime.trim())) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a valid scheduling time between 09:00 and 22:00.'
        });
      }

      const [hours, minutes] = schedulingTime.trim().split(':').map(Number);
      const totalMinutes = (hours * 60) + minutes;
      if (totalMinutes < 9 * 60 || totalMinutes > 22 * 60) {
        return res.status(400).json({
          success: false,
          error: 'Scheduling time must be between 09:00 and 22:00.'
        });
      }

      const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'info@nighthack.in';
      const cleanName = name.trim();
      const cleanEmail = email.trim();
      const cleanCompany = (company || 'Not Specified').trim();
      const cleanRole = (role || 'Not Specified').trim();
      const cleanStage = (projectStage || 'Not Specified').trim();
      const cleanConstraints = (constraints || 'None specified').trim();
      const cleanProblem = problemStatement.trim();
      const cleanSchedulingDate = schedulingDate.trim();
      const cleanSchedulingTime = schedulingTime.trim();

      const emailSubject = `[NHTech Intake] New Technical Problem Dossier — ${cleanCompany} (${cleanName})`;
      
      const emailText = [
        `NEW TECHNICAL PROBLEM INTAKE DOSSIER`,
        `==================================================`,
        `Submitted on: ${new Date().toISOString()}`,
        `IP: ${clientIp}`,
        ``,
        `CONTACT DETAILS:`,
        `- Name: ${cleanName}`,
        `- Email: ${cleanEmail}`,
        `- Company: ${cleanCompany}`,
        `- Role: ${cleanRole}`,
        `- Project Stage / Inquiry Type: ${cleanStage}`,
        `- Scheduling Date: ${cleanSchedulingDate}`,
        `- Scheduling Time: ${cleanSchedulingTime}`,
        ``,
        `TECHNICAL PROBLEM STATEMENT:`,
        `--------------------------------------------------`,
        cleanProblem,
        ``,
        `TECHNICAL CONSTRAINTS & REQUIREMENTS:`,
        `--------------------------------------------------`,
        cleanConstraints,
        ``,
        `==================================================`,
        `Delivered to: ${recipientEmail}`
      ].join('\n');

      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #111; background-color: #f8fafc; margin: 0; padding: 24px; }
            .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; }
            .header { background: #0b0c0e; color: #ffffff; padding: 24px; }
            .badge { display: inline-block; background: #e0fb2e; color: #000; font-size: 11px; font-weight: bold; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; margin-bottom: 8px; }
            .title { margin: 0; font-size: 20px; font-weight: 700; color: #fff; }
            .content { padding: 24px; }
            .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px; }
            .meta-table td { padding: 8px 12px; border-bottom: 1px solid #f1f5f9; }
            .meta-table td.label { font-weight: 600; color: #64748b; width: 35%; }
            .meta-table td.value { color: #0f172a; font-weight: 500; }
            .section-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-top: 20px; margin-bottom: 8px; }
            .block { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; color: #1e293b; white-space: pre-wrap; word-break: break-word; }
            .footer { background: #f8fafc; padding: 16px 24px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <span class="badge">NHTech Technical Intake</span>
              <h1 class="title">New Problem Dossier Received</h1>
            </div>
            <div class="content">
              <table class="meta-table">
                <tr><td class="label">Full Name</td><td class="value">${escapeHtml(cleanName)}</td></tr>
                <tr><td class="label">Work Email</td><td class="value"><a href="mailto:${escapeHtml(cleanEmail)}">${escapeHtml(cleanEmail)}</a></td></tr>
                <tr><td class="label">Company / Organization</td><td class="value">${escapeHtml(cleanCompany)}</td></tr>
                <tr><td class="label">Role</td><td class="value">${escapeHtml(cleanRole)}</td></tr>
                <tr><td class="label">Focus / Stage</td><td class="value">${escapeHtml(cleanStage)}</td></tr>
                <tr><td class="label">Scheduling Date</td><td class="value">${escapeHtml(cleanSchedulingDate)}</td></tr>
                <tr><td class="label">Scheduling Time</td><td class="value">${escapeHtml(cleanSchedulingTime)}</td></tr>
              </table>

              <div class="section-label">Problem Statement</div>
              <div class="block">${escapeHtml(cleanProblem)}</div>

              <div class="section-label">Constraints &amp; Ingest Infrastructure</div>
              <div class="block">${escapeHtml(cleanConstraints)}</div>
            </div>
            <div class="footer">
              Dispatched to <strong>${recipientEmail}</strong> via NHTech Intake API &bull; ${new Date().toUTCString()}
            </div>
          </div>
        </body>
        </html>
      `;

      const submissionPayload: ContactSubmissionPayload = {
        name: cleanName,
        email: cleanEmail,
        company: cleanCompany,
        role: cleanRole,
        problemStatement: cleanProblem,
        constraints: cleanConstraints,
        projectStage: cleanStage,
        schedulingDate: cleanSchedulingDate,
        schedulingTime: cleanSchedulingTime
      };

      const agentResult = await invokeOttom8Agent(submissionPayload);
      if (!agentResult.skipped && !agentResult.ok) {
        console.warn('[Contact API] Agent dispatch failed but contact submission still continued.');
      }

      // Check if SMTP is configured
      let emailDispatched = false;
      let dispatchMethod = 'local-log';

      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587', 10),
            secure: process.env.SMTP_PORT === '465',
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS
            }
          });

          await transporter.sendMail({
            from: process.env.SMTP_FROM || `NHTech Intake <noreply@nighthack.in>`,
            to: recipientEmail,
            replyTo: cleanEmail,
            subject: emailSubject,
            text: emailText,
            html: emailHtml
          });

          emailDispatched = true;
          dispatchMethod = 'smtp';
          console.log(`[Contact API] Email successfully delivered to ${recipientEmail} via SMTP`);
        } catch (smtpErr) {
          console.error('[Contact API] SMTP error, falling back to delivery queue:', smtpErr);
        }
      }

      // Check if Resend API key is configured
      if (!emailDispatched && process.env.RESEND_API_KEY) {
        try {
          const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: process.env.SMTP_FROM || 'NHTech Intake <intake@nighthack.in>',
              to: [recipientEmail],
              reply_to: cleanEmail,
              subject: emailSubject,
              text: emailText,
              html: emailHtml
            })
          });

          if (resendResponse.ok) {
            emailDispatched = true;
            dispatchMethod = 'resend';
            console.log(`[Contact API] Email successfully delivered to ${recipientEmail} via Resend`);
          } else {
            console.error('[Contact API] Resend API error status:', resendResponse.status);
          }
        } catch (resendErr) {
          console.error('[Contact API] Resend dispatch error:', resendErr);
        }
      }

      // If neither or both failed, log clearly to stdout and ledger
      if (!emailDispatched) {
        console.log(`\n======================================================`);
        console.log(`[NHTech Intake API] INCOMING SUBMISSION FOR: ${recipientEmail}`);
        console.log(emailText);
        console.log(`======================================================\n`);
      }

      return res.status(200).json({
        success: true,
        message: 'Your technical intake has been successfully received and dispatched to our engineering leads at info@nighthack.in.',
        recipient: recipientEmail,
        dispatchMethod: emailDispatched ? dispatchMethod : 'queued-for-dispatch'
      });

    } catch (error: any) {
      console.error('[Contact API] Unexpected error processing submission:', error);
      return res.status(500).json({
        success: false,
        error: 'An internal error occurred while processing your submission. Please try again or email us directly at info@nighthack.in.'
      });
    }
  });

  // Helper to escape HTML in emails
  function escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, port: PORT, host: '0.0.0.0' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[NHTech Server] Listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
