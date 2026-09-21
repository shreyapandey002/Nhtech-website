import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Factory, Building2, Landmark, ShoppingBag, Rocket, CheckCircle2 } from 'lucide-react';
import { RoutePath } from '../../types';
import { MaskedHeading, ScrollText } from '../common/ScrollMotion';

interface IndustriesWorldsProps {
  onNavigate: (path: RoutePath) => void;
  onActiveIndexChange?: (index: number) => void;
}

interface IndustryScene {
  id: string;
  name: string;
  path: RoutePath;
  headline: string;
  subheadline: string;
  icon: typeof Factory;
  capabilities: string[];
  metrics: { value: string; label: string }[];
}

const industries: IndustryScene[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    path: '/industries/manufacturing',
    icon: Factory,
    headline: 'Machine vision and edge intelligence directly on the factory floor.',
    subheadline: 'Sub-millimeter defect classification, predictive tool wear, and automated PLC control loops running locally on industrial edge silicon with zero plant downtime.',
    metrics: [
      { value: 'Edge Silicon', label: 'Local Line Inference' },
      { value: 'Direct PLC', label: 'Deterministic SCADA' },
      { value: 'Zero Egress', label: 'Air-Gapped Operation' }
    ],
    capabilities: [
      'Sub-millimeter surface scratch & weld porosity optical inspection',
      'Direct PLC & SCADA integration via deterministic industrial protocols',
      'Air-gapped on-premise inference servers running TensorRT models'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise & Operations',
    path: '/industries/enterprise',
    icon: Building2,
    headline: 'Coalescing fragmented legacy systems into unified agentic flows.',
    subheadline: 'Transform siloed ERPs, unstructured PDF contracts, and manual approval bottlenecks into self-orchestrating workflows with immutable human audit gates.',
    metrics: [
      { value: 'Deterministic', label: 'Human-in-the-Loop Gates' },
      { value: 'Structured Hub', label: 'Multi-Format Ingestion' },
      { value: 'Private VPC', label: 'Native Isolation' }
    ],
    capabilities: [
      'Multi-agent state machines bounded by deterministic approval gates',
      'Unstructured document tabular extraction with page-level ground truth',
      'Private enterprise knowledge graph with zero telemetry egress'
    ]
  },
  {
    id: 'fintech',
    name: 'FinTech & BFSI',
    path: '/industries/fintech',
    icon: Landmark,
    headline: 'Multi-stream transaction evaluation without compliance leaks.',
    subheadline: 'Real-time temporal graph neural networks evaluating high-frequency payment streams, detecting fraud patterns before settlement without false-positive freezes.',
    metrics: [
      { value: 'Continuous', label: 'Streaming Evaluation' },
      { value: 'Real-Time', label: 'Graph Anomaly Scoring' },
      { value: 'Enclave', label: 'Private Tenant VPC' }
    ],
    capabilities: [
      'Distributed Kafka streaming anomaly scoring at sub-millisecond rates',
      'Temporal fraud clustering models running inside customer SageMaker VPCs',
      'Automated compliance evidence dossier generation for regulatory audits'
    ]
  },
  {
    id: 'retail',
    name: 'Retail & Commerce',
    path: '/industries/retail',
    icon: ShoppingBag,
    headline: 'Predictive demand lattices and visual inventory intelligence.',
    subheadline: 'Multi-echelon SKU demand forecasting, visual shelf compliance, and dynamic merchandising optimization engineered around your proprietary point-of-sale data.',
    metrics: [
      { value: 'Computer Vision', label: 'Real-Time Shelf Tracking' },
      { value: 'Multi-Horizon', label: 'Hierarchical Forecasting' },
      { value: 'Local Hub', label: 'On-Premise Store Sync' }
    ],
    capabilities: [
      'Visual out-of-stock detection from ambient store CCTV feeds',
      'Hierarchical time-series demand forecasting incorporating local variables',
      'Automated replenishment dispatch directly into warehouse management systems'
    ]
  },
  {
    id: 'startups',
    name: 'Tech Startups',
    path: '/industries/startups',
    icon: Rocket,
    headline: 'Rapidly crystallizing raw ideas into production architecture.',
    subheadline: 'We embed senior AI research pods into venture-backed engineering teams to design novel model backbones, private runtimes, and scalable inference foundations.',
    metrics: [
      { value: 'Rapid Pods', label: 'Sprint Architecture' },
      { value: '100% IP', label: 'Complete Code Handover' },
      { value: 'Founding', label: 'Senior Research Team' }
    ],
    capabilities: [
      'Custom fine-tuned open-weights models optimized for inference cost',
      'Full-stack private application architecture and deployment automation',
      'Rigorous unit, integration, and security test harnesses for production AI'
    ]
  }
];

export function IndustriesWorlds({ onNavigate, onActiveIndexChange }: IndustriesWorldsProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    if (onActiveIndexChange) onActiveIndexChange(idx);
  };

  const active = industries[activeIdx];
  const Icon = active.icon;

  return (
    <section
      id="industries-section"
      className="py-24 sm:py-32 bg-[var(--bg-base)] relative overflow-hidden border-b border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[var(--border-color)]">
          <div className="space-y-3 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
              <span>SECTOR ARCHITECTURES</span>
            </motion.div>
            
            <MaskedHeading as="h2" className="text-section-display text-[var(--text-primary)]">
              Applied AI across operating sectors.
            </MaskedHeading>
          </div>

          <button
            onClick={() => onNavigate('/industries')}
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            <span>View all sectors</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Tab Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-2"
        >
          {industries.map((ind, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={ind.id}
                onClick={() => handleSelect(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--text-primary)] text-[var(--bg-base)] font-bold shadow-sm'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--border-hover)]'
                }`}
              >
                {ind.name}
              </button>
            );
          })}
        </motion.div>

        {/* Selected Industry Content Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm"
          >
            {/* Narrative & Capabilities (7 Cols) - Animate left panel */}
            <motion.div 
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-secondary)]">
                  <Icon className="w-3.5 h-3.5 text-[#e0fb2e]" />
                  <span>{active.name}</span>
                </div>
                
                <h3 className="text-card-display text-[var(--text-primary)]">
                  {active.headline}
                </h3>
                
                <p className="text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                  {active.subheadline}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">CORE CAPABILITIES</div>
                {active.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#e0fb2e]" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate(active.path)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] font-display font-bold text-xs transition-all cursor-pointer"
                >
                  <span>Explore {active.name} Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Metrics (5 Cols) - Animate right panel independently */}
            <motion.div 
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-3"
            >
              <div className="p-6 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-4">
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase pb-2 border-b border-[var(--border-color)]">
                  DEPLOYMENT SPECIFICATIONS
                </div>

                <div className="space-y-2.5">
                  {active.metrics.map((m, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.25 + idx * 0.08 }}
                      className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-0.5"
                    >
                      <div className="text-base font-display font-bold text-[var(--text-primary)]">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] font-mono">
                        {m.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
