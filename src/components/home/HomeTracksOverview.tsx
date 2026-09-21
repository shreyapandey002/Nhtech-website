import { motion } from 'motion/react';
import { ArrowRight, Terminal, Eye, Layers, CheckCircle2 } from 'lucide-react';
import { RoutePath } from '../../types';
import { MaskedHeading, ScrollText } from '../common/ScrollMotion';

interface HomeTracksOverviewProps {
  onNavigate: (path: RoutePath) => void;
}

export function HomeTracksOverview({ onNavigate }: HomeTracksOverviewProps) {
  const tracks = [
    {
      id: 'fde',
      number: '01',
      badge: 'CORE OPERATING MODEL',
      title: 'Forward Deployed Engineering',
      route: '/fde' as RoutePath,
      icon: Terminal,
      accent: '#e0fb2e',
      summary: 'AI transformation inside enterprise environments. Senior engineering pods embedded directly with your domain teams: business problem → architecture → prototype → production.',
      highlights: [
        'Embedded pods writing code directly inside your repository',
        'Deterministic state machines & human approval gates',
        'SLMs through frontier models tailored to cost and latency'
      ],
      cta: 'Explore FDE Methodology'
    },
    {
      id: 'vision-edge',
      number: '02',
      badge: 'PHYSICAL PERCEPTION & EDGE',
      title: 'Vision & Edge AI',
      route: '/computer-vision' as RoutePath,
      icon: Eye,
      accent: '#38bdf8',
      summary: 'Computer vision, on-device/edge inference, and industrial physical-world AI. Kinematic tracking, defect inspection, and low-latency execution across tablets, industrial cameras, and mobile devices.',
      highlights: [
        'Real-time kinematic tracking & surface defect inspection',
        'Sub-20ms local inference on commercial tablets & edge nodes',
        'TensorRT, ONNX runtimes & OpenVLA physical perception'
      ],
      cta: 'Explore Vision & Edge AI'
    },
    {
      id: 'complex-business',
      number: '03',
      badge: 'ENTERPRISE PRODUCT ENGINEERING',
      title: 'Complex Business Solutions',
      route: '/what-we-build' as RoutePath,
      icon: Layers,
      accent: '#d7bdf9',
      summary: 'AI-first enterprise applications and complex business platforms. Hardened CRM, workflow, productivity, and compliance systems—alongside loyalty, payments, ERP orchestration, and on-prem deployments.',
      highlights: [
        'ERP, payments, loyalty, CRM & compliance platforms',
        'Document intelligence with spatial citation coordinates',
        'Sovereign models & private deployment with client IP control'
      ],
      cta: 'Explore What We Build'
    }
  ];

  return (
    <section id="three-core-tracks-overview" className="py-24 sm:py-32 bg-[var(--bg-base)] border-b border-[var(--border-color)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[#e0fb2e]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
              <span>CORE ENGINEERING CAPABILITIES</span>
            </div>
            <MaskedHeading as="h2" className="text-3xl sm:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              Three pillars of applied execution.
            </MaskedHeading>
            <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
              We deconstruct complex business problems into production systems across three specialized engineering tracks.
            </ScrollText>
          </div>

          <button
            onClick={() => onNavigate('/what-we-build')}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer self-start sm:self-end"
          >
            <span>View all capabilities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Core Tracks Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all flex flex-col justify-between space-y-8 group shadow-sm text-left relative overflow-hidden"
              >
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-primary)]">
                      <Icon className="w-5 h-5" style={{ color: track.accent }} />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider" style={{ color: track.accent }}>
                        TRACK {track.number}
                      </span>
                      <div className="text-[10px] font-mono text-[var(--text-muted)]">
                        {track.badge}
                      </div>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--text-primary)] transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                      {track.summary}
                    </p>
                  </div>

                  {/* Concrete Highlights */}
                  <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                    {track.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)] font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: track.accent }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[var(--border-color)]">
                  <button
                    onClick={() => onNavigate(track.route)}
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-xs font-mono font-bold text-[var(--text-primary)] transition-all cursor-pointer group-hover:border-[var(--border-hover)]"
                  >
                    <span>{track.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-current group-hover:translate-x-1 transition-transform" />
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
