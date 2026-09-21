import { ProductItem } from '../types';

export const products: ProductItem[] = [
  {
    id: 'talkument',
    slug: 'talkument',
    name: 'Talkument',
    tagline: 'Document & Knowledge Intelligence Platform',
    supportingText: 'Document intelligence for turning complex, unstructured information into searchable, conversational knowledge.',
    description: 'Document intelligence for turning complex, unstructured information into searchable, conversational knowledge.',
    liveUrl: 'https://talkument.co/',
    ctaLabel: 'Explore Talkument',
    problemSolved: 'Enterprise knowledge workers spend hours cross-referencing multi-hundred-page documents because public LLMs hallucinate and lack verifiable paragraph-level citation trails.',
    keyCapabilities: [
      'Spatial document parsing retaining tables, charts, footnotes, and stamps',
      'Hybrid dense-sparse vector indexing paired with entity knowledge graphs',
      'Strict deterministic guardrails requiring verifiable source citations',
      'Air-gapped and private VPC deployment with zero external data egress'
    ],
    status: 'Production',
    technicalPillars: [
      'Hybrid semantic dense-sparse vector indexing',
      'Deterministic citation verification layer prior to response rendering',
      'Multi-tenant enterprise access control with granular document permissions',
      'Self-hosted open-weight LLM inference'
    ],
    useCase: 'Enabling legal, compliance, risk, and operations teams to query vast document archives with mathematical auditability.',
    approvedForPublicWebsite: true,
    confidential: false,
    mediaKey: 'talkumentDemo',
    previewType: 'browser'
  },
  {
    id: 'hoot',
    slug: 'hoot',
    name: 'Hoot',
    tagline: 'Intelligent Enterprise Communication & Workflow Platform',
    supportingText: 'Enterprise communication and collaboration built for secure, intelligent workflows.',
    description: 'Enterprise communication and collaboration built for secure, intelligent workflows.',
    liveUrl: 'https://hoot.nighthack.in/',
    ctaLabel: 'Explore Hoot',
    problemSolved: 'Workplace chat apps create fragmented silos and notification fatigue where critical operational context, decisions, and action items get lost across hundreds of channels.',
    keyCapabilities: [
      'Real-time multi-channel messaging with cryptographic audit logging',
      'Background agentic triage that summarizes thread decisions and extracts action items',
      'Contextual knowledge retrieval directly inside discussion threads',
      'Private self-hosted deployment matching enterprise security policies'
    ],
    status: 'Production',
    technicalPillars: [
      'High-throughput WebSocket messaging runtime with Redis event pub/sub',
      'Asynchronous thread intelligence agents summarizing channel state',
      'Fine-grained role-based access control (RBAC) and compliance archiving',
      'Bidirectional connectors to enterprise issue trackers and ERPs'
    ],
    useCase: 'Serving distributed engineering and enterprise operations teams requiring secure, context-aware collaboration without communication clutter.',
    approvedForPublicWebsite: true,
    confidential: false,
    mediaKey: 'hootDemo',
    previewType: 'chat'
  },
  {
    id: 'agent-platform',
    slug: 'agent-platform',
    name: 'Ottom8',
    tagline: 'Deterministic Multi-Agent Workflow Orchestration Engine',
    supportingText: 'Agent platform for building, running and managing AI-powered workflows and automations.',
    description: 'Agent platform for building, running and managing AI-powered workflows and automations.',
    liveUrl: 'https://ottom8.nhtech.link/',
    ctaLabel: 'Explore Ottom8',
    problemSolved: 'Most generative AI agent frameworks fail in enterprise production because stochastic decision loops get stuck, loop unpredictably, or execute irreversible database/API actions without governance.',
    keyCapabilities: [
      'State-machine-bounded agent execution graphs preventing unbounded loops',
      'Mandatory human-in-the-loop checkpoint gates for high-risk actions',
      'Temporal event sourcing for 100% replayable step-by-step decision telemetry',
      'Production connectors for SQL, REST, Kafka, SFTP, and legacy mainframes'
    ],
    status: 'Production',
    technicalPillars: [
      'Deterministic directed acyclic graph (DAG) state orchestrator',
      'Human-in-the-loop approval escalation queue with diff inspections',
      'Immutable cryptographic execution audit log recording every prompt and output',
      'High-performance async microservice runtime'
    ],
    useCase: 'Powering automated backoffice operations, financial reconciliation, and mission-critical multi-step enterprise workflows.',
    approvedForPublicWebsite: true,
    confidential: false,
    mediaKey: 'agentPlatformDemo',
    previewType: 'workflow'
  }
];

export const publicProducts = products.filter(p => p.approvedForPublicWebsite);

