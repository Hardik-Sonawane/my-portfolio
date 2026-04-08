import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#03000d",
        surface: "#0a0015",
        primary: "#7C3AED",
        accent: "#06B6D4",
        glow: "#A855F7",
        neonBlue: "#3B82F6",
        neonCyan: "#22D3EE",
        textPrimary: "#E2E8F0",
        textMuted: "#94A3B8",
        glass: "rgba(255,255,255,0.03)",
        glassBorder: "rgba(168,85,247,0.2)",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "border-rotate": "borderRotate 4s linear infinite",
        "text-glow": "textGlow 2s ease-in-out infinite",
        "scan": "scan 4s linear infinite",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "typing": "typing 3.5s steps(40) infinite alternate",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(168,85,247,0.4), 0 0 40px rgba(168,85,247,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(168,85,247,0.8), 0 0 80px rgba(168,85,247,0.4), 0 0 120px rgba(168,85,247,0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        textGlow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(168,85,247,0.5)" },
          "50%": { textShadow: "0 0 30px rgba(168,85,247,1), 0 0 60px rgba(168,85,247,0.5)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        borderRotate: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundImage: {
        "neural-gradient": "radial-gradient(ellipse at top, #1a0035 0%, #03000d 60%)",
        "hero-gradient": "radial-gradient(ellipse 80% 80% at 50% -10%, rgba(124,58,237,0.3), transparent)",
        "glow-radial": "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
        "shimmer-gradient": "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)",
        "card-border": "linear-gradient(135deg, rgba(168,85,247,0.5), rgba(6,182,212,0.5), rgba(168,85,247,0.5))",
        "neon-line": "linear-gradient(90deg, transparent, #A855F7, #06B6D4, #A855F7, transparent)",
      },
      dropShadow: {
        "glow": "0 0 20px rgba(168,85,247,0.8)",
        "glow-cyan": "0 0 20px rgba(6,182,212,0.8)",
        "glow-strong": "0 0 40px rgba(168,85,247,1)",
      },
      backdropBlur: {
        "xs": "2px",
      },
    },
  },
  plugins: [],
};

export default config;
