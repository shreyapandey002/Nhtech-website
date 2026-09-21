import { useState } from 'react';
import { RoutePath } from '../types';
import { WorldCanvas } from '../components/common/WorldCanvas';
import { SpatialPageHeader } from '../components/common/SpatialPageHeader';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { FileText, Database, ShieldCheck, ArrowRight, ArrowUpRight, Search, Layers, CheckCircle2, Scan, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface DocumentIntelligencePageProps {
  onNavigate: (path: RoutePath) => void;
}

export function DocumentIntelligencePage({ onNavigate }: DocumentIntelligencePageProps) {
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);

  const pipelineSteps = [
    {
      num: '01',
      title: 'Spatial Layout & Bounding-Box Parsing',
      desc: 'Raw multi-hundred page PDFs, scans, and spreadsheets are parsed while retaining table grid coordinates, hierarchical headings, footnotes, and stamps.',
      metric: 'Exact pixel-level coordinate retention',
      accent: '#e0fb2e'
    },
    {
      num: '02',
      title: 'Hybrid Sparse-Dense Vector Indexing',
      desc: 'High-dimensional embeddings generated with Qdrant vector collections combined with BM25 keyword matching and domain entity graphs to prevent retrieval misses.',
      metric: 'Eliminates keyword & semantic hallucination',
      accent: '#38bdf8'
    },
    {
      num: '03',
      title: 'Self-Hosted Fine-Tuned Open-Weight LLMs',
      desc: 'Specialized language models (Llama, Mistral) fine-tuned on custom legal, financial, or clinical taxonomy running 100% inside your private VPC or on-premise servers.',
      metric: 'Zero external document transmission',
      accent: '#d7bdf9'
    },
    {
      num: '04',
      title: 'Deterministic Citation Verification Gate',
      desc: 'Every extracted attribute, compliance summary, or calculated entity provides verifiable bounding-box citations linked back to the exact source paragraph.',
      metric: 'Verifiable paragraph citation trail',
      accent: '#ff4b3e'
    }
  ];

  return (
    <div id="document-intelligence-chapter" className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] space-y-24">
      {/* 0. Ambient Document & Entity Canvas */}
      <WorldCanvas mode="matrix" opacity={0.35} />

      {/* 1. Spatial Header */}
      <SpatialPageHeader
        tag="KNOWLEDGE SYSTEMS & DETERMINISTIC RETRIEVAL"
        title="Making complex documents"
        titleAccent="computable."
        subtitle="Transforming unstructured multi-hundred-page contracts, legal filings, technical specifications, and clinical records into validated, queryable knowledge graphs with deterministic source citations."
        ctaText="Discuss Document Architecture"
        ctaRoute="/contact"
        secondaryCtaText="Explore Products"
        secondaryCtaRoute="/products"
        onNavigate={onNavigate}
        telemetryItems={[
          { label: 'EXTRACTION', value: 'SPATIAL BOUNDING-BOX' },
          { label: 'SOVEREIGNTY', value: 'AIR-GAPPED & VPC' },
          { label: 'VERIFICATION', value: 'EXACT CITATIONS' },
        ]}
      />

      {/* 2. Interactive 4-Stage Ingestion & Verification Pipeline */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-8 text-left">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
          <div>
            <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold">
              INGESTION ARCHITECTURE // 04 STAGES
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
              End-to-End Extraction &amp; Citation Pipeline
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)]">
            CLICK STAGES TO INSPECT TECHNICAL MECHANISMS
          </div>
        </div>

        {/* Step Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {pipelineSteps.map((step, idx) => (
            <button
              key={step.num}
              onClick={() => setActivePipelineStep(idx)}
              className={`p-5 rounded-2xl text-left font-mono transition-all cursor-pointer border ${
                activePipelineStep === idx
                  ? 'bg-[var(--bg-surface)] border-[var(--border-hover)] shadow-md ring-1 ring-[#e0fb2e]/40'
                  : 'bg-[var(--bg-surface-subtle)] border-[var(--border-color)] hover:border-[var(--border-hover)]'
              }`}
            >
              <div className="text-xs font-bold" style={{ color: step.accent }}>
                {step.num} // STAGE
              </div>
              <div className="text-sm font-display font-bold text-[var(--text-primary)] mt-1 line-clamp-1">
                {step.title.split(' ')[0]} {step.title.split(' ')[1]}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Stage Deep Inspector */}
        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 sm:p-12 shadow-lg space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono" style={{ color: pipelineSteps[activePipelineStep].accent }}>
            <span>PIPELINE STAGE {pipelineSteps[activePipelineStep].num}</span>
            <span>▸▸</span>
            <span>{pipelineSteps[activePipelineStep].title}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-display font-bold text-[var(--text-primary)]">
            {pipelineSteps[activePipelineStep].title}
          </h3>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-4xl font-sans">
            {pipelineSteps[activePipelineStep].desc}
          </p>

          <div className="p-4 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#e0fb2e]" />
              <span className="text-[var(--text-primary)] font-medium">VERIFIED OUTCOME: {pipelineSteps[activePipelineStep].metric}</span>
            </div>
            <span className="text-[var(--text-muted)]">100% PRIVATE IN-VPC RETRIEVAL</span>
          </div>
        </div>
      </section>

      {/* 3. Core Document Runtimes */}
      <section className="relative z-10 max-w-7xl mx-auto space-y-10 text-left">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono text-[var(--accent-secondary)] uppercase">TECHNICAL FRAMEWORK</span>
          <MaskedHeading as="h2" className="text-3xl sm:text-4xl font-display font-bold text-[var(--text-primary)] tracking-tight">
            Enterprise document engines in production.
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
            Engineered to process dense technical layouts, tables, and regulatory compliance packets without losing context.
          </ScrollText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Multi-Modal Spatial Layout OCR',
              desc: 'High-precision layout decomposition separating complex headers, embedded charts, sidebars, and nested financial tabular cells.',
              tag: 'SPATIAL PARSING'
            },
            {
              title: 'Hierarchical Chunking & Entity Graph',
              desc: 'Connecting section parent-child nodes so extracted data preserves semantic context across 500+ page technical manuals.',
              tag: 'GRAPH RAG'
            },
            {
              title: 'Side-by-Side Audit Workbench',
              desc: 'Operator UI with synchronized PDF page viewing, highlighted text bounding boxes, and instant confidence score inspection.',
              tag: 'AUDIT TRACEABILITY'
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
                CORE MODULE 0{idx + 1} // {item.tag}
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
            DOCUMENT WORKFLOW PILOT
          </span>
          <MaskedHeading as="h2" className="text-3xl sm:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight max-w-3xl mx-auto">
            Ready to make your enterprise documents computable?
          </MaskedHeading>
          <ScrollText className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
            We build custom ingestion pipelines and deploy private extraction engines inside your security perimeter.
          </ScrollText>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-xl"
            >
              <span>Schedule Document Architecture Assessment</span>
              <ArrowRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
