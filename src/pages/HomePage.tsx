import { RoutePath, CaseStudy } from '../types';
import { IntelligenceCore3D } from '../components/home/IntelligenceCore3D';
import { HeroMediaStage } from '../components/home/HeroMediaStage';
import { EditorialProofStrip } from '../components/home/EditorialProofStrip';
import { HomeTracksOverview } from '../components/home/HomeTracksOverview';
import { SelectedWorkCompositions } from '../components/home/SelectedWorkCompositions';
import { ClimaxCTA } from '../components/home/ClimaxCTA';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export function HomePage({ onNavigate, onSelectCaseStudy }: HomePageProps) {
  return (
    <div id="nhtech-homepage" className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] relative selection:bg-[#e0fb2e] selection:text-black">
      
      {/* 0. Ambient Subtle Lighting */}
      <IntelligenceCore3D />

      {/* 1. HERO: NHTech turns complex business problems into production AI systems */}
      <div className="relative z-10">
        <HeroMediaStage onNavigate={onNavigate} />
      </div>

      {/* 2. BRIEF TECHNICAL PRODUCTION PROOF: Verified Industry Milestones */}
      <div className="relative z-10">
        <EditorialProofStrip />
      </div>

      {/* 3. THREE CORE TRACKS: 01 FDE, 02 Vision & Edge AI, 03 Complex Business Solutions */}
      <div className="relative z-10">
        <HomeTracksOverview onNavigate={onNavigate} />
      </div>

      {/* 4. SELECTED WORK / BRIEF PROOF: Production Case Studies Across Tracks */}
      <div className="relative z-10">
        <SelectedWorkCompositions onNavigate={onNavigate} />
      </div>

      {/* 5. CTA: Initiate an Architecture Session / Deploy an Engineering Pod */}
      <div className="relative z-10">
        <ClimaxCTA onNavigate={onNavigate} />
      </div>

    </div>
  );
}
