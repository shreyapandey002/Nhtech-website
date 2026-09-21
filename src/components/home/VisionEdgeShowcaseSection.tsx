import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Eye, 
  Camera, 
  Cpu, 
  Zap, 
  Activity, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  Bot,
  Gauge,
  Sliders,
  Tablet,
  Radio,
  Search,
  ArrowUpRight
} from 'lucide-react';
import { RoutePath } from '../../types';
import { MaskedHeading, ScrollText } from '../common/ScrollMotion';

interface VisionEdgeShowcaseSectionProps {
  onNavigate: (path: RoutePath) => void;
}

interface VisionFlowStage {
  step: string;
  name: string;
  sub: string;
  role: string;
  icon: typeof Camera;
  accent: string;
  tech: string[];
}

const proofPipeline: VisionFlowStage[] = [
  {
    step: '01',
    name: 'Video Input',
    sub: 'Optical Stream Ingestion',
    role: 'Real-time video inputs from mobile sensors, commercial tablets, or factory optical camera feeds under variable ambient conditions.',
    icon: Camera,
    accent: '#38bdf8',
    tech: ['Optical Sensor Ingestion', 'Frame Buffering', 'Lighting Adaptation']
  },
  {
    step: '02',
    name: 'Pose Landmarks',
    sub: 'Spatial Keypoint Tracking',
    role: 'Extracting high-precision anatomical or object landmarks frame-by-frame, mapping joint coordinates or component boundaries.',
    icon: Eye,
    accent: '#e0fb2e',
    tech: ['Landmark Extraction', 'Keypoint Coordinates', 'Spatial Geometry']
  },
  {
    step: '03',
    name: 'Phase Classification',
    sub: 'Temporal State Modeling',
    role: 'Classifying movement phases over time (e.g. eccentric, isometric, concentric transitions) and continuous activity states.',
    icon: Activity,
    accent: '#d7bdf9',
    tech: ['Temporal Modeling', 'Phase State Machine', 'Transition Triggers']
  },
  {
    step: '04',
    name: 'Rep / Tempo / Velocity',
    sub: 'Metric Computation',
    role: 'Computing domain metrics in real time: accurate repetition counts, execution tempo, velocity curves, and movement deviations.',
    icon: Gauge,
    accent: '#38bdf8',
    tech: ['Repetition Counting', 'Tempo Cadence', 'Velocity Analysis']
  },
  {
    step: '05',
    name: 'Edge Device',
    sub: 'Local Runtime Execution',
    role: 'Deploying optimized models onto tablets and edge hardware, executing locally under strict latency constraints without network reliance.',
    icon: Cpu,
    accent: '#e0fb2e',
    tech: ['Tablet Runtimes', 'Latency Optimization', 'Offline Resilience']
  },
  {
    step: '06',
    name: 'Coach Dashboard',
    sub: 'Operator Telemetry & Action',
    role: 'Syncing actionable feedback to coach/operator interfaces with BLE hardware coordination, alerts, and session analytics.',
    icon: Tablet,
    accent: '#d7bdf9',
    tech: ['Real-Time UI', 'BLE / IoT Coordination', 'Operator Analytics']
  }
];

const capabilityThemes = [
  {
    id: 'movement',
    title: 'Movement & Biomechanical Analysis',
    tag: 'REAL-TIME KINEMATICS & POSE',
    desc: 'Live exercise and movement analytics using video inputs, pose landmarks, phase classification, rep counting, tempo, and velocity analysis under latency constraints on edge tablets.',
    stats: 'Video input • Pose landmarks • Phase classification • Rep & tempo metrics',
    accent: '#38bdf8'
  },
  {
    id: 'openvla',
    title: 'OpenVLA & Physical-World AI',
    tag: 'VISION-LANGUAGE-ACTION // EMBODIED AI',
    desc: 'Multimodal vision-language-action perception integrating OpenVLA and spatial vision models to translate visual scenes into structured physical action policies and robotic control.',
    stats: 'OpenVLA integration • Spatial perception • Scene understanding • Action policies',
    accent: '#e0fb2e'
  },
  {
    id: 'inspection',
    title: 'Defect & Quality Inspection',
    tag: 'MANUFACTURING QUALITY ASSURANCE',
    desc: 'Automated video and image analytics for object detection, assembly verification, and defect inspection with measurable acceptance gates and edge deployment.',
    stats: 'Object detection • Defect classification • Measurable acceptance gates',
    accent: '#38bdf8'
  },
  {
    id: 'edge-iot',
    title: 'Edge Deployment & IoT Integration',
    tag: 'PRODUCT + AI + HARDWARE COORDINATION',
    desc: 'Sensor and data pipelines connecting edge devices, tablets, and IoT communication protocols (including BLE and local device state) into cohesive operational software.',
    stats: 'Tablet workflows • IoT & BLE coordination • Sensor data pipelines',
    accent: '#d7bdf9'
  }
];

