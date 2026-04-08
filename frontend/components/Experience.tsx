"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle2, Trophy } from "lucide-react";

const achievements = [
  "Designed and deployed ML-based systems including computer vision applications achieving real-time inference",
  "Built end-to-end ML pipelines: data collection → preprocessing → model training → evaluation → web deployment",
  "Executed full-stack integrations for AI systems using Python, Flask/Node.js, React, and interactive dashboards",
  "Collaborated with peers in hackathons and technical events to deliver AI prototypes under time constraints",
  "Participated in Multiple hackathons, and multiple AI-focused competitions — demonstrating applied AI skills",
];

const hackathons = [
  { name: "Tech-Pragyan", type: "Technical Competition", icon: "🏆" },
  { name: "DIPEX", type: "Project Exhibition", icon: "🎯" },
  { name: "AI Hackathons", type: "Multiple Events", icon: "🤖" },
  { name: "Cybage hackathon", type: "hackathon", icon: "🤖" },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="relative py-10 md:py-16 px-4 md:px-6"
      style={{ background: "linear-gradient(to bottom, rgba(3,0,13,0.60), rgba(7,0,16,0.68), rgba(3,0,13,0.60))" }}
    >
      <div
        className="absolute right-0 bottom-1/4 w-80 h-80 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
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
            — Work History
          </p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Building AI systems from day one</p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {/* Main Experience Card */}
          <motion.div
            className="glass-card p-8 glow-box"
            style={{ gridColumn: "span 1" }}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Role Header */}
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 20px rgba(168,85,247,0.3)",
                }}
              >
                <Briefcase size={24} style={{ color: "white" }} />
              </div>
              <div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "Orbitron", color: "#E2E8F0", fontSize: "1rem" }}
                >
                  AI/ML Project Developer
                </h3>
                <p className="text-sm mt-1" style={{ color: "#A855F7" }}>
                  Technical Contributor
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{
                    background: "rgba(168,85,247,0.15)",
                    border: "1px solid rgba(168,85,247,0.3)",
                    color: "#C084FC",
                  }}>
                    College Projects / Freelance
                  </span>
                  <span className="text-xs" style={{ color: "#64748B" }}>Pune, MH</span>
                </div>
              </div>
            </div>

            {/* Date */}
            <div
              className="flex items-center gap-2 mb-6 text-sm px-4 py-2 rounded-xl inline-flex"
              style={{
                background: "rgba(6,182,212,0.08)",
                border: "1px solid rgba(6,182,212,0.2)",
                color: "#22D3EE",
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "#22C55E" }} />
              Jan 2025 — Present · Active
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                    {ach}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {/* Hackathons */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(6,182,212,0.15)" }}
                >
                  <Trophy size={20} style={{ color: "#06B6D4" }} />
                </div>
                <h3 className="text-sm font-semibold" style={{ color: "#22D3EE", fontFamily: "Space Grotesk" }}>
                  Competitions & Events
                </h3>
              </div>
              <div className="space-y-3">
                {hackathons.map((h, i) => (
                  <motion.div
                    key={h.name}
                    className="flex items-center justify-between p-3 rounded-xl"
                    style={{
                      background: "rgba(6,182,212,0.06)",
                      border: "1px solid rgba(6,182,212,0.15)",
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{h.icon}</span>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "#E2E8F0" }}>
                          {h.name}
                        </p>
                        <p className="text-xs" style={{ color: "#64748B" }}>
                          {h.type}
                        </p>
                      </div>
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(6,182,212,0.15)",
                        color: "#22D3EE",
                        border: "1px solid rgba(6,182,212,0.3)",
                      }}
                    >
                      Participant
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            >
              <h3 className="text-sm font-semibold mb-5" style={{ color: "#A855F7", fontFamily: "Space Grotesk" }}>
                Impact Highlights
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🤖", label: "AI Systems Built", value: "3" },
                  { icon: "⚡", label: "Real-Time Projects", value: "4+" },
                  { icon: "📊", label: "Tech Stack Depth", value: "15+" },
                  { icon: "🏆", label: "Events Attended", value: "12+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl"
                    style={{
                      background: "rgba(168,85,247,0.06)",
                      border: "1px solid rgba(168,85,247,0.12)",
                    }}
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
