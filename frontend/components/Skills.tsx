"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain, Code2, Database, Cloud, FlaskConical, BarChart2
} from "lucide-react";

const skillCategories = [
  {
    icon: <Brain size={22} />,
    label: "AI / Machine Learning",
    color: "#A855F7",
    bgColor: "rgba(168,85,247,0.12)",
    borderColor: "rgba(168,85,247,0.3)",
    tagClass: "",
    skills: [
      "CNNs",
      "Computer Vision",
      "Supervised ML",
      "Unsupervised ML",
      "Transfer Learning",
      "Feature Engineering",
      "Model Deployment",
      "Deep Learning",
      "Object Detection",
      "Image Classification",
    ],
  },
  {
    icon: <FlaskConical size={22} />,
    label: "Libraries & Frameworks",
    color: "#06B6D4",
    bgColor: "rgba(6,182,212,0.12)",
    borderColor: "rgba(6,182,212,0.3)",
    tagClass: "cyan",
    skills: [
      "TensorFlow",
      "Scikit-Learn",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "MediaPipe",
      "Keras",
      "Seaborn",
    ],
  },
  {
    icon: <Code2 size={22} />,
    label: "Programming Languages",
    color: "#3B82F6",
    bgColor: "rgba(59,130,246,0.12)",
    borderColor: "rgba(59,130,246,0.3)",
    tagClass: "blue",
    skills: ["Python","Java", "JavaScript","SQL", "TypeScript", "C", "C++", "HTML", "CSS"],
  },
  {
    icon: <Code2 size={22} />,
    label: "Web Development",
    color: "#A855F7",
    bgColor: "rgba(168,85,247,0.12)",
    borderColor: "rgba(168,85,247,0.3)",
    tagClass: "",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Flask",
      "REST APIs",
      "Tailwind CSS",
      "Express.js",
    ],
  },
  {
    icon: <BarChart2 size={22} />,
    label: "Data Science",
    color: "#06B6D4",
    bgColor: "rgba(6,182,212,0.12)",
    borderColor: "rgba(6,182,212,0.3)",
    tagClass: "cyan",
    skills: [
      "EDA",
      "Data Cleaning",
      "Statistical Analysis",
      "Data Visualization",
      "Feature Engineering",
      "Predictive Modeling",
    ],
  },
  {
    icon: <Database size={22} />,
    label: "Databases & Cloud",
    color: "#3B82F6",
    bgColor: "rgba(59,130,246,0.12)",
    borderColor: "rgba(59,130,246,0.3)",
    tagClass: "blue",
    skills: [
      "MySQL",
      "MongoDB",
      "AWS (Basic)",
      "Azure (Basic)",
      "Git",
      "GitHub",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-10 md:py-16 px-4 md:px-6"
      style={{ background: "linear-gradient(to bottom, rgba(3,0,13,0.60), rgba(8,0,16,0.68), rgba(3,0,13,0.60))" }}
    >
      {/* Right glow */}
      <div
        className="absolute right-0 top-1/3 w-96 h-96 pointer-events-none"
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
            — What I Know
          </p>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">A curated stack built through real-world project experience</p>
        </motion.div>

        {/* Bento Grid of Skills */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1, duration: 0.6, ease: "easeOut" }}
              style={catIdx === 0 || catIdx === 3 ? { gridColumn: "span 1" } : {}}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: cat.bgColor,
                    border: `1px solid ${cat.borderColor}`,
                    color: cat.color,
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  className="text-sm font-semibold"
                  style={{ color: cat.color, fontFamily: "Space Grotesk" }}
                >
                  {cat.label}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    className={`skill-tag ${cat.tagClass}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: catIdx * 0.1 + skillIdx * 0.04,
                      duration: 0.4,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Proficiency Bar */}
        <motion.div
          className="mt-8 glass-card p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3
            className="text-lg font-semibold mb-6"
            style={{ fontFamily: "Orbitron", color: "#E2E8F0", fontSize: "1rem" }}
          >
            Core Proficiencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Python & AI/ML", level: 85, color: "#A855F7" },
              { label: "Computer Vision (OpenCV)", level: 80, color: "#06B6D4" },
              { label: "Deep Learning (TensorFlow)", level: 75, color: "#7C3AED" },
              { label: "Web Development", level: 78, color: "#3B82F6" },
              { label: "Data Science & EDA", level: 80, color: "#06B6D4" },
              { label: "Flask / Node.js APIs", level: 70, color: "#A855F7" },
            ].map((item, i) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm" style={{ color: "#94A3B8", fontFamily: "Space Grotesk" }}>
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: item.color }}>
                    {item.level}%
                  </span>
                </div>
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${item.color}, rgba(255,255,255,0.4))`,
                      boxShadow: `0 0 10px ${item.color}`,
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
