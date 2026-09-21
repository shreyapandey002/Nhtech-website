import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'enterprise-workflow-intelligence',
    slug: 'enterprise-workflow-intelligence',
    track: 'fde',
    clientAnonymousName: 'Enterprise Valuation & Operations Workflow Pattern',
    title: 'Unifying fragmented valuation and backoffice operations into an intelligent production system',
    eyebrow: 'Track 1: Forward Deployed Engineering // Agentic Workflows',
    context: 'High-stakes enterprise appraisal, asset valuation, and backoffice intake burdened by fragmented incoming customer emails, unstructured PDF attachments, legacy Excel models, and disconnected portals.',
    difficulty: 'Translating complex proprietary domain formulas, inconsistent document structures, and multi-step human review policies into a unified, high-reliability production pipeline without operational downtime.',
    systemDesigned: 'Forward-deployed engineers embedded with the client operations team to architect an intelligent orchestration layer that ingests multi-channel inputs, parses fields with citation grounding, evaluates business rules, and writes back into core enterprise databases.',
    architecture: [
      'Universal intake gateway (Email IMAP/Exchange, Webhooks, SFTP, REST)',
      'Document parsing & entity mapping with spatial bounding-box verification',
      'Deterministic rule engine for valuation formulas and regulatory compliance',
      'Operator triage and human-in-the-loop workbench with inline PDF diffing',
      'Bidirectional connectors to legacy SQL backends and modern SaaS APIs',
      'Immutable audit trail recording every automated extraction and human sign-off'
    ],
    humanCheckpoints: 'Straight-through processing executes only when all syntactic, arithmetic, and confidence gates clear; exceptions automatically escalate with context-rich review packets.',
    technologies: ['FastAPI', 'React', 'PostgreSQL', 'Redis Queue', 'Docker', 'Open-Weight LLMs'],
    scaleEvidence: {
      primaryMetric: 'Automated Hub',
      metricLabel: 'Operations Hub',
      description: 'Replaced manual spreadsheet re-entry with a unified production pipeline processing thousands of valuations monthly.'
    },
    operationalImpact: 'Eliminated manual copy-pasting and spreadsheet re-entry, providing complete traceability from raw email intake to final enterprise valuation record.',
    relatedCapabilities: ['Agentic Workflow Systems', 'Document Intelligence', 'AI-Native Product Engineering'],
    confidential: false,
    approvedForPublicWebsite: true
  },
  {
    id: 'document-intelligence',
    slug: 'document-intelligence',
    track: 'fde',
    clientAnonymousName: 'Legal & Regulatory Document Intelligence Pattern',
    title: 'Making multi-hundred page regulatory and legal documents computable',
    eyebrow: 'Track 1: Forward Deployed Engineering // Domain Models & RAG',
    context: 'Enterprise document processing across multi-jurisdiction property covenants, commercial legal contracts, and specialized compliance filings where generic OCR and simple keyword searches failed on nested clauses.',
    difficulty: 'Extracting relational dependencies and spatial hierarchies across dense multi-hundred page documents with conflicting domain terminology, while maintaining deterministic tracebacks to original source paragraphs.',
    systemDesigned: 'Engineered an end-to-end document intelligence engine pairing fine-tuned Small Language Models (SLMs) for sub-second classification with frontier reasoning models for complex hierarchical contract extraction.',
    architecture: [
      'Multi-modal layout parsing with bounding-box spatial retention',
      'Specialized Small Language Models (SLMs) fine-tuned for domain taxonomy',
      'Reasoning gateway for multi-clause conditional resolution',
      'High-performance Qdrant vector database with hybrid sparse-dense indexing',
      'Deterministic citation verification layer before downstream database writes',
      'High-throughput asynchronous FastAPI microservice backend'
    ],
    humanCheckpoints: 'Ambiguous cross-references and confidence scores below threshold route directly to legal subject-matter experts with highlighted source paragraphs for rapid one-click verification.',
    technologies: ['Fine-tuned Llama-family', 'Qdrant Vector DB', 'Knowledge Graphs', 'FastAPI', 'PyTorch'],
    scaleEvidence: {
      primaryMetric: 'Sub-Second',
      metricLabel: 'Retrieval & Citation',
      description: 'Multi-layer semantic graph indexing with sub-second retrieval across deeply nested legal and clinical document corpuses.'
    },
    operationalImpact: 'Transformed static PDF and scan archives into searchable, computable structured entity databases that enterprise search and automated validation workflows query directly.',
    relatedCapabilities: ['Document Intelligence', 'Agentic Workflow Systems', 'AI-Native Product Engineering'],
    confidential: false,
    approvedForPublicWebsite: true
  },
  {
    id: 'computer-vision-motion',
    slug: 'computer-vision-motion',
    track: 'vision-edge',
    clientAnonymousName: 'Real-Time Exercise & Kinematic Analytics Pattern',
    title: 'Translating human movement into real-time biomechanical telemetry on edge devices',
    eyebrow: 'Track 2: Vision & Edge AI // On-Device Kinematic Analysis',
    context: 'Physical performance analytics and biomechanical movement assessment requiring frame-by-frame telemetry without specialized optical mocap suits, cloud roundtrips, or facility bandwidth reliance.',
    difficulty: 'Running high-frequency pose landmark extraction and temporal phase classification locally on low-power edge hardware and commercial mobile tablets under uncontrolled lighting and varying camera angles.',
    systemDesigned: 'Developed an on-device computer vision engine that tracks anatomical keypoints in real time, classifies movement phases, and computes instant kinetic metrics for live operator dashboards.',
    architecture: [
      'Custom lightweight pose estimation backbone running on-device',
      'Temporal movement phase state machine (eccentric, isometric, concentric transitions)',
      'Kinematic calculations (rep counts, tempo cadence, velocity analysis)',
      'Local SQLite & device synchronization for responsive tablet display',
      'Asynchronous sync engine for aggregated coach/trainer telemetry web dashboards',
      'Offline-first architecture functioning in bandwidth-constrained facilities'
    ],
    humanCheckpoints: 'System outputs prescriptive metrics and flags movement deviations, leaving qualitative feedback and athletic adjustments in the hands of the supervising human coach or clinician.',
    technologies: ['Computer Vision Pipelines', 'PyTorch', 'React Native', 'SQLite', 'FastAPI', 'BLE Coordination'],
    scaleEvidence: {
      primaryMetric: '60 FPS',
      metricLabel: 'On-Device Tracking',
      description: 'Zero-cloud-dependency inference executing locally on commercial tablets with responsive 60 FPS kinematic tracking.'
    },
    operationalImpact: 'Enabled automated, objective athletic and physical therapy assessment directly on the gym floor and clinical room without bulky lab hardware.',
    relatedCapabilities: ['Computer Vision & Edge AI', 'AI-Native Product Engineering'],
    confidential: false,
    approvedForPublicWebsite: true
  },
  {
    id: 'vision-robotic-inspection',
    slug: 'vision-robotic-inspection',
    track: 'vision-edge',
    clientAnonymousName: 'Manufacturing Quality Assurance & Defect Inspection Pattern',
    title: 'Real-time surface anomaly detection and quality inspection using computer vision pipelines',
    eyebrow: 'Track 2: Vision & Edge AI // Defect & Quality Inspection',
    context: 'Industrial manufacturing environment where component defects, surface anomalies, and assembly alignment tolerances require visual inspection without stopping production workflows.',
    difficulty: 'Resolving subtle surface defects, micro-scratches, and irregular component positioning under factory floor lighting variations with low latency requirements.',
    systemDesigned: 'Engineered an edge computer vision pipeline integrating object detection and surface segmentation with local camera streams, outputting real-time inspection telemetry to operator stations.',
    architecture: [
      'High-resolution optical camera intake feeding local edge compute',
      'Object detection and surface anomaly classification models',
      'Deterministic quality tolerance evaluation engine based on client ground-truth benchmarks',
      'Local edge server running lightweight inference with minimal external cloud dependencies',
      'Operator telemetry interface for live inspection replays and threshold adjustments'
    ],
    humanCheckpoints: 'Station operators calibrate tolerance thresholds per batch and receive instant video clip replays whenever a defect flag is raised.',
    technologies: ['PyTorch', 'TensorFlow', 'Computer Vision Pipelines', 'FastAPI', 'React', 'Edge Deployment'],
    scaleEvidence: {
      primaryMetric: 'Real-Time',
      metricLabel: 'Defect Detection',
      description: 'Edge inference evaluating optical streams against verified tolerance benchmarks with operator review interfaces.'
    },
    operationalImpact: 'Automated line quality inspection while providing operator oversight and historical defect logging for continuous QA improvement.',
    relatedCapabilities: ['Computer Vision & Edge AI', 'Production AI Infrastructure'],
    confidential: false,
    approvedForPublicWebsite: true
  },
  {
    id: 'financial-anomaly',
    slug: 'financial-anomaly',
    track: 'complex-business',
    clientAnonymousName: 'High-Volume Financial Operations & Anomaly Detection Pattern',
    title: 'Building intelligence and anomaly detection into high-volume financial ledgers',
    eyebrow: 'Track 3: Complex Business Solutions // Payments & Stream Anomaly',
    context: 'Cross-border transaction ledger infrastructure and multi-asset financial workflows requiring instantaneous pattern recognition and fraud prevention across continuous streaming telemetry.',
    difficulty: 'Evaluating complex multi-hop transaction topologies in real-time streaming windows without false-positive cascades that block legitimate high-volume payment flows, under strict data-isolation constraints.',
    systemDesigned: 'Engineered a real-time streaming anomaly detection pipeline utilizing custom deep neural network (DNN) architectures running parallelized inference over distributed Kafka pipelines deployed within client infrastructure.',
    architecture: [
      'Distributed Kafka ingestion layer processing cross-region telemetry streams',
      'Custom Deep Neural Network (DNN) trained on temporal transaction patterns',
      'PyTorch inference runtime optimized for low latency',
      'AWS SageMaker distributed model management with continuous drift monitoring',
      'FastAPI async routing with circuit-breaker failover protection',
      'Immutable transaction tracing and topological risk graph visualization'
    ],
    humanCheckpoints: 'Automated policy blocks apply strictly to unambiguous fraud patterns, while high-entropy or anomalous velocity spikes trigger real-time compliance queue escalations with automated evidence packets.',
    technologies: ['PyTorch', 'Custom DNN', 'AWS SageMaker', 'FastAPI', 'Kafka', 'PostgreSQL'],
    scaleEvidence: {
      primaryMetric: '2 PB / day',
      metricLabel: 'Stream Capacity',
      description: 'Distributed streaming architecture evaluated for live pattern detection and transaction anomaly intelligence.'
    },
    operationalImpact: 'Delivered continuous threat scoring across continuous stream batches without degrading core settlement processing speeds or egressing private financial data.',
    relatedCapabilities: ['Predictive & Anomaly Intelligence', 'Production AI Infrastructure', 'Agentic Workflow Systems'],
    confidential: false,
    approvedForPublicWebsite: true
  },
  {
    id: 'demand-forecasting',
    slug: 'demand-forecasting',
    track: 'complex-business',
    clientAnonymousName: 'Multi-Tier ERP & Supply Chain Modernization Pattern',
    title: 'Translating complex supply chain business logic into automated ERP forecasting systems',
    eyebrow: 'Track 3: Complex Business Solutions // ERP & Workflow Modernization',
    context: 'Multi-echelon supply chains spanning raw material sourcing in manufacturing and regional distribution under volatile consumption swings and legacy ERP constraints.',
    difficulty: 'Integrating external macro signals (lead times, regional spikes, supplier delays) with sparse historical SKU records while translating model outputs into actionable ERP purchasing orders.',
    systemDesigned: 'Built multi-horizon forecasting pipelines that connect raw predictive signals directly into procurement and operational allocation workflows with risk-bounded recommendation policies.',
    architecture: [
      'Hierarchical probabilistic time-series models with exogenous variable conditioning',
      'Automated feature store reconciling ERP sales logs, lead times, and inventory levels',
      'Dynamic procurement and stock allocation optimization engines',
      'Automated purchase order draft generation with safety stock constraints',
      'Model performance monitoring and retraining triggers'
    ],
    humanCheckpoints: 'Forecasts generate categorized order suggestions; procurement officers review automated purchase drafts above designated financial thresholds with explainable sensitivity breakdowns.',
    technologies: ['Scikit-learn', 'PyTorch TimeSeries', 'ARIMA Models', 'FastAPI', 'PostgreSQL'],
    scaleEvidence: {
      primaryMetric: 'Tens of Thousands',
      metricLabel: 'SKU Combinations',
      description: 'Integrated multi-tier inventory forecasting covering tens of thousands of SKU-location combinations with automated ERP synchronization.'
    },
    operationalImpact: 'Shifted procurement teams from reactive spreadsheet calculations to verified predictive ordering recommendations linked directly into supplier workflows.',
    relatedCapabilities: ['Predictive & Anomaly Intelligence', 'Agentic Workflow Systems', 'AI-Native Product Engineering'],
    confidential: false,
    approvedForPublicWebsite: true
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(cs => cs.slug === slug && cs.approvedForPublicWebsite);
};
