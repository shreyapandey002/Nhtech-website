import { useState } from 'react';
import { RoutePath } from '../types';
import { WorldCanvas } from '../components/common/WorldCanvas';
import { SpatialPageHeader } from '../components/common/SpatialPageHeader';
import { CustomModelPipelineStage } from '../components/architecture/CustomModelPipelineStage';
import { SovereignTopologyStage } from '../components/architecture/SovereignTopologyStage';
import { ModelEcosystemSpectrum } from '../components/home/ModelEcosystemSpectrum';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { 
  Database, 
  Sparkles, 
  Lock, 
  Cpu, 
  Server, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  Sliders, 
  CheckCircle2, 
  Zap, 
  Scale, 
  Gauge, 
  Code2 
} from 'lucide-react';
import { motion } from 'motion/react';

interface OnPremAiPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function OnPremAiPage({ onNavigate }: OnPremAiPageProps) {
  const [selectedTradeoff, setSelectedTradeoff] = useState<'rag' | 'finetuning' | 'distillation'>('rag');

  const tradeoffs = {
    rag: {
      id: 'rag',
      title: 'Retrieval-Augmented Generation (RAG)',
      badge: 'DYNAMIC KNOWLEDGE RETRIEVAL',
      accent: '#38bdf8',
      summary: 'Best for continuously changing knowledge, policy manuals, regulatory docs, and search where deterministic citation back to the original source text is mandatory.',
      pros: [
        'Zero training compute or weight modification required',
        'Instant updates as enterprise databases change',
        'Exact source attribution with bounding box coordinates',
        'Direct access control and document-level permissions'
      ],
      cons: [
        'Higher latency due to multi-stage vector search + synthesis',
        'Context window limits on massive multi-document reasoning',
        'Does not teach the model new syntaxes or private formatting styles'
      ],
      idealWhen: 'Your data changes frequently, source citation is legally mandated, and the base model already understands your domain vocabulary.'
    },
    finetuning: {
      id: 'finetuning',
      title: 'LoRA & QLoRA Parameter-Efficient Fine-Tuning',
      badge: 'STYLE, SYNTAX & DOMAIN ADAPTATION',
      accent: '#e0fb2e',
      summary: 'Best for teaching specialized domain vocabularies, strict output schemas (JSON/SQL), clinical/legal taxonomy, and tone alignment on proprietary datasets.',
      pros: [
        'Adapts open-weight models (Llama, Mistral, Qwen) to custom syntax',
        'Reduces prompt token overhead and latency substantially',
        'Client owns all adapter weights and fine-tuning artifacts',
        'Parameter-efficient (LoRA/QLoRA) requires modest GPU clusters'
      ],
      cons: [
        'Requires clean, human-validated ground truth datasets',
        'Not ideal for frequently changing factual knowledge',
        'Requires ongoing evaluation to prevent catastrophic forgetting'
      ],
      idealWhen: 'You have repetitive tasks requiring strict output formatting, proprietary industry terminology, or low-latency deterministic classifications.'
    },
    distillation: {
      id: 'distillation',
      title: 'Model Distillation & Quantisation',
      badge: 'HIGH-THROUGHPUT COMPACT RUNTIMES',
      accent: '#d7bdf9',
      summary: 'Transfer knowledge from large frontier models into compact 1B-8B parameter models quantized for FP8 or INT4 inference on commodity hardware or edge nodes.',
      pros: [
        'Dramatic reduction in inference latency (sub-20ms)',
        'Up to 80% reduction in GPU hosting and hardware costs',
        'Deployable to edge devices, local servers, or smaller cloud instances',
        'Self-contained artifact with zero external network dependencies'
      ],
      cons: [
        'Requires frontier model supervision during training dataset synthesis',
        'Narrower reasoning scope than massive general-purpose models',
        'Requires quantization loss calibration benchmarks'
      ],
      idealWhen: 'High-volume queries require low latency, low hardware cost, and high repeatability on a well-bounded business problem.'
    }
  };

