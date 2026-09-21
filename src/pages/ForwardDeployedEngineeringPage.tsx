import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Users2, 
  Lock, 
  FileText, 
  Zap, 
  RefreshCw, 
  Sliders, 
  Building, 
  Server,
  ArrowUpRight
} from 'lucide-react';
import { RoutePath } from '../types';
import { brandConfig } from '../config/brand';
import { caseStudies } from '../data/caseStudies';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { ForwardDeployedOperatingModel } from '../components/home/ForwardDeployedOperatingModel';
import { AgenticExecutionFlowSection } from '../components/home/AgenticExecutionFlowSection';

interface ForwardDeployedEngineeringPageProps {
  onNavigate: (path: RoutePath) => void;
  onSelectCaseStudy?: (slug: string) => void;
}

export function ForwardDeployedEngineeringPage({ 
  onNavigate, 
  onSelectCaseStudy 
}: ForwardDeployedEngineeringPageProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [deploymentTarget, setDeploymentTarget] = useState<'vpc' | 'on-prem' | 'edge' | 'cloud'>('vpc');

  const fdeCaseStudies = caseStudies.filter(cs => cs.track === 'fde' || cs.id === 'enterprise-workflow-intelligence' || cs.id === 'document-intelligence');

  const fdeLifecycle = [
    {
      title: 'Problem Framing & Operational Discovery',
      kicker: 'DAYS 01 - 10',
      description: 'Senior forward-deployed engineers sit directly with your operators, analysts, and tech leads. We deconstruct complex manual processes, map data flows, identify failure modes, and define strict acceptance criteria.',
      deliverables: ['System Boundary Architecture', 'Data Feasibility Audit', 'Deterministic Error & Latency Budget']
    },
    {
      title: 'Model-Agnostic Layer Selection & Evaluation',
      kicker: 'DAYS 11 - 20',
      description: 'We test across open-weight Small Language Models (SLMs) and frontier reasoning models (OpenAI, Claude, DeepSeek). We evaluate precision, token throughput, and hosting requirements to select the exact intelligence layer.',
      deliverables: ['Empirical Benchmark Matrix', 'Fine-Tuned Quantized Backbones', 'Fallback Routing Policies']
    },
    {
      title: 'Production State Machines & System Integration',
      kicker: 'DAYS 21 - 50',
      description: 'We engineer deterministic state engines around probabilistic models: structured JSON schemas, citation grounding, audit loggers, human sign-off gates, and bi-directional connectors into your existing ERP/SQL databases.',
      deliverables: ['Production Async Microservices', 'Human Triage Workbenches', 'Immutable Audit & Telemetry']
    },
    {
      title: 'Hardening, Deployment & 100% IP Handover',
      kicker: 'DAYS 51 - 60+',
      description: 'We deploy into your infrastructure (Customer VPC, cloud ML, on-premise clusters, or edge devices). Full documentation, automated CI/CD pipelines, and clean codebases are handed over with zero proprietary vendor lock-in.',
      deliverables: ['Containerized Infrastructure-as-Code', 'Operational Runbooks', 'Complete Code & Model Weights IP']
    }
  ];

  const pillars = [
    {
      title: 'Agentic Systems & Deterministic State Machines',
      desc: 'We wrap AI models in deterministic state machines with strict schema validation, human approval gates, and error boundaries.',
      icon: Terminal,
      accent: '#e0fb2e'
    },
    {
      title: 'SLMs to Frontier Models Routing',
      desc: 'From sub-10ms quantized models executing locally on private GPUs to frontier reasoning models for complex multi-hop decomposition.',
      icon: Cpu,
      accent: '#38bdf8'
    },
    {
      title: 'Document & Knowledge Intelligence',
      desc: 'Spatial OCR, bounding-box contract parsing, and hybrid vector/graph indexing for multi-hundred page documents with exact citation verification.',
      icon: FileText,
      accent: '#d7bdf9'
    },
    {
      title: 'AI-Powered Products & Human-in-the-Loop UX',
      desc: 'Intuitive operational workbenches allowing human domain experts to review, edit, and supervise automated pipelines in seconds.',
      icon: Users2,
      accent: '#e0fb2e'
    },
    {
      title: 'Deep System Integration with Existing Enterprise Stack',
      desc: 'We integrate with your real systems: writing rock-solid connectors for SAP, Oracle, Postgres, SFTP, and proprietary legacy databases.',
      icon: Layers,
      accent: '#38bdf8'
    },
    {
      title: 'Governance, Observability & Auditing',
      desc: 'Comprehensive observability frameworks tracking token latency, model drift, human override rates, and immutable audit logs for compliance.',
      icon: ShieldCheck,
      accent: '#d7bdf9'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-[var(--border-color)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <div className="space-y-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[#e0fb2e]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
              <span>PRIMARY CORE POSITIONING // FORWARD DEPLOYED ENGINEERING</span>
            </motion.div>

            <MaskedHeading as="h1" className="text-hero-display text-[var(--text-primary)]">
              Bring us the business problem.{' '}
              <span className="font-editorial italic font-normal text-[var(--accent-secondary)]">
                We’ll engineer the system.
              </span>
            </MaskedHeading>

            <ScrollText className="text-base sm:text-xl text-[var(--text-secondary)] font-normal max-w-3xl leading-relaxed">
              Forward Deployed Engineering embedded alongside your team. Problem framing → architecture → prototype → integration → production. Hardened state machines, legacy system connectors, and human-in-the-loop governance deployed within your infrastructure.
            </ScrollText>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-md"
            >
              <span>Deploy an FDE Pod</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>

            <button
              onClick={() => onNavigate('/work')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium transition-all cursor-pointer"
            >
              <span>View Production Case Studies</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-current" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. THE FDE PHILOSOPHY: EMBEDDED PODS VS TRADITIONAL CONSULTING */}
      <section className="py-20 sm:py-28 bg-[var(--bg-surface-subtle)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono text-[#e0fb2e] uppercase tracking-wider">
              DELIVERY MODEL
            </div>
            <MaskedHeading as="h2" className="text-section-display text-[var(--text-primary)]">
              Engineers who write code, not consultants who make slides.
            </MaskedHeading>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
              Traditional enterprise consulting hands over strategy reports and unmaintained prototypes. NHTech forward-deployed engineering pods live in your repository, integrate your databases, and ship production systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] opacity-70 space-y-6">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                TRADITIONAL AGENCY / CONSULTING
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Hand-wavy strategy presentations with no production implementation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Toy demos built on fragile wrappers that break on real-world edge cases.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Vendor lock-in through proprietary cloud platforms and closed black boxes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Consultants vanish before live traffic and edge errors occur.</span>
                </li>
              </ul>
            </div>

            {/* The NHTech FDE Way */}
            <div className="p-8 rounded-3xl bg-[var(--bg-surface)] border-2 border-[var(--border-hover)] space-y-6 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono text-[#e0fb2e] font-bold uppercase tracking-wider">
                  NHTECH FORWARD DEPLOYED ENGINEERING
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#e0fb2e]/10 text-[#e0fb2e]">
                  EMBEDDED POD
                </span>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-[var(--text-primary)]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#e0fb2e] shrink-0 mt-0.5" />
                  <span>Senior engineers write production-ready code alongside your developers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#e0fb2e] shrink-0 mt-0.5" />
                  <span>Deterministic guardrails, state machines, and human review workbenches.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#e0fb2e] shrink-0 mt-0.5" />
                  <span>Deployed inside your VPC or on-prem hardware with 100% IP ownership.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#e0fb2e] shrink-0 mt-0.5" />
                  <span>We stay through production load, telemetry monitoring, and staff training.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 2.5 INTERACTIVE OPERATING MODEL: PROBLEM -> ARCHITECTURE -> PROTOTYPE -> INTEGRATION -> PRODUCTION */}
      <ForwardDeployedOperatingModel onNavigate={onNavigate} />

      {/* 3. SIX CORE TECHNICAL PILLARS */}
      <section className="py-24 sm:py-32 bg-[var(--bg-base)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono text-[#e0fb2e] uppercase tracking-wider">
              TECHNICAL CAPABILITIES
            </div>
            <MaskedHeading as="h2" className="text-section-display text-[var(--text-primary)]">
              Engineered for complexity. Built for reliability.
            </MaskedHeading>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
              Every FDE engagement brings deep capabilities in applied AI, distributed systems, and product engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all space-y-4 shadow-sm"
                >
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center border border-[var(--border-color)] bg-[var(--bg-surface-elevated)]"
                    style={{ color: pillar.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[var(--text-primary)]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE LIFECYCLE WALKTHROUGH */}
      <section className="py-24 sm:py-32 bg-[var(--bg-surface-subtle)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono text-[#e0fb2e] uppercase tracking-wider">
              METHODOLOGY
            </div>
            <MaskedHeading as="h2" className="text-section-display text-[var(--text-primary)]">
              The 60-Day Forward Deployed Sprint
            </MaskedHeading>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal">
              How our embedded engineering pods move from problem exploration to a hardened, operational system.
            </p>
          </div>

          {/* Interactive Step Navigator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Steps List */}
            <div className="lg:col-span-5 space-y-3">
              {fdeLifecycle.map((stage, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setActiveStep(sIdx)}
                  className={`w-full text-left p-5 rounded-2xl transition-all cursor-pointer border ${
                    activeStep === sIdx
                      ? 'bg-[var(--bg-surface)] border-[var(--accent-secondary)] shadow-md'
                      : 'bg-[var(--bg-surface-subtle)] border-[var(--border-color)] hover:border-[var(--border-hover)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#e0fb2e] font-bold">
                      {stage.kicker}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      STAGE 0{sIdx + 1}
                    </span>
                  </div>
                  <div className="text-sm font-display font-bold text-[var(--text-primary)] mt-1">
                    {stage.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Step Details Panel */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
                <span className="text-xs font-mono text-[#e0fb2e] font-bold">
                  {fdeLifecycle[activeStep].kicker} // STAGE 0{activeStep + 1}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">Embedded Pod Cadence</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-[var(--text-primary)]">
                {fdeLifecycle[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                {fdeLifecycle[activeStep].description}
              </p>

              <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  CONCRETE STAGE DELIVERABLES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {fdeLifecycle[activeStep].deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e0fb2e] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. DEPLOYMENT CAPABILITIES (VPC, ON-PREM, AIR-GAP) */}
      <section className="py-20 sm:py-28 bg-[var(--bg-base)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono text-[#e0fb2e] uppercase tracking-wider">
              DEPLOYMENT CAPABILITY
            </div>
            <MaskedHeading as="h2" className="text-section-display text-[var(--text-primary)]">
              Infrastructure you control. Deployment flexibility.
            </MaskedHeading>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal">
              We deploy systems where your security and compliance policies dictate. Whether enterprise AWS/GCP/Azure VPCs, private cloud, on-premise hardware, or edge runtimes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                id: 'vpc',
                title: 'Enterprise VPC',
                desc: 'Deployed directly into your AWS, GCP, or Azure VPC with private endpoints and IAM role isolation.'
              },
              {
                id: 'on-prem',
                title: 'On-Premise GPU & Clusters',
                desc: 'Bare-metal Kubernetes and containerized Docker runtimes executing directly on your internal hardware.'
              },
              {
                id: 'edge',
                title: 'On-Device & Edge Execution',
                desc: 'Localized model inference on commercial tablets, industrial edge compute, or mobile devices.'
              },
              {
                id: 'hybrid',
                title: 'Hybrid Edge / Cloud',
                desc: 'Sub-15ms local SLMs on device with asynchronous encrypted sync to central enterprise data stores.'
              }
            ].map((target) => (
              <div
                key={target.id}
                className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all space-y-2"
              >
                <div className="text-xs font-mono text-[#e0fb2e] font-bold">
                  {target.title}
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {target.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5.5 ENTERPRISE GOVERNANCE, OBSERVABILITY & STATE MACHINE WORKBENCH */}
      <AgenticExecutionFlowSection onNavigate={onNavigate} />

      {/* 6. RELATED CASE STUDIES ON THIS TRACK */}
      <section className="py-20 sm:py-28 bg-[var(--bg-surface-subtle)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#e0fb2e] uppercase tracking-wider">
                PROVEN IMPACT
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]">
                Selected Forward Deployed Systems
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/work')}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-primary)] hover:text-[#e0fb2e] transition-colors cursor-pointer"
            >
              <span>View all case studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fdeCaseStudies.slice(0, 2).map((cs) => (
              <div
                key={cs.id}
                onClick={() => onSelectCaseStudy ? onSelectCaseStudy(cs.slug) : onNavigate('/work')}
                className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all cursor-pointer space-y-4 group shadow-sm"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span>{cs.clientName || cs.clientAnonymousName}</span>
                  <span className="text-[#e0fb2e] font-bold">Track 01</span>
                </div>
                <h3 className="text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-[#e0fb2e] transition-colors">
                  {cs.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                  {cs.systemDesigned}
                </p>
                <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIMAX CTA */}
      <section className="py-24 sm:py-32 bg-[var(--bg-base)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[#e0fb2e]">
            <span>ENGAGE NHTECH POD</span>
          </div>

          <MaskedHeading as="h2" className="text-3xl sm:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight">
            Have a complex business problem?{' '}
            <span className="font-editorial italic font-normal text-[var(--accent-secondary)]">
              Deploy an engineering pod.
            </span>
          </MaskedHeading>

          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] font-normal max-w-xl mx-auto leading-relaxed">
            Let&apos;s evaluate your problem definition, technical feasibility, and deployment parameters. We can have senior forward-deployed engineers working alongside your team within weeks.
          </ScrollText>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-lg"
            >
              <span>Schedule Architecture Session</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
