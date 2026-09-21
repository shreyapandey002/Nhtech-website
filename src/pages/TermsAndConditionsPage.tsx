import { useState } from 'react';
import { motion } from 'motion/react';
import { RoutePath } from '../types';
import { brand } from '../config/brand';
import { SpatialPageHeader } from '../components/common/SpatialPageHeader';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { 
  CreditCard, 
  Building2, 
  ExternalLink, 
  ArrowUpRight, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  Mail, 
  Scale, 
  Globe, 
  Lock, 
  RotateCcw,
  Receipt
} from 'lucide-react';

interface TermsAndConditionsPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function TermsAndConditionsPage({ onNavigate }: TermsAndConditionsPageProps) {
  const [activeSection, setActiveSection] = useState<string>('sec-1');

  const sections = [
    { id: 'sec-1', label: '1. Agreement & Entity' },
    { id: 'sec-2', label: '2. Scope & Engagements' },
    { id: 'sec-3', label: '3. Invoicing & Payment Terms' },
    { id: 'sec-4', label: '4. Supported Payment Methods' },
    { id: 'sec-5', label: '5. Online Payment Gateways' },
    { id: 'sec-6', label: '6. Refund & Cancellation Policy' },
    { id: 'sec-7', label: '7. Failed & Reversible Transactions' },
    { id: 'sec-8', label: '8. Payment Disputes & Chargebacks' },
    { id: 'sec-9', label: '9. Foreign Currency & Exchange Rates' },
    { id: 'sec-10', label: '10. Security & PCI-DSS Compliance' },
    { id: 'sec-11', label: '11. Governing Law & Jurisdiction' },
    { id: 'sec-12', label: '12. Contact & Billing Queries' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div id="terms-and-conditions-page" className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] space-y-16">
      
      {/* 1. Header with Breadcrumb & Operational Badges */}
      <SpatialPageHeader
        tag="LEGAL, PAYMENT TERMS & GOVERNANCE"
        title="Terms &"
        titleAccent="Conditions."
        subtitle={`Official terms of service, billing policies, online payment gateways, and refund framework for ${brand.displayName} (operated by ${brand.legalName}).`}
        ctaText="Initiate Billing Inquiry"
        ctaRoute="/contact"
        secondaryCtaText="Explore Engineering Tracks"
        secondaryCtaRoute="/fde"
        onNavigate={onNavigate}
        telemetryItems={[
          { label: 'LEGAL ENTITY', value: brand.legalName.toUpperCase(), color: '#e0fb2e' },
          { label: 'COMPLIANCE', value: 'PCI-DSS & 256-BIT ENCRYPTION', color: 'var(--text-primary)' },
          { label: 'SETTLEMENT', value: 'DIRECT WIRE / RAZORPAY / ZOHO', color: '#38bdf8' },
        ]}
      />

      {/* 2. Direct Payment Portals Quick Action Banner */}
      <section className="relative z-10 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5 text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-secondary)] uppercase font-bold">
                <Receipt className="w-4 h-4" />
                <span>Client Payment Gateways &amp; Invoice Portals</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
                Direct Settlement &amp; Invoice Payment
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal max-w-2xl leading-relaxed">
                If you have received an active invoice or milestone authorization from {brand.displayName}, settle directly through our verified gateway links below or access your dedicated client portal.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://pages.razorpay.com/nighthack-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#e0fb2e] text-black font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all shadow-md cursor-pointer group"
              >
                <CreditCard className="w-4 h-4" />
                <span>Pay Online</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://invoice.zohosecure.in/portal/nighthacktechnologypvtltd/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] hover:border-[var(--border-hover)] text-[var(--text-primary)] font-display font-bold text-xs tracking-tight transition-all shadow-sm cursor-pointer group"
              >
                <Building2 className="w-4 h-4 text-[var(--accent-secondary)]" />
                <span>Pay from Invoice Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content Layout: Sidebar Table of Contents + Comprehensive Sections */}
      <section className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
        
        {/* Sticky Table of Contents Sidebar (Desktop) */}
        <div className="lg:col-span-4 sticky top-28 hidden lg:block space-y-4">
          <div className="p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold uppercase text-[var(--text-muted)] tracking-wider flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
              <span>Table of Contents</span>
              <span className="text-[10px] text-[#e0fb2e]">12 SECTIONS</span>
            </div>

