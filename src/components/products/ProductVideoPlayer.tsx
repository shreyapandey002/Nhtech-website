import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, ExternalLink, ArrowUpRight } from 'lucide-react';

interface ProductVideoPlayerProps {
  src: string;
  title: string;
  poster?: string;
  accentColor?: string;
  badge?: string;
  liveUrl?: string;
  ctaLabel?: string;
}

export function ProductVideoPlayer({
  src,
  title,
  poster,
  accentColor = '#e0fb2e',
  badge,
  liveUrl,
  ctaLabel,
}: ProductVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Video play interrupted:", err);
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div 
      className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] shadow-xl transition-all group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(true)}
    >
      {/* Video Container with 16:9 Aspect Ratio */}
      <div className="relative aspect-video w-full bg-black/90 flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          muted={isMuted}
          loop
          controls
          preload="metadata"
          aria-label={`Demonstration video for ${title}`}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-contain sm:object-cover"
        >
          <p className="text-xs text-white p-4">
            Your browser does not support HTML5 video. View the live application at{' '}
            {liveUrl ? <a href={liveUrl} className="underline text-[#e0fb2e]">{title}</a> : title}.
          </p>
        </video>

        {/* Custom Play Overlay when paused and not yet interacting */}
        {!isPlaying && (
          <div 
            role="button"
            tabIndex={0}
            aria-label={`Play demonstration video for ${title}`}
            onClick={togglePlay}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                togglePlay();
              }
            }}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-opacity z-10 p-4"
          >
            <div 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105 bg-[var(--bg-surface)] border border-[var(--border-color)]"
              style={{ color: accentColor }}
            >
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs sm:text-sm font-display font-bold text-white tracking-wide drop-shadow-md">
                Click to Watch {title} Demo
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Clean Bottom Bar with Real Video Tagging, Quick Status & Live Link */}
      <div className="px-4 py-3 bg-[var(--bg-surface)] border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[var(--text-secondary)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-[var(--text-primary)] hover:underline flex items-center gap-1 group/link cursor-pointer"
            >
              <span>{title}</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)] group-hover/link:text-[var(--text-primary)] transition-colors" />
            </a>
          ) : (
            <span className="text-[11px] font-bold text-[var(--text-primary)] tracking-tight">
              {title}
            </span>
          )}
          {badge && (
            <span className="hidden sm:inline-block text-[10px] text-[var(--text-muted)] border-l border-[var(--border-color)] pl-2">
              {badge}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] hover:border-[var(--border-hover)] text-[10px] font-mono font-bold text-[var(--text-primary)] transition-colors shadow-sm cursor-pointer"
            >
              <span>{ctaLabel || `Visit ${title}`}</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--accent-secondary)]" />
            </a>
          )}

          <div className="flex items-center gap-1 border-l border-[var(--border-color)] pl-2">
            <button
              onClick={toggleMute}
              className="p-1 rounded-lg hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
              aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-[var(--text-muted)]" /> : <Volume2 className="w-4 h-4 text-[var(--accent-secondary)]" />}
            </button>

            <button
              onClick={toggleFullscreen}
              className="p-1 rounded-lg hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
              title="Expand Fullscreen"
              aria-label="Expand Fullscreen"
            >
              <Maximize2 className="w-4 h-4 text-[var(--text-muted)]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
