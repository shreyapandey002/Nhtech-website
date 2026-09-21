import { useEffect, useRef } from 'react';

export type WorldMode = 
  | 'sovereign' 
  | 'manufacturing' 
  | 'fintech' 
  | 'enterprise' 
  | 'vision' 
  | 'document' 
  | 'startups' 
  | 'matrix'
  | 'minimal';

interface WorldCanvasProps {
  mode: WorldMode;
  opacity?: number;
  className?: string;
}

export function WorldCanvas({ mode, opacity = 0.55, className = '' }: WorldCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for interactive distortion
    let mouse = { x: width * 0.5, y: height * 0.5, targetX: width * 0.5, targetY: height * 0.5 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particles & Geometry state
    const particleCount = mode === 'fintech' ? 90 : mode === 'manufacturing' ? 60 : 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (mode === 'fintech' ? 2.5 : 1.0),
      vy: (Math.random() - 0.5) * (mode === 'fintech' ? 2.5 : 1.0),
      radius: Math.random() * 2 + 1,
      baseRadius: Math.random() * 2 + 1,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;

    const render = () => {
      t += 0.02;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      if (mode === 'sovereign') {
        // Geodesic sovereign air-gap containment field
        const centerX = width * 0.75;
        const centerY = height * 0.45;
        const radius = Math.min(width, height) * 0.32;

        // Outer security perimeter ring
        ctx.strokeStyle = 'rgba(224, 251, 46, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([8, 8]);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + Math.sin(t * 1.5) * 8, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Hexagonal containment mesh
        const sides = 6;
        ctx.strokeStyle = 'rgba(215, 189, 249, 0.15)';
        ctx.beginPath();
        for (let s = 0; s <= sides; s++) {
          const angle = (s / sides) * Math.PI * 2 + t * 0.2;
          const x = centerX + Math.cos(angle) * (radius * 0.75);
          const y = centerY + Math.sin(angle) * (radius * 0.75);
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Inner secure core
        ctx.fillStyle = 'rgba(224, 251, 46, 0.08)';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.45, 0, Math.PI * 2);
        ctx.fill();

        // Particles moving strictly INSIDE perimeter
        particles.forEach((p, i) => {
          const dx = p.x - centerX;
          const dy = p.y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > radius * 0.7) {
            p.vx = -p.vx * 0.9;
            p.vy = -p.vy * 0.9;
            p.x = centerX + (dx / dist) * (radius * 0.68);
            p.y = centerY + (dy / dist) * (radius * 0.68);
          }
          p.x += p.vx;
          p.y += p.vy;

          ctx.fillStyle = i % 2 === 0 ? 'rgba(224, 251, 46, 0.7)' : 'rgba(215, 189, 249, 0.7)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (mode === 'manufacturing') {
        // Brutalist mechanical lattice, GigE laser scan lines & telemetry
        ctx.strokeStyle = 'rgba(224, 251, 46, 0.12)';
        ctx.lineWidth = 1;
        const gridSpacing = 60;
        for (let x = 0; x < width; x += gridSpacing) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSpacing) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Horizontal inspection beam sweeping down
        const scanY = ((t * 80) % height);
        const grad = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
        grad.addColorStop(0, 'rgba(224, 251, 46, 0)');
        grad.addColorStop(0.5, 'rgba(224, 251, 46, 0.45)');
        grad.addColorStop(1, 'rgba(224, 251, 46, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, scanY - 20, width, 40);

        // Crosshair at mouse
        ctx.strokeStyle = 'rgba(224, 251, 46, 0.5)';
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 25, 0, Math.PI * 2);
        ctx.moveTo(mouse.x - 35, mouse.y);
        ctx.lineTo(mouse.x + 35, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 35);
        ctx.lineTo(mouse.x, mouse.y + 35);
        ctx.stroke();
      } else if (mode === 'fintech') {
        // Luminous high-velocity stream vectors & anomaly ripples
        particles.forEach((p, idx) => {
          p.x += p.vx * 2;
          p.y += p.vy * 0.5 + Math.sin(t + p.phase) * 0.8;
          if (p.x > width) p.x = 0;
          if (p.x < 0) p.x = width;
          if (p.y > height) p.y = 0;
          if (p.y < 0) p.y = height;

          // Connect stream neighbors
          for (let j = idx + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 100) {
              ctx.strokeStyle = `rgba(37, 82, 245, ${0.35 * (1 - dist / 100)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }

          ctx.fillStyle = idx % 5 === 0 ? 'rgba(224, 251, 46, 0.9)' : 'rgba(37, 82, 245, 0.8)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.3, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (mode === 'vision') {
        // Skeletal kinematic joint graph & tracking landmarks
        const joints = [
          { x: width * 0.7, y: height * 0.25 }, // Head
          { x: width * 0.7, y: height * 0.38 }, // Neck
          { x: width * 0.65, y: height * 0.42 }, // Left Shoulder
          { x: width * 0.75, y: height * 0.42 }, // Right Shoulder
          { x: width * 0.62, y: height * 0.56 }, // Left Elbow
          { x: width * 0.78, y: height * 0.56 }, // Right Elbow
          { x: width * 0.60, y: height * 0.70 }, // Left Hand
          { x: width * 0.80, y: height * 0.70 }, // Right Hand
          { x: width * 0.67, y: height * 0.65 }, // Left Hip
          { x: width * 0.73, y: height * 0.65 }, // Right Hip
          { x: width * 0.66, y: height * 0.82 }, // Left Knee
          { x: width * 0.74, y: height * 0.82 }, // Right Knee
        ];

        // Animate kinematic joints with subtle sway
        const animatedJoints = joints.map((j, i) => ({
          x: j.x + Math.sin(t * 2 + i) * 6,
          y: j.y + Math.cos(t * 1.5 + i) * 4,
        }));

        // Draw bone connections
        const bones = [
          [0, 1], [1, 2], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7],
          [1, 8], [1, 9], [8, 10], [9, 11]
        ];

        ctx.strokeStyle = 'rgba(215, 189, 249, 0.45)';
        ctx.lineWidth = 1.5;
        bones.forEach(([a, b]) => {
          ctx.beginPath();
          ctx.moveTo(animatedJoints[a].x, animatedJoints[a].y);
          ctx.lineTo(animatedJoints[b].x, animatedJoints[b].y);
          ctx.stroke();
        });

        // Draw joint landmarks
        animatedJoints.forEach((j, i) => {
          ctx.fillStyle = i === 0 ? '#e0fb2e' : '#d7bdf9';
          ctx.beginPath();
          ctx.arc(j.x, j.y, 4, 0, Math.PI * 2);
          ctx.fill();
        });
      } else {
        // Default Ambient Matrix & Constellation
        particles.forEach((p, idx) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x > width) p.x = 0;
          if (p.x < 0) p.x = width;
          if (p.y > height) p.y = 0;
          if (p.y < 0) p.y = height;

          ctx.fillStyle = idx % 3 === 0 ? 'rgba(224, 251, 46, 0.6)' : 'rgba(215, 189, 249, 0.5)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity }}
    />
  );
}
