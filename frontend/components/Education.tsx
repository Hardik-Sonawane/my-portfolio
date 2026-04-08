"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const eduCards = [
    {
      degree: "B.Tech — Computer Engineering",
      specialization: "Data Science",
      institution: "Sanjivani College of Engineering",
      duration: "Aug 2023 – May 2027",
      location: "Pune, Maharashtra",
      focuses: ["AI/ML", "Data Science", "Computer Vision", "Full Stack Development"],
      icon: <GraduationCap size={28} />,
      iconBg: "linear-gradient(135deg, #7C3AED, #A855F7)",
      accentColor: "#A855F7",
      current: true,
    },
    {
      degree: "Higher Secondary Education",
      specialization: "Science Stream (HSC)",
      institution: "Maharashtra State Board",
      duration: "2021 – 2022",
      location: "Maharashtra, India",
      focuses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      icon: <BookOpen size={28} />,
      iconBg: "linear-gradient(135deg, #0891B2, #06B6D4)",
      accentColor: "#06B6D4",
      current: false,
    },
  ];

  return (
    <section
      id="education"
      className="relative py-10 md:py-16 px-4 md:px-6"
      style={{ background: "linear-gradient(to bottom, rgba(3,0,13,0.60), rgba(8,0,15,0.68), rgba(3,0,13,0.60))" }}
    >
      <div
        className="absolute left-0 bottom-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
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
            — Academic Background
          </p>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Foundation built for cutting-edge AI/ML development</p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {eduCards.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="glass-card p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 inset-x-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${edu.accentColor}, transparent)` }}
              />

              {/* Icon + Title */}
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: edu.iconBg,
                    boxShadow: `0 0 25px ${edu.accentColor}40`,
                    color: "white",
                  }}
                >
                  {edu.icon}
                </div>
                <div>
                  {edu.current && (
                    <div
                      className="text-xs px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5 mb-2"
                      style={{
                        background: "rgba(34,197,94,0.1)",
                        border: "1px solid rgba(34,197,94,0.3)",
                        color: "#86EFAC",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C55E" }} />
                      Currently Studying
                    </div>
                  )}
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ fontFamily: "Orbitron", color: "#E2E8F0", fontSize: "1rem" }}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-sm" style={{ color: edu.accentColor }}>
                    {edu.specialization}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm" style={{ color: "#CBD5E1" }}>
                  <BookOpen size={14} style={{ color: edu.accentColor }} />
                  {edu.institution}
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "#CBD5E1" }}>
                  <Calendar size={14} style={{ color: edu.accentColor }} />
                  {edu.duration}
                </div>
              </div>

              {/* Focus Areas */}
              <div>
                <p className="text-xs mb-3 tracking-wider uppercase" style={{ color: "#A78BFA" }}>
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.focuses.map((focus) => (
                    <span
                      key={focus}
                      className="text-xs px-3 py-1 rounded-lg"
                      style={{
                        background: `${edu.accentColor}12`,
                        border: `1px solid ${edu.accentColor}30`,
                        color: edu.accentColor,
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
