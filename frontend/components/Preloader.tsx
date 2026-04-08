"use client";
import { useEffect, useState } from "react";
import { Infinity as InfinityIcon } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";

    // Start fading out after 2.5s
    const fadeTimer = setTimeout(() => {
      setFade(true);
      // Unlock scroll as it starts fading
      document.body.style.overflow = "";
    }, 2500);

    // Completely remove from DOM after 3s (allowing 0.5s for fade transition)
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        backgroundColor: "#020014", // Deep dark blue background
      }}
    >
      <InfinityIcon
        size={80}
        color="#22D3EE" // Glowing cyan
        className="animate-spin mb-6"
        style={{
          animationDuration: "0.45s", // Fast rotation
          filter: "drop-shadow(0 0 20px rgba(34,211,238,0.8))",
        }}
      />
      <h2
        className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          color: "#22D3EE",
          textShadow: "0 0 15px rgba(34,211,238,0.7)",
        }}
      >
        Loading...
      </h2>
    </div>
  );
}