  return (
    <div id="on-prem-ai-chapter" className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] space-y-24">
      {/* 0. Ambient Subtle Canvas */}
      <WorldCanvas mode="matrix" opacity={0.3} />

      {/* 1. Spatial Header - On-Prem AI & Sovereign Model Engineering */}
      <SpatialPageHeader
        tag="MODEL ENGINEERING // ON-PREM AI & SOVEREIGN MODELS"
        title="Turn your data into a"
        titleAccent="model you control."
        subtitle="RAG vs fine-tuning vs distillation based on the actual problem. We engineer domain-specialised sovereign models with LoRA, QLoRA, distillation, and quantisation—ensuring you control the data, evaluation assets, and model artifacts, deployed to private-cloud, on-prem, or edge environments where technically appropriate."
        ctaText="Discuss Model Engineering"
        ctaRoute="/contact"
        secondaryCtaText="Explore Case Studies"
        secondaryCtaRoute="/work"
        onNavigate={onNavigate}
        telemetryItems={[
          { label: 'STRATEGY', value: 'RAG VS TUNING VS DISTILLATION' },
          { label: 'TECHNIQUES', value: 'LORA / QLORA / QUANTISATION' },
          { label: 'DEPLOYMENT', value: 'EDGE / ON-PREM / PRIVATE CLOUD' },
        ]}
      />

