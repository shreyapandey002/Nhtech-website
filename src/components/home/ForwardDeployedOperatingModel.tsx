import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Terminal, 
  Users, 
  Cpu, 
  Workflow, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles,
  Server,
  Zap
} from 'lucide-react';
import { RoutePath } from '../../types';
import { MaskedHeading, ScrollText } from '../common/ScrollMotion';

interface ForwardDeployedOperatingModelProps {
  onNavigate: (path: RoutePath) => void;
}

interface FdeStep {
  id: string;
  stepNumber: string;
  label: string;
  subtitle: string;
  whoWeWorkWith: string[];
  engineeringIntervention: string;
  deliverable: string;
  icon: typeof Terminal;
  accent: string;
}

const steps: FdeStep[] = [
  {
    id: 'problem',
    stepNumber: '01',
    label: 'Business Problem',
    subtitle: 'Deconstruct ambiguity & operational failure modes',
    whoWeWorkWith: ['Department Heads', 'Domain Analysts', 'Process Operators'],
    engineeringIntervention: 'We dissect messy manual workflows, unpick legacy business rules, and establish mathematical error and latency budgets.',
    deliverable: 'System Boundary Architecture & Latency Budget',
    icon: Users,
    accent: '#e0fb2e'
  },
  {
    id: 'embedded',
    stepNumber: '02',
    label: 'Embedded Engineers',
    subtitle: 'Engineers inside the problem, not outside',
    whoWeWorkWith: ['Customer Engineering Pod', 'Data Leads', 'Infra SecOps'],
    engineeringIntervention: 'Senior NHTech engineers embed directly in your repos and communication channels, working shoulder-to-shoulder with your engineers.',
    deliverable: 'Unified Sprint Cadence & Security Clearance',
    icon: Terminal,
    accent: '#38bdf8'
  },
  {
    id: 'architecture',
    stepNumber: '03',
    label: 'Model & Architecture',
    subtitle: 'The right model for the problem',
    whoWeWorkWith: ['Enterprise Architecture', 'AI Lead', 'CISO / Risk'],
    engineeringIntervention: 'Model-agnostic evaluation across OpenAI, Anthropic, DeepSeek, SLMs, and open-weights based on accuracy, cost, latency, and privacy.',
    deliverable: 'Benchmark Matrix & Model Routing Engine',
    icon: Cpu,
    accent: '#d7bdf9'
  },
  {
    id: 'prototype',
    stepNumber: '04',
    label: 'Prototype Sprint',
    subtitle: 'Rapid architectural proof with live data',
    whoWeWorkWith: ['Business Stakeholders', 'QA Teams', 'End-Users'],
    engineeringIntervention: 'We stand up functional end-to-end prototypes on realistic data to validate deterministic behavior and user interactions before full scale.',
    deliverable: 'Functional End-to-End Proof of System',
    icon: Zap,
    accent: '#e0fb2e'
  },
  {
    id: 'integration',
    stepNumber: '05',
    label: 'Systems Integration',
    subtitle: 'Connecting to ERPs, databases & workflows',
    whoWeWorkWith: ['Core Systems Owners', 'Database Admins', 'API Gateway Leads'],
    engineeringIntervention: 'Engineering bidirectional microservices into existing enterprise systems: SAP, Salesforce, SQL clusters, and human approval queues.',
    deliverable: 'Hardened Microservices & Human-in-the-Loop Gates',
    icon: Workflow,
    accent: '#38bdf8'
  },
  {
    id: 'production',
    stepNumber: '06',
    label: 'Production System',
    subtitle: '100% Client-owned IP, hardened & audited',
    whoWeWorkWith: ['Site Reliability Engineers', 'Operations Lead', 'Executive Sponsor'],
    engineeringIntervention: 'Complete deployment to your VPC, on-prem clusters, or edge devices. Full code, model weights, and runbooks handed over with zero lock-in.',
    deliverable: 'Production Runtime & 100% IP Handover',
    icon: ShieldCheck,
    accent: '#e0fb2e'
  }
];

