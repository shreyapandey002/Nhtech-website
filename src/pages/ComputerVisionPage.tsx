import { useState } from 'react';
import { RoutePath } from '../types';
import { WorldCanvas } from '../components/common/WorldCanvas';
import { SpatialPageHeader } from '../components/common/SpatialPageHeader';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { 
  Eye, 
  Cpu, 
  Activity, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Camera, 
  Gauge, 
  Tablet, 
  CheckCircle2, 
  Sliders, 
  Radio, 
  Scan, 
  Wrench, 
  Zap, 
  Database,
  Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ComputerVisionPageProps {
  onNavigate: (path: RoutePath) => void;
}

// Concrete MotiVision-style Proof Pattern: 6-stage chain
const kinematicProofStages = [
  {
    step: '01',
    title: 'Video Input',
    tagline: 'OPTICAL INGESTION',
    icon: Camera,
    accent: '#38bdf8',
    summary: 'Optical video streams ingested directly from tablet cameras, mobile sensors, or optical devices under variable ambient conditions.',
    details: [
      'Camera sensor frame buffering',
      'Adaptive exposure and lighting handling',
      'Real-time frame ingestion without frame drops',
      'Direct integration with mobile and tablet camera APIs'
    ],
    metric: 'Real-time video feed'
  },
  {
    step: '02',
    title: 'Pose Landmarks',
    tagline: 'SPATIAL KEYPOINT TRACKING',
    icon: Scan,
    accent: '#e0fb2e',
    summary: 'High-precision spatial extraction of anatomical landmarks and keypoints across successive video frames in real time.',
    details: [
      'Joint coordinate identification across frames',
      'Spatial normalization to account for camera angles',
      'Lightweight convolutional and vision backbones',
      'Multi-joint spatial orientation mapping'
    ],
    metric: 'Spatial keypoint coordinates'
  },
  {
    step: '03',
    title: 'Phase Classification',
    tagline: 'TEMPORAL STATE MODELING',
    icon: Activity,
    accent: '#d7bdf9',
    summary: 'Temporal modeling that identifies movement states—such as eccentric, isometric, and concentric transitions—over continuous frames.',
    details: [
      'State-machine transitions over time-series data',
      'Segmentation of continuous movement into discrete phases',
      'Noise filtering to reject false starts and tremors',
      'Temporal activity recognition algorithms'
    ],
    metric: 'Phase transition triggers'
  },
  {
    step: '04',
    title: 'Rep / Tempo / Velocity',
    tagline: 'BIOMECHANICAL METRIC EXTRACTION',
    icon: Gauge,
    accent: '#38bdf8',
    summary: 'Deterministic computation of repetitions, cadence, concentric/eccentric tempo splits, and velocity curves directly on-device.',
    details: [
      'Accurate repetition counting with boundary verification',
      'Cadence and tempo timing calculations',
      'Bar path and displacement velocity curves',
      'Instant feedback on form deviation thresholds'
    ],
    metric: 'Rep counts, tempo & velocity'
  },
  {
    step: '05',
    title: 'Edge Device',
    tagline: 'LOCAL RUNTIME EXECUTION',
    icon: Cpu,
    accent: '#e0fb2e',
    summary: 'Executing optimized models on commercial tablets and edge hardware under strict latency constraints without relying on cloud roundtrips.',
    details: [
      'Optimized PyTorch/TensorFlow runtimes compiled for mobile/edge',
      'Zero reliance on continuous cloud connectivity during active sessions',
      'Local SQLite caching of high-frequency kinematic records',
      'Thermal and battery efficiency tuning for tablet hardware'
    ],
    metric: 'Low-latency local inference'
  },
  {
    step: '06',
    title: 'Coach Dashboard',
    tagline: 'OPERATOR TELEMETRY & BLE SYNC',
    icon: Tablet,
    accent: '#d7bdf9',
    summary: 'Actionable real-time feedback delivered to coaches and trainers, coordinated with BLE peripheral onboarding and cloud session syncing.',
    details: [
      'Live feedback interfaces with form deviation alerts',
      'BLE hardware peripheral and sensor coordination',
      'Asynchronous session telemetry upload when network is available',
      'Historical athlete progress and compliance analytics'
    ],
    metric: 'Instant coach telemetry & review'
  }
];

// Defect & Quality Inspection Pattern
const defectInspectionStages = [
  {
    step: '01',
    title: 'High-Res Optical Intake',
    desc: 'Capturing optical imagery of manufactured components or surface areas under controlled inspection illumination.'
  },
  {
    step: '02',
    title: 'Object Detection & Segmentation',
    desc: 'Computer vision pipelines segmenting part boundaries, surface regions, and identifying microscopic anomalies or assembly misalignments.'
  },
  {
    step: '03',
    title: 'Quality Tolerance Evaluation',
    desc: 'Deterministic evaluation against client quality tolerance gates and human-labeled defect ground truth.'
  },
  {
    step: '04',
    title: 'Edge Actuation & Operator Alert',
    desc: 'Local edge signal dispatching reject flags and displaying inspection clip replays on operator station monitors.'
  }
];

// 8 Knowledge-Base Backed Capabilities
const visionCapabilities = [
  {
    id: 'video-analytics',
    title: 'Video & Image Analytics',
    tag: 'REAL-TIME & BATCH',
    icon: Eye,
    accent: '#38bdf8',
    desc: 'Real-time and batch video analysis pipelines processing optical feeds, extracting relevant frames, and applying visual pattern recognition to complex domain problems.'
  },
  {
    id: 'object-detection',
    title: 'Object Detection & Tracking',
    tag: 'SPATIAL EXTRACTION',
    icon: Scan,
    accent: '#e0fb2e',
    desc: 'Locating and classifying objects, parts, tools, or physical entities across video frames with spatial bounding boxes and boundary segmentation.'
  },
  {
    id: 'openvla-robotics',
    title: 'OpenVLA & Physical-World AI',
    tag: 'VISION-LANGUAGE-ACTION',
    icon: Cpu,
    accent: '#e0fb2e',
    desc: 'Multimodal vision-language-action perception integrating OpenVLA and spatial vision models to translate visual scenes into actionable physical policies and robotic control.'
  },
  {
    id: 'defect-inspection',
    title: 'Defect & Quality Inspection',
    tag: 'MANUFACTURING QA',
    icon: ShieldCheck,
    accent: '#d7bdf9',
    desc: 'Automated surface anomaly detection, assembly verification, and quality tolerance evaluation to identify defects early with measurable acceptance gates.'
  },
  {
    id: 'movement-activity',
    title: 'Movement & Activity Analysis',
    tag: 'TEMPORAL KINEMATICS',
    icon: Activity,
    accent: '#38bdf8',
    desc: 'Tracking human motion, exercise kinetics, and physical activities through pose landmarks, temporal phase classification, and cadence computation.'
  },
  {
    id: 'edge-deployment',
    title: 'Edge AI Deployment',
    tag: 'ON-DEVICE COMPUTING',
    icon: Cpu,
    accent: '#e0fb2e',
    desc: 'Packaging and deploying computer vision models onto commercial tablets, industrial edge compute, or localized servers under constrained resources.'
  },
  {
    id: 'tablets-workflows',
    title: 'Tablets & Edge-Device Workflows',
    tag: 'FIELD OPERATOR UIS',
    icon: Smartphone,
    accent: '#d7bdf9',
    desc: 'Complete client applications designed for tablets and mobile devices featuring offline data handling, local SQLite persistence, and touch-optimized controls.'
  },
  {
    id: 'iot-sensor-pipelines',
    title: 'IoT & Sensor Pipelines',
    tag: 'HARDWARE COORDINATION',
    icon: Radio,
    accent: '#38bdf8',
    desc: 'Ingestion pipelines connecting physical sensors, BLE device onboarding flows, and hardware communication protocols into a unified software system.'
  },
  {
    id: 'eval-latency',
    title: 'Model Evaluation & Latency Optimization',
    tag: 'ACCEPTANCE METRICS',
    icon: Gauge,
    accent: '#e0fb2e',
    desc: 'Benchmarking accuracy against human-labeled ground truth, profiling frame processing times, and optimizing pipelines to meet strict business latency constraints.'
  }
];

// Tech stack items directly from Knowledge Base Section 10
const visionTechStack = [
  { category: 'AI / ML Frameworks', items: ['PyTorch', 'TensorFlow', 'OpenVLA', 'Vision-Language-Action', 'Keras', 'Scikit-learn', 'Custom DNNs', 'Computer Vision Pipelines'] },
  { category: 'Edge & Mobile Runtimes', items: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)', 'SQLite Local DB'] },
  { category: 'Backend & APIs', items: ['Python', 'FastAPI', 'WebSocket Interfaces', 'Node.js / Express', 'Redis Task Queues'] },
  { category: 'Protocols & Hardware', items: ['BLE Device Onboarding', 'Sensor Data Streams', 'Camera Sensor Interfaces', 'IoT Communication'] }
];

export function ComputerVisionPage({ onNavigate }: ComputerVisionPageProps) {
  const [activeKinematicStep, setActiveKinematicStep] = useState<number>(0);
  const currentStep = kinematicProofStages[activeKinematicStep];

  return (
    <div id="computer-vision-chapter" className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] space-y-24">
      {/* 0. Ambient Kinematic & Landmark Canvas */}
      <WorldCanvas mode="vision" opacity={0.35} />

      {/* 1. Spatial Header - Computer Vision & Edge AI */}
      <SpatialPageHeader
        tag="CORE TRACK 02 // COMPUTER VISION & EDGE AI"
        title="Computer vision and"
        titleAccent="real-time edge intelligence."
        subtitle="Prototyping and productionizing vision systems that combine model accuracy, edge runtime, application integration, and measurable acceptance gates—across movement analysis, quality inspection, and IoT coordination."
        ctaText="Discuss Vision Engineering"
        ctaRoute="/contact"
        secondaryCtaText="Explore Case Studies"
        secondaryCtaRoute="/work"
        onNavigate={onNavigate}
        telemetryItems={[
          { label: 'CAPABILITY', value: 'VIDEO & IMAGE ANALYTICS' },
          { label: 'RUNTIMES', value: 'TABLETS & EDGE DEVICES' },
          { label: 'INTEGRATION', value: 'SENSOR & IOT PIPELINES' },
        ]}
      />

      {/* 2. Concrete Proof Pattern: Exercise & Movement Analytics (MotiVision-Style Pattern) */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
          <div>
            <div className="text-xs font-mono text-[#38bdf8] uppercase font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              <span>PROOF PATTERN // REAL-TIME KINEMATICS &amp; EXERCISE ANALYTICS</span>
            </div>
            <MaskedHeading as="h2" className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
              Video Input → Pose Landmarks → Phase Classification → Rep / Tempo / Velocity → Edge Device → Coach Dashboard
            </MaskedHeading>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            CLICK STAGES TO INSPECT TECHNICAL IMPLEMENTATION
          </span>
        </div>

        {/* 6-Stage Progression Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {kinematicProofStages.map((stage, idx) => {
            const isSelected = activeKinematicStep === idx;
            const Icon = stage.icon;

            return (
              <button
                key={stage.step}
                onClick={() => setActiveKinematicStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer flex flex-col justify-between min-h-[140px] ${
                  isSelected
                    ? 'bg-[var(--bg-surface-elevated)] border-[#38bdf8] shadow-md ring-1 ring-[#38bdf8]/40'
                    : 'bg-[var(--bg-surface)] border-[var(--border-color)] hover:border-[var(--border-hover)]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#38bdf8]' : 'text-[var(--text-muted)]'}`}>
                    STEP {stage.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#38bdf8]' : 'text-[var(--text-muted)]'}`} />
                </div>

                <div className="space-y-0.5 mt-2">
                  <div className="text-xs font-display font-bold text-[var(--text-primary)]">
                    {stage.title}
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono leading-tight">
                    {stage.tagline}
                  </div>
                </div>

                <div className="pt-2 border-t border-[var(--border-color)]">
                  <span className="text-[9px] font-mono text-[var(--text-secondary)] line-clamp-1">
                    {stage.metric}
                  </span>
                </div>

                {isSelected && (
                  <motion.div 
                    layoutId="active-kinematic-step-bar" 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#38bdf8]" 
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-sm space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold" style={{ color: currentStep.accent }}>
                  STAGE {currentStep.step} // {currentStep.tagline}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)]">
                  {currentStep.title}
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-primary)] px-3 py-1.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>VERIFIED PROOF PATTERN</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
              {currentStep.summary}
            </p>

            <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-3">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                TECHNICAL CAPABILITY &amp; IMPLEMENTATION
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {currentStep.details.map((detail, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-[var(--text-primary)]">Item 0{idx + 1}</span>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentStep.accent }} />
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] font-normal leading-snug">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 3. Second Proof Pattern: Defect & Quality Inspection (Manufacturing QA) */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
          <div>
            <div className="text-xs font-mono text-[#e0fb2e] uppercase font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
              <span>PROOF PATTERN // DEFECT &amp; QUALITY INSPECTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
              Industrial Image Analytics &amp; Tolerance Evaluation
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            MEASURABLE ACCEPTANCE GATES
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {defectInspectionStages.map((stage, idx) => (
            <div 
              key={stage.step}
              className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#e0fb2e] font-bold">PHASE {stage.step}</span>
                <Scan className="w-4 h-4 text-[var(--text-muted)]" />
              </div>
              <h4 className="text-sm font-display font-bold text-[var(--text-primary)]">
                {stage.title}
              </h4>
              <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Complete Vision & Edge AI Capabilities Grid */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-10 text-left">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono text-[var(--accent-secondary)] uppercase">CORE CAPABILITIES</span>
          <MaskedHeading as="h2" className="text-3xl sm:text-4xl font-display font-bold text-[var(--text-primary)] tracking-tight">
            Supported Computer Vision &amp; Edge Capabilities
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
            Every capability is backed by production experience in our knowledge base, tested with domain datasets, and optimized for real-world constraints.
          </ScrollText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visionCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
                      <Icon className="w-4 h-4" style={{ color: cap.accent }} />
                    </div>
                    <span className="text-[10px] font-mono font-bold" style={{ color: cap.accent }}>
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-[var(--text-primary)]">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. Supported Technology Stack (Directly from KB Section 10) */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="pb-4 border-b border-[var(--border-color)]">
          <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d7bdf9]" />
            <span>TECHNOLOGY STACK // VERIFIED IN KNOWLEDGE BASE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
            Vision &amp; Edge Engineering Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visionTechStack.map((stack) => (
            <div 
              key={stack.category}
              className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4"
            >
              <div className="text-xs font-mono font-bold text-[#e0fb2e] uppercase">
                {stack.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {stack.items.map((item) => (
                  <span 
                    key={item}
                    className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-[11px] font-mono text-[var(--text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Engagement Models for Vision (Pure Prototyping / Dedicated Pod / Rescue) */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="pb-4 border-b border-[var(--border-color)]">
          <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
            <span>HOW WE ENGAGE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
            Vision Prototyping &amp; Production Models
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Pure Prototyping (PoC)',
              timeline: '1–2 Sprints',
              desc: 'Testing technical feasibility before committing large budgets. We build a functional proof-of-concept tested against real domain video or sensor datasets with explicit acceptance criteria.',
              accent: '#38bdf8'
            },
            {
              title: 'Dedicated Vision / ML Pod',
              timeline: 'Multi-Month Execution',
              desc: 'Cross-functional engineering team (ML engineers, mobile/edge developers, backend API architects) embedding with your team to take the vision pipeline from prototype to enterprise production.',
              accent: '#e0fb2e'
            },
            {
              title: 'Technical Rescue Sprint',
              timeline: 'Rapid Diagnostic',
              desc: 'For existing computer vision projects struggling with high latency, false positives, unstable frame processing, or edge hardware bottlenecks. We audit code, profile models, and eliminate failure points.',
              accent: '#d7bdf9'
            }
          ].map((model) => (
            <div 
              key={model.title}
              className="p-7 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-surface-elevated)]" style={{ color: model.accent }}>
                    {model.timeline}
                  </span>
                  <Wrench className="w-4 h-4 text-[var(--text-muted)]" />
                </div>
                <h3 className="text-lg font-display font-bold text-[var(--text-primary)]">
                  {model.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
                  {model.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 sm:p-14 text-center space-y-6 shadow-xl"
        >
          <span className="text-xs font-mono text-[#38bdf8] uppercase font-bold tracking-widest">
            VISION ENGINEERING CONSULTATION
          </span>
          <MaskedHeading as="h2" className="text-3xl sm:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight max-w-3xl mx-auto">
            Ready to prototype or productionize a computer vision pipeline?
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
            Our forward-deployed engineers evaluate model feasibility, design test datasets, optimize latency for target edge devices, and build cohesive operator workflows.
          </ScrollText>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-xl"
            >
              <span>Schedule Vision Feasibility Discussion</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
