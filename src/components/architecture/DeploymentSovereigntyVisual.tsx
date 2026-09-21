import { useState } from 'react';
import { SovereignTopologyStage, SovereignMode } from './SovereignTopologyStage';
import { Shield, Key, Cpu, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

interface DeploymentSovereigntyVisualProps {
  onNavigateContact?: () => void;
}

export function DeploymentSovereigntyVisual({ onNavigateContact }: DeploymentSovereigntyVisualProps) {
  const [activeMode, setActiveMode] = useState<SovereignMode>('vpc');

  return (
    <div id="controlled-ai-architecture" className="rounded-3xl bg-[#07060a] border border-[#d7bdf9]/20 p-6 sm:p-10 space-y-8 shadow-2xl">
      {/* Title Header */}
      <div className="max-w-3xl space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#e0fb2e] uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" />
          <span>SOVEREIGN ARCHITECTURAL CONTROL</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-display font-black text-[#f7f4ec] tracking-tight">
          Your infrastructure. Your data. Your perimeter.
        </h3>
        <p className="text-xs sm:text-sm text-[#f7f4ec]/75 font-light leading-relaxed">
          We design AI systems around your exact infrastructure constraints instead of forcing enterprise workloads through third-party multi-tenant APIs. Prompts, embeddings, and fine-tuned model weights execute inside your approved perimeter.
        </p>
      </div>

      {/* The 3-Distinct Sovereign Topologies Simulator */}
      <SovereignTopologyStage
        initialMode={activeMode}
        onModeChange={(m) => setActiveMode(m)}
        showCardDetails={true}
      />

      {/* Verified Sovereign Guarantees Matrix */}
      <div className="p-6 rounded-2xl bg-[#120a1f]/70 border border-[#d7bdf9]/20 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="space-y-1">
          <div className="font-mono text-[#e0fb2e] font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>ZERO CLOUD TELEMETRY</span>
          </div>
          <p className="text-[#f7f4ec]/70 font-light leading-relaxed font-sans">
            Inference requests and user documents do not train foundation models or leave private network routing.
          </p>
        </div>

        <div className="space-y-1">
          <div className="font-mono text-[#2552f5] font-bold flex items-center gap-1.5">
            <Key className="w-3.5 h-3.5" />
            <span>CLIENT-OWNED ENCRYPTION</span>
          </div>
          <p className="text-[#f7f4ec]/70 font-light leading-relaxed font-sans">
            Master KMS encryption keys and hardware HSM modules remain strictly within your organizational custody.
          </p>
        </div>

        <div className="space-y-1">
          <div className="font-mono text-[#d7bdf9] font-bold flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>FULL CODEBASE HANDOVER</span>
          </div>
          <p className="text-[#f7f4ec]/70 font-light leading-relaxed font-sans">
            100% intellectual property ownership of weights, agent state graphs, and deployment automation pipelines.
          </p>
        </div>
      </div>
    </div>
  );
}
