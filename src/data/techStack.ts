import { TechStackCategory } from '../types';

export const techStackCategories: TechStackCategory[] = [
  {
    category: 'Models & Inference',
    purpose: 'Tailored to latency, cost, privacy, and client control constraints',
    items: [
      { name: 'Llama 3 / 2', role: 'Open-weight foundation models for self-hosted enterprise fine-tuning' },
      { name: 'Mistral / Mixtral', role: 'High-efficiency European open-weight reasoning architectures' },
      { name: 'Qwen', role: 'High-capability multi-lingual and coding backbones' },
      { name: 'Hugging Face', role: 'Model hub, tokenizers, and custom pipeline evaluation' },
      { name: 'PyTorch / TensorRT', role: 'Deep learning graph training, pruning, and hardware-accelerated runtime' },
      { name: 'Qdrant / Milvus', role: 'High-throughput vector search databases with scalar filtering' }
    ]
  },
  {
    category: 'Applications & Backends',
    purpose: 'Production-grade software engineering, type safety, and real-time UI',
    items: [
      { name: 'React / Next.js', role: 'Modern responsive enterprise frontends with streaming interfaces' },
      { name: 'Python / FastAPI', role: 'High-throughput asynchronous microservices and model orchestration' },
      { name: 'Node.js / TypeScript', role: 'Type-safe distributed services, tooling, and web backends' },
      { name: 'Java / Spring', role: 'Integration with existing enterprise banking and ERP core systems' }
    ]
  },
  {
    category: 'Infrastructure & Private Hosting',
    purpose: 'Zero-leakage isolated environments, multi-cloud, or on-premise execution',
    items: [
      { name: 'Docker / Kubernetes', role: 'Container orchestration and autoscaling GPU inference clusters' },
      { name: 'Terraform', role: 'Declarative Infrastructure-as-Code for repeatable private and on-prem deployments' },
      { name: 'AWS / Azure / GCP', role: 'Enterprise cloud hosting with private VPC peering and regional residency' },
      { name: 'On-Premise / Air-Gapped', role: 'Self-contained local deployments with zero external telemetry dependencies' }
    ]
  },
  {
    category: 'Data & Persistence',
    purpose: 'Structured, relational, graph, and streaming persistence layers',
    items: [
      { name: 'PostgreSQL', role: 'Primary ACID transactional database with relational and JSONB schemas' },
      { name: 'Redis', role: 'In-memory caching, pub/sub messaging, and distributed agent state queues' },
      { name: 'Apache Kafka', role: 'Distributed high-throughput streaming for multi-petabyte telemetry pipelines' },
      { name: 'Neo4j', role: 'Knowledge graph databases for multi-hop semantic entity relationships' }
    ]
  }
];
