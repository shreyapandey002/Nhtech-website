import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Lock, Terminal, ArrowUpRight } from 'lucide-react';
import { RoutePath } from '../../types';
import { MaskedHeading, ScrollText } from '../common/ScrollMotion';

interface ClimaxCTAProps {
  onNavigate: (path: RoutePath) => void;
}

export function ClimaxCTA({ onNavigate }: ClimaxCTAProps) {
  return (
    <section
      id="climax-cta"
      className="py-24 sm:py-36 bg-[var(--bg-base)] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        {/* Subtle Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-secondary)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#e0fb2e]" />
          <span>FORWARD DEPLOYED ENGINEERING INITIATIVE</span>
        </motion.div>

        {/* Strong Business-Problem Headline */}
        <div className="space-y-4">
          <MaskedHeading as="h2" className="text-hero-display text-[var(--text-primary)] leading-[1.15] text-balance">
            Have a workflow that is slow, fragmented or{' '}
            <span className="font-bold text-[var(--accent-secondary)]">
              technically blocked?
            </span>
          </MaskedHeading>
          <ScrollText className="text-lg sm:text-xl text-[var(--text-primary)] font-medium max-w-xl mx-auto leading-relaxed" delay={0.2}>
            Bring us the problem. We’ll work out the engineering.
          </ScrollText>
        </div>

        {/* Action Buttons: Primary 'Discuss the Problem', Secondary 'See What We’ve Built' */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <button
            onClick={() => onNavigate('/contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-7 py-3.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-bold text-xs tracking-tight hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-md"
          >
            <span>Discuss the Problem</span>
            <ArrowRight className="w-4 h-4 text-current" />
          </button>

          <button
            onClick={() => onNavigate('/work')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-medium active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>See What We’ve Built</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </button>
        </motion.div>

        {/* Guarantees */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[var(--text-muted)] border-t border-[var(--border-color)]"
        >
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-[#e0fb2e]" />
            <span>Mutual NDA from First Call</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
            <span>100% Client Code &amp; Model Weights Retention</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
            <span>Senior Systems Engineers Direct</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
