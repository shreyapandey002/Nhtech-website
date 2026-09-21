import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, Cpu, Layers, Terminal, Sparkles, Server, Eye, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { RoutePath } from '../../types';
import { engineeringTracks } from '../../data/tracks';
import { MaskedHeading, ScrollText } from '../common/ScrollMotion';

interface ThreeTracksSectionProps {
  onNavigate: (path: RoutePath) => void;
}

export function ThreeTracksSection({ onNavigate }: ThreeTracksSectionProps) {
  const [selectedTrack, setSelectedTrack] = useState<'fde' | 'vision-edge' | 'complex-business'>('fde');

  const fdeTrack = engineeringTracks.find(t => t.id === 'fde')!;
  const visionTrack = engineeringTracks.find(t => t.id === 'vision-edge')!;
  const businessTrack = engineeringTracks.find(t => t.id === 'complex-business')!;

  return (
    <section 
      id="three-tracks-section"
      className="py-24 sm:py-32 bg-[var(--bg-base)] border-b border-[var(--border-color)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[var(--border-color)]">
          <div className="space-y-3 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
              <span>CORE ARCHITECTURAL TRACKS</span>
            </motion.div>
            
            <MaskedHeading as="h2" className="text-section-display text-[var(--text-primary)] leading-[1.18]">
              Bring us the business problem.{' '}
              <span className="font-bold text-[var(--accent-secondary)]">
                We’ll engineer the system.
              </span>
            </MaskedHeading>
          </div>

          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] font-normal max-w-md leading-relaxed" delay={0.2}>
            NHTech is organized around three deep disciplines. Forward Deployed Engineering forms our central spine, with Vision &amp; Edge AI and Complex Business Solutions extending our impact into physical and enterprise domains.
          </ScrollText>
        </div>

        {/* Bento Grid: Track 1 Visually Dominant on top, Tracks 2 & 3 side by side */}
        <div className="space-y-8">
          
          {/* TRACK 1: FORWARD DEPLOYED ENGINEERING (PRIMARY - VISUALLY DOMINANT) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[var(--bg-surface)] border-2 border-[var(--border-color)] hover:border-[var(--accent-secondary)] transition-all shadow-lg relative overflow-hidden"
          >
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#e0fb2e]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Left Column: Story & Positioning */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#e0fb2e] text-[#0b0c0e]">
                    TRACK 01 // PRIMARY DISCIPLINE
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
                    Embedded Pod Delivery
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight">
                    Forward Deployed Engineering
                  </h3>
                  <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl">
                    {fdeTrack.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
                  {fdeTrack.description} We work shoulder-to-shoulder with customer teams to de-risk architectures, integrate models into existing business systems, and guarantee continuous operational stability.
                </p>

                {/* Sub-capabilities Tags Grid */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-3">
                    CORE CAPABILITIES INCLUDED
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {fdeTrack.subCapabilities.map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-[var(--text-primary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e0fb2e] shrink-0 mt-0.5" />
                        <span className="font-medium">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('/fde')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-md"
                  >
                    <span>Discuss an FDE Engagement</span>
                    <ArrowRight className="w-4 h-4 text-current" />
                  </button>

                  <button
                    onClick={() => onNavigate('/contact')}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium transition-all cursor-pointer"
                  >
                    <span>Show Us the Workflow</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-current" />
                  </button>
                </div>

              </div>

              {/* Right Column: Interactive FDE Delivery Lifecycle Diagram */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-6">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
                    <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold">
                      FDE LIFECYCLE
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      PROBLEM → PRODUCTION
                    </span>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        step: '01',
                        title: 'Problem Definition & Domain Deep-Dive',
                        desc: 'Engineers sit directly with operators to decompose ambiguous requirements, map existing data stores, and define error boundaries.'
                      },
                      {
                        step: '02',
                        title: 'Model & Architecture Selection',
                        desc: 'Model-agnostic evaluation selecting the optimal layer: SLM for latency or Frontier reasoning for multi-step tasks.'
                      },
                      {
                        step: '03',
                        title: 'Production Integration & Guardrails',
                        desc: 'Building deterministic state machines, human sign-off gates, audit logs, and ERP/database connectors.'
                      },
                      {
                        step: '04',
                        title: 'Deployment & Continuous Hardening',
                        desc: 'Deploying into customer cloud, private VPC, on-prem, or edge environments with full client IP ownership and strict data boundaries.'
                      }
                    ].map((phase, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3.5">
                        <div className="w-6 h-6 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[10px] font-mono font-bold text-[#e0fb2e] flex items-center justify-center shrink-0 mt-0.5">
                          {phase.step}
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-xs font-display font-bold text-[var(--text-primary)]">
                            {phase.title}
                          </div>
                          <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                            {phase.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)]">
                    <span>Handover: 100% Customer IP</span>
                    <span className="text-[#e0fb2e]">No Lock-In</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

          {/* TRACKS 2 & 3: SIBLING CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* TRACK 2: VISION & EDGE AI */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all flex flex-col justify-between space-y-6 shadow-sm group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[#38bdf8]">
                    <Eye className="w-3.5 h-3.5" />
                    <span>TRACK 02 // PHYSICAL RUNTIMES</span>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">Sub-15ms Latency</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] tracking-tight">
                    {visionTrack.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {visionTrack.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                  <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                    KEY CAPABILITIES
                  </div>
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-normal">
                    {visionTrack.subCapabilities.map((sub, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#38bdf8] font-bold">▸</span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <button
                  onClick={() => onNavigate('/computer-vision')}
                  className="inline-flex items-center gap-2 text-xs font-display font-bold text-[var(--text-primary)] group-hover:text-[#38bdf8] transition-colors cursor-pointer"
                >
                  <span>Explore Vision &amp; Edge AI</span>
                  <ArrowRight className="w-3.5 h-3.5 text-current" />
                </button>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">Pose &amp; Defect Analytics</span>
              </div>
            </motion.div>

            {/* TRACK 3: COMPLEX BUSINESS SOLUTIONS */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all flex flex-col justify-between space-y-6 shadow-sm group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[#d7bdf9]">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>TRACK 03 // ENTERPRISE PLATFORMS</span>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">Deterministic Rules</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] tracking-tight">
                    {businessTrack.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {businessTrack.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                  <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                    KEY CAPABILITIES
                  </div>
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-normal">
                    {businessTrack.subCapabilities.map((sub, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#d7bdf9] font-bold">▸</span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <button
                  onClick={() => onNavigate('/what-we-build')}
                  className="inline-flex items-center gap-2 text-xs font-display font-bold text-[var(--text-primary)] group-hover:text-[#d7bdf9] transition-colors cursor-pointer"
                >
                  <span>See Production Use Cases</span>
                  <ArrowRight className="w-3.5 h-3.5 text-current" />
                </button>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">Payments · ERP · Workflows</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
