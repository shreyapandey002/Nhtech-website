import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Terminal, Eye, Layers, Activity, Server } from 'lucide-react';
import { MaskedHeading, ScrollText, AnimatedMetric } from '../common/ScrollMotion';

export function EditorialProofStrip() {
  const defensibleProofs = [
    {
      metric: '2 PB / day',
      label: 'FINANCIAL STREAMING & ANOMALIES',
      context: 'Cross-region distributed ledger ingestion and real-time fraud pattern detection across high transaction volumes.',
      icon: Activity,
      accent: '#e0fb2e'
    },
    {
      metric: '60 FPS',
      label: 'ON-DEVICE COMPUTER VISION',
      context: 'Real-time biomechanical joint tracking and kinematic motion analysis executed locally on edge hardware with zero cloud roundtrips.',
      icon: Eye,
      accent: '#38bdf8'
    },
    {
      metric: 'Enterprise Agents',
      label: 'PRODUCTION WORKFLOWS',
      context: 'Multi-step state machines orchestrating ERPs, CRMs, and databases with mandatory human-in-the-loop review and immutable audit trails.',
      icon: Terminal,
      accent: '#d7bdf9'
    },
    {
      metric: 'Microsoft R&D',
      label: 'CORE SYSTEMS PEDIGREE',
      context: 'Founding engineering leadership and core technical talent originating directly from Microsoft R&D India.',
      icon: Layers,
      accent: '#e0fb2e'
    },
    {
      metric: 'Select Partner',
      label: 'OPENAI SPECIALIZATION',
      context: 'Verified partner status specialized in enterprise agent orchestration, model fine-tuning evaluations, and production optimization.',
      icon: ShieldCheck,
      accent: '#38bdf8'
    }
  ];

  return (
    <section
      id="production-proof-section"
      className="py-20 sm:py-28 bg-[var(--bg-surface-subtle)] border-b border-[var(--border-color)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[var(--border-color)]">
          <div className="space-y-3 max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
              <span>DEFENSIBLE PRODUCTION PROOF</span>
            </motion.div>
            
            <MaskedHeading as="h2" className="text-section-display text-[var(--text-primary)] leading-[1.18]">
              Verifiable engineering evidence.{' '}
              <span className="font-bold text-[var(--accent-secondary)]">
                Tested in production.
              </span>
            </MaskedHeading>
          </div>

          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] font-normal max-w-md leading-relaxed text-left" delay={0.2}>
            We evaluate engineering systems by their ability to execute enterprise workloads under actual operational stress — measured by real throughput, on-device framerates, and verified partnerships.
          </ScrollText>
        </div>

        {/* 5-Column Proof Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {defensibleProofs.map((proof, idx) => {
            const Icon = proof.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] space-y-3 transition-all text-left shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                    <span className="tracking-wider uppercase text-[10px] truncate max-w-[150px]">{proof.label}</span>
                    <Icon className="w-4 h-4 shrink-0" style={{ color: proof.accent }} />
                  </div>

                  <div className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] tracking-tight">
                    <AnimatedMetric value={proof.metric} />
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
                    {proof.context}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border-color)] flex items-center gap-1.5 text-[10px] font-mono text-[#e0fb2e]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
                  <span>Verified Production Architecture</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
