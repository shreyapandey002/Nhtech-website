import { ProofStat } from '../types';

/**
 * Proof statistics and verified milestones.
 * Guardrail rule: Only items with `verified: true` will be rendered publicly.
 */
export const rawProofStats: ProofStat[] = [
  {
    id: 'financial-streaming',
    value: '2 PB / day',
    label: 'Financial Streaming & Anomaly Processing',
    context: 'Cross-region distributed ledger ingestion and real-time fraud pattern detection across peak transaction volumes.',
    verified: true,
    notes: 'Verified production architecture for cross-region financial transaction processing.'
  },
  {
    id: 'vision-fps',
    value: '60 FPS',
    label: 'On-Device Kinematic Computer Vision',
    context: 'Real-time biomechanical joint tracking and motion analysis computed entirely on edge silicon with zero cloud roundtrip.',
    verified: true,
    notes: 'Verified edge runtime benchmark on mobile and embedded hardware.'
  },
  {
    id: 'enterprise-agents',
    value: 'Production Agents',
    label: 'Deterministic Workflow Execution',
    context: 'Multi-step agent state machines connecting ERPs, databases, and APIs with mandatory human approval gates and audit logs.',
    verified: true,
    notes: 'Verified production multi-agent systems with deterministic recovery and zero unbounded loops.'
  },
  {
    id: 'engineering-origins',
    value: 'Microsoft R&D',
    label: 'Core Systems Pedigree',
    context: 'Founding engineering leadership and core technical talent originating from Microsoft R&D India.',
    verified: true,
    notes: 'Direct technical heritage in enterprise operating systems, distributed cloud platforms, and applied AI.'
  },
  {
    id: 'openai-partner',
    value: 'Select Partner',
    label: 'OpenAI Enterprise Collaboration',
    context: 'Verified OpenAI Select Partner specialized in enterprise agent orchestration, model fine-tuning, and production optimization.',
    verified: true,
    notes: 'Official enterprise partner tier specialized in agent building and AI systems.'
  },
  // Unverified historical stats - Kept internally with verified: false (will NOT be rendered publicly)
  {
    id: 'partnerships-years',
    value: '10 Years',
    label: 'Partnership History',
    context: 'Long-term enterprise collaboration',
    verified: false,
    notes: 'Requires audit before public display.'
  }
];

export const publicProofStats = rawProofStats.filter(stat => stat.verified);
