import { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * Calm Atmospheric Light Field
 * Provides subtle ambient depth that adapts seamlessly to both dark and light modes.
 * Features slow chromatic gradients, gentle depth layers, and minimal particle filaments.
 */
export function IntelligenceCore3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width * 0.5;
    let mouseY = height * 0.3;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Subtle ambient color orbs (restrained palette: violet and subtle lime glow)
    const isDark = theme === 'dark';
    const orbs = isDark
      ? [
          { x: width * 0.3, y: height * 0.2, radius: 550, color: 'rgba(215, 189, 249, 0.06)', vx: 0.15, vy: 0.12, phase: 0 },
          { x: width * 0.75, y: height * 0.4, radius: 600, color: 'rgba(224, 251, 46, 0.035)', vx: -0.12, vy: 0.15, phase: 2 },
          { x: width * 0.45, y: height * 0.8, radius: 500, color: 'rgba(215, 189, 249, 0.04)', vx: 0.1, vy: -0.12, phase: 4 }
        ]
      : [
          { x: width * 0.3, y: height * 0.2, radius: 550, color: 'rgba(99, 54, 168, 0.035)', vx: 0.15, vy: 0.12, phase: 0 },
          { x: width * 0.75, y: height * 0.4, radius: 600, color: 'rgba(120, 160, 20, 0.025)', vx: -0.12, vy: 0.15, phase: 2 },
          { x: width * 0.45, y: height * 0.8, radius: 500, color: 'rgba(99, 54, 168, 0.025)', vx: 0.1, vy: -0.12, phase: 4 }
        ];

    // Minimal floating filaments
    const particleCount = Math.min(24, Math.floor(width / 50));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 1.5 + 0.5,
      alpha: isDark ? Math.random() * 0.25 + 0.08 : Math.random() * 0.15 + 0.05
    }));

    let time = 0;

    const render = () => {
      time += 0.003;
      mouseX += (targetMouseX - mouseX) * 0.025;
      mouseY += (targetMouseY - mouseY) * 0.025;

      ctx.clearRect(0, 0, width, height);

      // 1. Slow, breathing chromatic gradients
      for (const orb of orbs) {
        orb.x += orb.vx + Math.sin(time + orb.phase) * 0.3;
        orb.y += orb.vy + Math.cos(time * 0.8 + orb.phase) * 0.3;

        if (orb.x < -150) orb.x = width + 150;
        if (orb.x > width + 150) orb.x = -150;
        if (orb.y < -150) orb.y = height + 150;
        if (orb.y > height + 150) orb.y = -150;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(0.7, orb.color.replace(/[\d\.]+\)$/, '0.01)'));
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Subtle cursor reaction
      const mouseGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 350);
      mouseGrad.addColorStop(0, isDark ? 'rgba(215, 189, 249, 0.035)' : 'rgba(99, 54, 168, 0.02)');
      mouseGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 350, 0, Math.PI * 2);
      ctx.fill();

      // 3. Subtle particles
      ctx.fillStyle = isDark ? '#d7bdf9' : '#6336a8';
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div 
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-90"
      />
      {/* Subtle fine dot grid texture */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />
    </div>
  );
}
