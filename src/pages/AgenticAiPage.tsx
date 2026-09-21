import { useState } from 'react';
import { RoutePath } from '../types';
import { WorldCanvas } from '../components/common/WorldCanvas';
import { SpatialPageHeader } from '../components/common/SpatialPageHeader';
import { AgentWorkflowSimulator } from '../components/architecture/AgentWorkflowSimulator';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { Lock, ShieldCheck, FileText, ArrowRight, Terminal, CheckCircle2, Play, RefreshCw, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface AgenticAiPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function AgenticAiPage({ onNavigate }: AgenticAiPageProps) {
  return (
    <div id="agentic-ai-chapter" className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] space-y-24">
      {/* 0. Dynamic World Canvas */}
      <WorldCanvas mode="enterprise" opacity={0.35} />

      {/* 1. Spatial Header */}
      <SpatialPageHeader
        tag="AGENTIC SYSTEMS & DETERMINISTIC STATE ENGINES"
        title="AI that does the work,"
        titleAccent="not just the talking."
        subtitle="Autonomous execution engines designed to live inside real enterprise operations—operating tools, evaluating context, respecting permission boundaries, and escalating to human checkpoints."
        ctaText="Initiate Agentic Assessment"
        ctaRoute="/contact"
        secondaryCtaText="Inspect WYZ Case Study"
        secondaryCtaRoute="/work"
        onNavigate={onNavigate}
        telemetryItems={[
          { label: 'ORCHESTRATION', value: 'DETERMINISTIC DAG' },
          { label: 'CHECKPOINTS', value: 'MANDATORY HUMAN GATES' },
          { label: 'PARTNERSHIP', value: 'OPENAI SELECT' },
        ]}
      />

      {/* 2. Interactive DAG Agent Workflow Simulator */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-6 text-left">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
          <div>
            <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold">
              EXECUTION SANDBOX // 01
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
              Deterministic Multi-Step Agent State Machine
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)]">
            LIVE RUNTIME SIMULATION WITH HUMAN CHECKPOINTS
          </div>
        </div>

        <AgentWorkflowSimulator />
      </section>

      {/* 3. The 3 Architectural Governance Boundaries */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-10 text-left">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono text-[var(--accent-secondary)] uppercase">ENTERPRISE GOVERNANCE</span>
          <MaskedHeading as="h2" className="text-3xl sm:text-4xl font-display font-bold text-[var(--text-primary)] tracking-tight">
            How agents are constrained in production.
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
            Stochastic language models cannot be granted unrestricted API access. We enforce strict state machine boundaries, explicit permission scopes, and replayable execution audit logs.
          </ScrollText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex items-center justify-center text-[#e0fb2e]">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">Bounded Tool Permissions</h3>
            <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
              Agents never run with unrestricted root access. Every tool invocation uses strictly scoped OAuth/mTLS tokens, rate-limited endpoints, and rigorous parameter schema validation.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[var(--text-muted)]">
              ✓ Scoped IAM &amp; mTLS credentials
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex items-center justify-center text-[#38bdf8]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">Human-in-the-Loop Gates</h3>
            <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
              High-consequence operations (financial transactions above limits, database deletions, high-entropy classifications) pause automatically for human operator verification.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[var(--text-muted)]">
              ✓ Exception triage workbenches
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-secondary)]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">Immutable Decision Logs</h3>
            <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
              Every step, prompt token, intermediate thought, tool call argument, and operator sign-off is logged into an immutable append-only event store for compliance auditability.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[var(--text-muted)]">
              ✓ OpenTelemetry &amp; SIEM streaming
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 sm:p-14 text-center space-y-6 shadow-xl"
        >
          <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold tracking-widest">
            AGENT ARCHITECTURE ROADMAP
          </span>
          <MaskedHeading as="h2" className="text-3xl sm:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight max-w-3xl mx-auto">
            Ready to architect deterministic agent workflows?
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
            We evaluate your existing operational friction, map decision DAGs, and construct custom autonomous systems.
          </ScrollText>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-xl"
            >
              <span>Schedule Architecture Session</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
