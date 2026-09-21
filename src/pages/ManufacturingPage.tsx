import { useState } from 'react';
import { RoutePath } from '../types';
import { WorldCanvas } from '../components/common/WorldCanvas';
import { SpatialPageHeader } from '../components/common/SpatialPageHeader';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { Factory, Eye, Cpu, ShieldCheck, ArrowRight, ArrowUpRight, Zap, Server, Activity, Wrench, Crosshair, HardHat } from 'lucide-react';
import { motion } from 'motion/react';

interface ManufacturingPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function ManufacturingPage({ onNavigate }: ManufacturingPageProps) {
  const [activeTopologyNode, setActiveTopologyNode] = useState<number>(1);

  const plantNodes = [
    {
      num: '01',
      title: 'Shop-Floor Optical Feeds',
      role: 'High-Speed Optics',
      desc: 'Interfacing directly with GigE industrial cameras and optical sensors over local Ethernet buses with deterministic frame capture.',
      accent: '#e0fb2e'
    },
    {
      num: '02',
      title: 'Local Edge IPC Inference',
      role: 'TensorRT Acceleration',
      desc: 'Executing quantized visual classification models on on-premise industrial PCs and NVIDIA Jetson nodes with zero external internet dependencies.',
      accent: '#38bdf8'
    },
    {
      num: '03',
      title: 'Operator Verification Station',
      role: 'Human Sign-off Gate',
      desc: 'Ruggedized tablet consoles for factory floor engineers to review flagged anomalies, inspect bounding-box diffs, and authorize production line overrides.',
      accent: '#d7bdf9'
    },
    {
      num: '04',
      title: 'Plant Historian & ERP Sync',
      role: 'Asynchronous Persistence',
      desc: 'Bridging inspected part tallies and yield statistics asynchronously to SAP/Siemens plant databases over secure internal IPC queues.',
      accent: '#ff4b3e'
    }
  ];

  return (
    <div id="manufacturing-chapter" className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] space-y-24">
      {/* 0. Ambient Brutalist Manufacturing & Laser Scan Canvas */}
      <WorldCanvas mode="manufacturing" opacity={0.4} />

      {/* 1. Spatial Header */}
      <SpatialPageHeader
        tag="INDUSTRIAL AI ENGINEERING — GERMANY, NETHERLANDS, SWITZERLAND & NORTHERN EUROPE"
        title="AI engineered for the"
        titleAccent="physical plant."
        subtitle="NHTech combines high-speed computer vision, edge AI runtimes, sensor telemetry engineering, and deterministic factory software to build dependable intelligence for industrial manufacturing operations."
        ctaText="Discuss Industrial Deployment"
        ctaRoute="/contact"
        secondaryCtaText="Inspect Physical Work"
        secondaryCtaRoute="/work"
        onNavigate={onNavigate}
        telemetryItems={[
          { label: 'SOVEREIGNTY', value: '100% AIR-GAPPED IPC' },
          { label: 'HARDWARE', value: 'NVIDIA JETSON / IPC' },
          { label: 'SECURITY', value: 'ZERO CAD / YIELD LEAKS' },
        ]}
      />

      {/* 2. Interactive Plant Topology Stage */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
          <div>
            <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold">
              PLANT TOPOLOGY // AIR-GAPPED RUNTIME
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
              End-to-End Shop Floor Architecture
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)]">
            CLICK PIPELINE STAGES TO INSPECT ISOLATION CONTROLS
          </div>
        </div>

        {/* 4 Pipeline Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {plantNodes.map((node, idx) => (
            <button
              key={node.num}
              onClick={() => setActiveTopologyNode(idx)}
              className={`p-5 rounded-2xl text-left font-mono transition-all cursor-pointer border ${
                activeTopologyNode === idx
                  ? 'bg-[var(--bg-surface)] border-[var(--border-hover)] shadow-md ring-1 ring-[#e0fb2e]/40'
                  : 'bg-[var(--bg-surface-subtle)] border-[var(--border-color)] hover:border-[var(--border-hover)]'
              }`}
            >
              <div className="text-xs font-bold" style={{ color: node.accent }}>
                {node.num} // {node.role}
              </div>
              <div className="text-sm font-display font-bold text-[var(--text-primary)] mt-1">
                {node.title}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Stage Deep Inspector */}
        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 sm:p-12 shadow-lg space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono" style={{ color: plantNodes[activeTopologyNode].accent }}>
            <span>TOPOLOGY STAGE {plantNodes[activeTopologyNode].num}</span>
            <span>▸▸</span>
            <span>{plantNodes[activeTopologyNode].role}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-display font-bold text-[var(--text-primary)]">
            {plantNodes[activeTopologyNode].title}
          </h3>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-4xl font-sans">
            {plantNodes[activeTopologyNode].desc}
          </p>

          <div className="p-4 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#e0fb2e]" />
              <span className="text-[var(--text-primary)] font-medium">COMPLIANCE: AIR-GAPPED ON-PREMISE FACTORY NETWORK</span>
            </div>
            <span className="text-[var(--text-muted)]">COMPATIBLE WITH SIEMENS, SAP &amp; INDUSTRIAL IPC FLEETS</span>
          </div>
        </div>
      </section>

      {/* 3. Core Manufacturing Engineering Systems */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-10 text-left">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono text-[var(--accent-secondary)] uppercase">PLANT CAPABILITIES</span>
          <MaskedHeading as="h2" className="text-3xl sm:text-4xl font-display font-bold text-[var(--text-primary)] tracking-tight">
            Industrial systems we engineer in practice.
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
            Engineering capabilities designed for deterministic factory floors, low latency budgets, and zero cloud leaks.
          </ScrollText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Edge Computer Vision & Defect Inspection',
              desc: 'Deploying optimized neural networks (TensorRT / ONNX) on local industrial PCs and cameras to classify part anomalies with zero cloud roundtrips.',
              tag: 'ON-DEVICE VISION'
            },
            {
              title: 'Sensor Telemetry & Temporal Anomaly Detection',
              desc: 'Streaming high-frequency vibrational, thermal, and acoustic sensor logs into deep neural models to detect machine degradation early.',
              tag: 'TELEMETRY INTELLIGENCE'
            },
            {
              title: 'Operator Verification Tablet Consoles',
              desc: 'Intuitive tablet workbenches for floor engineers to inspect flagged parts, annotate edge cases, and calibrate model thresholds.',
              tag: 'HUMAN GATES'
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm"
            >
              <div className="text-xs font-mono text-[#e0fb2e] font-bold">
                SYSTEM 0{idx + 1} // {item.tag}
              </div>
              <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 sm:p-14 text-center space-y-6 shadow-xl"
        >
          <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold tracking-widest">
            PLANT PROTOTYPE SPRINT
          </span>
          <MaskedHeading as="h2" className="text-3xl sm:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight max-w-3xl mx-auto">
            Bring your industrial challenge to our engineering pod.
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
            We can prototype edge computer vision and anomaly intelligence for your manufacturing line in structured sprint tracks.
          </ScrollText>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-xl"
            >
              <span>Schedule Plant Engineering Discussion</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
