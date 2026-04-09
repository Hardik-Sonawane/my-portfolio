"use client";
import { useEffect, useRef } from "react";

const SECTION_PLAN: { id: string; duration: number }[] = [
  { id: "hero",           duration: 1 },
  { id: "about",          duration: 1 },
  { id: "skills",         duration: 1 },
  { id: "core-strengths", duration: 1 },
  { id: "projects",       duration: 1 },
  { id: "experience",     duration: 1 },
  { id: "certifications", duration: 1 },
  { id: "education",      duration: 1 },
  { id: "contact",        duration: 1 },
];

export default function VideoBackground() {
  const videoRef        = useRef<HTMLVideoElement>(null);
  const fwdTimerRef     = useRef<ReturnType<typeof setTimeout> | null>(null);
  const revIntervalRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const prevScrollYRef  = useRef(0);

  /* ── helpers ─────────────────────────────────────────── */

  const stopAll = () => {
    if (fwdTimerRef.current)    { clearTimeout(fwdTimerRef.current);    fwdTimerRef.current   = null; }
    if (revIntervalRef.current) { clearInterval(revIntervalRef.current); revIntervalRef.current = null; }
    const v = videoRef.current;
    if (v && !v.paused) v.pause();
  };

  /** Play forward for `seconds` seconds then freeze */
  const playForward = (seconds: number) => {
    const v = videoRef.current;
    if (!v) return;
    stopAll();
    v.play().catch(() => {/* autoplay blocked */});
    fwdTimerRef.current = setTimeout(() => {
      if (v && !v.paused) v.pause();
      fwdTimerRef.current = null;
    }, seconds * 1000);
  };

  /**
   * Play backward for `seconds` of video-time.
   * Uses setInterval to manually decrement currentTime (cross-browser safe).
   */
  const playBackward = (seconds: number) => {
    const v = videoRef.current;
    if (!v) return;
    stopAll();
    if (v.currentTime <= 0) return; // already at beginning

    const startTime  = v.currentTime;
    const targetTime = Math.max(startTime - seconds, 0);
    const totalDelta = startTime - targetTime;

    const FPS        = 30;
    const intervalMs = 1000 / FPS;
    const stepPerTick = totalDelta / (seconds * FPS);

    let current = startTime;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const vid = videoRef.current;
      // Note: we store raf id in revIntervalRef (using it as a generic handle)
      if (!vid) { 
        if (revIntervalRef.current) cancelAnimationFrame(revIntervalRef.current as number); 
        revIntervalRef.current = null; 
        return; 
      }

      const deltaMs = now - lastTime;
      lastTime = now;
      
      const step = (deltaMs / 1000) * (totalDelta / seconds);
      current -= step;

      if (current <= targetTime) {
        vid.currentTime = targetTime;
        if (revIntervalRef.current) cancelAnimationFrame(revIntervalRef.current as number);
        revIntervalRef.current = null;
      } else {
        vid.currentTime = current;
        revIntervalRef.current = requestAnimationFrame(tick) as any;
      }
    };

    revIntervalRef.current = requestAnimationFrame(tick) as any;
  };

  /* ── mount ────────────────────────────────────────────── */

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.currentTime = 0;

    // Track scroll direction
    let scrollRafId: number | null = null;
    const trackScroll = () => {
      if (scrollRafId) return;
      scrollRafId = requestAnimationFrame(() => {
        scrollRafId = null;
        prevScrollYRef.current = window.scrollY;
      });
    };
    window.addEventListener("scroll", trackScroll, { passive: true });

    // Auto-play 1s on load (hero)
    const onCanPlay = () => playForward(1);
    v.addEventListener("canplaythrough", onCanPlay, { once: true });
    if (v.readyState >= 3) playForward(1);

    // IntersectionObserver for every section except hero
    const observers: IntersectionObserver[] = [];

    SECTION_PLAN.slice(1).forEach(({ id, duration }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry.isIntersecting) return;

          // Determine scroll direction at the moment the section enters view
          const scrollingDown = window.scrollY >= prevScrollYRef.current;

          if (scrollingDown) {
            playForward(duration);
          } else {
            playBackward(duration);
          }
        },
        { threshold: 0.2 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      v.removeEventListener("canplaythrough", onCanPlay);
      window.removeEventListener("scroll", trackScroll);
      stopAll();
      observers.forEach((o) => o.disconnect());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── render ───────────────────────────────────────────── */

  return (
    <>
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        loop={false}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
          pointerEvents: "none",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      >
        <source src="/expansion.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg,rgba(3,0,13,.50) 0%,rgba(3,0,13,.38) 50%,rgba(3,0,13,.58) 100%)",
          zIndex: -1,
          pointerEvents: "none",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      />
    </>
  );
}