            <nav className="space-y-1 text-xs font-mono">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                    activeSection === sec.id
                      ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-bold border border-[var(--border-color)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]'
                  }`}
                >
                  <span className="truncate">{sec.label}</span>
                </button>
              ))}
            </nav>

            <div className="pt-4 border-t border-[var(--border-color)] space-y-3">
              <div className="text-[11px] font-mono text-[var(--text-muted)]">
                Need customized enterprise procurement or Master Services Agreement (MSA) review?
              </div>
              <button
                onClick={() => onNavigate('/contact')}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] hover:border-[var(--border-hover)] text-xs font-display font-bold text-[var(--text-primary)] transition-all cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--accent-secondary)]" />
                <span>Contact Legal / Procurement</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Body (8 cols) */}
        <div className="lg:col-span-8 space-y-12">

          {/* Section 1: Agreement & Entity */}
          <div id="sec-1" className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-mono text-[#e0fb2e] font-bold uppercase">
              <Scale className="w-4 h-4" />
              <span>Section 01 // Legal Structure</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              1. Agreement to Terms &amp; Corporate Entity
            </h2>
            <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-3 leading-relaxed font-normal">
              <p>
                Welcome to <strong>{brand.displayName}</strong>. These Terms &amp; Conditions govern the provision of forward-deployed engineering, custom artificial intelligence systems, computer vision runtimes, document intelligence infrastructure, and related technical consulting services provided by <strong>{brand.legalName}</strong> (formerly known as <em>{brand.formerName}</em>, hereinafter referred to as <strong>"{brand.displayName}"</strong>, <strong>"Company"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>).
              </p>
              <p>
                By accessing our website, commissioning an engineering pod, approving a Statement of Work (SOW), issuing a purchase order, or initiating payment through our integrated payment gateways, you (the <strong>"Client"</strong> or <strong>"Customer"</strong>) explicitly acknowledge having read, understood, and agreed to be legally bound by these terms.
              </p>
              <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-1.5 text-xs font-mono">
                <div className="font-bold text-[var(--text-primary)]">Corporate Registration Details:</div>
                <div className="text-[var(--text-secondary)]">• Legal Registered Name: {brand.legalName}</div>
                <div className="text-[var(--text-secondary)]">• Operating Brand: {brand.displayName}</div>
                <div className="text-[var(--text-secondary)]">• Registered Jurisdiction: Bengaluru, Karnataka, India</div>
                <div className="text-[var(--text-secondary)]">• Corporate Email: {brand.contact.email}</div>
              </div>
            </div>
          </div>

          {/* Section 2: Scope & Engagements */}
          <div id="sec-2" className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] font-bold uppercase">
              <FileText className="w-4 h-4" />
              <span>Section 02 // Engagements</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              2. Scope of Services &amp; SOW Structure
            </h2>
            <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-3 leading-relaxed font-normal">
              <p>
                {brand.displayName} provides specialized technical solutions across two core operating models:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                <li>
                  <strong className="text-[var(--text-primary)]">Forward-Deployed Engineering (FDE) Pods:</strong> Dedicated embedded senior engineering squads working directly within the client's codebase, data infrastructure, and enterprise workflows on scheduled sprint commitments.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Fixed-Milestone Production Solutions:</strong> Scoped technical architecture, AI workflow orchestration, document processing pipelines, or edge computer vision deployments bound by specific technical acceptance criteria.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Software Runtimes &amp; Incubated Platforms:</strong> Access to proprietary productivity runtimes (e.g., Talkument, Hoot, Ottom8) as specified under individual platform agreements.
                </li>
              </ul>
              <p>
                Each bespoke project is initiated under a mutually executed Statement of Work (SOW), Master Services Agreement (MSA), or accepted quotation detailing deliverables, sprint durations, acceptance criteria, and financial terms.
              </p>
            </div>
          </div>

          {/* Section 3: Invoicing & Payment Terms */}
          <div id="sec-3" className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-mono text-[#e0fb2e] font-bold uppercase">
              <Clock className="w-4 h-4" />
              <span>Section 03 // Billing Schedule</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              3. Invoicing &amp; Payment Terms
            </h2>
            <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-3 leading-relaxed font-normal">
              <p>
                Payments are based strictly on formal invoices issued for delivered work items, sprint cycles, or upfront retainers as mutually agreed prior to commencement:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-1.5">
                  <div className="text-xs font-bold text-[var(--text-primary)]">Invoice Issuance</div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Invoices are raised against completed sprints, verified milestone sign-offs, or scheduled monthly retainer cycles.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-1.5">
                  <div className="text-xs font-bold text-[var(--text-primary)]">Settlement Windows</div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Payment due dates are explicitly stated on each invoice (typically Net 15 or Net 30 days unless agreed otherwise).
                  </p>
                </div>
              </div>
              <p>
                Late settlements exceeding the agreed grace period may incur contractual late interest charges or lead to temporary suspension of forward-deployed engineering cycles until accounts are reconciled in full.
              </p>
            </div>
          </div>

          {/* Section 4: Supported Payment Methods */}
          <div id="sec-4" className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] font-bold uppercase">
              <CreditCard className="w-4 h-4" />
              <span>Section 04 // Payment Channels</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              4. Supported Payment Methods
            </h2>
            <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-4 leading-relaxed font-normal">
              <p>
                {brand.displayName} accepts multiple verified settlement methods to accommodate domestic Indian entities as well as global international enterprises:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex items-start gap-3.5">
                  <Building2 className="w-5 h-5 text-[#e0fb2e] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-2">
                      <span>1. Direct Bank Wire / Wire Transfer (Preferred)</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#e0fb2e]/10 text-[#e0fb2e] border border-[#e0fb2e]/20">0% Processing Fee</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Domestic: NEFT, RTGS, IMPS. International: SWIFT wire transfers, SEPA payments, and automated ACH. Wire instructions are attached directly to each official invoice.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex items-start gap-3.5">
                  <CreditCard className="w-5 h-5 text-[#38bdf8] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-[var(--text-primary)]">
                      2. Online Credit &amp; Debit Cards
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visa, MasterCard, American Express, Diners Club, and RuPay processed securely through authorized payment gateway partners.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex items-start gap-3.5">
                  <Globe className="w-5 h-5 text-[var(--text-primary)] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-[var(--text-primary)]">
                      3. UPI &amp; Digital Net Banking
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Supported for Indian accounts via Unified Payments Interface (UPI - Google Pay, PhonePe, Paytm, BHIM) and direct corporate net banking portals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Online Payment Gateways & External Links */}
          <div id="sec-5" className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-mono text-[#e0fb2e] font-bold uppercase">
              <ExternalLink className="w-4 h-4" />
              <span>Section 05 // Gateways</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              5. Authorized Online Gateways &amp; Client Portals
            </h2>
            <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-4 leading-relaxed font-normal">
              <p>
                To provide safe, encrypted payment channels, {brand.displayName} partners with leading certified payment aggregators and cloud invoicing platforms. You may settle outstanding invoices through either of our verified portals:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                
                {/* Razorpay Gateway Card */}
                <div className="p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] hover:border-[var(--border-hover)] space-y-3 flex flex-col justify-between transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#e0fb2e]">GATEWAY LINK 01</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-muted)]">Instant Checkout</span>
                    </div>
                    <h3 className="text-base font-display font-bold text-[var(--text-primary)]">
                      Pay Online
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Instant card, international currency, and UPI checkout page secured by Razorpay's PCI-DSS Level 1 compliant gateway.
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://pages.razorpay.com/nighthack-labs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#e0fb2e] text-black font-display font-bold text-xs tracking-tight hover:opacity-90 transition-all cursor-pointer shadow-sm"
                    >
                      <span>Pay Online</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Zoho Books Portal Card */}
                <div className="p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] hover:border-[var(--border-hover)] space-y-3 flex flex-col justify-between transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#38bdf8]">CLIENT PORTAL 02</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-muted)]">Enterprise Invoices</span>
                    </div>
                    <h3 className="text-base font-display font-bold text-[var(--text-primary)]">
                      Pay from Invoice Portal
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Access your organization's statement of accounts, itemized tax invoices, payment receipts, and automated payment triggers.
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://invoice.zohosecure.in/portal/nighthacktechnologypvtltd/signin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-hover)] text-[var(--text-primary)] font-display font-bold text-xs tracking-tight transition-all cursor-pointer shadow-sm"
                    >
                      <span>Pay from Invoice Portal</span>
                      <ArrowUpRight className="w-4 h-4 text-[var(--accent-secondary)]" />
                    </a>
                  </div>
                </div>

              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--text-muted)] pt-1">
                <Lock className="w-3.5 h-3.5 text-[#e0fb2e]" />
                <span>All transactions use 256-bit TLS encryption. Financial credentials are never stored on NHTech servers.</span>
              </div>
            </div>
          </div>

          {/* Section 6: Refund & Cancellation Policy */}
          <div id="sec-6" className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff4b3e] font-bold uppercase">
              <RotateCcw className="w-4 h-4" />
              <span>Section 06 // Refund &amp; Cancellation Policy</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              6. Refund &amp; Cancellation Policy
            </h2>
            <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-4 leading-relaxed font-normal">
              <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border-l-4 border-l-[#ff4b3e] border border-[var(--border-color)] space-y-2">
                <div className="font-bold text-[var(--text-primary)] text-xs uppercase font-mono tracking-wide">
                  Policy Summary: Non-Refundable Delivered Services
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {brand.displayName} offers customized engineering solutions, bespoke AI implementations, and forward-deployed software development. Because invoices are raised solely against delivered work items, verified sprint deliverables, and approved milestone specifications, <strong>all payments made for completed and delivered services are final and non-refundable</strong>.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-[var(--text-primary)]">Key Guidelines:</h3>
                <ul className="list-disc pl-5 space-y-2 text-xs text-[var(--text-secondary)]">
                  <li>
                    <strong className="text-[var(--text-primary)]">Milestone Review &amp; Acceptance Window:</strong> Clients are provided an explicit acceptance review window (typically 5–10 business days upon milestone delivery or sprint demo) to inspect code repositories, automated tests, and deployment outputs before invoice generation or clearance.
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Project Termination &amp; Prorated Settlement:</strong> In the event either party exercises contractual termination rights under an active MSA, billing is prorated to cover actual engineering hours, committed resources, and completed deliverables up to the formal effective date of termination.
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Prepaid Retainer Adjustments:</strong> Any unutilized retainers held on account upon mutual contract dissolution will be reconciled and returned within 14 business days subject to deduction of accrued expenses.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 7: Failed & Reversible Transactions */}
          <div id="sec-7" className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-mono text-[#e0fb2e] font-bold uppercase">
              <AlertCircle className="w-4 h-4" />
              <span>Section 07 // Failed Transactions</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              7. Failed, Interrupted &amp; Reversible Transactions
            </h2>
            <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-3 leading-relaxed font-normal">
              <p>
                In the rare instance where a transaction fails due to network interruptions, bank gateway timeouts, or duplicate submissions:
              </p>
              <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
                  <strong className="text-[var(--text-primary)]">Automatic Bank Reversal:</strong> If funds are debited from your card or bank account but our payment gateway marks the transaction as failed/unconfirmed, the debited amount is automatically reversed by the acquiring and issuing banks according to standard banking protocols (typically 5–7 business days).
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
                  <strong className="text-[var(--text-primary)]">Reconciliation Assistance:</strong> If a debited amount does not reflect in your account after 7 business days, please send the Transaction Reference ID (UTR / RRN), invoice number, and bank debit timestamp to <a href="mailto:info@nighthack.in" className="text-[var(--accent-secondary)] underline">info@nighthack.in</a> for immediate gateway escalation.
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Payment Disputes & Chargebacks */}
          <div id="sec-8" className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] font-bold uppercase">
              <HelpCircle className="w-4 h-4" />
              <span>Section 08 // Dispute Protocol</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              8. Payment Disputes &amp; Chargeback Protocol
            </h2>
            <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-3 leading-relaxed font-normal">
              <p>
                We believe in complete transparency and open engineering communication. If you identify any billing discrepancies, duplicate charges, or invoicing questions, you agree to:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-xs text-[var(--text-secondary)]">
                <li>
                  <strong className="text-[var(--text-primary)]">Notify Billing Representatives First:</strong> Contact your dedicated NHTech Engagement Lead or email <a href="mailto:info@nighthack.in" className="text-[var(--accent-secondary)] underline">info@nighthack.in</a> with full details before initiating a bank chargeback or payment stoppage.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Audit Trail Verification:</strong> {brand.displayName} will provide complete timestamped Git commit histories, automated build traces, sprint logs, and signed acceptance sheets within 3 business days to reconcile billing accuracy.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Mutual Resolution:</strong> Genuine billing errors or calculation oversights will be corrected immediately via credit notes or ledger adjustments against the subsequent billing cycle.
                </li>
              </ol>
            </div>
          </div>

          {/* Section 9: Foreign Currency & Exchange Rates */}
          <div id="sec-9" className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-mono text-[#e0fb2e] font-bold uppercase">
              <Globe className="w-4 h-4" />
              <span>Section 09 // Currencies &amp; FX</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              9. Foreign Currency, Exchange Rates &amp; International Wires
            </h2>
            <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-3 leading-relaxed font-normal">
              <p>
                For international clients contracted outside of India:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-[var(--text-secondary)]">
                <li>
                  <strong className="text-[var(--text-primary)]">Multi-Currency Quotes:</strong> Invoices may be denominated in United States Dollars (USD $), Euros (EUR €), British Pounds (GBP £), or Indian Rupees (INR ₹) as contractually agreed in your Statement of Work.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Intermediary Bank Charges:</strong> All intermediary correspondent banking charges, wire conversion fees, and local remitter taxes are the responsibility of the remitting entity unless specified otherwise in the contract.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Dynamic Exchange Rates:</strong> For card gateway payments charged in foreign currencies, exchange conversion rates are determined dynamically by your card-issuing bank at the exact settlement timestamp.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 10: Security & PCI-DSS Compliance */}
          <div id="sec-10" className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] font-bold uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Section 10 // Security Standards</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              10. Data Protection, Security &amp; PCI-DSS Standards
            </h2>
            <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-3 leading-relaxed font-normal">
              <p>
                We adhere to rigorous data protection standards across all operations:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-[var(--text-secondary)]">
                <li>
                  <strong className="text-[var(--text-primary)]">Zero Storage of Sensitive Cardholder Data:</strong> {brand.displayName} does not store, process, or transmit raw credit card numbers, CVVs, or bank account PINs on our internal servers.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">PCI-DSS Level 1 Gateway Infrastructure:</strong> All card processing is handled by Razorpay / Zoho Books under audited PCI-DSS Level 1 compliance with tokenization.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Cryptographic Transport:</strong> All digital communication, checkout pages, and client portals enforce TLS 1.3 encryption with strict HTTPS protocols.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 11: Governing Law & Jurisdiction */}
          <div id="sec-11" className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-mono text-[#e0fb2e] font-bold uppercase">
              <Scale className="w-4 h-4" />
              <span>Section 11 // Jurisdiction</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              11. Governing Law &amp; Jurisdiction
            </h2>
            <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-3 leading-relaxed font-normal">
              <p>
                These Terms &amp; Conditions and all contractual relationships arising hereunder shall be governed by and construed in accordance with the laws of the Republic of India.
              </p>
              <p>
                Any dispute, controversy, or claim arising out of or relating to these terms or the breach, termination, or invalidity thereof shall be subject to the exclusive jurisdiction of the competent courts in <strong>Bengaluru, Karnataka, India</strong>, without regard to conflict of law principles.
              </p>
            </div>
          </div>

          {/* Section 12: Contact & Billing Information */}
          <div id="sec-12" className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-6 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] font-bold uppercase">
              <Mail className="w-4 h-4" />
              <span>Section 12 // Contact Information</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              12. Billing Support &amp; Grievance Redressal
            </h2>
            <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-4 leading-relaxed font-normal">
              <p>
                For any questions regarding invoice settlements, tax compliance, GST invoicing, or payment gateway reconciliation, reach out directly to our finance and operations desk:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-2">
                  <div className="text-xs font-mono font-bold text-[var(--text-primary)] uppercase">
                    Finance &amp; Accounts Desk
                  </div>
                  <div className="space-y-1 text-xs">
                    <div>
                      <span className="text-[var(--text-muted)]">Inquiries: </span>
                      <a href="mailto:info@nighthack.in" className="text-[var(--accent-secondary)] font-bold hover:underline">
                        info@nighthack.in
                      </a>
                    </div>
                    <div>
                      <span className="text-[var(--text-muted)]">Billing Support: </span>
                      <a href="mailto:info@nighthack.in" className="text-[var(--text-primary)] hover:underline">
                        info@nighthack.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-2">
                  <div className="text-xs font-mono font-bold text-[var(--text-primary)] uppercase">
                    Corporate Office
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] space-y-0.5">
                    <div className="font-bold text-[var(--text-primary)]">{brand.legalName}</div>
                    <div>{brand.contact.address}</div>
                    <div>Bengaluru, Karnataka, India</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] text-xs font-display font-bold hover:opacity-90 transition-all cursor-pointer shadow-md"
                >
                  <span>Submit Inquiry via Contact Form</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Effective Date Box */}
          <div className="p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
            <span className="w-2 h-2 rounded-full bg-[#e0fb2e]" />
            <span>Effective Date &amp; Version: <strong className="text-[var(--text-primary)]">October 2024 / v2.4</strong></span>
          </div>

        </div>

      </section>

    </div>
  );
}
