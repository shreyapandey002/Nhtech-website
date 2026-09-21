import { RoutePath } from '../types';
import { industries } from '../data/industries';
import { WorldCanvas } from '../components/common/WorldCanvas';
import { SpatialPageHeader } from '../components/common/SpatialPageHeader';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { Factory, Building2, Landmark, ShoppingBag, Rocket, Scale, Stethoscope, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface IndustriesPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'manufacturing': return Factory;
      case 'enterprise-modernization': return Building2;
      case 'fintech-bfsi': return Landmark;
      case 'retail-ecommerce': return ShoppingBag;
      case 'startups': return Rocket;
      case 'legal-compliance': return Scale;
      case 'healthcare': return Stethoscope;
      default: return Building2;
    }
  };

  return (
    <div id="industries-chapter" className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] space-y-24">
      {/* 0. Ambient Enterprise Dynamic Canvas */}
      <WorldCanvas mode="enterprise" opacity={0.35} />

      {/* 1. Spatial Header */}
      <SpatialPageHeader
        tag="ENTERPRISE DOMAINS & SECTOR ARCHITECTURES"
        title="Where our engineering"
        titleAccent="operates."
        subtitle="We tailor agentic workflows, computer vision, and structured intelligence around the explicit operational challenges of European enterprise sectors."
        ctaText="Discuss Sector Architecture"
        ctaRoute="/contact"
        secondaryCtaText="Inspect Case Topologies"
        secondaryCtaRoute="/work"
        onNavigate={onNavigate}
        telemetryItems={[
          { label: 'REGIONS', value: 'GERMANY, NL, CH, N. ITALY' },
          { label: 'DOMAINS', value: '5 CORE INDUSTRIAL SECTORS' },
          { label: 'SOVEREIGNTY', value: 'AIR-GAPPED & EU VPC' },
        ]}
      />

      {/* 2. Featured Manufacturing Sector Highlight */}
      <section className="relative z-10 max-w-7xl mx-auto text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] p-8 sm:p-12 shadow-sm space-y-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[var(--text-primary)] text-[var(--bg-base)] font-bold">
                <Factory className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold tracking-wider">
                  PRIMARY INDUSTRIAL FOCUS // DACH &amp; NORTHERN EUROPE
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-[var(--text-primary)]">
                  Manufacturing &amp; Industrial Operations
                </h2>
              </div>
            </div>

            <button
              onClick={() => onNavigate('/industries/manufacturing')}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight transition-all cursor-pointer shadow-md hover:opacity-90"
            >
              <span>Explore Dedicated Manufacturing Chapter</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed max-w-4xl">
            Factory floor edge vision, air-gapped on-premise inference, real-time defect inspection, and ERP inventory synchronization engineered for German, Dutch, Swiss, and Northern European industrial organizations with zero cloud leaks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-[var(--text-secondary)]">
            <div className="p-4 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)]">
              <span className="text-[#e0fb2e] font-bold block mb-1">01 // OPTICS &amp; EDGE IPC</span>
              GigE camera feeds &amp; on-device TensorRT classification.
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)]">
              <span className="text-[#e0fb2e] font-bold block mb-1">02 // AIR-GAPPED ISOLATION</span>
              Zero CAD or yield data transmitted outside factory walls.
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)]">
              <span className="text-[#e0fb2e] font-bold block mb-1">03 // OPERATOR GATES</span>
              Floor engineers retain final verification signoff.
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. The 4 Other Enterprise Domain Chapters */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="border-b border-[var(--border-color)] pb-4">
          <span className="text-xs font-mono text-[var(--text-muted)] uppercase">SECTOR ARCHITECTURES</span>
          <MaskedHeading as="h2" className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
            Enterprise Domains &amp; Engineered Workflows
          </MaskedHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.filter(i => i.id !== 'manufacturing').map((ind, idx) => {
            const Icon = getIndustryIcon(ind.id);
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[var(--bg-surface-elevated)] text-[#e0fb2e] border border-[var(--border-color)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                      {ind.slug.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[var(--text-primary)]">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                    {ind.summary}
                  </p>

                  <div className="p-4 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] font-mono leading-relaxed">
                    <strong className="text-[#e0fb2e]">OPERATIONAL FRICTION: </strong>
                    {ind.challenge}
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono text-[var(--text-muted)] uppercase block">
                      ENGINEERED SYSTEMS:
                    </span>
                    <ul className="space-y-1.5 text-xs font-mono text-[var(--text-secondary)]">
                      {ind.systems.slice(0, 3).map((sys, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-[#e0fb2e]">▸</span>
                          <span>{sys}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/industries/${ind.slug}` as RoutePath)}
                    className="text-xs font-display font-bold text-[var(--text-primary)] hover:text-[#e0fb2e] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inspect Sector Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Discuss Pod Deployment</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
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
            SECTOR CONSULTATION
          </span>
          <MaskedHeading as="h2" className="text-3xl sm:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight max-w-3xl mx-auto">
            Ready to bring your industry challenge to our engineering pod?
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
            We partner with senior operational leaders to design AI systems that execute within your perimeter.
          </ScrollText>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-xl"
            >
              <span>Schedule Sector Technical Session</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