export function ForwardDeployedOperatingModel({ onNavigate }: ForwardDeployedOperatingModelProps) {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = steps[activeStepIndex];

  return (
    <section 
      id="fde-operating-model-section"
      className="py-20 sm:py-28 bg-[var(--bg-base)] border-b border-[var(--border-color)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[var(--border-color)]">
          <div className="space-y-3 max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0fb2e]" />
              <span>THE FORWARD DEPLOYED OPERATING MODEL</span>
            </motion.div>
            
            <MaskedHeading as="h2" className="text-section-display text-[var(--text-primary)] leading-[1.18]">
              Bring us the business problem.{' '}
              <span className="font-bold text-[var(--accent-secondary)]">
                We’ll engineer the system.
              </span>
            </MaskedHeading>
          </div>

          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] font-normal max-w-md leading-relaxed text-left" delay={0.2}>
            Forward Deployed Engineering is NHTech&apos;s primary differentiator. We work directly with your domain teams, business stakeholders, and existing infrastructure from initial problem framing through to production operations.
          </ScrollText>
        </div>

        {/* Visual Flow Stages - Desktop Linear Stepper + Mobile Scroll */}
        <div className="space-y-8">
          
          {/* 6-Stage Progress Track */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;
              const Icon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group cursor-pointer flex flex-col justify-between min-h-[120px] ${
                    isActive
                      ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent-secondary)] shadow-md'
                      : 'bg-[var(--bg-surface)] border-[var(--border-color)] hover:border-[var(--border-hover)]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-[#e0fb2e]' : 'text-[var(--text-muted)]'}`}>
                      PHASE {step.stepNumber}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#e0fb2e]' : 'text-[var(--text-muted)] group-hover:text-[var(--text-primary)]'} transition-colors`} />
                  </div>

                  <div className="space-y-1 mt-2">
                    <div className="text-xs sm:text-sm font-display font-bold text-[var(--text-primary)] leading-snug">
                      {step.label}
                    </div>
                    <div className="text-[10px] text-[var(--text-muted)] line-clamp-2 leading-tight">
                      {step.subtitle}
                    </div>
                  </div>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-fde-indicator" 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-[#e0fb2e]" 
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Stage Deep-Dive Card */}
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-sm relative overflow-hidden text-left"
          >
            {/* Background Ambient Glow */}
            <div 
              className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-10"
              style={{ backgroundColor: currentStep.accent }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Core Focus & Intervention */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[#e0fb2e]">
                    PHASE {currentStep.stepNumber} // DEPLOYED EXECUTION
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {currentStep.label}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] tracking-tight">
                  {currentStep.subtitle}
                </h3>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                  {currentStep.engineeringIntervention}
                </p>

                {/* Who We Work With */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                    WHO NHTECH ENGINEERS WORK DIRECTLY WITH:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentStep.whoWeWorkWith.map((persona, pIdx) => (
                      <span 
                        key={pIdx} 
                        className="px-3 py-1 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-primary)]"
                      >
                        {persona}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Production Deliverable & Nav */}
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-5">
                <div className="text-xs font-mono text-[#e0fb2e] uppercase font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e0fb2e]" />
                  <span>PHASE ARTIFACT &amp; GUARANTEE</span>
                </div>

                <div className="space-y-2">
                  <div className="text-base font-display font-bold text-[var(--text-primary)]">
                    {currentStep.deliverable}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Delivered directly into your infrastructure with automated CI/CD checks, deterministic schema validation, and zero proprietary lock-in.
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('/fde')}
                    className="inline-flex items-center gap-2 text-xs font-display font-bold text-[var(--text-primary)] hover:text-[#e0fb2e] transition-colors cursor-pointer"
                  >
                    <span>Discuss an FDE Engagement</span>
                    <ArrowRight className="w-3.5 h-3.5 text-current" />
                  </button>

                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    Step {activeStepIndex + 1} of 6
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
