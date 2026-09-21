import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown, Server, Sun, Moon, Terminal, Eye } from 'lucide-react';
import { brand } from '../../config/brand';
import { RoutePath } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: RoutePath) => void;
}

export function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const industriesRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const industriesTimerRef = useRef<NodeJS.Timeout | null>(null);
  const companyTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle closing on Escape key & clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setCompanyOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIndustriesOpen(false);
        setCompanyOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Cleanup timeout timers on unmount
  useEffect(() => {
    return () => {
      if (industriesTimerRef.current) clearTimeout(industriesTimerRef.current);
      if (companyTimerRef.current) clearTimeout(companyTimerRef.current);
    };
  }, []);

  // Industries Hover Handlers with 250ms close grace period
  const handleIndustriesMouseEnter = () => {
    if (industriesTimerRef.current) {
      clearTimeout(industriesTimerRef.current);
      industriesTimerRef.current = null;
    }
    setIndustriesOpen(true);
  };

  const handleIndustriesMouseLeave = () => {
    if (industriesTimerRef.current) {
      clearTimeout(industriesTimerRef.current);
    }
    industriesTimerRef.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 250);
  };

  // Company Hover Handlers with 250ms close grace period
  const handleCompanyMouseEnter = () => {
    if (companyTimerRef.current) {
      clearTimeout(companyTimerRef.current);
      companyTimerRef.current = null;
    }
    setCompanyOpen(true);
  };

  const handleCompanyMouseLeave = () => {
    if (companyTimerRef.current) {
      clearTimeout(companyTimerRef.current);
    }
    companyTimerRef.current = setTimeout(() => {
      setCompanyOpen(false);
    }, 250);
  };

  const handleNavClick = (path: RoutePath) => {
    onNavigate(path);
    setIndustriesOpen(false);
    setCompanyOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const industryLinks = [
    { label: 'Manufacturing', path: '/industries/manufacturing' as RoutePath, desc: 'Vision, edge intelligence & industrial automation' },
    { label: 'Enterprise', path: '/industries/enterprise' as RoutePath, desc: 'Workflow intelligence & system orchestration' },
    { label: 'FinTech & BFSI', path: '/industries/fintech' as RoutePath, desc: 'Anomaly detection, document pipelines & compliance' },
    { label: 'Retail & Commerce', path: '/industries/retail' as RoutePath, desc: 'Forecasting, visual commerce & shelf segmentation' },
    { label: 'Tech Startups', path: '/industries/startups' as RoutePath, desc: 'Applied AI engineering & core engine builds' },
  ];

  const companyLinks = [
    { label: 'About', path: '/about' as RoutePath, desc: 'Our team, engineering thesis and pedigree' },
    { label: 'Careers', path: '/careers' as RoutePath, desc: 'Join our forward-deployed systems pods' },
    { label: 'Contact', path: '/contact' as RoutePath, desc: 'Architecture consultation and pod feasibility' },
    { label: 'Terms & Conditions', path: '/terms-and-conditions' as RoutePath, desc: 'Legal terms, billing policies & data privacy' },
  ];

  const isIndustryActive = currentPath.startsWith('/industries');
  const isCompanyActive = currentPath === '/about' || currentPath === '/careers' || currentPath === '/contact';

  return (
    <header
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-base)]/90 backdrop-blur-xl border-b border-[var(--border-color)] py-3 shadow-md'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram & Wordmark */}
        <button
          id="nav-brand-logo"
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <img 
            src="/logo.jpg" 
            alt="NHTech Logo" 
            className="h-8 w-auto max-h-8 object-contain shrink-0 rounded-lg"
          />

          <div className="flex flex-col">
            <span className="text-base font-display font-bold tracking-tight text-[var(--text-primary)]">
              {brand.displayName}
            </span>
            <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase hidden sm:block">
              Applied AI Engineering
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* What We Build */}
          <button
            id="nav-link-what-we-build"
            onClick={() => handleNavClick('/what-we-build')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
              currentPath === '/what-we-build' || currentPath.startsWith('/agentic-ai') || currentPath.startsWith('/document-intelligence')
                ? 'text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            What We Build
          </button>

          {/* FDE */}
          <button
            id="nav-link-fde"
            onClick={() => handleNavClick('/fde')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
              currentPath === '/fde'
                ? 'text-[#e0fb2e] bg-[var(--bg-surface-elevated)] border border-[var(--border-hover)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-[#e0fb2e]" />
            <span>FDE</span>
          </button>

          {/* Vision & Edge AI */}
          <button
            id="nav-link-vision-edge"
            onClick={() => handleNavClick('/computer-vision')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              currentPath === '/computer-vision'
                ? 'text-[#38bdf8] bg-[var(--bg-surface-elevated)] border border-[var(--border-hover)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Vision &amp; Edge AI</span>
          </button>

          {/* On-Prem AI */}
          <button
            id="nav-link-on-prem-ai"
            onClick={() => handleNavClick('/on-prem-ai')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              currentPath === '/on-prem-ai' || currentPath === '/sovereign-models' || currentPath === '/sovereign-ai'
                ? 'text-[#d7bdf9] bg-[var(--bg-surface-elevated)] border border-[var(--border-hover)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            <Server className="w-3.5 h-3.5 text-[#d7bdf9]" />
            <span>On-Prem AI</span>
          </button>

          {/* Industries Dropdown */}
          <div 
            ref={industriesRef} 
            className="relative"
            onMouseEnter={handleIndustriesMouseEnter}
            onMouseLeave={handleIndustriesMouseLeave}
          >
            <button
              id="nav-industries-trigger"
              onClick={() => {
                if (industriesTimerRef.current) clearTimeout(industriesTimerRef.current);
                setIndustriesOpen(!industriesOpen);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                isIndustryActive || industriesOpen
                  ? 'text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
              }`}
              aria-expanded={industriesOpen}
              aria-haspopup="true"
            >
              <span>Industries</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? 'rotate-180 text-[var(--accent-secondary)]' : 'text-[var(--text-muted)]'}`} />
            </button>

            {industriesOpen && (
              <div 
                id="nav-industries-dropdown"
                className="absolute top-full left-0 pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                onMouseEnter={handleIndustriesMouseEnter}
                onMouseLeave={handleIndustriesMouseLeave}
              >
                {/* Invisible hover bridge buffer between button and menu */}
                <div className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-2 shadow-xl backdrop-blur-2xl">
                  <div className="px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] border-b border-[var(--border-color)] mb-1 flex items-center justify-between">
                    <span>Operating Sectors</span>
                    <button 
                      onClick={() => handleNavClick('/industries')} 
                      className="text-[#e0fb2e] hover:underline cursor-pointer"
                    >
                      View all →
                    </button>
                  </div>
                  <div className="space-y-0.5">
                    {industryLinks.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNavClick(item.path)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-[var(--bg-surface-elevated)] transition-colors flex flex-col gap-0.5 group cursor-pointer"
                      >
                        <span className="text-xs font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-secondary)] transition-colors">
                          {item.label}
                        </span>
                        <span className="text-[11px] text-[var(--text-muted)] font-light leading-snug">
                          {item.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Work */}
          <button
            id="nav-link-work"
            onClick={() => handleNavClick('/work')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
              currentPath === '/work'
                ? 'text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            Work
          </button>

          {/* Products */}
          <button
            id="nav-link-products"
            onClick={() => handleNavClick('/products')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
              currentPath === '/products'
                ? 'text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            Products
          </button>

          {/* Company Dropdown */}
          <div 
            ref={companyRef} 
            className="relative"
            onMouseEnter={handleCompanyMouseEnter}
            onMouseLeave={handleCompanyMouseLeave}
          >
            <button
              id="nav-company-trigger"
              onClick={() => {
                if (companyTimerRef.current) clearTimeout(companyTimerRef.current);
                setCompanyOpen(!companyOpen);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                isCompanyActive || companyOpen
                  ? 'text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
              }`}
              aria-expanded={companyOpen}
              aria-haspopup="true"
            >
              <span>Company</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyOpen ? 'rotate-180 text-[var(--accent-secondary)]' : 'text-[var(--text-muted)]'}`} />
            </button>

            {companyOpen && (
              <div 
                id="nav-company-dropdown"
                className="absolute top-full right-0 pt-2 w-60 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                onMouseEnter={handleCompanyMouseEnter}
                onMouseLeave={handleCompanyMouseLeave}
              >
                {/* Invisible hover bridge buffer between button and menu */}
                <div className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-2 shadow-xl backdrop-blur-2xl">
                  <div className="space-y-0.5">
                    {companyLinks.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNavClick(item.path)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-[var(--bg-surface-elevated)] transition-colors group cursor-pointer"
                      >
                        <div className="text-xs font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-secondary)] transition-colors">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-[var(--text-muted)] font-light leading-snug">
                          {item.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Action: Theme Switcher & Talk to us CTA */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-button"
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#e0fb2e]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--accent-secondary)]" />
            )}
          </button>

          {/* Primary CTA */}
          <button
            id="nav-talk-to-us-cta"
            onClick={() => handleNavClick('/contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] text-xs font-display font-bold tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-sm"
          >
            <span>Talk to us</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-current" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-color)] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="nav-mobile-drawer"
          className="lg:hidden bg-[var(--bg-base)] border-b border-[var(--border-color)] px-4 pt-4 pb-6 space-y-3 max-h-[85vh] overflow-y-auto"
        >
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('/what-we-build')}
              className="w-full text-left min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface)] flex items-center justify-between"
            >
              <span>What We Build</span>
              <span className="text-xs text-[var(--text-muted)] font-mono">Tracks &amp; Capabilities</span>
            </button>

            <button
              onClick={() => handleNavClick('/fde')}
              className={`w-full text-left min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                currentPath === '/fde' ? 'bg-[var(--bg-surface-elevated)] text-[#e0fb2e] border border-[var(--border-hover)]' : 'text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
              }`}
            >
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#e0fb2e]" />
                <span className="font-bold">Forward Deployed Engineering (FDE)</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-surface)] text-[#e0fb2e]">Core Model</span>
            </button>

            <button
              onClick={() => handleNavClick('/computer-vision')}
              className={`w-full text-left min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                currentPath === '/computer-vision' ? 'bg-[var(--bg-surface-elevated)] text-[#38bdf8] border border-[var(--border-hover)]' : 'text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
              }`}
            >
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#38bdf8]" />
                <span>Vision &amp; Edge AI</span>
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">Track 02</span>
            </button>

            <button
              onClick={() => handleNavClick('/on-prem-ai')}
              className={`w-full text-left min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                currentPath === '/on-prem-ai' || currentPath === '/sovereign-models' || currentPath === '/sovereign-ai' ? 'bg-[var(--bg-surface-elevated)] text-[#d7bdf9] border border-[var(--border-hover)]' : 'text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
              }`}
            >
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-[#d7bdf9]" />
                <span>On-Prem AI</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-surface)] text-[#d7bdf9]">Model Eng</span>
            </button>

            <button
              onClick={() => handleNavClick('/work')}
              className="w-full text-left min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
            >
              Work &amp; Case Studies
            </button>

            <button
              onClick={() => handleNavClick('/products')}
              className="w-full text-left min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
            >
              Products
            </button>
          </div>

          {/* Mobile Tap-to-Toggle Industries */}
          <div className="pt-2 border-t border-[var(--border-color)]">
            <button
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              className="w-full flex items-center justify-between px-3.5 py-2 text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <span>Industries</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileIndustriesOpen ? 'rotate-180 text-[var(--accent-secondary)]' : ''}`} />
            </button>
            {mobileIndustriesOpen && (
              <div className="grid grid-cols-1 gap-1 mt-1 pl-2">
                {industryLinks.map((ind) => (
                  <button
                    key={ind.path}
                    onClick={() => handleNavClick(ind.path)}
                    className="w-full text-left min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] flex items-center justify-between"
                  >
                    <span>{ind.label}</span>
                    <span className="text-[10px] text-[var(--text-muted)]">→</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Tap-to-Toggle Company */}
          <div className="pt-2 border-t border-[var(--border-color)]">
            <button
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className="w-full flex items-center justify-between px-3.5 py-2 text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <span>Company</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileCompanyOpen ? 'rotate-180 text-[var(--accent-secondary)]' : ''}`} />
            </button>
            {mobileCompanyOpen && (
              <div className="grid grid-cols-1 gap-1 mt-1 pl-2">
                {companyLinks.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className="w-full text-left min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] text-[var(--text-muted)]">→</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-[var(--border-color)]">
            <button
              onClick={() => handleNavClick('/contact')}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] text-sm font-bold hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Talk to us</span>
              <ArrowUpRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
