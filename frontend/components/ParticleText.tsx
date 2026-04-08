"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

const COLORS = [
  "#A855F7", "#C084FC", "#D8B4FE",
  "#06B6D4", "#38BDF8", "#E2E8F0",
  "#7C3AED", "#60A5FA",
];

const REPULSION_RADIUS = 105;
const REPULSION_STRENGTH = 8;
const SPRING = 0.075;
const FRICTION = 0.80;

export default function ParticleText() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const buildParticles = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);

      // Render text to an offscreen canvas to sample pixel positions
      const offscreen = document.createElement("canvas");
      offscreen.width = w;
      offscreen.height = h;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      // Dynamically size and position text based on container width
      offCtx.fillStyle = "#fff";
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      
      // Measure dynamic width to ensure no letters (like H or e) get clipped
      if (w < 600) {
        // Mobile: 2 lines to strictly fit text inside screen safe area
        const availableW = w * 0.9; // 5% horizontal padding each side
        offCtx.font = "900 100px Orbitron, sans-serif";
        const width1 = offCtx.measureText("Hardik").width;
        const width2 = offCtx.measureText("Sonawane").width;
        const maxTextWidth = Math.max(width1, width2);
        
        const scale = availableW / maxTextWidth;
        const mobileFontSize = Math.min(100 * scale, 85);
        
        offCtx.font = `900 ${mobileFontSize}px Orbitron, sans-serif`;
        const offset = mobileFontSize * 0.55;
        // Adjusted heights slightly to ensure perfect vertical centering within the 160px box
        offCtx.fillText("Hardik", w / 2, h / 2 - offset + 10);
        offCtx.fillText("Sonawane", w / 2, h / 2 + offset + 10);
      } else {
        // Desktop: single line scaled down automatically to fit screen width
        const availableW = w * 0.9; // 5% horizontal padding each side
        offCtx.font = "900 100px Orbitron, sans-serif";
        const textWidth = offCtx.measureText("Hardik Sonawane").width;
        
        const scale = availableW / textWidth;
        const fontSize = Math.min(100 * scale, 125);
        
        offCtx.font = `900 ${fontSize}px Orbitron, sans-serif`;
        // +5 to baseline to perfectly center it visually in the box
        offCtx.fillText("Hardik Sonawane", w / 2, h / 2 + 5);
      }

      const imageData = offCtx.getImageData(0, 0, w, h);
      const data = imageData.data;

      // Sample pixels — gap=2 gives ~35% more particles than gap=3
      const gap = 1;
      const newParticles: Particle[] = [];

      for (let y = 0; y < h; y += gap) {
        for (let x = 0; x < w; x += gap) {
          const idx = (y * w + x) * 4;
          if (data[idx + 3] > 128) {
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            newParticles.push({
              x: Math.random() * w,      // start scattered
              y: Math.random() * h,
              originX: x,
              originY: y,
              vx: 0,
              vy: 0,
              size: Math.random() * 0.6 + 0.1,
              color,
            });
          }
        }
      }

      particlesRef.current = newParticles;
    };

    buildParticles();

    const animate = () => {
      if (!ctx || !canvas) return;
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particlesRef.current) {
        // Spring force towards origin
        const dx = p.originX - p.x;
        const dy = p.originY - p.y;
        p.vx += dx * SPRING;
        p.vy += dy * SPRING;

        // Repulsion from cursor
        const cdx = p.x - mx;
        const cdy = p.y - my;
        const dist = Math.sqrt(cdx * cdx + cdy * cdy);

        if (dist < REPULSION_RADIUS && dist > 0) {
          const force = (REPULSION_RADIUS - dist) / REPULSION_RADIUS;
          p.vx += (cdx / dist) * force * REPULSION_STRENGTH;
          p.vy += (cdy / dist) * force * REPULSION_STRENGTH;
        }

        // Friction
        p.vx *= FRICTION;
        p.vy *= FRICTION;

        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Track mouse relative to canvas
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Rebuild on resize
    const handleResize = () => {
      cancelAnimationFrame(animFrameRef.current);
      buildParticles();
      animate();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full relative max-[600px]:h-[160px] min-[600px]:h-[130px]">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