      {/* 2. RAG vs Fine-Tuning vs Distillation Decision Matrix */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
          <div>
            <div className="text-xs font-mono text-[#e0fb2e] uppercase font-bold flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#e0fb2e]" />
              <span>ARCHITECTURAL SELECTION // DECISION MATRIX</span>
            </div>
            <MaskedHeading as="h2" className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
              RAG vs. Fine-Tuning vs. Distillation
            </MaskedHeading>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            SELECT STRATEGY TO COMPARE TRADEOFFS
          </span>
        </div>

        {/* Strategy Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(['rag', 'finetuning', 'distillation'] as const).map((key) => {
            const item = tradeoffs[key];
            const isSelected = selectedTradeoff === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedTradeoff(key)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-[var(--bg-surface-elevated)] border-[var(--border-hover)] shadow-md'
                    : 'bg-[var(--bg-surface)] border-[var(--border-color)] hover:border-[var(--border-color)]/80 text-[var(--text-secondary)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold" style={{ color: item.accent }}>
                    {item.badge}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.accent }} />}
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-[var(--text-primary)]">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Strategy Deep Breakdown */}
        {(() => {
          const current = tradeoffs[selectedTradeoff];
          return (
            <motion.div
              key={selectedTradeoff}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-8"
            >
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase font-bold" style={{ color: current.accent }}>
                  {current.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)]">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                  {current.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-color)]">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#34d399] uppercase font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#34d399]" />
                    <span>Primary Advantages</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] font-mono">
                    {current.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#34d399]">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono text-[var(--text-muted)] uppercase font-bold flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[var(--text-muted)]" />
                    <span>Constraints &amp; Tradeoffs</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] font-mono">
                    {current.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--text-muted)]">⚠</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[var(--text-muted)] uppercase">WHEN TO SELECT:</span>
                <span className="text-[var(--text-primary)] font-medium sm:text-right">{current.idealWhen}</span>
              </div>
            </motion.div>
          );
        })()}
      </section>

      {/* 3. Core Story & Visual Pipeline Stage: Data -> Eval -> Tuning -> Artifacts -> Deployment */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
          <div>
            <div className="text-xs font-mono text-[#e0fb2e] uppercase font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
              <span>CUSTOM MODEL PIPELINE // STEP-BY-STEP</span>
            </div>
            <MaskedHeading as="h2" className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
              Domain Data to Deployed ML Architecture
            </MaskedHeading>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            CLICK PHASES TO INSPECT ARTIFACTS
          </span>
        </div>

        {/* Custom Model Pipeline Interactive Stage */}
        <CustomModelPipelineStage />
      </section>

      {/* 4. Model Spectrum: The Right Model for the Problem */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <ModelEcosystemSpectrum onExploreWork={() => onNavigate('/work')} />
      </section>

      {/* 5. Deep Technical Focus: Methodology */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-12 text-left">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono text-[var(--accent-secondary)] uppercase">TECHNICAL METHODOLOGY</span>
          <MaskedHeading as="h2" className="text-3xl sm:text-4xl font-display font-bold text-[var(--text-primary)] tracking-tight">
            How we engineer domain-specialised models.
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
            Rather than forcing one-size-fits-all API wrappers, we evaluate whether your problem is best served by vector retrieval (RAG), LoRA/QLoRA parameter-efficient fine-tuning, model distillation, or quantization—grounded in rigorous evaluation metrics and latency constraints.
          </ScrollText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Database,
              num: '01',
              title: 'RAG vs Fine-Tuning vs Distillation',
              desc: 'We benchmark whether your workload is best solved via semantic vector retrieval, adapter fine-tuning, or compact distilled models based on latency, domain specificity, and operational economics.',
              tech: ['Decision Matrix', 'Evaluation Benchmark Harness', 'Human-Labeled Ground Truth', 'Latency & Cost Profiling'],
              accent: '#38bdf8'
            },
            {
              icon: Sparkles,
              num: '02',
              title: 'LoRA, QLoRA, Distillation & Quantisation',
              desc: 'We adapt open-weight architectures (Llama, Mistral, Qwen, DeepSeek) using parameter-efficient fine-tuning, knowledge distillation, and FP8/INT4 quantization tailored to your domain vocabulary.',
              tech: ['LoRA & QLoRA Adapters', 'Model Distillation', 'Quantization (FP8/INT4)', 'PyTorch & Hugging Face'],
              accent: '#e0fb2e'
            },
            {
              icon: Lock,
              num: '03',
              title: 'Client-Controlled Data & Model Artifacts',
              desc: 'Your business receives all training datasets, benchmark suites, adapter weights, and inference code. You maintain complete intellectual property control without recurring token taxes or vendor lock-in.',
              tech: ['Exportable Model Checkpoints', 'Evaluation Benchmarks', '100% Client IP Ownership', 'Zero Vendor Lock-In'],
              accent: '#34d399'
            },
            {
              icon: Server,
              num: '04',
              title: 'Edge, On-Prem & Private-Cloud Deployment',
              desc: 'We deploy models onto AWS SageMaker, Google AI Platform, Azure ML, containerized Kubernetes clusters, or on-premise hardware where data residency and operational control are strictly mandated.',
              tech: ['Private VPC / SageMaker / GCP', 'Docker & Kubernetes', 'FastAPI Microservice Endpoints', 'On-Prem / Edge Inference'],
              accent: '#d7bdf9'
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all space-y-6 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
                      <Icon className="w-5 h-5" style={{ color: pillar.accent }} />
                    </div>
                    <span className="text-xs font-mono font-bold" style={{ color: pillar.accent }}>
                      PILLAR {pillar.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border-color)]">
                  {pillar.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-[10px] font-mono text-[var(--text-secondary)]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 6. Deployment Topologies Section: Managed Cloud, Containerized, Custom API */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
          <div>
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              <span>DEPLOYMENT OPTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
              Production ML Deployment Environments
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            CLOUD ML • CONTAINERS • ON-PREM CLUSTERS
          </span>
        </div>

        <SovereignTopologyStage />
      </section>

      {/* 7. Final Call to Action */}
      <section className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 sm:p-14 text-center space-y-6 shadow-xl"
        >
          <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold tracking-widest">
            MODEL ENGINEERING ENGAGEMENT
          </span>
          <MaskedHeading as="h2" className="text-3xl sm:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight max-w-3xl mx-auto">
            Ready to evaluate and fine-tune a model for your business?
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
            Our AI/ML pod works with your team on domain data readiness, benchmark harness design, open-weight fine-tuning, and production deployment.
          </ScrollText>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-xl"
            >
              <span>Initiate Model Engineering Discovery</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
