import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Terminal, Cpu, Activity, CheckCircle2, Layers, Server, FileText, Eye, Sparkles } from 'lucide-react';
import { RoutePath } from '../../types';

interface HeroMediaStageProps {
  onNavigate: (path: RoutePath) => void;
}

export function HeroMediaStage({ onNavigate }: HeroMediaStageProps) {
  const [activeStage, setActiveStage] = useState<'fde-workflow' | 'document-rag' | 'vision-edge'>('fde-workflow');
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 8, y: -y * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section 
      id="hero-section"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden border-b border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Positioning & Call to Action */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Minimal Monochrome Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-secondary)] shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#e0fb2e]" />
              <span className="tracking-wide">FORWARD DEPLOYED ENGINEERING // PRODUCTION AI SYSTEMS</span>
            </motion.div>

            {/* Primary & Supporting Positioning Direction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h1 className="text-hero-display text-[var(--text-primary)] leading-[1.12] text-balance">
                NHTech turns complex business problems into{' '}
                <span className="font-bold text-[var(--accent-secondary)]">
                  production AI systems.
                </span>
              </h1>

              <div className="text-xl sm:text-2xl font-display font-medium text-[var(--text-primary)] tracking-tight">
                Forward Deployed Engineering <span className="text-[var(--text-muted)]">&bull;</span> Vision &amp; Edge AI <span className="text-[var(--text-muted)]">&bull;</span> Complex Business Solutions
              </div>
              
              <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal max-w-xl leading-[1.65]">
                Senior engineering pods embedded directly with your team. We engineer deterministic state machines, on-prem and edge AI, and mission-critical enterprise applications deployed within infrastructure you control.
              </p>
            </motion.div>

            {/* Action Group with Specific, Actionable CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                onClick={() => onNavigate('/fde')}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-bold text-xs tracking-tight hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-md"
              >
                <span>Discuss an FDE Engagement</span>
                <ArrowRight className="w-4 h-4 text-current" />
              </button>

              <button
                onClick={() => onNavigate('/work')}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-medium active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>See Production Use Cases</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </button>
            </motion.div>

            {/* Concrete Proof Points (Replacing generic claims) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-[var(--border-color)] grid grid-cols-2 sm:grid-cols-3 gap-3.5 text-xs font-mono"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e0fb2e] shrink-0" />
                <span className="text-[var(--text-primary)] font-medium">Production AI Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <span className="text-[var(--text-secondary)]">Document Intelligence &amp; RAG</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#d7bdf9] shrink-0" />
                <span className="text-[var(--text-secondary)]">Vision &amp; Edge AI</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#e0fb2e] shrink-0" />
                <span className="text-[var(--text-secondary)]">Model Fine-Tuning</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <span className="text-[var(--text-secondary)]">Workflow Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-[#d7bdf9] shrink-0" />
                <span className="text-[var(--text-secondary)]">Cloud / VPC / On-Prem / Edge</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Concrete Production Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative perspective-1000"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xl relative overflow-hidden space-y-6"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)] text-xs font-mono">
                <div className="flex items-center gap-2 text-[var(--text-primary)]">
                  <Terminal className="w-4 h-4 text-[#e0fb2e]" />
                  <span className="font-bold">FDE INTERVENTION // IN PRODUCTION</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[#e0fb2e] font-bold">
                  VERIFIED DEPLOYMENT
                </span>
              </div>

              {/* Mode Selector Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-xs font-mono">
                {(['fde-workflow', 'document-rag', 'vision-edge'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setActiveStage(mode)}
                    className={`py-2 px-1 text-center transition-all cursor-pointer truncate ${
                      activeStage === mode
                        ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-bold shadow-sm'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {mode === 'fde-workflow' ? 'Complex Workflows' : mode === 'document-rag' ? 'Document & RAG' : 'Vision & Edge'}
                  </button>
                ))}
              </div>

              {/* Dynamic Concrete Telemetry Schematic */}
              <div className="p-4 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-4 text-left">
                <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                  <span>PRODUCTION SYSTEM SPEC</span>
                  <span className="text-[#e0fb2e] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
                    ACTIVE PIPELINE
                  </span>
                </div>

                {activeStage === 'fde-workflow' && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span>Business Problem:</span>
                      <span className="text-[var(--text-primary)] font-medium">Fragmented valuation backoffice</span>
                    </div>
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span>FDE Intervention:</span>
                      <span className="text-[#38bdf8] font-bold">Embedded pod + rule orchestration</span>
                    </div>
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span>Human Approval:</span>
                      <span className="text-[#e0fb2e] font-medium">Confidence threshold escalation</span>
                    </div>
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span>Production Outcome:</span>
                      <span className="text-[var(--text-primary)] font-medium">Thousands processed monthly</span>
                    </div>
                  </div>
                )}

                {activeStage === 'document-rag' && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span>Business Problem:</span>
                      <span className="text-[var(--text-primary)] font-medium">Dense legal &amp; regulatory contracts</span>
                    </div>
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span>Model Architecture:</span>
                      <span className="text-[#38bdf8] font-bold">Fine-tuned SLM + Qdrant Vector DB</span>
                    </div>
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span>Grounding Proof:</span>
                      <span className="text-[#e0fb2e] font-medium">Sub-second bounding citation</span>
                    </div>
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span>Production Outcome:</span>
                      <span className="text-[var(--text-primary)] font-medium">Direct ERP &amp; database writes</span>
                    </div>
                  </div>
                )}

                {activeStage === 'vision-edge' && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span>Business Problem:</span>
                      <span className="text-[var(--text-primary)] font-medium">Real-time biomechanical analysis</span>
                    </div>
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span>Edge Architecture:</span>
                      <span className="text-[#38bdf8] font-bold">Pose landmarks + phase classification</span>
                    </div>
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span>Execution Environment:</span>
                      <span className="text-[#e0fb2e] font-medium">On-device tablet, 60 FPS, no cloud lag</span>
                    </div>
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span>Production Outcome:</span>
                      <span className="text-[var(--text-primary)] font-medium">Instant coach telemetry &amp; BLE sync</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Footer */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-[var(--text-muted)] border-t border-[var(--border-color)]">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#e0fb2e]" />
                  <span>Forward Deployed Pods</span>
                </div>
                <span>Engineering &bull; Not Marketing</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
