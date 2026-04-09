"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let hoveredCard: HTMLElement | null = null;

    let rafId: number | null = null;
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      lastPos.current = { x, y };

      if (rafId) return; // wait for next frame

      rafId = requestAnimationFrame(() => {
        rafId = null;
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
      });
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      if (hoveredCard) {
        hoveredCard.style.transform = '';
      }
    };
  }, []);

  return null;
}
