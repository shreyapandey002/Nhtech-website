import { useState } from 'react';
import { motion } from 'motion/react';
import { RoutePath, ProductItem } from '../types';
import { publicProducts } from '../data/products';
import { SpatialPageHeader } from '../components/common/SpatialPageHeader';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { FileText, MessageSquareText, Workflow, ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink, Globe } from 'lucide-react';
import { ProductVideoPlayer } from '../components/products/ProductVideoPlayer';

interface ProductsPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getProductIcon = (id: string) => {
    switch (id) {
      case 'talkument': return FileText;
      case 'hoot': return MessageSquareText;
      case 'agent-platform':
      default: return Workflow;
    }
  };

  const getProductMedia = (id: string) => {
    switch (id) {
      case 'talkument':
        return {
          videoSrc: '/Talkument.mp4',
          accent: '#38bdf8',
          badge: 'bg-[var(--bg-surface-elevated)] text-[#38bdf8] border border-[var(--border-color)]',
          telemetryBadge: 'DOCUMENT INTELLIGENCE // SPATIAL RAG'
        };
      case 'hoot':
        return {
          videoSrc: '/Hoot.mp4',
          accent: '#ff4b3e',
          badge: 'bg-[var(--bg-surface-elevated)] text-[#ff6457] border border-[var(--border-color)]',
          telemetryBadge: 'ENTERPRISE MESSAGING // CONTEXT AGENTS'
        };
      case 'agent-platform':
      default:
        return {
          videoSrc: '/Ottom8.mp4',
          accent: '#e0fb2e',
          badge: 'bg-[var(--bg-surface-elevated)] text-[#e0fb2e] border border-[var(--border-color)]',
          telemetryBadge: 'WORKFLOW ORCHESTRATION // DAG RUNTIME'
        };
    }
  };

  const filteredProducts = activeTab === 'all' 
    ? publicProducts 
    : publicProducts.filter(p => p.id === activeTab);

  return (
    <div id="products-chapter" className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] space-y-20">
      
      {/* 1. Spatial Page Header */}
      <SpatialPageHeader
        tag="INTERNAL INCUBATED SOFTWARE PLATFORMS"
        title="Software platforms born from"
        titleAccent="applied engineering."
        subtitle="In addition to forward-deployed client engineering, NHTech builds specialized, standalone software runtimes for document intelligence, enterprise messaging, and multi-agent workflow orchestration."
        ctaText="Request Platform Pilot"
        ctaRoute="/contact"
        secondaryCtaText="Explore Engineering Tracks"
        secondaryCtaRoute="/fde"
        onNavigate={onNavigate}
        telemetryItems={[
          { label: 'PLATFORMS', value: '3 PUBLIC PRODUCTS', color: '#e0fb2e' },
          { label: 'DEPLOYMENT', value: 'VPC / ON-PREM READY', color: 'var(--text-primary)' },
          { label: 'STATUS', value: 'LIVE & IN PRODUCTION', color: '#38bdf8' },
        ]}
      />

      {/* 2. Platform Filter Bar */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]"
        >
          <div className="text-xs font-mono text-[var(--text-secondary)] uppercase font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
            <span>INCUBATED SOFTWARE SUITE</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'all' 
                  ? 'bg-[var(--text-primary)] text-[var(--bg-base)] font-bold shadow-md' 
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:text-[var(--text-primary)]'
              }`}
            >
              All Platforms ({publicProducts.length})
            </button>
            {publicProducts.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeTab === p.id 
                    ? 'bg-[var(--text-primary)] text-[var(--bg-base)] font-bold shadow-md' 
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:text-[var(--text-primary)]'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. Deep Product Showcase Sections with Video as Visual Focus & Live Product Links */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-16">
        {filteredProducts.map((product, idx) => {
          const Icon = getProductIcon(product.id);
          const media = getProductMedia(product.id);

          return (
            <motion.div
              key={product.id}
              id={`product-showcase-${product.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] p-6 sm:p-10 lg:p-12 space-y-8 shadow-md relative overflow-hidden transition-all"
            >
              {/* Top Header with Live Product Link + Action CTAs */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[var(--border-color)] relative z-10">
                <div className="flex items-center gap-3.5">
                  {product.liveUrl ? (
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-transform hover:scale-105 cursor-pointer"
                      style={{ color: media.accent }}
                      title={`Visit ${product.name} website`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ) : (
                    <div className="p-3 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]" style={{ color: media.accent }}>
                      <Icon className="w-5 h-5" />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      {product.liveUrl ? (
                        <a
                          href={product.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/title flex items-center gap-1.5 cursor-pointer"
                        >
                          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] group-hover/title:text-[var(--accent-secondary)] transition-colors tracking-tight">
                            {product.name}
                          </h2>
                          <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover/title:text-[var(--accent-secondary)] transition-all transform group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
                        </a>
                      ) : (
                        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] tracking-tight">
                          {product.name}
                        </h2>
                      )}

                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold ${media.badge}`}>
                        {product.status}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* Primary & Secondary Action CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  {product.liveUrl && (
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-display font-bold bg-[#e0fb2e] text-black hover:opacity-90 transition-all cursor-pointer shadow-lg hover:shadow-xl"
                    >
                      <span>{product.ctaLabel || `Explore ${product.name} ↗`}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => onNavigate('/contact')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-display font-bold bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all cursor-pointer"
                  >
                    <span>Request Pilot</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                  </button>
                </div>
              </div>

              {/* Grid: Narrative + Real Product Video Focus */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10 text-left">
                
                {/* Narrative & Concise Capabilities (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Dedicated Live Product Summary Card */}
                  <div className="space-y-2.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center justify-between">
                      <span>Product Overview</span>
                      {product.liveUrl && (
                        <a
                          href={product.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-mono text-[var(--accent-secondary)] hover:underline flex items-center gap-1"
                        >
                          <Globe className="w-3 h-3" />
                          <span>{product.liveUrl.replace('https://', '').replace(/\/$/, '')}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                      {product.supportingText || product.description}
                    </p>
                  </div>

                  {/* Problem Solved */}
                  <div className="p-4 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-1.5">
                    <div className="text-[11px] font-mono uppercase font-bold" style={{ color: media.accent }}>
                      Enterprise Challenge Addressed
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                      {product.problemSolved}
                    </p>
                  </div>

                  {/* Concise Capabilities List */}
                  <div className="space-y-2.5">
                    <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                      Core Capabilities
                    </div>
                    {product.keyCapabilities.map((cap, capIdx) => (
                      <div key={capIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)] font-normal">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: media.accent }} />
                        <span className="leading-relaxed font-sans">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Website Link Anchor Button */}
                  {product.liveUrl && (
                    <div className="pt-2">
                      <a
                        href={product.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-between px-4 py-3 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] hover:border-[var(--border-hover)] text-xs font-mono font-bold text-[var(--text-primary)] hover:text-[var(--accent-secondary)] transition-all group/cta"
                      >
                        <span className="flex items-center gap-2">
                          <Globe className="w-3.5 h-3.5 text-[var(--accent-secondary)]" />
                          <span>{product.ctaLabel || `Explore ${product.name} ↗`}</span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover/cta:text-[var(--accent-secondary)] transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-all" />
                      </a>
                    </div>
                  )}

                  {/* Deployment note */}
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--text-muted)]">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: media.accent }} />
                    <span>Private VPC / On-Prem / Cloud Deployment</span>
                  </div>
                </div>

                {/* Real Product Video Showcase (7 cols) */}
                <div className="lg:col-span-7 space-y-3">
                  <ProductVideoPlayer
                    src={media.videoSrc}
                    title={product.name}
                    accentColor={media.accent}
                    badge={media.telemetryBadge}
                    liveUrl={product.liveUrl}
                    ctaLabel={product.ctaLabel}
                  />

                  {/* High Visibility Companion Link Bar alongside Video */}
                  {product.liveUrl && (
                    <div className="p-3.5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-secondary)]">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: media.accent }} />
                        <span className="text-[var(--text-muted)]">Live Product:</span>
                        <span className="font-bold text-[var(--text-primary)]">{product.liveUrl}</span>
                      </div>

                      <a
                        href={product.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#e0fb2e] hover:underline"
                      >
                        <span>{product.ctaLabel || `Explore ${product.name} ↗`}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          );
        })}
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
            ENTERPRISE PLATFORM PILOTS
          </span>
          <MaskedHeading as="h2" className="text-3xl sm:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight max-w-3xl mx-auto">
            Deploy a dedicated platform instance inside your VPC.
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
            We containerize and deploy Talkument, Hoot, or our Ottom8 Agent Platform directly into your cloud perimeter with zero vendor lock-in.
          </ScrollText>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-xl"
            >
              <span>Request Platform Consultation</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
