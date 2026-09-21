import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, BrainCircuit, Sparkles, Cpu, Lock, Server, CheckCircle2, Sliders, Layers } from 'lucide-react';

export function CustomModelPipelineStage() {
  const [activeStep, setActiveStep] = useState<number>(2); // Default on fine-tuning

  const steps = [
    {
      id: 0,
      title: 'Domain Data Ingestion & Sanitization',
      shortTitle: '01. Data Ingestion',
      tagline: 'Your Proprietary Business Data',
      icon: Database,
      accent: '#38bdf8',
      desc: 'Ingest and sanitize proprietary schemas, transaction logs, unstructured domain documents, and business records through structured data engineering pipelines.',
      metrics: [
        { label: 'Data Sources', value: 'Databases, PDFs, Spreadsheets, APIs' },
        { label: 'Quality Controls', value: 'Data Quality Checks & Filtering' },
        { label: 'Custody', value: 'Direct Enterprise Integration' }
      ],
      nodes: ['Operational Databases (PostgreSQL / MySQL)', 'Domain Documents & Contracts', 'Historical Decision Records', 'ETL/ELT Pipeline Sanitization']
    },
    {
      id: 1,
      title: 'Model Evaluation & Benchmark Harness',
      shortTitle: '02. Evaluation Harness',
      tagline: 'Grounded Metrics Before Training',
      icon: BrainCircuit,
      accent: '#d7bdf9',
      desc: 'Establish rigorous evaluation metrics, ground-truth test sets, and latency constraints to benchmark model options against your actual business requirements.',
      metrics: [
        { label: 'Metrics Framework', value: 'Accuracy, F1, Latency, Cost' },
        { label: 'Evaluation Sets', value: 'Human-Labeled Domain Ground Truth' },
        { label: 'Model Selection', value: 'Open-Weights vs Frontier APIs' }
      ],
      nodes: ['Benchmark Test Suites', 'Latency & Memory Profiling', 'Domain-Specific Edge Case Testing', 'Human Acceptance Gates']
    },
    {
      id: 2,
      title: 'Model Fine-Tuning & Adaptation',
      shortTitle: '03. Fine-Tuning',
      tagline: 'Llama & Mistral Family Adaptation',
      icon: Sparkles,
      accent: '#e0fb2e',
      desc: 'Fine-tune open-weight foundations (Llama-family, Mistral/Mixtral-family) and custom ML models using PyTorch, Hugging Face Transformers, and parameter-efficient techniques tailored to your domain vocabulary.',
      metrics: [
        { label: 'Supported Families', value: 'Llama-family & Mistral-family' },
        { label: 'Frameworks', value: 'PyTorch / Hugging Face Transformers' },
        { label: 'Techniques', value: 'LoRA, Task Adaptation, Quantization' }
      ],
      nodes: ['PyTorch Training Pipelines', 'Hugging Face Model Adaptation', 'Domain Vocabulary Alignment', 'Resource & Precision Optimization']
    },
    {
      id: 3,
      title: 'Client-Owned Artifacts & Weights',
      shortTitle: '04. Owned Artifacts',
      tagline: 'Your Intellectual Property',
      icon: Lock,
      accent: '#34d399',
      desc: 'You retain full ownership of the trained model checkpoints, adapter weights, and inference pipelines. No recurring token tolls, no vendor lock-in, and full operational control.',
      metrics: [
        { label: 'Ownership', value: '100% Client-Owned Weights' },
        { label: 'Artifact Formats', value: 'Standard PyTorch / Transformers' },
        { label: 'Vendor Lock-in', value: 'Zero Proprietary Lock-In' }
      ],
      nodes: ['Exportable Model Checkpoints', 'Tuned Adapter Weights', 'Reproducible Training Recipes', 'Custom Inference Code']
    },
    {
      id: 4,
      title: 'Production Deployment & Inference APIs',
      shortTitle: '05. ML Deployment',
      tagline: 'Cloud ML, Docker, & Kubernetes',
      icon: Server,
      accent: '#f59e0b',
      desc: 'Deploy fine-tuned models to your target environment—AWS SageMaker, Google AI Platform, Azure ML, or containerized via Docker and Kubernetes—with high-throughput FastAPI inference endpoints.',
      metrics: [
        { label: 'Target Platforms', value: 'AWS SageMaker, GCP, Azure ML' },
        { label: 'Containerization', value: 'Docker & Kubernetes Pods' },
        { label: 'API Layer', value: 'FastAPI / Async REST Endpoints' }
      ],
      nodes: ['Managed Cloud Endpoints', 'Containerized Kubernetes Pods', 'FastAPI Microservice Runtimes', 'Workflow & Dashboard Integration']
    }
  ];

  const current = steps[activeStep];

  return (
    <div className="space-y-8">
      
      {/* 5-Step Progress Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {steps.map((step, idx) => {
          const isCurrent = activeStep === idx;
          const isPassed = activeStep > idx;
          const Icon = step.icon;

          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-2 relative overflow-hidden ${
                isCurrent
                  ? 'bg-[var(--bg-surface)] border-[var(--border-hover)] shadow-md ring-1 ring-[#e0fb2e]/40'
                  : isPassed
                  ? 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-secondary)]'
                  : 'bg-[var(--bg-surface-subtle)] border-[var(--border-color)] text-[var(--text-muted)] opacity-80'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold ${isCurrent ? 'text-[#e0fb2e]' : 'text-[var(--text-muted)]'}`}>
                  0{idx + 1}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-[#e0fb2e]' : 'text-[var(--text-muted)]'}`} />
              </div>
              <span className={`text-xs font-medium line-clamp-1 ${isCurrent ? 'text-[var(--text-primary)] font-bold' : 'text-[var(--text-secondary)]'}`}>
                {step.shortTitle}
              </span>
              {isCurrent && (
                <motion.div 
                  layoutId="active-custom-pipeline-bar" 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e0fb2e]" 
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Breakdown */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-sm space-y-6 text-left"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold" style={{ color: current.accent }}>
                {current.tagline}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)]">
                {current.title}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-primary)] px-3 py-1.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#e0fb2e]" />
              <span>PHASE 0{current.id + 1} SPECIFICATION</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
            {current.desc}
          </p>

          {/* Architecture Nodes */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-3">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
              ENGINEERING ARTIFACTS &amp; DATA FLOW
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {current.nodes.map((node, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[var(--text-primary)]">Component 0{i+1}</span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: current.accent }} />
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] font-normal leading-snug">
                    {node}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {current.metrics.map((m, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-1">
                <span className="text-[11px] font-mono text-[var(--text-muted)]">{m.label}</span>
                <div className="text-xs font-mono font-bold text-[var(--text-primary)]">{m.value}</div>
              </div>
            ))}
          </div>

        </motion.div>
      </AnimatePresence>

    </div>
  );
}
