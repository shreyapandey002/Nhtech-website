import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Workflow, 
  UserCheck, 
  CheckCircle2, 
  FileText, 
  Database, 
  Server, 
  AlertCircle,
  Play,
  RotateCcw,
  Clock,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { RoutePath } from '../../types';
import { MaskedHeading, ScrollText } from '../common/ScrollMotion';

interface AgenticExecutionFlowSectionProps {
  onNavigate: (path: RoutePath) => void;
}

interface ChainStep {
  id: string;
  stepNumber: string;
  title: string;
  subhead: string;
  role: string;
  systemsAccessed: string[];
  whatHappens: string;
  sampleData: string;
  requiresHuman: boolean;
  accent: string;
}

const executionChain: ChainStep[] = [
  {
    id: 'input',
    stepNumber: '01',
    title: 'Input',
    subhead: 'Event & Document Ingestion',
    role: 'Multi-channel raw event arrival across email attachments, SFTP, webhooks, or API streams.',
    systemsAccessed: ['Internal API Gateway', 'SFTP Ingestion', 'Kafka Event Stream'],
    whatHappens: 'System ingests incoming business payloads (invoices, legal contracts, claims, or telemetry packets) and normalizes schema boundaries.',
    sampleData: 'EVENT: invoice_received_discrepancy | ID: INV-2026-8812 | Amount: $18,450.00',
    requiresHuman: false,
    accent: '#38bdf8'
  },
  {
    id: 'reasoning',
    stepNumber: '02',
    title: 'AI Reasoning',
    subhead: 'Context Assembly & Evaluation',
    role: 'Semantic parsing, entity extraction, and business rule evaluation using calibrated models.',
    systemsAccessed: ['Document Knowledge Base', 'Enterprise Vector Store', 'Historical Contract Archive'],
    whatHappens: 'Models parse table line items, extract contractual terms, cross-reference master service agreements, and identify variance.',
    sampleData: 'REASONING: Line item #4 billed at $210/hr. Master Contract rate card specifies $185/hr.',
    requiresHuman: false,
    accent: '#e0fb2e'
  },
  {
    id: 'human-approval',
    stepNumber: '03',
    title: 'Human Approval',
    subhead: 'Mandatory Sign-off Gate',
    role: 'Deterministic escalation where exceptions, high entropy, or spend thresholds trigger review.',
    systemsAccessed: ['Human Triage Queue', 'Slack / Teams Webhook', 'Controller Workbench'],
    whatHappens: 'Surfaces a structured visual diff with inline citations. Operators approve, reject, or adjust before any automated write happens.',
    sampleData: 'GATE: Controller @j.doe approved adjusted payment of $15,950.00 at 14:32:08 UTC.',
    requiresHuman: true,
    accent: '#e0fb2e'
  },
  {
    id: 'tool-action',
    stepNumber: '04',
    title: 'Tool / System Action',
    subhead: 'Atomic System Commit',
    role: 'Bi-directional execution directly into enterprise ERPs, SQL ledgers, or external APIs.',
    systemsAccessed: ['SAP S/4HANA ERP', 'PostgreSQL Ledger', 'Banking ACH Gateway'],
    whatHappens: 'Executes the approved transaction in core business records, posts adjustments, and triggers downstream event notifications.',
    sampleData: 'WRITE: sap_commit_payment_voucher("PV-44109", adjusted_amt=$15950.00) -> HTTP 200 OK',
    requiresHuman: false,
    accent: '#38bdf8'
  },
  {
    id: 'audit-trail',
    stepNumber: '05',
    title: 'Audit Trail',
    subhead: 'Cryptographic & Traceable Log',
    role: 'Immutable recording of prompts, model versions, human approvals, and system state transitions.',
    systemsAccessed: ['Immutable Audit Store', 'SOC2 / SOX Archival', 'OpenTelemetry Exporter'],
    whatHappens: 'Records end-to-end evidence packets with timestamps, signer identity, and parameter hashes for full regulatory auditability.',
    sampleData: 'AUDIT_HASH: 9f8a...3c12 | VERIFIED | Latency: 1.4s (excl human queue) | Zero Leakage',
    requiresHuman: false,
    accent: '#d7bdf9'
  }
];

