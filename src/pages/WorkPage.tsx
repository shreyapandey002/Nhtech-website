import { useState } from 'react';
import { motion } from 'motion/react';
import { RoutePath, CaseStudy } from '../types';
import { caseStudies } from '../data/caseStudies';
import { engineeringTracks } from '../data/tracks';
import { SpatialPageHeader } from '../components/common/SpatialPageHeader';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { X, Terminal, ArrowRight, ShieldCheck, Cpu, Layers } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (path: RoutePath) => void;
  selectedCaseStudy?: CaseStudy | null;
  onSelectCaseStudy: (caseStudy: CaseStudy | null) => void;
}

export function WorkPage({ onNavigate, selectedCaseStudy, onSelectCaseStudy }: WorkPageProps) {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(selectedCaseStudy || null);
  const [filterTrack, setFilterTrack] = useState<string>('all');

  const publicCaseStudies = caseStudies.filter(cs => cs.approvedForPublicWebsite);

  const filteredCaseStudies = filterTrack === 'all'
    ? publicCaseStudies
    : publicCaseStudies.filter(cs => cs.track === filterTrack);

  const handleOpenDetail = (study: CaseStudy) => {
    setActiveModalStudy(study);
    onSelectCaseStudy(study);
  };

  const handleCloseDetail = () => {
    setActiveModalStudy(null);
    onSelectCaseStudy(null);
  };

  return (
    <div id="work-chapter" className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] space-y-20">
      
      {/* 1. Spatial Page Header */}
      <SpatialPageHeader
        tag="FORWARD DEPLOYED ENGINEERING DOSSIERS"
        title="Difficult problems converted into"
        titleAccent="production technology."
        subtitle="Forward-deployed engineers working alongside customer teams from problem definition to deployment across agentic AI, on-device computer vision, and complex business architectures."
        ctaText="Initiate Engineering Pod"
        ctaRoute="/contact"
        secondaryCtaText="Explore FDE Methodology"
        secondaryCtaRoute="/fde"
        onNavigate={onNavigate}
        telemetryItems={[
          { label: 'TRACKS', value: '3 CORE DOMAINS', color: '#e0fb2e' },
          { label: 'CLIENT IP', value: '100% OWNED BY CLIENT', color: 'var(--text-primary)' },
          { label: 'DELIVERY', value: 'VPC / ON-PREM / EDGE', color: '#38bdf8' },
        ]}
      />

      {/* 2. 3-Track Filter Tabs */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]"
        >
          <div className="text-xs font-mono text-[var(--text-secondary)] uppercase font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
            <span>ORGANIZED BY ENGINEERING TRACK</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterTrack('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                filterTrack === 'all' 
                  ? 'bg-[var(--text-primary)] text-[var(--bg-base)] font-bold shadow-md' 
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:text-[var(--text-primary)]'
              }`}
            >
              All Systems ({publicCaseStudies.length})
            </button>
            {engineeringTracks.map((tr) => (
              <button
                key={tr.id}
                onClick={() => setFilterTrack(tr.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  filterTrack === tr.id 
                    ? 'bg-[var(--text-primary)] text-[var(--bg-base)] font-bold shadow-md' 
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tr.shortTitle}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. Engineering Dossiers List with Scroll Motion */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-12">
        {filteredCaseStudies.map((study, idx) => {
          const trackMeta = engineeringTracks.find(t => t.id === study.track);
          return (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-8 sm:p-12 border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] transition-all shadow-md relative overflow-hidden space-y-8"
            >
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--border-color)]">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-md bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-color)] font-bold">
                    SYSTEM DOSSIER 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded text-[#e0fb2e] bg-[var(--bg-surface-subtle)] border border-[var(--border-color)]">
                    {trackMeta?.badge || 'ENGINEERING TRACK'}
                  </span>
                  <span className="text-base sm:text-xl font-display font-bold text-[var(--text-primary)]">
                    {study.clientName || study.clientAnonymousName}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#e0fb2e] font-bold">
                  <span>✓ PRODUCTION SYSTEM DEPLOYED</span>
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Narrative (7 cols) */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] tracking-tight leading-tight">
                    {study.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                    {study.context}
                  </p>

                  <div className="p-4 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-1.5">
                    <div className="text-xs font-mono text-[var(--accent-secondary)] uppercase font-bold">
                      THE BUSINESS / TECHNICAL PROBLEM
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                      {study.difficulty}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-1.5">
                    <div className="text-xs font-mono text-[#e0fb2e] uppercase font-bold">
                      PRODUCTION SYSTEM ARCHITECTED &amp; DEPLOYED
                    </div>
                    <div className="text-xs text-[var(--text-primary)] leading-relaxed font-normal">
                      {study.systemDesigned}
                    </div>
                  </div>

                  {/* Scale Evidence */}
                  {study.scaleEvidence && (
                    <div className="p-4 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-display font-bold text-[var(--text-primary)]">
                          {study.scaleEvidence.primaryMetric}
                        </div>
                        <div className="text-xs font-mono text-[var(--text-muted)] uppercase">
                          {study.scaleEvidence.metricLabel}
                        </div>
                      </div>
                      <div className="text-xs text-[var(--text-secondary)] font-normal max-w-xs text-right hidden sm:block">
                        {study.scaleEvidence.description}
                      </div>
                    </div>
                  )}
                </div>

                {/* Abstract Architectural Diagram (5 cols) */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-4">
                  <div className="text-xs font-mono text-[var(--text-secondary)] flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
                    <span>SYSTEM_DIAGRAM // TOPOLOGY</span>
                    <span className="text-[#e0fb2e] font-bold">ACTIVE</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)]">
                    {study.architecture.slice(0, 3).map((layer, lIdx) => (
                      <div key={lIdx} className="p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex items-start gap-2">
                        <span className="text-[#e0fb2e] font-bold">0{lIdx + 1}</span>
                        <span className="text-[var(--text-primary)] font-medium">{layer}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] font-mono text-[var(--text-muted)] pt-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#e0fb2e]" />
                    <span>Engineered with 100% Client Codebase Ownership</span>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Case Study Full Architecture Modal */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl space-y-8 my-8 relative text-left">
            <div className="flex items-center justify-between pb-6 border-b border-[var(--border-color)]">
              <div>
                <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold">
                  SYSTEM DOSSIER // {activeModalStudy.clientName || activeModalStudy.clientAnonymousName}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
                  {activeModalStudy.title}
                </h3>
              </div>
              <button
                onClick={handleCloseDetail}
                className="p-2 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[var(--border-color)] text-[var(--text-primary)] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
              <div className="space-y-2">
                <div className="text-xs font-mono text-[var(--text-primary)] uppercase font-bold">Operational Context</div>
                <p>{activeModalStudy.context}</p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-[var(--accent-secondary)] uppercase font-bold">Technical Difficulty</div>
                <p>{activeModalStudy.difficulty}</p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-[#e0fb2e] uppercase font-bold">Architecture Pipeline</div>
                <div className="space-y-1.5 font-mono">
                  {activeModalStudy.architecture.map((layer, lIdx) => (
                    <div key={lIdx} className="flex items-start gap-2 text-xs text-[var(--text-primary)]">
                      <span className="text-[#e0fb2e] font-bold">•</span>
                      <span>{layer}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeModalStudy.scaleEvidence && (
                <div className="p-4 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-1">
                  <div className="text-xl font-display font-bold text-[var(--text-primary)]">{activeModalStudy.scaleEvidence.primaryMetric}</div>
                  <div className="text-xs font-mono text-[var(--text-muted)] uppercase">{activeModalStudy.scaleEvidence.metricLabel}</div>
                  <div className="text-[11px] text-[var(--text-secondary)]">{activeModalStudy.scaleEvidence.description}</div>
                </div>
              )}
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-color)]">
              <span className="text-xs font-mono text-[var(--text-muted)]">
                IP STATUS: 100% OWNED BY CLIENT
              </span>
              <button
                onClick={() => {
                  handleCloseDetail();
                  onNavigate('/contact');
                }}
                className="px-6 py-3 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs hover:opacity-90 transition-all cursor-pointer shadow-md"
              >
                Discuss Similar Architecture Deployment
              </button>
            </div>
          </div>
        </div>
      )}

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
            FORWARD DEPLOYED POD DISPATCH
          </span>
          <MaskedHeading as="h2" className="text-3xl sm:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight max-w-3xl mx-auto">
            Ready to convert your complex problem into a production system?
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
            Our forward-deployed engineers embed alongside your team to define, architect, and ship high-reliability software.
          </ScrollText>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-xl"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

