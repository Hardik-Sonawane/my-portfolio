"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Users, 
  BrainCircuit, 
  LineChart, 
  UsersRound, 
  Zap, 
  MessageSquare 
} from "lucide-react";

const strengths = [
  {
    icon: <Users size={28} />,
    title: "Leadership",
    description: "Guiding teams with a clear vision, fostering collaboration, and taking ownership of project outcomes.",
    color: "#A855F7",
    bgColor: "rgba(168,85,247,0.12)",
    borderColor: "rgba(168,85,247,0.3)",
    shadowColor: "rgba(168,85,247,0.2)",
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "Critical Thinking",
    description: "Evaluating complex problems objectively to formulate well-reasoned and effective solutions.",
    color: "#06B6D4",
    bgColor: "rgba(6,182,212,0.12)",
    borderColor: "rgba(6,182,212,0.3)",
    shadowColor: "rgba(6,182,212,0.2)",
  },
  {
    icon: <LineChart size={28} />,
    title: "Analytical Thinking",
    description: "Breaking down intricate data sets to extract actionable insights and drive data-informed decisions.",
    color: "#3B82F6",
    bgColor: "rgba(59,130,246,0.12)",
    borderColor: "rgba(59,130,246,0.3)",
    shadowColor: "rgba(59,130,246,0.2)",
  },
  {
    icon: <UsersRound size={28} />,
    title: "Teamwork",
    description: "Collaborating seamlessly across disciplines, valuing diverse perspectives to achieve common goals.",
    color: "#10B981",
    bgColor: "rgba(16,185,129,0.12)",
    borderColor: "rgba(16,185,129,0.3)",
    shadowColor: "rgba(16,185,129,0.2)",
  },
  {
    icon: <Zap size={28} />,
    title: "Adaptability",
    description: "Embracing change and rapidly learning new technologies to stay ahead in a fast-paced environment.",
    color: "#F59E0B",
    bgColor: "rgba(245,158,11,0.12)",
    borderColor: "rgba(245,158,11,0.3)",
    shadowColor: "rgba(245,158,11,0.2)",
  },
  {
    icon: <MessageSquare size={28} />,
    title: "Communication",
    description: "Articulating complex technical concepts clearly to both technical and non-technical stakeholders.",
    color: "#F43F5E",
    bgColor: "rgba(244,63,94,0.12)",
    borderColor: "rgba(244,63,94,0.3)",
    shadowColor: "rgba(244,63,94,0.2)",
  },
];

export default function CoreStrengths() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="core-strengths"
      className="relative py-10 md:py-16 px-4 md:px-6"
      style={{ background: "linear-gradient(to bottom, rgba(3,0,13,0.60), rgba(6,0,15,0.68), rgba(3,0,13,0.60))" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute left-1/3 top-1/4 w-[500px] h-[500px] pointer-events-none -translate-x-1/2"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
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
            — Beyond Coding
          </p>
          <h2 className="section-title">Core Strengths</h2>
          <p className="section-subtitle">Soft skills that drive project success and team collaboration</p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength, i) => (
            <motion.div
              key={strength.title}
              className="glass-card relative overflow-hidden group p-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              {/* Hover glow border */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${strength.color}10, transparent)`,
                  boxShadow: `inset 0 0 20px ${strength.shadowColor}`,
                }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: strength.color }}
              />

              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl" 
                style={{
                  background: strength.bgColor,
                  border: `1px solid ${strength.borderColor}`,
                  color: strength.color,
                  boxShadow: `0 0 15px ${strength.shadowColor}`
                }}>
                {strength.icon}
              </div>

              {/* Title */}
              <h3
                className="font-bold text-xl mb-3"
                style={{ fontFamily: "Orbitron", color: "#E2E8F0" }}
              >
                {strength.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#94A3B8" }}
              >
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
