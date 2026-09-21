import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Compass, Cpu, CheckCircle2, ShieldCheck, Rocket, Terminal, Layers } from 'lucide-react';
import { RoutePath } from '../../types';

interface ProductPartnerPathProps {
  onNavigate: (path: RoutePath) => void;
}

export function ProductPartnerPath({ onNavigate }: ProductPartnerPathProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const steps = [
    {
      num: '01',
      title: 'Senior Pod Deployment',
      timeline: 'Days 1 — 7',
      description: 'We embed senior AI research engineers directly with your domain leaders to audit proprietary datasets, infrastructure bottlenecks, and compliance constraints.',
      accent: '#e0fb2e',
      deliverable: 'Private Topology Blueprint & Zero-Egress Architecture'
    },
    {
      num: '02',
      title: 'Architectural Pipeline Build',
      timeline: 'Days 8 — 30',
      description: 'We engineer fine-tuned open-weights models, local vector indexers, deterministic verification state machines, and hardware acceleration runtimes.',
      accent: '#d7bdf9',
      deliverable: 'Air-Gapped MVP Running Inside Customer VPC / On-Prem'
    },
    {
      num: '03',
      title: 'Deterministic Verification Gate',
      timeline: 'Days 31 — 45',
      description: 'Rigorous mathematical stress tests against production traffic, latency benchmarking under edge constraints, and zero-data-leak validation.',
      accent: '#2552f5',
      deliverable: '100% Verified Accuracy Thresholds & SOC 2 Compliance Audit'
    },
    {
      num: '04',
      title: 'Scale & 100% IP Handover',
      timeline: 'Day 45+',
      description: 'Full code repository transfer, training harness handover, and production telemetry monitoring with complete client ownership and autonomy.',
      accent: '#ff4b3e',
      deliverable: 'Zero Vendor Lock-in & Complete Client IP Ownership'
    }
  ];

  return (
    <section
      ref={containerRef}
      id="product-partnership-pathway"
      className="py-28 sm:py-36 bg-[#07060a] relative overflow-hidden border-b border-[#d7bdf9]/10"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-20">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#d7bdf9]/15">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#e0fb2e] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e] animate-pulse" />
              THE ENGAGEMENT BLUEPRINT // ZERO FRICTION TO SCALE
            </div>
            <h2 className="text-display-massive font-display font-black text-[#f7f4ec] tracking-tight leading-[0.95]">
              How we build with you.
            </h2>
            <p className="text-base text-[#f7f4ec]/75 font-light leading-relaxed max-w-2xl">
              From day one, our pods operate as an extension of your engineering team. Every line of code and model checkpoint belongs exclusively to you.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1c0e30] border border-[#d7bdf9]/30 text-xs font-mono text-[#f7f4ec] hover:border-[#e0fb2e] hover:text-[#e0fb2e] transition-all cursor-pointer self-start lg:self-end"
          >
            <span>DISCUSS ENGAGEMENT WINDOWS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Connected Horizontal Pathway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#120a1f] to-[#07060a] border border-[#d7bdf9]/20 hover:border-[#d7bdf9]/50 transition-all space-y-6 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#d7bdf9]/15">
                  <span className="text-2xl font-display font-black" style={{ color: step.accent }}>
                    {step.num}
                  </span>
                  <span className="text-[11px] font-mono text-[#d7bdf9] px-2 py-0.5 rounded bg-[#1c0e30]">
                    {step.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-[#f7f4ec] group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-[#f7f4ec]/75 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#d7bdf9]/15 space-y-1">
                <div className="text-[10px] font-mono text-[#d7bdf9] uppercase">Key Deliverable:</div>
                <div className="text-xs font-medium text-[#f7f4ec] leading-snug" style={{ color: step.accent }}>
                  {step.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
