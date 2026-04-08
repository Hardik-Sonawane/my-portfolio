"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle, Clock, GraduationCap } from "lucide-react";

const certs = [
  {
    title: "Data Science Certification",
    issuer: "Industry Recognized",
    status: "Completed",
    icon: "📊",
    color: "#A855F7",
  },
  {
    title: "Full-Stack Development Certification",
    issuer: "Industry Recognized",
    status: "Completed",
    icon: "💻",
    color: "#06B6D4",
  },
  {
    title: "Google IT Automation with Python",
    issuer: "Coursera / Google",
    status: "Ongoing",
    icon: "🐍",
    color: "#3B82F6",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    status: "Ongoing",
    icon: "🧠",
    color: "#A855F7",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Started",
    icon: "☁️",
    color: "#06B6D4",
  },
];

const achievements = [
  {
    text: "Participated in Tech-Pragyan, DIPEX ,cybage & and multiple AI-focused hackathons",
    icon: "🏆",
  },
  {
    text: "Built real-time AI prototypes used in academic demonstrations and live showcases",
    icon: "🚀",
  },
  {
    text: "Active contributor to open-source on GitHub demonstrating consistent coding practice",
    icon: "👨‍💻",
  },
  {
    text: "Developed 3 complete AI/ML systems within first year of college",
    icon: "⚡",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="certifications"
      className="relative py-10 md:py-16 px-4 md:px-6"
      style={{ background: "linear-gradient(to bottom, rgba(3,0,13,0.60), rgba(6,0,17,0.68), rgba(3,0,13,0.60))" }}
    >
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
            — Recognition
          </p>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">Continuous learning and real-world accomplishments</p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Award size={20} style={{ color: "#A855F7" }} />
              <h3 className="text-base font-semibold" style={{ color: "#E2E8F0", fontFamily: "Orbitron" }}>
                Certifications
              </h3>
            </div>
            <div className="space-y-3">
              {certs.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  className="glass-card p-4 flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{cert.icon}</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#E2E8F0" }}>
                        {cert.title}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#A78BFA" }}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-xs px-3 py-1 rounded-full flex-shrink-0 flex items-center gap-1.5"
                    style={
                      cert.status === "Completed"
                        ? {
                            background: "rgba(34,197,94,0.1)",
                            border: "1px solid rgba(34,197,94,0.3)",
                            color: "#86EFAC",
                          }
                        : {
                            background: "rgba(168,85,247,0.1)",
                            border: "1px solid rgba(168,85,247,0.3)",
                            color: "#C084FC",
                          }
                    }
                  >
                    {cert.status === "Completed" ? (
                      <CheckCircle size={12} />
                    ) : (
                      <Clock size={12} />
                    )}
                    {cert.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap size={20} style={{ color: "#06B6D4" }} />
              <h3 className="text-base font-semibold" style={{ color: "#E2E8F0", fontFamily: "Orbitron" }}>
                Achievements
              </h3>
            </div>
            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-5 flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: -4 }}
                >
                  <span className="text-2xl flex-shrink-0">{ach.icon}</span>
                  <p className="text-sm leading-relaxed" style={{ color: "#CBD5E1" }}>
                    {ach.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
