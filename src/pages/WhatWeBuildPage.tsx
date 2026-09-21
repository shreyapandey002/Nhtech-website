import { useState } from 'react';
import { RoutePath } from '../types';
import { capabilities } from '../data/capabilities';
import { WorldCanvas } from '../components/common/WorldCanvas';
import { SpatialPageHeader } from '../components/common/SpatialPageHeader';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { ArrowRight, ArrowUpRight, Cpu, Layers, Terminal, Shield, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface WhatWeBuildPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function WhatWeBuildPage({ onNavigate }: WhatWeBuildPageProps) {
  const [activeCapIdx, setActiveCapIdx] = useState(0);
  const activeCap = capabilities[activeCapIdx];

  return (
    <div id="what-we-build-chapter" className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] space-y-24">
      {/* 0. Ambient Canvas */}
      <WorldCanvas mode="matrix" opacity={0.35} />

      {/* 1. Spatial Header */}
      <SpatialPageHeader
        tag="CAPABILITY OVERVIEW // APPLIED AI ARCHITECTURE"
        title="What we engineer."
        titleAccent="Inside production."
        subtitle="A concise overview of our engineering capabilities: agentic workflows, document intelligence, AI-first enterprise applications, complex business platforms, on-prem model engineering, and vision & edge systems. Explore each domain in depth below."
        ctaText="Discuss Systems Architecture"
        ctaRoute="/contact"
        secondaryCtaText="Inspect Production Work"
        secondaryCtaRoute="/work"
        onNavigate={onNavigate}
        telemetryItems={[
          { label: 'DELIVERY', value: 'FULL RUNTIME & REPO' },
          { label: 'DEPLOYMENT', value: 'PRIVATE CLOUD, ON-PREM & EDGE' },
          { label: 'CAPABILITIES', value: '06 CORE ENGINEERING DOMAINS' },
        ]}
      />

      {/* 2. Interactive Systems Blueprint & Pipeline Stage */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
          <div>
            <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold">
              ENGINEERING MATRIX // 06 CORE DOMAINS
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
              Select an Engineering Capability
            </h2>
          </div>

          <div className="text-xs font-mono text-[var(--text-muted)]">
            CLICK DOMAIN TO INSPECT ARCHITECTURE &amp; DETAILED SPEC
          </div>
        </div>

        {/* Horizontal Capability Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pb-2">
          {capabilities.map((cap, idx) => (
            <button
              key={cap.id}
              onClick={() => setActiveCapIdx(idx)}
              className={`p-3 rounded-xl text-xs font-mono transition-all cursor-pointer flex flex-col justify-between text-left space-y-1.5 ${
                activeCapIdx === idx
                  ? 'bg-[var(--text-primary)] text-[var(--bg-base)] font-bold shadow-md'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={activeCapIdx === idx ? 'text-inherit font-bold' : 'text-[#e0fb2e] font-bold'}>
                  0{idx + 1}
                </span>
                {activeCapIdx === idx && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
              </div>
              <span className="line-clamp-2 leading-tight">{cap.title}</span>
            </button>
          ))}
        </div>

        {/* Selected System Master Dossier Stage */}
        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 sm:p-10 shadow-lg space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[var(--border-color)]">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold tracking-wider">
                CAPABILITY DOMAIN 0{activeCapIdx + 1} // {activeCap.headline}
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-[var(--text-primary)] tracking-tight">
                {activeCap.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                {activeCap.description}
              </p>
            </div>

            {activeCap.relatedRoute && (
              <button
                onClick={() => onNavigate(activeCap.relatedRoute!)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[var(--text-primary)] hover:opacity-90 text-[var(--bg-base)] font-display font-bold text-xs tracking-tight transition-all cursor-pointer shadow-md self-start lg:self-auto shrink-0"
              >
                <span>Explore Dedicated Page</span>
                <ArrowRight className="w-4 h-4 text-current" />
              </button>
            )}
          </div>

          {/* Architectural Concepts Grid */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase">CORE ARCHITECTURAL PILLARS</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
              {activeCap.coreConcepts.map((concept, cIdx) => (
                <div key={cIdx} className="p-5 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-2">
                  <div className="text-[#e0fb2e] font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
                    <span>{concept.title}</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] font-sans font-normal leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Points & Technology Tokens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-color)]">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
                SYSTEM HIGHLIGHTS
              </span>
              <ul className="space-y-2 text-xs font-mono text-[var(--text-secondary)]">
                {activeCap.architecturePoints.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-[#e0fb2e]">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
                PRODUCTION RUNTIMES &amp; STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {activeCap.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {activeCap.deliverables && (
                <div className="pt-2">
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase block mb-1.5">
                    KEY DELIVERABLES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCap.deliverables.map((del, dIdx) => (
                      <span key={dIdx} className="text-[11px] font-mono text-[#e0fb2e] bg-[var(--bg-surface-subtle)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">
                        ✓ {del}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. High-Level Grid of All 6 Capabilities with Direct Deep Links */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
          <div>
            <div className="text-xs font-mono text-[var(--accent-secondary)] uppercase">
              DEEP DESTINATIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
              Explore Detailed Capability Centers
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            DIRECT DESTINATIONS FOR EACH TRACK
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.id}
              onClick={() => cap.relatedRoute && onNavigate(cap.relatedRoute)}
              className="p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all cursor-pointer flex flex-col justify-between space-y-4 group shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span>0{idx + 1}</span>
                  <span className="text-[#e0fb2e] font-bold">CAPABILITY</span>
                </div>
                <h3 className="text-lg font-display font-bold text-[var(--text-primary)] group-hover:text-[#e0fb2e] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>View Detailed Dossier</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#e0fb2e]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Monumental Callout */}
      <section className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 sm:p-14 text-center space-y-6 shadow-xl"
        >
          <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold tracking-widest">
            ENGINEERING CONSULTATION
          </span>
          <MaskedHeading as="h2" className="text-3xl sm:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight max-w-3xl mx-auto">
            Need an architectural evaluation for your operations?
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
            We evaluate your technical constraints, data residency boundaries, and existing systems to architect the exact production pipeline.
          </ScrollText>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-xl"
            >
              <span>Schedule Architectural Session</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