export function VisionEdgeShowcaseSection({ onNavigate }: VisionEdgeShowcaseSectionProps) {
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);

  return (
    <section 
      id="vision-edge-showcase-section"
      className="py-20 sm:py-28 bg-[var(--bg-surface-subtle)] border-b border-[var(--border-color)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        {/* Header with Danny's strong opener */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[var(--border-color)]">
          <div className="space-y-3 max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              <span>CORE TRACK 02 // VISION &amp; EDGE AI</span>
            </motion.div>
            
            <MaskedHeading as="h2" className="text-section-display text-[var(--text-primary)] leading-[1.18]">
              From camera feed to operational decision —{' '}
              <span className="font-bold text-[var(--accent-secondary)]">
                on the device, at the edge, or inside the product workflow.
              </span>
            </MaskedHeading>
          </div>

          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] font-normal max-w-md leading-relaxed text-left" delay={0.2}>
            We engineer computer vision systems combining real-time model accuracy, latency optimization, on-device edge execution, and deep application integration—from movement analysis to defect inspection.
          </ScrollText>
        </div>

        {/* Concrete MotiVision-style Proof Pattern: 6-Stage Visual Chain */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left">
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-2">
              <Gauge className="w-4 h-4 text-[#38bdf8]" />
              <span>EXERCISE &amp; MOVEMENT ANALYTICS PROOF PATTERN</span>
            </div>
            <span className="text-[11px] font-mono text-[#e0fb2e]">
              CLICK STAGES TO INSPECT VERIFIED TELEMETRY
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {proofPipeline.map((step, idx) => {
              const isSelected = activePipelineStep === idx;
              const Icon = step.icon;

              return (
                <button
                  key={step.step}
                  onClick={() => setActivePipelineStep(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer flex flex-col justify-between min-h-[150px] ${
                    isSelected
                      ? 'bg-[var(--bg-surface-elevated)] border-[#38bdf8] shadow-md ring-1 ring-[#38bdf8]/40'
                      : 'bg-[var(--bg-surface)] border-[var(--border-color)] hover:border-[var(--border-hover)]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#38bdf8]' : 'text-[var(--text-muted)]'}`}>
                      PHASE {step.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#38bdf8]' : 'text-[var(--text-muted)]'}`} />
                  </div>

                  <div className="space-y-1 mt-2">
                    <div className="text-xs font-display font-bold text-[var(--text-primary)]">
                      {step.name}
                    </div>
                    <div className="text-[10px] text-[var(--text-muted)] font-mono leading-tight">
                      {step.sub}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[var(--border-color)]">
                    <span className="text-[9px] font-mono text-[var(--text-secondary)] line-clamp-1">
                      {step.tech[0]}
                    </span>
                  </div>

                  {isSelected && (
                    <motion.div 
                      layoutId="active-vision-step" 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-[#38bdf8]" 
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Inspector */}
          <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-left space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-[var(--border-color)]">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase text-[#38bdf8] font-bold">
                  STAGE {proofPipeline[activePipelineStep].step} SPECIFICATION
                </span>
                <div className="text-lg font-display font-bold text-[var(--text-primary)]">
                  {proofPipeline[activePipelineStep].name} — {proofPipeline[activePipelineStep].sub}
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {proofPipeline[activePipelineStep].tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[10px] font-mono text-[var(--text-primary)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
              {proofPipeline[activePipelineStep].role}
            </p>
          </div>
        </div>

        {/* 4 Core Capability Themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {capabilityThemes.map((theme, tIdx) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tIdx * 0.1 }}
              className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all flex flex-col justify-between space-y-6 shadow-sm"
            >
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[#38bdf8]">
                  {theme.tag}
                </span>

                <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">
                  {theme.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                  {theme.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] space-y-3">
                <div className="text-[11px] font-mono text-[#e0fb2e]">
                  {theme.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Link to Computer Vision Page with Strong CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--border-color)] text-left">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('/computer-vision')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-md"
            >
              <span>Explore Vision &amp; Edge AI</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>

            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-medium transition-all cursor-pointer"
            >
              <span>Discuss Your AI Architecture</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </button>
          </div>

          <span className="text-xs font-mono text-[var(--text-muted)]">
            TensorFlow • PyTorch • Tablet Workflows • IoT &amp; BLE Coordination
          </span>
        </div>

      </div>
    </section>
  );
}
