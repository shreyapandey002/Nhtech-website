import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, FileText, MessageSquareText, Workflow, Globe } from 'lucide-react';
import { RoutePath } from '../../types';
import { MaskedHeading, ScrollText } from '../common/ScrollMotion';
import { publicProducts } from '../../data/products';

interface ProductsGalleryProps {
  onNavigate: (path: RoutePath) => void;
}

export function ProductsGallery({ onNavigate }: ProductsGalleryProps) {
  const getProductIcon = (id: string) => {
    switch (id) {
      case 'talkument': return FileText;
      case 'hoot': return MessageSquareText;
      case 'agent-platform':
      default: return Workflow;
    }
  };

  const getProductAccent = (id: string) => {
    switch (id) {
      case 'talkument': return '#38bdf8';
      case 'hoot': return '#ff4b3e';
      case 'agent-platform':
      default: return '#e0fb2e';
    }
  };

  return (
    <section
      id="internal-products-section"
      className="py-16 sm:py-24 bg-[var(--bg-base)] relative overflow-hidden border-b border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
              <span>INTERNAL INCUBATED PRODUCTS // PROPRIETARY IP</span>
            </div>

            <MaskedHeading as="h2" className="text-3xl sm:text-4xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              Internal products born from applied engineering.
            </MaskedHeading>

            <ScrollText className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
              In addition to our bespoke forward-deployed client engineering, NHTech incubates proprietary software platforms for document intelligence, private enterprise communications, and agentic workflow orchestration.
            </ScrollText>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onNavigate('/products')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-md"
            >
              <span>View Product Video Demos</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </div>

        {/* 3 Live Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publicProducts.map((product, idx) => {
            const Icon = getProductIcon(product.id);
            const accent = getProductAccent(product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm transition-all text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]" style={{ color: accent }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {product.liveUrl && (
                      <a
                        href={product.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono text-[var(--accent-secondary)] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Globe className="w-3 h-3" />
                        <span>Live Site</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-bold text-[var(--text-primary)] tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                      {product.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
                    {product.supportingText || product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
                  {product.liveUrl && (
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] hover:border-[var(--border-hover)] text-xs font-mono font-bold text-[var(--text-primary)] hover:text-[var(--accent-secondary)] transition-all cursor-pointer"
                    >
                      <span>{product.ctaLabel || `Explore ${product.name}`}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent-secondary)]" />
                    </a>
                  )}

                  <button
                    onClick={() => onNavigate('/products')}
                    className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Watch Demo</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
