import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MaskedHeading, ScrollText } from '../common/ScrollMotion';

interface InterstitialStatementProps {
  tag: string;
  primaryText: string;
  secondaryText: string;
  accentColor?: string;
}

export function InterstitialStatement({
  tag,
  primaryText,
  secondaryText,
  accentColor = '#e0fb2e',
}: InterstitialStatementProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.65, 1, 0.65]);

  return (
    <section
      ref={containerRef}
      className="py-28 sm:py-36 bg-[#07060a] relative overflow-hidden flex items-center justify-center border-y border-[#d7bdf9]/10"
    >
      {/* Background Architectural Vector Lines */}
      <div className="absolute inset-0 bg-architectural-grid opacity-25 pointer-events-none" />

      <motion.div
        style={shouldReduceMotion ? {} : { y: translateY, scale, opacity }}
        className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8 relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d7bdf9]"
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
          <span>{tag}</span>
        </motion.div>

        <MaskedHeading as="h3" className="text-display-massive font-display font-black text-[#f7f4ec] tracking-tight leading-[0.95] text-balance">
          {primaryText}
        </MaskedHeading>

        <ScrollText className="text-base sm:text-lg lg:text-xl text-[#f7f4ec]/75 font-light max-w-3xl mx-auto leading-relaxed" delay={0.2}>
          {secondaryText}
        </ScrollText>
      </motion.div>
    </section>
  );
}
