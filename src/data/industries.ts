import { Industry } from '../types';

export const industries: Industry[] = [
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing & Industrial Operations',
    summary: 'AI engineered for the physical world: edge computer vision, real-time defect inspection, sensor telemetry intelligence, and factory workflow agents.',
    challenge: 'Factory environments require deterministic sub-second visual inspection, strict offline air-gapped resilience, and seamless integration with existing operational technology without cloud latency dependencies.',
    systems: [
      'Edge vision defect detection and kinematic assembly monitoring',
      'High-frequency sensor anomaly intelligence and predictive maintenance',
      'Raw material demand forecasting and supply-chain buffer optimization',
      'Air-gapped on-premise inference runtimes with zero external cloud leaks',
      'Operator dashboards and human verification stations on ruggedized tablets'
    ],
    architectureFocus: [
      'Edge inference on industrial IPCs / NVIDIA Jetson hardware',
      'Deterministic edge visual classification cycles',
      'Offline-first synchronization with central plant ERP / historian databases',
      'Human-in-the-loop verification consoles for flagged anomalous parts'
    ],
    featured: true,
    dedicatedRoute: '/industries/manufacturing'
  },
  {
    id: 'enterprise-modernization',
    slug: 'enterprise',
    name: 'Enterprise & Workflow Modernization',
    summary: 'Turning fragmented email queues, legacy ERPs, spreadsheets, and multi-step manual reconciliations into unified intelligent operating systems.',
    challenge: 'Enterprises struggle with institutional knowledge trapped in unstructured emails, documents, and spreadsheets, creating operational bottlenecks and high error rates during routine cross-department processing.',
    systems: [
      'Multi-channel intake gateways (email, portals, SFTP, shared drives)',
      'Agentic triage and automated case creation with rule-based routing',
      'Complex formula reconciliation and regulatory compliance verification',
      'Human-in-the-loop exception management and unified operator workbenches',
      'Bi-directional synchronization with legacy databases and modern cloud ERPs'
    ],
    architectureFocus: [
      'Deterministic state machines with strict permission boundaries',
      'Continuous audit logging of all automated and manual operations',
      'SAML/SSO integration and granular role-based access control (RBAC)',
      'Asynchronous queue architectures with reliable delivery guarantees'
    ],
    featured: true
  },
  {
    id: 'fintech-bfsi',
    slug: 'fintech',
    name: 'FinTech, Banking & BFSI',
    summary: 'High-throughput anomaly intelligence, real-time transaction monitoring, automated compliance document parsing, and risk scoring pipelines.',
    challenge: 'Financial institutions must process massive data streams under strict latency budgets while complying with rigorous auditability, data privacy, and explainability standards.',
    systems: [
      'Petabyte-scale transaction stream monitoring and live threat detection',
      'Automated loan, prospectus, and KYC document extraction with citation tracing',
      'Intelligent reconciliation systems across multi-currency ledgers',
      'Explainable anomaly packets and automated regulatory escalation queues'
    ],
    architectureFocus: [
      'Real-time model scoring on streaming telemetry pipelines',
      'Self-hosted inference inside client-controlled VPCs or private EU zones',
      'Immutable cryptographic audit logging and deterministic decision traces',
      'Strict segregation of client data with zero external model exposure'
    ],
    featured: true
  },
  {
    id: 'retail-ecommerce',
    slug: 'retail',
    name: 'Retail & Digital Commerce',
    summary: 'Dynamic demand forecasting, automated catalog taxonomy extraction, campaign return-on-spend analytics, and workflow automation.',
    challenge: 'Retailers face volatile consumer demand, complex multi-tier supply chains, and overwhelming catalog metadata maintenance across omnichannel distribution channels.',
    systems: [
      'Multi-horizon SKU-level demand forecasting with external signal conditioning',
      'Automated product attribute extraction and semantic catalog tagging',
      'Advertising performance intelligence and programmatic bid recommendations',
      'Supplier order generation with automated safety stock constraints'
    ],
    architectureFocus: [
      'Hierarchical probabilistic time-series forecasting pipelines',
      'High-throughput vector indexing for real-time visual and semantic search',
      'Direct synchronization into warehouse management and procurement ERPs'
    ],
    featured: true
  },
  {
    id: 'startups',
    slug: 'startups',
    name: 'Technically Complex Startups',
    summary: 'Rapid prototyping, AI-native product architecture, and specialist engineering pods for founders tackling deep technical barriers.',
    challenge: 'Early-stage and growth tech ventures need to validate difficult AI assumptions and build production-ready architecture quickly without burning runway on generic agency detours.',
    systems: [
      '~30-Day rapid prototype sprints proving difficult core assumptions',
      'AI-native full-stack application architecture (React, FastAPI, PyTorch)',
      'Self-hosted open-weight LLM fine-tuning and retrieval pipelines',
      'Scalable cloud infrastructure (Terraform, Kubernetes, GPU orchestration)'
    ],
    architectureFocus: [
      'Rapid iterative validation with production-grade engineering foundations',
      'Modular microservices designed for seamless internal team handoff',
      'Cost-optimized inference architectures preventing runaway compute bills'
    ],
    featured: true
  },
  {
    id: 'legal-compliance',
    slug: 'legal-compliance',
    name: 'Legal & Regulatory Compliance',
    summary: 'Deterministic contract intelligence, multi-jurisdiction clause comparison, policy compliance auditing, and auditable citation grounding.',
    challenge: 'Legal teams require 100% verifiable source citations and cannot tolerate generative hallucinations or external data leaks when analyzing sensitive legal documents.',
    systems: [
      'Multi-hundred page contract parsing with spatial layout preservation',
      'Cross-jurisdiction clause deviation detection and risk categorization',
      'Automated policy compliance verification against updated regulatory frameworks',
      'Strict air-gapped on-premise document search with bounding-box citations'
    ],
    architectureFocus: [
      'Hybrid semantic vector search with knowledge graph entity linking',
      'Deterministic verification layer ensuring all statements reference source texts',
      'Complete private cloud or on-premise execution with zero external logging'
    ],
    featured: false
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & Clinical Workflows',
    summary: 'Clinical document structuring, patient telemetry anomaly recognition, and automated laboratory report processing with strict governance.',
    challenge: 'Clinical data handling demands uncompromising data privacy, strict access governance, and zero-hallucination extraction across complex medical terminology.',
    systems: [
      'Unstructured clinical record structuring and ICD/SNOMED entity mapping',
      'Kinematic movement tracking for objective physical rehabilitation assessment',
      'Automated medical report triage with human specialist review queues',
      'Isolated inference runtimes meeting strict European health data residency rules'
    ],
    architectureFocus: [
      'Isolated private execution environments',
      'Multi-tier human approval checkpoints before any data persistence',
      'Full cryptographic audit logging for healthcare compliance standards'
    ],
    featured: false
  }
];
