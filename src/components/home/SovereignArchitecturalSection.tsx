import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cloud, Lock, Server, Cpu } from 'lucide-react';
import { RoutePath } from '../../types';
import { SovereignTopologyStage, SovereignMode } from '../architecture/SovereignTopologyStage';
import { MaskedHeading, ScrollText } from '../common/ScrollMotion';

interface SovereignArchitecturalSectionProps {
  onNavigate: (path: RoutePath) => void;
}

export function SovereignArchitecturalSection({ onNavigate }: SovereignArchitecturalSectionProps) {
  const [activeTopology, setActiveTopology] = useState<SovereignMode>('cloud-ml');

  return (
    <section
      id="sovereign-models-boundary-stage"
      className="py-24 sm:py-32 bg-[var(--bg-surface-subtle)] relative overflow-hidden border-b border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[var(--border-color)]">
          <div className="space-y-3 max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d7bdf9]" />
              <span>MODEL ENGINEERING CAPABILITY // ON-PREM AI &amp; SOVEREIGN MODELS</span>
            </motion.div>

            <MaskedHeading as="h2" className="text-section-display text-[var(--text-primary)] leading-[1.18]">
              Turn your data into a{' '}
              <span className="font-bold text-[var(--accent-secondary)]">
                model you control.
              </span>
            </MaskedHeading>

            <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed text-left" delay={0.2}>
              RAG vs fine-tuning vs distillation based on the actual problem. We engineer domain-specialised models with LoRA, QLoRA, distillation, and quantisation—ensuring you control the data, evaluation assets, and model artifacts, deployed to edge, on-prem, or private-cloud environments where technically appropriate.
            </ScrollText>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => onNavigate('/on-prem-ai')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-md self-start lg:self-end"
            >
              <span>Explore On-Prem AI</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </motion.div>
        </div>

        {/* 3 Distinct Topologies Stage */}
        <SovereignTopologyStage
          initialMode={activeTopology}
          onModeChange={(mode) => setActiveTopology(mode)}
          showCardDetails={true}
        />

        {/* 3 Core Pillars: RAG vs Tuning vs Distillation, Client-Controlled Artifacts, Deployment Flexibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-2 shadow-sm"
          >
            <div className="text-lg font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#e0fb2e]" />
              <span>RAG vs Fine-Tuning vs Distillation</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
              We benchmark whether your workload is best solved via vector retrieval, LoRA/QLoRA parameter-efficient adaptation, or compact distilled models.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-2 shadow-sm"
          >
            <div className="text-lg font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#38bdf8]" />
              <span>Client-Controlled Data &amp; Artifacts</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
              You retain full ownership of training datasets, evaluation benchmarks, adapter weights, and inference pipelines with zero vendor lock-in.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-2 shadow-sm"
          >
            <div className="text-lg font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Server className="w-4 h-4 text-[#d7bdf9]" />
              <span>Edge, On-Prem &amp; Private Cloud</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
              Deployable across private VPCs, AWS SageMaker/Azure/GCP endpoints, or on-premise clusters where data residency is strictly mandated.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
