import { useState } from 'react';
import { Database, Brain, Cpu, Wrench, UserCheck, CheckCircle2, FileText, ArrowRight, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StageInfo {
  id: string;
  name: string;
  sub: string;
  icon: typeof Database;
  description: string;
  details: {
    inputs: string;
    action: string;
    guarantee: string;
  };
}

const stages: StageInfo[] = [
  {
    id: 'data',
    name: 'Enterprise Data',
    sub: 'Isolated Ingestion',
    icon: Database,
    description: 'Raw documents, SQL records, API streams, and emails inside your approved network.',
    details: {
      inputs: 'PDFs, ERP streams, SQL tables, Email IMAP',
      action: 'Zero-egress boundary parsing & vector embedding',
      guarantee: 'Data never leaves designated VPC or on-prem enclave'
    }
  },
  {
    id: 'understand',
    name: 'Understanding',
    sub: 'Context Graph',
    icon: Brain,
    description: 'Semantic extraction, entity recognition, and real-time state graph assembly.',
    details: {
      inputs: 'Raw text chunks & multi-modal layout tokens',
      action: 'Hybrid sparse-dense retrieval + knowledge graph traversal',
      guarantee: 'Deterministic citation grounding to source paragraphs'
    }
  },
  {
    id: 'reason',
    name: 'Reasoning',
    sub: 'Policy & Rules',
    icon: Cpu,
    description: 'Open-weight or on-prem model evaluating constraints within strict policy bounds.',
    details: {
      inputs: 'Structured state graph & domain rule parameters',
      action: 'State machine planning with constrained output schemas',
      guarantee: 'Bounded reasoning without unconstrained hallucinations'
    }
  },
  {
    id: 'tools',
    name: 'Tools & Actions',
    sub: 'Scoped APIs',
    icon: Wrench,
    description: 'Sandboxed invocations of ERP, CRM, database, or notification systems.',
    details: {
      inputs: 'Typed JSON parameters validated against schema',
      action: 'Least-privilege OAuth / mTLS microservice calls',
      guarantee: 'Explicit mutation scopes; no arbitrary shell/network access'
    }
  },
  {
    id: 'checkpoint',
    name: 'Human Checkpoint',
    sub: 'Risk Escalation',
    icon: UserCheck,
    description: 'High-consequence actions or high-entropy edge cases pause for operator review.',
    details: {
      inputs: 'Proposed payload + confidence score + source diff',
      action: 'Operator approval / rejection with annotated reasoning',
      guarantee: 'Zero unmonitored execution above configured risk threshold'
    }
  },
  {
    id: 'execute',
    name: 'Execution',
    sub: 'Target Systems',
    icon: CheckCircle2,
    description: 'Committed transactions, updated databases, and finalized work product.',
    details: {
      inputs: 'Approved transaction payload',
      action: 'Atomic write to production databases and APIs',
      guarantee: 'Idempotent execution with rollback failover'
    }
  },
  {
    id: 'audit',
    name: 'Audit Log',
    sub: 'Immutable Trace',
    icon: FileText,
    description: 'Cryptographically signed telemetry, decision reasoning, and replayable trails.',
    details: {
      inputs: 'Full event chain (state, decision, tool, approval)',
      action: 'Append-only immutable event storage',
      guarantee: '100% replayable for regulatory compliance & debugging'
    }
  }
];

export function HeroSystemDiagram() {
  const [activeStageId, setActiveStageId] = useState<string>('reason');
  const activeStage = stages.find(s => s.id === activeStageId) || stages[2];

  return (
    <div 
      id="hero-system-architecture"
      className="relative rounded-2xl bg-[#0f1115] border border-[#1f232b] p-5 sm:p-7 shadow-2xl overflow-hidden"
    >
      {/* Top telemetry bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-[#1b1f27] text-xs font-mono text-[#9ca3af]">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[#e5e7eb] font-semibold">ENTERPRISE SYSTEM ARCHITECTURE</span>
          <span className="text-[#4b5563]">/</span>
          <span className="text-emerald-400">CONTROLLED EXECUTION ENCLAVE</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-[#6b7280]">
          <span className="inline-flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-emerald-400" />
            HUMAN-IN-THE-LOOP ACTIVE
          </span>
          <span className="hidden sm:inline">ZERO DATA EGRESS</span>
        </div>
      </div>

      {/* Interactive flow pipeline */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-2.5 mb-6">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              id={`hero-flow-stage-${stage.id}`}
              onClick={() => setActiveStageId(stage.id)}
              className={`relative flex flex-col items-start p-3 sm:p-3.5 rounded-xl text-left transition-all group ${
                isActive 
                  ? 'bg-[#181c24] border border-emerald-500/50 shadow-lg shadow-emerald-950/20' 
                  : 'bg-[#12151b] border border-[#1d212a] hover:bg-[#151921] hover:border-[#2a303d]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-[#191d26] text-[#9ca3af] group-hover:text-white'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[#525a6a]">
                  0{index + 1}
                </span>
              </div>
              <h4 className={`text-xs font-semibold leading-tight mb-0.5 ${isActive ? 'text-white' : 'text-[#d1d5db]'}`}>
                {stage.name}
              </h4>
              <span className="text-[10px] font-mono text-[#717b8c] truncate w-full">
                {stage.sub}
              </span>

              {index < stages.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-[#2d3340]">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Stage Detail Inspector Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="rounded-xl bg-[#13161c] border border-[#232834] p-4 sm:p-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                INSPECTING STAGE: {activeStage.name.toUpperCase()}
              </div>
              <h3 className="text-base font-semibold text-white tracking-tight mb-1.5">
                {activeStage.sub}
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                {activeStage.description}
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-[#1f2430] md:pl-4 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#0d0f13] border border-[#1b1f27]">
                <div className="text-[10px] text-[#6b7280] uppercase tracking-wider mb-1">Inputs</div>
                <div className="text-[#d1d5db] text-[11px] leading-snug">{activeStage.details.inputs}</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0d0f13] border border-[#1b1f27]">
                <div className="text-[10px] text-[#6b7280] uppercase tracking-wider mb-1">Engine Action</div>
                <div className="text-emerald-400 text-[11px] leading-snug">{activeStage.details.action}</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0d0f13] border border-[#1b1f27]">
                <div className="text-[10px] text-[#6b7280] uppercase tracking-wider mb-1">Safety Guarantee</div>
                <div className="text-[#93c5fd] text-[11px] leading-snug">{activeStage.details.guarantee}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
