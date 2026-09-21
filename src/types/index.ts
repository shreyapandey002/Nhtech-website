export type RoutePath =
  | '/'
  | '/fde'
  | '/forward-deployed-engineering'
  | '/on-prem-ai'
  | '/sovereign-models'
  | '/sovereign-ai'
  | '/what-we-build'
  | '/agentic-ai'
  | '/document-intelligence'
  | '/computer-vision'
  | '/industries'
  | '/industries/manufacturing'
  | '/industries/enterprise'
  | '/industries/fintech'
  | '/industries/retail'
  | '/industries/startups'
  | '/work'
  | '/work/:slug'
  | '/products'
  | '/about'
  | '/careers'
  | '/contact'
  | '/terms-and-conditions';

export type EngineeringTrack = 'fde' | 'vision-edge' | 'complex-business';

export interface EngineeringTrackMeta {
  id: EngineeringTrack;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  badge: string;
  accent: string;
  subCapabilities: string[];
}

export interface NavItem {
  label: string;
  path: RoutePath;
  badge?: string;
}

export interface ProofStat {
  id: string;
  value: string;
  label: string;
  context: string;
  verified: boolean;
  notes?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  track?: EngineeringTrack;
  clientName?: string;
  clientAnonymousName?: string;
  title: string;
  eyebrow: string;
  context: string;
  difficulty: string;
  systemDesigned: string;
  architecture: string[];
  humanCheckpoints: string;
  technologies: string[];
  scaleEvidence: {
    primaryMetric?: string;
    metricLabel?: string;
    description: string;
  };
  operationalImpact: string;
  relatedCapabilities: string[];
  confidential: boolean;
  approvedForPublicWebsite: boolean;
}

export interface Capability {
  id: string;
  slug: string;
  title: string;
  description: string;
  headline: string;
  coreConcepts: {
    title: string;
    description: string;
  }[];
  architecturePoints: string[];
  technologies: string[];
  deliverables: string[];
  relatedRoute?: RoutePath;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  summary: string;
  challenge: string;
  systems: string[];
  architectureFocus: string[];
  featured?: boolean;
  dedicatedRoute?: RoutePath;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  supportingText?: string;
  liveUrl?: string;
  ctaLabel?: string;
  problemSolved: string;
  keyCapabilities: string[];
  status: 'Production' | 'Private Beta' | 'Research Pod' | 'Internal Tool';
  technicalPillars: string[];
  useCase: string;
  approvedForPublicWebsite: boolean;
  confidential: boolean;
  mediaKey?: string;
  previewType?: 'browser' | 'chat' | 'ide' | 'workflow';
}

export interface TechStackCategory {
  category: string;
  purpose: string;
  items: {
    name: string;
    role: string;
  }[];
}

export interface ContactInquiry {
  name: string;
  email: string;
  company: string;
  role: string;
  problemStatement: string;
  constraints: string;
  projectStage: string;
  schedulingDate: string;
  schedulingTime: string;
}
