import { RoutePath } from '../types';
import { industries } from '../data/industries';
import { WorldCanvas, WorldMode } from '../components/common/WorldCanvas';
import { SpatialPageHeader } from '../components/common/SpatialPageHeader';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Layers, Factory, Building2, Landmark, ShoppingBag, Rocket, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface IndustryDetailPageProps {
  slug: string;
  onNavigate: (path: RoutePath) => void;
}

export function IndustryDetailPage({ slug, onNavigate }: IndustryDetailPageProps) {
  const industry = industries.find(i => i.slug === slug) || industries[0];

  const getWorldMode = (slug: string): WorldMode => {
    switch (slug) {
      case 'manufacturing': return 'manufacturing';
      case 'fintech': return 'fintech';
      case 'enterprise': return 'enterprise';
      case 'retail': return 'matrix';
      case 'startups': return 'vision';
      default: return 'minimal';
    }
  };

  const worldMode = getWorldMode(industry.slug);

  return (
    <div id={`industry-detail-${industry.slug}`} className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] space-y-24">
      {/* 0. Ambient World Canvas tailored to the sector */}
      <WorldCanvas mode={worldMode} opacity={0.35} />

      {/* 1. Spatial Header */}
      <SpatialPageHeader
        tag={`SECTOR ARCHITECTURE // ${industry.slug.toUpperCase()}`}
        title={industry.name.split('&')[0].trim()}
        titleAccent={industry.name.split('&')[1] ? `& ${industry.name.split('&')[1].trim()}` : 'Engineering'}
        subtitle={industry.summary}
        ctaText={`Initiate ${industry.name.split('&')[0].trim()} Assessment`}
        ctaRoute="/contact"
        secondaryCtaText="Inspect Live Topologies"
        secondaryCtaRoute="/work"
        onNavigate={onNavigate}
        telemetryItems={[
          { label: 'SOVEREIGNTY', value: 'AIR-GAPPED & VPC' },
          { label: 'SECTOR', value: industry.slug.toUpperCase() },
          { label: 'RETENTION', value: '100% CLIENT IP' },
        ]}
      />

      {/* 2. Challenge & Engineered Systems Stage */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 sm:p-12 shadow-lg space-y-8">
          <div className="space-y-3 pb-6 border-b border-[var(--border-color)]">
            <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold tracking-wider">
              OPERATIONAL FRICTION POINT
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]">
              The Core Technical Bottleneck
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-4xl">
              {industry.challenge}
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase">
              ENGINEERED WORKFLOW SYSTEMS DEPLOYED:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
              {industry.systems.map((sys, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-1.5 flex items-start gap-3">
                  <span className="text-[#e0fb2e] font-bold mt-0.5">0{idx + 1}</span>
                  <span className="text-[var(--text-primary)] font-sans leading-relaxed">{sys}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Architectural Focus Pillars */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="border-b border-[var(--border-color)] pb-4">
          <span className="text-xs font-mono text-[var(--text-muted)] uppercase">SYSTEM CONSTRAINTS</span>
          <MaskedHeading as="h2" className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
            Architectural Principles &amp; Guarantees
          </MaskedHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          {industry.architectureFocus.map((focus, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-3 shadow-sm"
            >
              <div className="text-[#e0fb2e] font-bold">FOCUS 0{idx + 1}</div>
              <div className="text-sm font-display font-bold text-[var(--text-primary)] font-sans leading-snug">
                {focus}
              </div>
              <div className="text-[11px] text-[var(--text-muted)]">
                ✓ Validated in production
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
            SECTOR ENGAGEMENT
          </span>
          <MaskedHeading as="h2" className="text-3xl sm:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight max-w-3xl mx-auto">
            Ready to deploy an engineering pod in {industry.name}?
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
            We partner with operational leaders to design AI systems tailored to your data topology.
          </ScrollText>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-xl"
            >
              <span>Initiate Sector Discussion</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
