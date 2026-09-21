import { EngineeringTrackMeta } from '../types';

export const engineeringTracks: EngineeringTrackMeta[] = [
  {
    id: 'fde',
    title: 'Forward Deployed AI Engineering',
    shortTitle: '01 // FDE AI Engineering',
    tagline: 'Forward deployed engineers working alongside your team to turn complex business problems into production systems.',
    description: 'We embed senior product and AI engineers directly into your domain to deconstruct difficult requirements, select and evaluate optimal models, and deliver resilient, production-ready software.',
    badge: 'CORE TRACK 01',
    accent: '#e0fb2e',
    subCapabilities: [
      'Agentic AI & state machine orchestration',
      'Small Language Models (SLMs) & low-latency runtimes',
      'Frontier models & multi-step reasoning',
      'Fine-tuning, quantization & model distillation',
      'Custom enterprise AI products & modern UX',
      'Empirical model selection & evaluation benchmarks',
      'Bi-directional enterprise workflow integrations'
    ]
  },
  {
    id: 'vision-edge',
    title: 'Vision & Edge AI',
    shortTitle: '02 // Vision & Edge AI',
    tagline: 'Physical-world perception, kinematic tracking, and on-device inference with zero cloud latency.',
    description: 'High-frequency computer vision, open-weight vision-language-action (OpenVLA) models, and edge silicon optimization engineered for factory floors, biomechanics, robotics, and mobile devices.',
    badge: 'CORE TRACK 02',
    accent: '#38bdf8',
    subCapabilities: [
      'Computer vision & defect classification',
      'OpenVLA / vision-language-action models',
      'Sub-15ms edge inference on TensorRT & ONNX',
      'On-device models & local memory IPC',
      'Industrial & manufacturing vision systems',
      'Physical-world AI & real-time pose estimation'
    ]
  },
  {
    id: 'complex-business',
    title: 'Complex Business Solutions',
    shortTitle: '03 // Complex Business Solutions',
    tagline: 'Translating intricate domain rules, compliance mandates, and legacy silos into resilient systems.',
    description: 'Building bespoke enterprise software for high-stakes operational environments where the challenge is deconstructing messy business logic, regulatory rules, and legacy architectures into bulletproof platforms.',
    badge: 'CORE TRACK 03',
    accent: '#d7bdf9',
    subCapabilities: [
      'High-volume payments & streaming ledger telemetry',
      'Enterprise loyalty & dynamic reward architectures',
      'ERP & core operational workflow modernization',
      'Regulatory compliance & immutable audit logs',
      'Productivity systems & context automation',
      'Bespoke enterprise applications with 100% client IP'
    ]
  }
];
