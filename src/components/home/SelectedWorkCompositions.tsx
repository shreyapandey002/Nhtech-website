import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { RoutePath } from '../../types';
import { caseStudies } from '../../data/caseStudies';
import { MaskedHeading, AnimatedMetric } from '../common/ScrollMotion';

interface SelectedWorkCompositionsProps {
  onNavigate: (path: RoutePath) => void;
}

export function SelectedWorkCompositions({ onNavigate }: SelectedWorkCompositionsProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const wyz = caseStudies.find(c => c.slug === 'enterprise-workflow-intelligence');
  const motiVision = caseStudies.find(c => c.slug === 'computer-vision-motion');
  const whitegold = caseStudies.find(c => c.slug === 'financial-anomaly');

  const featuredStudies = [
    {
      data: wyz,
      num: 'TRACK 01',
      badge: 'FDE // PRIMARY',
      accent: '#e0fb2e',
      industry: 'FORWARD DEPLOYED ENGINEERING // AGENTS',
      title: 'Unifying valuation workflows into an automated production system.',
      challenge: 'Deconstructing fragmented customer intake, PDF valuation models, and custom formulas into an automated pipeline with human sign-off gates.',
      outcomeMetric: 'Centralized',
      outcomeLabel: 'Straight-Through Processing & Audit Trail',
      diagramType: 'document-ast'
    },
    {
      data: motiVision,
      num: 'TRACK 02',
      badge: 'VISION & EDGE AI',
      accent: '#38bdf8',
      industry: 'VISION & EDGE AI // KINEMATICS',
      title: 'Biomechanical kinematic pose extraction running 100% on-device.',
      challenge: 'Processing live 60fps video feeds on standard mobile tablets to extract 3D skeletal joint angles with sub-millimeter precision in zero-connectivity clinical facilities.',
      outcomeMetric: '<10ms',
      outcomeLabel: 'Local ONNX Inference (0 KB Bandwidth)',
      diagramType: 'kinematic-mesh'
    },
    {
      data: whitegold,
      num: 'TRACK 03',
      badge: 'COMPLEX BUSINESS',
      accent: '#d7bdf9',
      industry: 'COMPLEX BUSINESS SOLUTIONS // PAYMENTS',
      title: 'Real-time temporal stream anomaly scoring in high-volume ledgers.',
      challenge: 'Evaluating complex multi-hop transaction topologies in real-time streaming windows without false-positive cascades that block legitimate payment flows.',
      outcomeMetric: 'Real-Time',
      outcomeLabel: 'Continuous Distributed Stream Processing',
      diagramType: 'stream-graph'
    }
  ];

  const handleScrollTo = (index: number) => {
    setActiveIdx(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth * 0.78;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="selected-work-section"
      className="py-24 sm:py-32 bg-[var(--bg-surface-subtle)] relative overflow-hidden border-b border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[var(--border-color)]">
          <div className="space-y-3 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
              <span>ACROSS ALL THREE TRACKS</span>
            </motion.div>
            
            <MaskedHeading as="h2" className="text-section-display text-[var(--text-primary)] leading-[1.18]">
              From business bottleneck to{' '}
              <span className="font-bold text-[var(--accent-secondary)]">production system.</span>
            </MaskedHeading>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('/work')}
              className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer group"
            >
              <span>Review Our Engineering Work</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Rail Navigation & Controls */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              {featuredStudies.map((study, idx) => (
                <button
                  key={idx}
                  onClick={() => handleScrollTo(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                    activeIdx === idx
                      ? 'bg-[var(--text-primary)] text-[var(--bg-base)] font-bold shadow-sm'
                      : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
                  }`}
                >
                  <span>{study.num}</span>
                  <span className="hidden sm:inline font-sans">{study.data?.clientName || 'Case'}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScrollTo(Math.max(0, activeIdx - 1))}
                disabled={activeIdx === 0}
                className="w-8 h-8 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-secondary)] flex items-center justify-center hover:text-[var(--text-primary)] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                aria-label="Previous case study"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScrollTo(Math.min(featuredStudies.length - 1, activeIdx + 1))}
                disabled={activeIdx === featuredStudies.length - 1}
                className="w-8 h-8 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-secondary)] flex items-center justify-center hover:text-[var(--text-primary)] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                aria-label="Next case study"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Cards Grid: 3 Responsive Columns */}
          <div 
            ref={scrollContainerRef}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {featuredStudies.map((study, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group cursor-pointer border ${
                    isSelected
                      ? 'bg-[var(--bg-surface)] border-[var(--border-hover)] shadow-lg'
                      : 'bg-[var(--bg-surface)] border-[var(--border-color)] hover:border-[var(--border-hover)]'
                  }`}
                >
                  {/* Top Meta */}
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)] text-xs font-mono">
                      <span className="text-[var(--text-primary)] font-bold text-xs" style={{ color: study.accent }}>
                        {study.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] tracking-wide bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                        {study.data?.clientName || 'ENTERPRISE'}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                      {study.industry}
                    </div>

                    <h3 className="text-xl font-display font-bold text-[var(--text-primary)] tracking-tight leading-snug">
                      {study.title}
                    </h3>

                    <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Visual Diagram / Schematic */}
                  <div className="my-5 p-3.5 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)]">
                    <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase mb-2 flex justify-between">
                      <span>SCHEMATIC</span>
                      <span className="text-[#e0fb2e]">PRODUCTION</span>
                    </div>

                    {study.diagramType === 'stream-graph' && (
                      <div className="space-y-2 font-mono text-[10px]">
                        <div className="flex items-center justify-between text-[var(--text-secondary)]">
                          <span>Event Ingest:</span>
                          <span className="text-[#e0fb2e]">Kafka Stream</span>
                        </div>
                        <div className="w-full bg-[var(--bg-surface-elevated)] h-1 rounded-full overflow-hidden">
                          <div className="h-full bg-[#d7bdf9] w-3/4" />
                        </div>
                        <div className="flex items-center justify-between text-[var(--text-muted)]">
                          <span>Execution Target:</span>
                          <span className="text-[var(--text-primary)]">Customer VPC</span>
                        </div>
                      </div>
                    )}

                    {study.diagramType === 'kinematic-mesh' && (
                      <div className="space-y-2 font-mono text-[10px]">
                        <div className="flex items-center justify-between text-[var(--text-secondary)]">
                          <span>Camera Intake:</span>
                          <span className="text-[#38bdf8]">60 FPS Local</span>
                        </div>
                        <div className="flex items-center justify-between gap-1 py-1">
                          <span className="p-1 rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-primary)]">Pose 3D</span>
                          <span>→</span>
                          <span className="p-1 rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[#38bdf8]">ONNX</span>
                          <span>→</span>
                          <span className="p-1 rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-primary)]">Local UI</span>
                        </div>
                        <div className="flex items-center justify-between text-[var(--text-muted)]">
                          <span>Cloud Egress:</span>
                          <span className="text-[#38bdf8] font-bold">0 KB</span>
                        </div>
                      </div>
                    )}

                    {study.diagramType === 'document-ast' && (
                      <div className="space-y-2 font-mono text-[10px]">
                        <div className="flex items-center justify-between text-[var(--text-secondary)]">
                          <span>Intake Queue:</span>
                          <span className="text-[var(--text-primary)]">PDF / Email / SFTP</span>
                        </div>
                        <div className="flex items-center justify-between gap-1 py-1">
                          <span className="p-1 rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-primary)]">Parser</span>
                          <span>→</span>
                          <span className="p-1 rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[#e0fb2e]">Human Gate</span>
                          <span>→</span>
                          <span className="p-1 rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-primary)]">ERP API</span>
                        </div>
                        <div className="flex items-center justify-between text-[var(--text-muted)]">
                          <span>Audit Accuracy:</span>
                          <span className="text-[#e0fb2e] font-bold">100% Citation Grounding</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Outcome Metric Bottom Anchor */}
                  <div className="pt-3 border-t border-[var(--border-color)]">
                    <div className="text-2xl font-display font-bold text-[var(--text-primary)]">
                      <AnimatedMetric value={study.outcomeMetric} />
                    </div>
                    <div className="text-[11px] text-[var(--text-muted)] font-mono mt-0.5">
                      {study.outcomeLabel}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

