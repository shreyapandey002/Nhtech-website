import { useState } from 'react';
import { Eye, BookOpen, BrainCircuit, Terminal, UserCheck, History, ShieldAlert, CheckCircle2, Lock, Play, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AgentStep {
  key: string;
  label: string;
  action: string;
  icon: typeof Eye;
  summary: string;
  canAccess: string[];
  cannotAccess: string[];
  samplePayload: {
    title: string;
    code: string;
  };
  checkpointState: 'AUTOMATIC' | 'HUMAN_REVIEW_REQUIRED' | 'AUDIT_COMMITTED';
}

const workflowSteps: AgentStep[] = [
  {
    key: 'observe',
    label: 'Observe',
    action: 'Reads approved data, documents, or events',
    icon: Eye,
    summary: 'Agent listens for incoming triggers across authorized data pipelines (webhooks, email inbox, Kafka topics).',
    canAccess: ['Approved inbound email queue', 'Validated attachment folder', 'Read-only document store'],
    cannotAccess: ['Customer PII unmasked tables', 'Production payment credentials', 'System shell'],
    samplePayload: {
      title: 'INCOMING_EVENT_PAYLOAD.json',
      code: `{\n  "event_id": "evt_99482_doc_intake",\n  "source": "eu_procurement_mailbox",\n  "timestamp": "2026-08-24T19:35:00Z",\n  "document_type": "supplier_order_invoice.pdf",\n  "declared_currency": "EUR"\n}`
    },
    checkpointState: 'AUTOMATIC'
  },
  {
    key: 'understand',
    label: 'Understand',
    action: 'Retrieves context and constructs the relevant state',
    icon: BookOpen,
    summary: 'Runs layout-aware extraction, spatial entity mapping, and hybrid vector retrieval against the knowledge graph.',
    canAccess: ['Qdrant vector collections', 'Contract taxonomy knowledge graph', 'Entity normalization dictionary'],
    cannotAccess: ['External web search without proxy', 'Unapproved tenant schemas', 'Raw unencrypted disk'],
    samplePayload: {
      title: 'CONTEXT_STATE_GRAPH.json',
      code: `{\n  "vendor_identified": "Stahlwerke GmbH",\n  "vendor_tax_id": "DE812345678",\n  "invoice_line_items": 14,\n  "net_amount": 184500.00,\n  "linked_po_id": "PO-2026-8819",\n  "citation_anchors": ["p1_bbox_line_4", "p2_bbox_total"]\n}`
    },
    checkpointState: 'AUTOMATIC'
  },
  {
    key: 'reason',
    label: 'Reason',
    action: 'Evaluates the situation within defined rules and permissions',
    icon: BrainCircuit,
    summary: 'Applies domain logic, formula validation, contract tolerances, and compliance rules to form an execution plan.',
    canAccess: ['Deterministic business rule engine', 'Tolerance thresholds (±1.5%)', 'Self-hosted LLM reasoning engine'],
    cannotAccess: ['Self-modification of permission bounds', 'Unbounded recursive loops', 'Arbitrary tool invocation'],
    samplePayload: {
      title: 'REASONING_PLAN.json',
      code: `{\n  "po_match_status": "MATCH_CONFIRMED",\n  "price_variance": "+0.42%",\n  "tax_validation": "PASSED_EU_VAT_CHECK",\n  "risk_score": 0.12,\n  "requires_escalation": false,\n  "planned_action": "ERP_SAP_POST_INVOICE"\n}`
    },
    checkpointState: 'AUTOMATIC'
  },
  {
    key: 'act',
    label: 'Act',
    action: 'Calls approved tools, APIs, and enterprise systems',
    icon: Terminal,
    summary: 'Executes scoped API calls with least-privilege tokens. Formats payload to exact target schemas.',
    canAccess: ['SAP ERP Invoice API (scoped token)', 'Slack/Teams operational notification webhook', 'Document status updater'],
    cannotAccess: ['Raw database administrative commands', 'Direct wire transfer execution', 'Root network config'],
    samplePayload: {
      title: 'TOOL_INVOCATION.json',
      code: `{\n  "tool_name": "sap_accounting_service.post_invoice",\n  "idempotency_key": "idemp_81029388102",\n  "parameters": {\n    "po_reference": "PO-2026-8819",\n    "amount": 184500.00,\n    "currency": "EUR",\n    "status": "APPROVED_FOR_PAYMENT_RUN"\n  }\n}`
    },
    checkpointState: 'AUTOMATIC'
  },
  {
    key: 'checkpoint',
    label: 'Checkpoint',
    action: 'Escalates high-risk or uncertain decisions to a human',
    icon: UserCheck,
    summary: 'Actions exceeding financial limits (€50,000) or high entropy states pause instantly for human operator sign-off.',
    canAccess: ['Operator review queue API', 'Discrepancy diff visualizer', 'Audit explanation generator'],
    cannotAccess: ['Auto-bypass of human gate', 'Silent execution during escalation'],
    samplePayload: {
      title: 'HUMAN_TRIAGE_PACKET.json',
      code: `{\n  "escalation_reason": "INVOICE_AMOUNT_EXCEEDS_50K_AUTO_LIMIT",\n  "amount": 184500.00,\n  "threshold": 50000.00,\n  "suggested_action": "APPROVE",\n  "confidence": 0.98,\n  "assigned_operator": "procurement_lead@enterprise.de",\n  "decision": "AWAITING_HUMAN_CONFIRMATION"\n}`
    },
    checkpointState: 'HUMAN_REVIEW_REQUIRED'
  },
  {
    key: 'record',
    label: 'Record',
    action: 'Logs decisions, tool calls, and outcomes for review',
    icon: History,
    summary: 'Writes an immutable cryptographic audit record capturing input, reasoning trace, operator approval, and tool receipt.',
    canAccess: ['Append-only compliance ledger', 'Prometheus/Grafana operational metrics', 'Internal observability trace'],
    cannotAccess: ['Log deletion or truncation', 'Modification of historical traces'],
    samplePayload: {
      title: 'IMMUTABLE_AUDIT_LOG.json',
      code: `{\n  "trace_id": "trc_eu_9941_2026",\n  "event_hash": "sha256:7f83b1657ff1fc53b92...",\n  "operator_signature": "sig_ed25519_verified",\n  "execution_duration_ms": 340,\n  "compliance_status": "COMPLIANT_TRACEABLE",\n  "replayable": true\n}`
    },
    checkpointState: 'AUDIT_COMMITTED'
  }
];

export function AgentWorkflowSimulator() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const currentStep = workflowSteps[activeStepIndex];

  const handleStepClick = (index: number) => {
    setActiveStepIndex(index);
    setIsSimulating(false);
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < workflowSteps.length) {
        setActiveStepIndex(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1800);
  };

  return (
    <div id="agentic-operating-model" className="rounded-2xl bg-[#0f1115] border border-[#1f232b] p-6 sm:p-8">
      {/* Header & Mission */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-6 border-b border-[#1b1f27]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Architectural Operating Model
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight">
            AI that does the work, not just the talking.
          </h3>
          <p className="text-sm text-[#9ca3af] max-w-2xl mt-1.5">
            NHTech’s agents live inside actual enterprise workflows rather than sitting beside them as detached chat widgets. Every step runs with explicit permissions and human oversight.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="agent-sim-run-btn"
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-xs font-semibold text-black transition-all cursor-pointer shadow-md"
          >
            {isSimulating ? (
              <>
                <span className="h-2 w-2 rounded-full bg-black animate-ping" />
                Simulating Execution...
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                Simulate Workflow Cycle
              </>
            )}
          </button>
          <button
            id="agent-sim-reset-btn"
            onClick={() => { setActiveStepIndex(0); setIsSimulating(false); }}
            className="p-2 rounded-lg bg-[#14171e] hover:bg-[#1c212b] text-[#9ca3af] hover:text-white border border-[#232834] transition-all cursor-pointer"
            title="Reset to Step 1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Step Navigation Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
        {workflowSteps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeStepIndex;
          const isPassed = idx < activeStepIndex;

          return (
            <button
              key={step.key}
              id={`agent-step-tab-${step.key}`}
              onClick={() => handleStepClick(idx)}
              className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? 'bg-[#181c24] border-emerald-500/60 shadow-lg shadow-emerald-950/20 ring-1 ring-emerald-500/20'
                  : isPassed
                  ? 'bg-[#12151b] border-[#29303d] text-[#e5e7eb]'
                  : 'bg-[#0f1115] border-[#1b1f27] text-[#6b7280] hover:border-[#252b36]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1.5">
                <div className={`p-1.5 rounded-md ${isActive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-[#191d26] text-[#9ca3af]'}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono text-[#525a6a]">0{idx + 1}</span>
              </div>
              <div className="text-xs font-semibold text-white tracking-tight">{step.label}</div>
              <div className="text-[10px] font-mono text-[#717b8c] truncate w-full mt-0.5">
                {step.checkpointState === 'HUMAN_REVIEW_REQUIRED' ? 'Gate: Human' : 'Auto Step'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Step Active Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Explanation & Boundaries */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-4 rounded-xl bg-[#13161c] border border-[#232834]">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                CURRENT STATE: {currentStep.label.toUpperCase()}
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                currentStep.checkpointState === 'HUMAN_REVIEW_REQUIRED'
                  ? 'bg-amber-950/40 text-amber-300 border-amber-800/50'
                  : 'bg-[#1a1e27] text-[#9ca3af] border-[#29303d]'
              }`}>
                {currentStep.checkpointState === 'HUMAN_REVIEW_REQUIRED' ? 'HUMAN CHECKPOINT' : 'SYSTEM BOUNDED'}
              </span>
            </div>
            <h4 className="text-base font-semibold text-white mb-1">
              {currentStep.action}
            </h4>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              {currentStep.summary}
            </p>
          </div>

          {/* Access Boundaries Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#11141a] border border-[#1f2430]">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                CAN ACCESS (EXPLICIT SCOPE)
              </div>
              <ul className="space-y-1.5 text-[11px] text-[#cbd5e1]">
                {currentStep.canAccess.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-[#11141a] border border-[#1f2430]">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-rose-400 mb-2">
                <Lock className="w-3.5 h-3.5" />
                CANNOT ACCESS (HARD BOUNDARY)
              </div>
              <ul className="space-y-1.5 text-[11px] text-[#9ca3af]">
                {currentStep.cannotAccess.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Principle Banner */}
          <div className="p-3.5 rounded-xl bg-[#12161e] border border-emerald-900/30 text-xs text-[#9ca3af] flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-medium">Automation without invisible decision-making. </span>
              Every meaningful action is designed around explicit permissions, human checkpoints, and traceable execution.
            </div>
          </div>
        </div>

        {/* Right: Technical Schema & Payload View */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex-1 rounded-xl bg-[#090a0d] border border-[#1e232e] p-4 flex flex-col font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1b1f27] text-[11px] text-[#6b7280]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[#e5e7eb] font-semibold">{currentStep.samplePayload.title}</span>
              </div>
              <span className="text-[10px] text-[#9ca3af]">IMMUTABLE SCHEMA VALIDATION</span>
            </div>

            <pre className="flex-1 overflow-x-auto text-[11px] text-emerald-400/90 leading-relaxed p-2 bg-[#0c0d11] rounded-lg border border-[#161920]">
              <code>{currentStep.samplePayload.code}</code>
            </pre>

            <div className="mt-3 pt-3 border-t border-[#1b1f27] flex items-center justify-between text-[10px] text-[#6b7280]">
              <span>STATUS: REPLAYABLE_EVENT</span>
              <span className="text-emerald-400">SIGNATURE: VERIFIED_ED25519</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
