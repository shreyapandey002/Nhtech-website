import { useState } from 'react';
import { Play, Image as ImageIcon, Layers, Eye } from 'lucide-react';
import { MediaAsset, mediaConfig } from '../../config/media';

interface MediaPlaceholderProps {
  type?: 'image' | 'video';
  label: string;
  caption?: string;
  aspectRatio?: '16:9' | '4:3' | 'portrait' | 'cinematic' | 'square' | 'auto';
  mediaId?: string;
  asset?: MediaAsset | null;
  className?: string;
  badge?: string;
  interactivePreview?: boolean;
  theme?: 'dark' | 'light';
}

export function MediaPlaceholder({
  type = 'video',
  label,
  caption,
  aspectRatio = '16:9',
  mediaId,
  asset,
  className = '',
  badge,
  theme = 'dark',
}: MediaPlaceholderProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Determine active media asset if configured
  const configuredAsset = asset || (mediaId && mediaId in mediaConfig ? (mediaConfig[mediaId as keyof typeof mediaConfig] as MediaAsset | null) : null);
  const hasRealMedia = Boolean(configuredAsset?.src);
  const showDevLabels = mediaConfig.showDevMediaLabels;

  // Aspect ratio classes
  const aspectClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    'portrait': 'aspect-[3/4]',
    'cinematic': 'aspect-[21/9]',
    'square': 'aspect-square',
    'auto': 'h-full min-h-[260px]',
  }[aspectRatio];

  if (hasRealMedia && configuredAsset) {
    return (
      <div 
        className={`relative overflow-hidden rounded-2xl border ${
          theme === 'light' ? 'border-[#d0d7de] bg-[#f0f3f8]' : 'border-[#1e232e] bg-[#0c0e12]'
        } ${aspectClasses} ${className}`}
      >
        {configuredAsset.type === 'video' ? (
          <video
            src={configuredAsset.src!}
            poster={configuredAsset.poster}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={configuredAsset.src!}
            alt={configuredAsset.alt || label}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        )}
        {caption && (
          <div className="absolute bottom-0 inset-x-0 p-3.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-[11px] text-[#cbd5e1]">
            {caption}
          </div>
        )}
      </div>
    );
  }

  const isLight = theme === 'light';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
        isLight
          ? 'border border-[#d2d8e2] bg-gradient-to-br from-[#ffffff] via-[#f7f9fc] to-[#eef2f7] hover:border-[#a0aec0] text-[#1a202c]'
          : 'border border-[#1a1e27] bg-gradient-to-br from-[#12151d] via-[#0d0f14] to-[#07080a] hover:border-[#2f384a] hover:shadow-2xl hover:shadow-black/70 text-white'
      } ${aspectClasses} ${className}`}
    >
      {/* Background Micro Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none group-hover:opacity-[0.07] transition-opacity"
        style={{
          backgroundImage: `linear-gradient(to right, ${isLight ? '#000000' : '#ffffff'} 1px, transparent 1px), linear-gradient(to bottom, ${isLight ? '#000000' : '#ffffff'} 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Cinematic Ambient Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none transition-all duration-500 ${
        isLight ? 'bg-blue-500/[0.04] group-hover:bg-emerald-500/[0.08]' : 'bg-emerald-500/[0.03] group-hover:bg-emerald-500/[0.07]'
      }`} />

      {/* Precision Lens Crosshair Marks */}
      <div className={`absolute top-3.5 left-3.5 w-3 h-3 border-t border-l rounded-tl-sm transition-colors ${
        isLight ? 'border-[#a0aec0] group-hover:border-emerald-600' : 'border-[#363f50] group-hover:border-emerald-400'
      }`} />
      <div className={`absolute top-3.5 right-3.5 w-3 h-3 border-t border-r rounded-tr-sm transition-colors ${
        isLight ? 'border-[#a0aec0] group-hover:border-emerald-600' : 'border-[#363f50] group-hover:border-emerald-400'
      }`} />
      <div className={`absolute bottom-3.5 left-3.5 w-3 h-3 border-b border-l rounded-bl-sm transition-colors ${
        isLight ? 'border-[#a0aec0] group-hover:border-emerald-600' : 'border-[#363f50] group-hover:border-emerald-400'
      }`} />
      <div className={`absolute bottom-3.5 right-3.5 w-3 h-3 border-b border-r rounded-br-sm transition-colors ${
        isLight ? 'border-[#a0aec0] group-hover:border-emerald-600' : 'border-[#363f50] group-hover:border-emerald-400'
      }`} />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider uppercase transition-colors ${
            isLight
              ? 'bg-[#e4e8f0] border border-[#cbd3e0] text-[#4a5568]'
              : 'bg-[#151821] border border-[#232a38] text-[#9ca3af] group-hover:text-emerald-400 group-hover:border-emerald-500/30'
          }`}>
            {type === 'video' ? (
              <>
                <Play className="w-2.5 h-2.5 fill-current" />
                <span>CINEMATIC STAGE</span>
              </>
            ) : (
              <>
                <ImageIcon className="w-2.5 h-2.5" />
                <span>VISUAL LAYER</span>
              </>
            )}
          </span>

          {badge && (
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
              isLight ? 'bg-[#edf1f7] text-[#64748b]' : 'bg-[#10131a] text-[#717b8c] border border-[#1b202a]'
            }`}>
              {badge}
            </span>
          )}
        </div>

        <span className={`text-[10px] font-mono tracking-widest ${isLight ? 'text-[#8c9aa8]' : 'text-[#485366]'}`}>
          {aspectRatio.toUpperCase()}
        </span>
      </div>

      {/* Center Framing */}
      <div className="relative z-10 my-auto text-center space-y-3.5 py-3">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 group-hover:scale-105 ${
          isLight
            ? 'bg-[#ffffff] border border-[#cbd5e1] text-emerald-600 shadow-md group-hover:border-emerald-400'
            : 'bg-[#141822] border border-[#242c3b] text-emerald-400 shadow-inner group-hover:bg-[#191f2d] group-hover:border-emerald-400/50'
        }`}>
          {type === 'video' ? (
            <Play className="w-5 h-5 fill-current ml-0.5 opacity-90" />
          ) : (
            <Layers className="w-5 h-5 opacity-90" />
          )}
        </div>

        <div className="space-y-1.5 max-w-md mx-auto">
          <h4 className={`text-base sm:text-lg font-display font-semibold tracking-tight transition-colors ${
            isLight ? 'text-[#0f172a] group-hover:text-emerald-700' : 'text-white group-hover:text-emerald-300'
          }`}>
            {label}
          </h4>
          {showDevLabels && (
            <p className={`text-xs font-light leading-relaxed ${isLight ? 'text-[#64748b]' : 'text-[#7d8798]'}`}>
              {caption || (type === 'video' ? 'Replace with NHTech showreel / system montage video' : 'Replace with production system visual')}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Frame Details */}
      <div className={`relative z-10 pt-3.5 border-t flex items-center justify-between text-[11px] ${
        isLight ? 'border-[#e2e8f0] text-[#64748b]' : 'border-[#151922] text-[#4d5668]'
      }`}>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] tracking-wide uppercase">Controlled System Asset</span>
        </div>
        <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
          <Eye className="w-3 h-3" />
          <span className="text-[10px] font-mono">STAGE READY</span>
        </div>
      </div>
    </div>
  );
}

