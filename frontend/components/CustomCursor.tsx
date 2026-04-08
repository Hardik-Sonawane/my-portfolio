"use client";
import { useEffect, useRef, useState, useCallback } from "react";

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: "fog" | "spark" | "orb";
}

const HOLLOW_PURPLE_COLORS = [
  "#FF0033", // red
  "#00BFFF", // blue
];

const DUST_FOG_COLORS = [
  "#ffffff", // pure white
  "#e8e8f0", // cool white
  "#d0d0e8", // light lavender-white
  "#c8c8d8", // pale silver
  "#b8b8cc", // dusty grey
  "#e5e5f0", // near white with blue tint
];

let particleId = 0;

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<TrailParticle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const spawnParticles = useCallback((x: number, y: number, dx: number, dy: number) => {
    const speed = Math.sqrt(dx * dx + dy * dy);
    if (speed < 0.5) return;

    const count = Math.min(Math.floor(speed * 0.48) + 1, 7);

    for (let i = 0; i < count; i++) {
      const type: TrailParticle["type"] = "fog";

      const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * Math.PI * 1.4;
      const spd = Math.random() * speed * 0.6 + 0.5;
      const color = DUST_FOG_COLORS[Math.floor(Math.random() * DUST_FOG_COLORS.length)];

      particlesRef.current.push({
        id: particleId++,
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
        vx: Math.cos(angle) * spd * -0.5 + (Math.random() - 0.5) * 1.5,
        vy: Math.sin(angle) * spd * -0.5 + (Math.random() - 0.5) * 1.5,
        life: 1,
        maxLife: 40 + Math.random() * 30,
        size: 8 + Math.random() * 14,
        color,
        type,
      });
    }

    // Keep particle count in check
    if (particlesRef.current.length > 220) {
      particlesRef.current = particlesRef.current.slice(-180);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let hoveredCard: HTMLElement | null = null;

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      mouseRef.current = { x, y };

      // Move dot cursor immediately
      if (cursorRef.current) {
        cursorRef.current.style.left = x + "px";
        cursorRef.current.style.top = y + "px";
      }

      spawnParticles(x, y, dx, dy);
      lastPos.current = { x, y };

      // 3D Glass Card Physics
      const target = e.target as HTMLElement | null;
      const card = target && typeof target.closest === 'function' ? target.closest('.glass-card') as HTMLElement | null : null;

      if (card) {
        if (hoveredCard && hoveredCard !== card) {
           hoveredCard.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
           hoveredCard.style.transform = '';
        }
        hoveredCard = card;

        const rect = card.getBoundingClientRect();
        const cardX = x - rect.left;
        const cardY = y - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((cardY - centerY) / centerY) * -12; // tilt based on Y
        const rotateY = ((cardX - centerX) / centerX) * 12;  // tilt based on X
        
        // Snappy transform transition but keep smooth background/shadow transitions
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.4s ease, border-color 0.4s ease, background 0.4s ease'; 
        card.style.transform = `perspective(1000px) translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      } else {
        if (hoveredCard) {
           hoveredCard.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
           hoveredCard.style.transform = '';
           hoveredCard = null;
        }
      }
    };

    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);

    // Burst on click
    const onClickBurst = (e: MouseEvent) => {
      for (let i = 0; i < 30; i++) {
        const angle = (Math.PI * 2 * i) / 30;
        const spd = 2 + Math.random() * 4;
        const color = HOLLOW_PURPLE_COLORS[Math.floor(Math.random() * HOLLOW_PURPLE_COLORS.length)];
        particlesRef.current.push({
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          life: 1,
          maxLife: 45 + Math.random() * 30,
          size: 2 + Math.random() * 6,
          color,
          type: "orb",
        });
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("click", onClickBurst);

    // Hover detection
    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);
    const interactables = document.querySelectorAll<HTMLElement>("a, button, .glass-card, .skill-tag, input, textarea");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    // ── Animation loop ──────────────────────────────────────────
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animate lagging ring
      const rx = ringPosRef.current.x;
      const ry = ringPosRef.current.y;
      ringPosRef.current.x += (mouseRef.current.x - rx) * 0.10;
      ringPosRef.current.y += (mouseRef.current.y - ry) * 0.10;

      if (ringRef.current) {
        ringRef.current.style.left = ringPosRef.current.x + "px";
        ringRef.current.style.top = ringPosRef.current.y + "px";
      }

      // Draw & update particles
      const alive: TrailParticle[] = [];
      for (const p of particlesRef.current) {
        p.life -= 1 / p.maxLife;
        if (p.life <= 0) continue;

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94;
        p.vy *= 0.94;

        const alpha = p.life * (p.type === "fog" ? 0.17 : p.type === "spark" ? 0.9 : 0.7);
        const radius = p.size * p.life;

        ctx.save();
        ctx.globalAlpha = alpha;

        if (p.type === "fog") {
          // Soft white dust fog blob
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 2.5);
          grad.addColorStop(0, p.color + "AA");
          grad.addColorStop(0.5, p.color + "44");
          grad.addColorStop(1, "transparent");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 2.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "spark") {
          // Electric spark line
          ctx.strokeStyle = p.color;
          ctx.lineWidth = radius * 0.8;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          const len = radius * 4;
          const angle = Math.atan2(p.vy, p.vx);
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - Math.cos(angle) * len, p.y - Math.sin(angle) * len);
          ctx.stroke();
        } else {
          // Glowing orb
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 1.5);
          grad.addColorStop(0, "#ffffff");
          grad.addColorStop(0.3, p.color);
          grad.addColorStop(1, "transparent");
          ctx.fillStyle = grad;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
        alive.push(p);
      }
      particlesRef.current = alive;

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("click", onClickBurst);
    };
  }, [spawnParticles]);

  return (
    <>
      {/* Full-screen trail canvas */}
      <canvas
        ref={canvasRef}
        className="hollow-purple-canvas"
        aria-hidden="true"
      />

      {/* Inner dot — hollow purple orb */}
      <div
        ref={cursorRef}
        className={`hp-cursor-dot ${clicking ? "clicking" : ""}`}
        aria-hidden="true"
      />

      {/* Outer lagging ring */}
      <div
        ref={ringRef}
        className={`hp-cursor-ring ${hovering ? "hovering" : ""} ${clicking ? "clicking" : ""}`}
        aria-hidden="true"
      />
    </>
  );
}
