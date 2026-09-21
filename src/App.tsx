import { useState, useEffect } from 'react';
import { RoutePath, CaseStudy } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SEOHead } from './components/common/SEOHead';
import { HomePage } from './pages/HomePage';
import { ForwardDeployedEngineeringPage } from './pages/ForwardDeployedEngineeringPage';
import { OnPremAiPage } from './pages/OnPremAiPage';
import { WhatWeBuildPage } from './pages/WhatWeBuildPage';
import { AgenticAiPage } from './pages/AgenticAiPage';
import { DocumentIntelligencePage } from './pages/DocumentIntelligencePage';
import { ComputerVisionPage } from './pages/ComputerVisionPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ManufacturingPage } from './pages/ManufacturingPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { WorkPage } from './pages/WorkPage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { TermsAndConditionsPage } from './pages/TermsAndConditionsPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path && path !== '' ? path : '/';
    }
    return '/';
  });

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Sync browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: RoutePath) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderCurrentView = () => {
    switch (currentPath) {
      case '/':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)}
          />
        );
      case '/fde':
      case '/forward-deployed-engineering':
        return <ForwardDeployedEngineeringPage onNavigate={handleNavigate} />;
      case '/on-prem-ai':
      case '/sovereign-models':
      case '/sovereign-ai':
        return <OnPremAiPage onNavigate={handleNavigate} />;
      case '/what-we-build':
        return <WhatWeBuildPage onNavigate={handleNavigate} />;
      case '/agentic-ai':
        return <AgenticAiPage onNavigate={handleNavigate} />;
      case '/document-intelligence':
        return <DocumentIntelligencePage onNavigate={handleNavigate} />;
      case '/computer-vision':
        return <ComputerVisionPage onNavigate={handleNavigate} />;
      case '/industries':
        return <IndustriesPage onNavigate={handleNavigate} />;
      case '/industries/manufacturing':
        return <ManufacturingPage onNavigate={handleNavigate} />;
      case '/industries/enterprise':
        return <IndustryDetailPage slug="enterprise" onNavigate={handleNavigate} />;
      case '/industries/fintech':
        return <IndustryDetailPage slug="fintech" onNavigate={handleNavigate} />;
      case '/industries/retail':
        return <IndustryDetailPage slug="retail" onNavigate={handleNavigate} />;
      case '/industries/startups':
        return <IndustryDetailPage slug="startups" onNavigate={handleNavigate} />;
      case '/work':
        return (
          <WorkPage
            onNavigate={handleNavigate}
            selectedCaseStudy={selectedCaseStudy}
            onSelectCaseStudy={setSelectedCaseStudy}
          />
        );
      case '/products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/careers':
        return <CareersPage onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case '/terms-and-conditions':
        return <TermsAndConditionsPage onNavigate={handleNavigate} />;
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)}
          />
        );
    }
  };

  return (
    <ThemeProvider>
      <SEOHead currentPath={currentPath} />
      <div id="nhtech-app-root" className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] flex flex-col font-sans selection:bg-[#e0fb2e] selection:text-black transition-colors duration-300">
        <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
        <main className="flex-1">
          {renderCurrentView()}
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </ThemeProvider>
  );
}
