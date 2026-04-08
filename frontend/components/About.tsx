"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  MapPin, GraduationCap, Briefcase, Zap, Code2, BookOpen, Target
} from "lucide-react";

const bentoCards = [
  {
    className: "bento-span-2 bento-row-2",
    gridColumn: "span 2",
    gridRow: "span 2",
    content: "main-profile",
  },
  {
    className: "",
    content: "location",
  },
  {
    className: "",
    content: "education",
  },
  {
    className: "",
    content: "experience",
  },
  {
    className: "bento-span-2",
    gridColumn: "span 2",
    content: "bio",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="relative py-10 md:py-16 px-4 md:px-6"
      style={{
        background:
        "linear-gradient(to bottom, rgba(3,0,13,0.60), rgba(6,0,17,0.68), rgba(3,0,13,0.60))",
      }}
    >
      {/* Glow accents */}
      <div
        className="absolute left-0 top-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-line" />
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#A78BFA", fontFamily: "Space Grotesk" }}>
            — Who I Am
          </p>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">AI/ML Engineer passionate about building intelligent systems</p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Main Profile Card — spans 2 cols & 2 rows on large screens */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-8 glow-box sm:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            {/* Avatar */}
            <div className="relative mb-6 mx-auto w-32 h-32 flex items-center justify-center">
              {/* Image Container */}
              <div 
                className="w-24 h-24 rounded-full relative z-10 overflow-hidden"
                style={{
                  background: "#03000d", // fallback if image loads slowly
                }}
              >
                <Image 
                  src="/profilepic.jpeg" 
                  alt="Hardik Sonawane Avatar" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  sizes="(max-width: 768px) 100vw, 96px"
                  priority
                />
              </div>
              
              {/* 3D Purple Glowing Rotating Border */}
              <div
                className="absolute inset-0 m-auto rounded-full"
                style={{
                  width: "110px",
                  height: "110px",
                  border: "3px solid transparent",
                  borderTopColor: "#A855F7",
                  borderBottomColor: "rgba(168,85,247,0.3)",
                  borderRightColor: "#D8B4FE", // lighter purple
                  borderLeftColor: "rgba(168,85,247,0.1)",
                  boxShadow: "0 0 25px rgba(168,85,247,0.8), inset 0 0 15px rgba(168,85,247,0.5)",
                  animation: "rotateGlow 3s linear infinite",
                  zIndex: 0
                }}
              />
            </div>

            <h3
              className="text-2xl font-bold mb-1 text-center"
              style={{ fontFamily: "Orbitron", color: "#E2E8F0" }}
            >
              Hardik Sonawane
            </h3>
            <p className="text-center mb-6 text-sm" style={{ color: "#A855F7", fontFamily: "Space Grotesk" }}>
              AI/ML Engineer · Computer Vision · Full-Stack
            </p>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "#94A3B8" }}>
              Passionate AI/ML Engineer and Computer Science student specializing in Data Science,
              with hands-on experience building real-world intelligent systems — from CNN-based
              computer vision models to full-stack AI-integrated web applications.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { label: "Projects", value: "7+" },
                { label: "Hackathons", value: "8+" },
                { label: "Technologies", value: "15+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl"
                  style={{
                    background: "rgba(168,85,247,0.08)",
                    border: "1px solid rgba(168,85,247,0.15)",
                  }}
                >
                  <div
                    className="text-xl font-bold"
                    style={{ fontFamily: "Orbitron", color: "#A855F7" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "#64748B" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div variants={cardVariants} className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(168,85,247,0.15)" }}
              >
                <MapPin size={20} style={{ color: "#A855F7" }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: "#94A3B8" }}>Location</span>
            </div>
            <p className="text-lg font-bold" style={{ fontFamily: "Orbitron", color: "#E2E8F0", fontSize: "1rem" }}>
              Pune, Maharashtra
            </p>
            <p className="text-xs mt-1" style={{ color: "#64748B" }}>India 🇮🇳</p>
            <div
              className="mt-4 text-xs px-3 py-1.5 rounded-full inline-block"
              style={{
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)",
                color: "#86EFAC",
              }}
            >
              Available Remotely
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div variants={cardVariants} className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(6,182,212,0.15)" }}
              >
                <GraduationCap size={20} style={{ color: "#06B6D4" }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: "#94A3B8" }}>Education</span>
            </div>
            <p className="font-bold text-sm" style={{ color: "#22D3EE", fontFamily: "Space Grotesk" }}>
              B.Tech — CS (Data Science)
            </p>
            <p className="text-xs mt-1" style={{ color: "#64748B" }}>Sanjivani College of Engineering</p>
            <p className="text-xs mt-2" style={{ color: "#A855F7" }}>2023 – 2027</p>
          </motion.div>

          {/* Bio Wide Card */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-6 sm:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(168,85,247,0.15)" }}
              >
                <Zap size={20} style={{ color: "#A855F7" }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: "#94A3B8" }}>
                What Drives Me
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
              I thrive at the intersection of{" "}
              <span style={{ color: "#A855F7" }}>AI research and real-world applications</span>. Active
              hackathon participant & project competitor with strong problem-solving mindset.
              Developed 3 complete AI/ML systems within my first year of college —{" "}
              <span style={{ color: "#06B6D4" }}>showcasing rapid learning ability.</span>
            </p>
          </motion.div>

          {/* Role Card (Full Width at Bottom) */}
          <motion.div 
            variants={cardVariants} 
            className="glass-card p-6 col-span-1 sm:col-span-2 lg:col-span-4" 
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(59,130,246,0.15)" }}
              >
                <Target size={20} style={{ color: "#3B82F6" }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: "#94A3B8" }}>Open To</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                {["AI/ML Intern", "CV Developer", "Data Science Intern", "Full-Stack Dev"].map(
                  (role) => (
                    <span
                      key={role}
                      className="text-xs px-4 py-2 rounded-full"
                      style={{
                        background: "rgba(59,130,246,0.1)",
                        border: "1px solid rgba(59,130,246,0.25)",
                        color: "#93C5FD",
                      }}
                    >
                      {role}
                    </span>
                  )
                )}
              </div>
              
              <a
                href="https://github.com/Hardik-Sonawane/Profile_budd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(168,85,247,0.1)",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#D8B4FE",
                  fontFamily: "Space Grotesk",
                }}
              >
                Check My Progress
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
