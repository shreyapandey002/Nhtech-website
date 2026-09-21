import { ShieldCheck, Sparkles } from 'lucide-react';
import { brand } from '../../config/brand';

interface Props {
  variant?: 'compact' | 'hero' | 'card';
  className?: string;
}

export function OpenAIPartnerBadge({ variant = 'compact', className = '' }: Props) {
  if (variant === 'hero') {
    return (
      <div 
        id="openai-partner-hero-badge"
        className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#16191f] border border-[#262a33] text-xs text-[#9ca3af] hover:border-[#384152] transition-colors ${className}`}
      >
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-semibold text-[#e5e7eb] tracking-wide">
          {brand.partnerships.openai.status}
        </span>
        <span className="text-[#4b5563]">|</span>
        <span className="text-[#9ca3af] hidden sm:inline">
          {brand.partnerships.openai.specialization}
        </span>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div 
        id="openai-partner-card"
        className={`p-5 rounded-xl bg-[#111317] border border-[#1f232b] hover:border-[#2e333d] transition-all ${className}`}
      >
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-emerald-400 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Partnership
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1b1f27] text-[#9ca3af] border border-[#272d38]">
            Agent Architecture
          </span>
        </div>
        <h4 className="text-base font-semibold text-white tracking-tight mb-1">
          {brand.partnerships.openai.status}
        </h4>
        <p className="text-xs text-[#9ca3af] leading-relaxed">
          {brand.partnerships.openai.specialization}. Rigorous design of resilient agentic systems and production AI runtimes.
        </p>
      </div>
    );
  }

  return (
    <div 
      id="openai-partner-compact-badge"
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#12151b] border border-[#1f232b] text-[11px] text-[#9ca3af] ${className}`}
    >
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
      <span className="font-medium text-[#d1d5db]">{brand.partnerships.openai.status}</span>
      <span className="text-[#4b5563]">•</span>
      <span className="text-[#9ca3af]">{brand.partnerships.openai.specialization}</span>
    </div>
  );
}