export function AgenticExecutionFlowSection({ onNavigate }: AgenticExecutionFlowSectionProps) {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const currentStep = executionChain[selectedStepIndex];

  return (
    <section 
      id="agentic-execution-chain-section"
      className="py-20 sm:py-28 bg-[var(--bg-base)] border-b border-[var(--border-color)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        {/* Header with Buyer-Oriented Headline and Actionable Prompt */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[var(--border-color)]">
          <div className="space-y-3 max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
              <span>AGENTIC WORKFLOWS // FORWARD DEPLOYED ENGINEERING</span>
            </motion.div>
            
            <MaskedHeading as="h2" className="text-section-display text-[var(--text-primary)] leading-[1.18]">
              AI that fits your workflow,{' '}
              <span className="font-bold text-[var(--accent-secondary)]">
                not the other way around.
              </span>
            </MaskedHeading>
          </div>

          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] font-normal max-w-md leading-relaxed text-left" delay={0.2}>
            Show us the workflow, approvals, systems and failure points. We’ll map where AI fits and build the production path with deterministic guardrails.
          </ScrollText>
        </div>

        {/* 5-Step Visual Flow: Input → AI Reasoning → Human Approval → Tool/System Action → Audit Trail */}
        <div className="space-y-8">
          
          {/* Progress Nodes: 5 Clean Stages */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {executionChain.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer flex flex-col justify-between min-h-[140px] ${
                    isSelected
                      ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent-secondary)] shadow-md ring-1 ring-[#e0fb2e]/40'
                      : 'bg-[var(--bg-surface)] border-[var(--border-color)] hover:border-[var(--border-hover)]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#e0fb2e]' : 'text-[var(--text-muted)]'}`}>
                      STAGE {step.stepNumber}
                    </span>
                    {step.requiresHuman ? (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#e0fb2e]/10 text-[#e0fb2e] border border-[#e0fb2e]/30">
                        HUMAN GATE
                      </span>
                    ) : (
                      <span className="text-[9px] font-mono text-[var(--text-muted)]">
                        AUTOMATED
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 mt-2">
                    <div className="text-sm font-display font-bold text-[var(--text-primary)]">
                      {step.title}
                    </div>
                    <div className="text-[11px] text-[var(--text-muted)] font-mono leading-tight">
                      {step.subhead}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[var(--border-color)]">
                    <span className="text-[10px] font-mono text-[var(--text-secondary)] line-clamp-1">
                      {step.systemsAccessed[0]}
                    </span>
                  </div>

                  {isSelected && (
                    <motion.div 
                      layoutId="active-chain-indicator" 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-[#e0fb2e]" 
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Card for Selected Step */}
          <motion.div 
            key={currentStep.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Context & Systems */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#e0fb2e] text-[#0b0c0e]">
                      STAGE {currentStep.stepNumber} // {currentStep.title}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
                      {currentStep.subhead}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)]">
                    {currentStep.role}
                  </h3>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {currentStep.whatHappens}
                </p>

                {/* Systems Touched */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                    SYSTEM CONNECTORS &amp; TELEMETRY TOUCHED
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentStep.systemsAccessed.map((sys) => (
                      <span 
                        key={sys}
                        className="px-3 py-1.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)]"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Terminal Sample & Action Callout */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-5 text-left">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)] text-xs font-mono">
                  <div className="flex items-center gap-2 text-[var(--text-primary)]">
                    <Terminal className="w-4 h-4 text-[#e0fb2e]" />
                    <span>AUDIT RECORD // TRACE LOG</span>
                  </div>
                  <span className="text-[#e0fb2e]">VERIFIED</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#09080d] border border-[var(--border-color)] text-xs font-mono text-[#e0fb2e] overflow-x-auto leading-relaxed">
                  {currentStep.sampleData}
                </div>

                <div className="space-y-2 text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
                  {currentStep.requiresHuman ? (
                    <div className="flex items-start gap-2 text-[#e0fb2e]">
                      <UserCheck className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>Human sign-off is mandatory before downstream ERP commits execute. Zero unverified tool actions.</span>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <ShieldCheck className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                      <span>Bounded execution with deterministic schema validation and sub-second fallback logic.</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Action Buttons with High Intent */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-color)] text-left">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-md"
            >
              <span>Show Us the Workflow</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>

            <button
              onClick={() => onNavigate('/fde')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-medium transition-all cursor-pointer"
            >
              <span>Talk to an Engineering Pod</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </button>
          </div>

          <span className="text-xs font-mono text-[var(--text-muted)]">
            Input → AI Reasoning → Human Approval → Tool/System Action → Audit Trail
          </span>
        </div>

      </div>
    </section>
  );
}
