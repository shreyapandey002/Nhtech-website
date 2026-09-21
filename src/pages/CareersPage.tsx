import { RoutePath } from '../types';
import { brand } from '../config/brand';
import { WorldCanvas } from '../components/common/WorldCanvas';
import { SpatialPageHeader } from '../components/common/SpatialPageHeader';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { Terminal, Users, Cpu, ShieldCheck, Mail, ArrowRight, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface CareersPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  const pods = [
    {
      num: '01',
      title: 'Applied AI & State Machine Researcher',
      focus: 'Agent architectures, LLM fine-tuning, deterministic evaluation frameworks, and constrained decoding pipelines.',
      tech: ['PyTorch', 'vLLM', 'LangGraph', 'FastAPI', 'Qdrant'],
      accent: '#e0fb2e'
    },
    {
      num: '02',
      title: 'Distributed Systems & Inference Engineer',
      focus: 'High-throughput model serving, TensorRT compilation, GPU cluster orchestration, and low-latency streaming.',
      tech: ['C++', 'CUDA', 'Docker', 'Kubernetes', 'Kafka', 'Rust'],
      accent: '#38bdf8'
    },
    {
      num: '03',
      title: 'Edge Computer Vision Engineer',
      focus: 'Real-time kinematic landmark extraction, pose estimation state machines, and embedded industrial IPC runtimes.',
      tech: ['OpenCV', 'TensorRT', 'ONNX Runtime', 'WebRTC', 'Python'],
      accent: '#d7bdf9'
    },
    {
      num: '04',
      title: 'Senior Product Engineer (Full-Stack)',
      focus: 'Type-safe enterprise frontends, streaming state management, and human-in-the-loop triage consoles.',
      tech: ['TypeScript', 'React', 'FastAPI', 'PostgreSQL', 'Tailwind'],
      accent: '#ff4b3e'
    }
  ];

  return (
    <div id="careers-chapter" className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] space-y-24">
      {/* 0. Ambient Canvas */}
      <WorldCanvas mode="minimal" opacity={0.35} />

      {/* 1. Spatial Header */}
      <SpatialPageHeader
        tag="SPECIALIST PODS & CAREERS"
        title="Small teams."
        titleAccent="High ownership."
        subtitle="We do not hire armies of generalists. We build compact specialist pods of senior engineers who thrive on deep technical uncertainty, distributed systems, and enterprise production standards."
        ctaText="Email Us Your Profile"
        ctaHref="mailto:info@nighthack.in?subject=Application%20-%20Engineering%20Pod"
        secondaryCtaText="Explore Internal Platforms"
        secondaryCtaRoute="/products"
        onNavigate={onNavigate}
        telemetryItems={[
          { label: 'CULTURE', value: 'DIRECT TECHNICAL OWNERSHIP' },
          { label: 'WORK STYLE', value: 'REMOTE / HYBRID CET' },
          { label: 'HIERARCHY', value: 'ZERO MIDDLE MANAGEMENT' },
        ]}
      />

      {/* 2. Engineering Pod Tenets */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-3 shadow-sm"
          >
            <div className="text-xs font-mono text-[#e0fb2e] font-bold">01 // AUTONOMY</div>
            <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">Direct Technical Ownership</h3>
            <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed font-sans">
              You architect, build, and deploy systems directly. No endless bureaucracy or non-technical handoffs.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-3 shadow-sm"
          >
            <div className="text-xs font-mono text-[#38bdf8] font-bold">02 // RIGOR</div>
            <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">Production Standards</h3>
            <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed font-sans">
              We hold ourselves to mathematical evaluation, deterministic fallbacks, and high-throughput reliability.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-3 shadow-sm"
          >
            <div className="text-xs font-mono text-[var(--accent-secondary)] font-bold">03 // LABS</div>
            <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">Continuous Incubation</h3>
            <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed font-sans">
              Pods spend dedicated time incubating internal technology (like Talkument, Hoot, and our Ottom8 Agent Platform).
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Open Pod Roles */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="border-b border-[var(--border-color)] pb-4">
          <span className="text-xs font-mono text-[var(--text-muted)] uppercase">POD OPENINGS</span>
          <MaskedHeading as="h2" className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
            Active Specialist Roles
          </MaskedHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pods.map((pod, idx) => (
            <motion.div
              key={pod.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all space-y-6 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold" style={{ color: pod.accent }}>
                    POD {pod.num}
                  </span>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                    REMOTE / HYBRID CET
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-[var(--text-primary)]">
                  {pod.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed font-sans">
                  {pod.focus}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-[var(--text-muted)] uppercase">PRIMARY STACK:</div>
                  <div className="flex flex-wrap gap-2">
                    {pod.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)]">
                <a
                  href={`mailto:info@nighthack.in?subject=Application%20-%20${encodeURIComponent(pod.title)}`}
                  className="inline-flex items-center gap-2 text-xs font-display font-bold text-[var(--text-primary)] hover:text-[#e0fb2e] transition-colors cursor-pointer no-underline"
                >
                  <Mail className="w-3.5 h-3.5 text-[#e0fb2e]" />
                  <span>Email us your profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 sm:p-14 text-center space-y-6 shadow-xl"
        >
          <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold tracking-widest">
            JOIN THE COLLECTIVE
          </span>
          <MaskedHeading as="h2" className="text-3xl sm:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight max-w-3xl mx-auto">
            Don't see your exact title?
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
            If you have built and deployed serious machine learning pipelines, distributed systems, or high-throughput runtimes, simply email your CV/profile and relevant details directly to <strong className="text-[var(--text-primary)]">info@nighthack.in</strong>.
          </ScrollText>
          <div className="pt-4">
            <a
              href="mailto:info@nighthack.in?subject=Engineering%20Background%20-%20General%20Application"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-xl no-underline"
            >
              <Mail className="w-4 h-4 text-current" />
              <span>Email Your CV &amp; Profile (info@nighthack.in)</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
