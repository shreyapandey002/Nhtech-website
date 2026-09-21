import { Capability } from '../types';

export const capabilities: Capability[] = [
  {
    id: 'agentic-workflows',
    slug: 'agentic-ai',
    title: 'Agentic & Workflow Systems',
    headline: 'AI that executes deterministic work, not just conversation.',
    description: 'Autonomous execution engines and deterministic state machines operating tools, evaluating context, respecting permission boundaries, and escalating to human approval checkpoints.',
    coreConcepts: [
      {
        title: 'Contextual State Construction',
        description: 'Agents build dynamic situational graphs from enterprise events, databases, and incoming communications before formulating plans.'
      },
      {
        title: 'Explicit Tool Permissions',
        description: 'Every tool invocation and API mutation is governed by strict role-based scopes rather than unrestricted autonomy.'
      },
      {
        title: 'Human Checkpoint Gates',
        description: 'High-consequence decisions, threshold breaches, and high-entropy states automatically pause for human review with explanatory context.'
      },
      {
        title: 'Replayable Audit Trails',
        description: 'Every observation, intermediate thought, tool argument, and outcome is logged immutably for compliance and operational debugging.'
      }
    ],
    architecturePoints: [
      'Multi-agent task decomposition with deterministic state machines',
      'Sandboxed tool execution environments with scoped OAuth/mTLS tokens',
      'Bidirectional enterprise ERP, CRM, and internal API connectors',
      'Event-driven asynchronous orchestrators with dead-letter queue recovery'
    ],
    technologies: ['Open-Weight LLMs', 'FastAPI', 'LangGraph / Custom State Machines', 'Redis', 'PostgreSQL', 'Docker'],
    deliverables: [
      'Production agentic microservices',
      'Operator triage and approval consoles',
      'Audit log and decision replay viewers',
      'Integration adapters for enterprise workflows'
    ],
    relatedRoute: '/agentic-ai'
  },
  {
    id: 'document-intelligence',
    slug: 'document-intelligence',
    title: 'Document Intelligence & Knowledge Systems',
    headline: 'Making complex unstructured documents computable.',
    description: 'Transforming dense multi-format documents, legal contracts, engineering drawings, and regulatory filings into validated, queryable knowledge graphs with deterministic citation coordinates.',
    coreConcepts: [
      {
        title: 'Spatial & Structural Parsing',
        description: 'Preserving table coordinates, hierarchical headings, footnote attachments, and multi-column flows from raw PDFs and scans.'
      },
      {
        title: 'Hybrid Semantic Retrieval',
        description: 'Combining dense vector embeddings with sparse keyword indexing and entity graphs to eliminate hallucination in domain searches.'
      },
      {
        title: 'Deterministic Citation Grounding',
        description: 'Every extracted attribute and synthesized summary links back to exact bounding-box coordinates in source documents.'
      },
      {
        title: 'Self-Hosted Fine-Tuned Models',
        description: 'Fine-tuning specialized open-weight models (Llama, Mistral) on enterprise taxonomy for 100% private execution.'
      }
    ],
    architecturePoints: [
      'High-throughput asynchronous document ingestion pipelines',
      'Qdrant & Milvus vector stores with partitioned multi-tenant collections',
      'Knowledge graph creation with Neo4j and semantic entity linking',
      'Human validation interface with synchronized PDF side-by-side viewers'
    ],
    technologies: ['Fine-tuned Llama / Mistral', 'Qdrant Vector DB', 'Neo4j', 'FastAPI', 'PyTorch', 'OCR Engines'],
    deliverables: [
      'Document parsing & extraction APIs',
      'Domain-specific knowledge graph engines',
      'Human-in-the-loop review workbenches',
      'Enterprise search and compliance query services'
    ],
    relatedRoute: '/document-intelligence'
  },
  {
    id: 'ai-first-enterprise',
    slug: 'ai-first-enterprise',
    title: 'AI-First Enterprise Applications',
    headline: 'AI, backend, frontend, and workflow as a single cohesive system.',
    description: 'We do not build detached prototypes or wrapper scripts. We engineer complete production-grade applications that seamlessly weave AI models into user experiences and core business logic.',
    coreConcepts: [
      {
        title: 'Full-Stack Architecture',
        description: 'Integrating modern web frontends, resilient distributed backends, streaming state, and model inference into unified products.'
      },
      {
        title: 'Low-Latency Interactive UX',
        description: 'Optimistic updates, streaming UI components, and real-time state synchronization for effortless user interactions.'
      },
      {
        title: 'Enterprise Security & RBAC',
        description: 'Role-based access control, SSO/SAML integration, mTLS encryption, and multi-tenant data boundary partitioning.'
      },
      {
        title: 'Production Handover Quality',
        description: 'Clean, typed, tested, and documented codebases engineered for seamless long-term maintenance by your internal engineering team.'
      }
    ],
    architecturePoints: [
      'Type-safe architectures across TypeScript, Python, and modern backend frameworks',
      'Resilient database modeling (relational, vector, time-series, graph)',
      'Enterprise security (RBAC, mTLS, encryption at rest and in transit)',
      'CI/CD deployment pipelines with automated regression and benchmark testing'
    ],
    technologies: ['React', 'TypeScript', 'Python / FastAPI', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
    deliverables: [
      'Turnkey enterprise AI applications',
      'Modern web and mobile user interfaces',
      'Microservice and API backends',
      'Complete documentation and handover packages'
    ],
    relatedRoute: '/work'
  },
  {
    id: 'complex-business-systems',
    slug: 'complex-business-systems',
    title: 'Complex Business Systems: ERP, Payments, Loyalty, CRM, Compliance',
    headline: 'Hardened platforms for mission-critical enterprise workflows.',
    description: 'Engineering complex business platforms including ERP workflow engines, multi-tiered loyalty & reward programs, merchant payment gateways, regulatory compliance portals, and operational productivity suites.',
    coreConcepts: [
      {
        title: 'ERP & Legacy Stack Orchestration',
        description: 'Deep bidirectional integrations with SAP, Oracle, NetSuite, Salesforce, and legacy SQL/SFTP systems without fragile scrapers.'
      },
      {
        title: 'Financial & Payment Processing',
        description: 'Idempotent transaction workflows, PCI-compliant token handling, reconciliation ledgers, and dynamic fraud risk evaluation.'
      },
      {
        title: 'Loyalty & Engagement Engines',
        description: 'High-throughput rules engines executing point accruals, tiered rewards, personalized campaign delivery, and audit tracking.'
      },
      {
        title: 'Regulatory & Compliance Workbenches',
        description: 'Automated compliance rule verification, audit packet compilation, and strict data governance workflows.'
      }
    ],
    architecturePoints: [
      'Transactional consistency with two-phase commit and saga orchestration patterns',
      'High-throughput message brokers (Apache Kafka, RabbitMQ, Redis Streams)',
      'Idempotent API design with comprehensive dead-letter queues',
      'Auditable system-of-record event logging and compliance ledgers'
    ],
    technologies: ['PostgreSQL', 'Apache Kafka', 'Redis', 'Node.js', 'Python / FastAPI', 'Docker', 'Kubernetes'],
    deliverables: [
      'ERP & CRM workflow connectors',
      'Payment processing & ledger microservices',
      'Loyalty & points management platforms',
      'Compliance and regulatory audit dashboards'
    ],
    relatedRoute: '/work'
  },
  {
    id: 'model-engineering',
    slug: 'on-prem-ai',
    title: 'Model-Enabled Applications & On-Prem AI',
    headline: 'Turn your data into a model you control.',
    description: 'Benchmarking RAG vs fine-tuning vs distillation based on the actual problem. We adapt open-weight architectures (Llama, Mistral, Qwen, DeepSeek) with LoRA, QLoRA, and quantization, delivering client-controlled model artifacts deployed to edge, on-prem, or private cloud environments.',
    coreConcepts: [
      {
        title: 'RAG vs Tuning vs Distillation',
        description: 'Objective benchmarking to determine whether dynamic retrieval, parameter-efficient fine-tuning, or model distillation achieves the optimal latency-accuracy-cost tradeoff.'
      },
      {
        title: 'LoRA / QLoRA Adaptation',
        description: 'Adapting open-weight models to enterprise vocabularies, strict output formats (JSON/SQL), and domain taxonomy without full pretraining costs.'
      },
      {
        title: 'Client-Controlled Artifacts',
        description: 'You own the datasets, evaluation harnesses, checkpoint weights, and deployment scripts with 100% intellectual property rights.'
      },
      {
        title: 'Private & On-Prem Runtimes',
        description: 'Deploying models inside customer VPCs, on-premise GPU clusters, or edge devices where data privacy mandates local execution.'
      }
    ],
    architecturePoints: [
      'Evaluation benchmark suites with human ground-truth calibration',
      'Parameter-efficient fine-tuning pipelines using PyTorch and Hugging Face',
      'Quantization to FP8 and INT4 for reduced GPU hosting costs',
      'Self-hosted inference servers with vLLM and TensorRT-LLM'
    ],
    technologies: ['PyTorch', 'Hugging Face', 'vLLM', 'TensorRT-LLM', 'Docker', 'AWS SageMaker', 'Kubernetes'],
    deliverables: [
      'Exportable model checkpoint weights & adapters',
      'Domain evaluation harness & benchmark reports',
      'Inference API microservices',
      'Deployment scripts for VPC, on-prem, or cloud ML'
    ],
    relatedRoute: '/on-prem-ai'
  },
  {
    id: 'computer-vision-edge',
    slug: 'computer-vision',
    title: 'Vision & Edge Systems',
    headline: 'AI engineered for the physical world.',
    description: 'Real-time computer vision, kinematic tracking, defect inspection, and low-latency edge inference executing on local devices, tablets, and industrial cameras without reliance on cloud roundtrips.',
    coreConcepts: [
      {
        title: 'Sub-20ms On-Device Inference',
        description: 'Compiling vision models with TensorRT, ONNX, and quantization to execute at high framerates on local tablets and edge hardware.'
      },
      {
        title: 'Kinematic & Action Tracking',
        description: 'Real-time landmark tracking, cadence measurement, and multi-phase movement classification over continuous camera streams.'
      },
      {
        title: 'Industrial & Physical AI',
        description: 'Automated defect inspection, object detection, and OpenVLA physical perception for industrial devices and robotics.'
      },
      {
        title: 'Local Edge Fleet Resilience',
        description: 'Edge nodes operate autonomously without continuous internet connectivity, caching records locally with asynchronous sync.'
      }
    ],
    architecturePoints: [
      'Custom lightweight CNN and transformer vision backbones',
      'Hardware-accelerated pipelines using CUDA, TensorRT, CoreML, and Edge TPUs',
      'WebRTC low-latency streaming and local IPC message buses',
      'Edge fleet management, OTA model deployments, and telemetry sync'
    ],
    technologies: ['PyTorch Mobile', 'TensorRT', 'ONNX Runtime', 'OpenCV', 'WebRTC', 'FastAPI', 'React'],
    deliverables: [
      'Edge vision inference runtimes',
      'Real-time kinematic & defect detection engines',
      'Field operator dashboards and tablet applications',
      'Edge deployment and OTA synchronization infrastructure'
    ],
    relatedRoute: '/computer-vision'
  }
];
