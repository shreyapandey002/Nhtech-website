/**
 * CENTRALIZED MEDIA CONFIGURATION
 * 
 * Replace null values with real image or video assets when available.
 * Supports mp4/webm videos and jpg/png/webp images.
 */

export interface MediaAsset {
  type: 'image' | 'video';
  src?: string | null;
  poster?: string;
  caption?: string;
  alt?: string;
}

export const mediaConfig = {
  // Global presentation flag for developer / replacement annotations
  // When false, public visitors see sleek, film-toned industrial placeholders
  showDevMediaLabels: false,

  // Hero Section
  hero: null as MediaAsset | null,
  
  // Work & Case Studies (NOTE: Client work uses static architecture & telemetry visualizers)
  whitegoldFintechDemo: null as MediaAsset | null,
  motivisionCvDemo: null as MediaAsset | null,
  wyzWorkflowDemo: null as MediaAsset | null,
  documentIntelligenceDemo: null as MediaAsset | null,
  demandForecastingDemo: null as MediaAsset | null,
  anomalyIntelligenceDemo: null as MediaAsset | null,
  computerVisionDemo: null as MediaAsset | null,

  // Industries
  manufacturingDemo: null as MediaAsset | null,
  enterpriseDemo: null as MediaAsset | null,
  fintechDemo: null as MediaAsset | null,
  retailDemo: null as MediaAsset | null,
  startupsDemo: null as MediaAsset | null,

  // Internal Products (Real mp4 product demo videos)
  talkumentDemo: {
    type: 'video',
    src: '/Talkument.mp4',
    alt: 'Talkument Document & Knowledge Intelligence Platform',
  } as MediaAsset | null,
  hootDemo: {
    type: 'video',
    src: '/Hoot.mp4',
    alt: 'Hoot Enterprise Communication Platform',
  } as MediaAsset | null,
  agentPlatformDemo: {
    type: 'video',
    src: '/Ottom8.mp4',
    alt: 'Ottom8 / Agent Platform Orchestration Engine',
  } as MediaAsset | null,

  // Sovereign Architecture
  sovereignArchitectureDemo: null as MediaAsset | null,
};
