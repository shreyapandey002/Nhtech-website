import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Server, Cloud, Cpu, Lock, Layers, Activity, CheckCircle2, Box } from 'lucide-react';

export type SovereignMode = 'cloud-ml' | 'kubernetes-docker' | 'custom-api';

interface SovereignTopologyStageProps {
  initialMode?: SovereignMode;
  onModeChange?: (mode: SovereignMode) => void;
  className?: string;
  showCardDetails?: boolean;
}

export function SovereignTopologyStage({
  initialMode = 'cloud-ml',
  onModeChange,
  className = '',
  showCardDetails = true
}: SovereignTopologyStageProps) {
  const [activeMode, setActiveMode] = useState<SovereignMode>(initialMode);

  const handleModeSelect = (mode: SovereignMode) => {
    setActiveMode(mode);
    if (onModeChange) onModeChange(mode);
  };

  const topologies = {
    'cloud-ml': {
      id: 'cloud-ml',
      name: 'Managed Cloud ML Platforms',
      badge: 'AWS SAGEMAKER / GOOGLE AI / AZURE ML',
      description: 'Deploy fine-tuned models on enterprise cloud infrastructure using managed ML runtimes, autoscaling endpoints, and secure VPC access.',
      specs: [
        { label: 'Platforms', value: 'AWS SageMaker, Google AI Platform, Azure ML', icon: Cloud },
        { label: 'Model Artifacts', value: 'PyTorch / Hugging Face Checkpoints', icon: Cpu },
        { label: 'Security & Access', value: 'Role-Based Access Control & SSL/TLS', icon: Lock },
        { label: 'Monitoring', value: 'Logging, Metrics & Drift Tracking', icon: Activity }
      ],
      nodes: [
        { id: 'registry', title: 'Model Registry', desc: 'Version-controlled fine-tuned checkpoints and evaluation metadata.' },
        { id: 'endpoint', title: 'Managed Inference Endpoint', desc: 'Autoscaling GPU/CPU instances serving low-latency model predictions.' },
        { id: 'vpc', title: 'Secure VPC Networking', desc: 'Private routing between internal application services and model endpoints.' },
        { id: 'logging', title: 'Cloud Observability', desc: 'Centralized request logging, latency metrics, and error alerting.' }
      ]
    },
    'kubernetes-docker': {
      id: 'kubernetes-docker',
      name: 'Containerized & Kubernetes Deployment',
      badge: 'DOCKER / DOCKER COMPOSE / KUBERNETES',
      description: 'Containerized ML workloads designed for portability and scale across customer-hosted clusters and cloud environments.',
      specs: [
        { label: 'Containerization', value: 'Docker & Docker Compose', icon: Box },
        { label: 'Orchestration', value: 'Kubernetes where appropriate', icon: Server },
        { label: 'Environment', value: 'Environment Isolation & CI/CD', icon: Layers },
        { label: 'Automation', value: 'GitHub Actions / GitLab CI / Jenkins', icon: CheckCircle2 }
      ],
      nodes: [
        { id: 'image', title: 'Hardened Container Image', desc: 'Minimal base images bundled with Python, PyTorch, and optimized model runtimes.' },
        { id: 'k8s', title: 'Kubernetes Cluster', desc: 'Declarative pod scaling, rolling updates, and resource allocation.' },
        { id: 'ci', title: 'CI/CD Pipeline', desc: 'Automated test suite execution and container deployment via GitHub Actions/GitLab.' },
        { id: 'isolation', title: 'Environment Separation', desc: 'Strict separation between development, staging, and production clusters.' }
      ]
    },
    'custom-api': {
      id: 'custom-api',
      name: 'Custom Inference APIs & Workflows',
      badge: 'FASTAPI / ASYNC QUEUES / SYSTEM INTEGRATION',
      description: 'Production-ready inference microservices integrated directly into existing databases, ERPs, CRM workflows, and operational dashboards.',
      specs: [
        { label: 'API Framework', value: 'Python / FastAPI / Async Workers', icon: Server },
        { label: 'Databases', value: 'PostgreSQL, Redis, Qdrant Vector DB', icon: Cloud },
        { label: 'Authentication', value: 'JWT, OAuth2, OpenID Connect', icon: Lock },
        { label: 'Data Pipelines', value: 'ETL/ELT Workflows & Batch Ingestion', icon: Activity }
      ],
      nodes: [
        { id: 'fastapi', title: 'FastAPI Microservice', desc: 'High-throughput async endpoints handling payload validation and batching.' },
        { id: 'queue', title: 'Redis Task Queue', desc: 'Decoupled queue workers for long-running document analysis and inference.' },
        { id: 'storage', title: 'Database Integration', desc: 'Writing structured predictions directly to PostgreSQL, MongoDB, or Redis.' },
        { id: 'workflow', title: 'Product UI & Handoffs', desc: 'Delivering actionable outputs to admin dashboards with human-in-the-loop controls.' }
      ]
    }
  };

  const current = topologies[activeMode];

  return (
    <div className={`space-y-6 ${className}`}>
      
      {/* Mode Selectors */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(topologies) as SovereignMode[]).map((modeKey) => {
          const topo = topologies[modeKey];
          const isSelected = activeMode === modeKey;
          return (
            <button
              key={modeKey}
              onClick={() => handleModeSelect(modeKey)}
              className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[var(--text-primary)] text-[var(--bg-base)] font-bold shadow-sm'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
              }`}
            >
              <span>{topo.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Architectural Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-sm space-y-6"
        >
          
          {/* Topology Overview Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
            <div className="space-y-1 text-left">
              <div className="text-[11px] font-mono text-[#e0fb2e] uppercase tracking-wider font-bold">
                {current.badge}
              </div>
              <div className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)]">
                {current.name}
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-primary)] px-3 py-1.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
              <Activity className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>PRODUCTION-GRADE RUNTIME</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] text-left font-normal leading-relaxed">
            {current.description}
          </p>

          {/* Schematic Nodes */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-3 text-left">
            <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
              <span>DEPLOYMENT TOPOLOGY NODES</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {current.nodes.map((node) => (
                <div
                  key={node.id}
                  className="p-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[var(--text-primary)]">{node.title}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] font-normal leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Matrix */}
          {showCardDetails && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 text-left">
              {current.specs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--text-muted)]">
                      <Icon className="w-3.5 h-3.5 text-[#e0fb2e]" />
                      <span>{spec.label}</span>
                    </div>
                    <div className="text-xs font-medium text-[var(--text-primary)]">
                      {spec.value}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </motion.div>
      </AnimatePresence>

    </div>
  );
}
