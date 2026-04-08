"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Leaf, Briefcase, Hand, Activity, Radar, Globe, ShoppingCart } from "lucide-react";

const projects = [
  {
    id: "plant-disease",
    title: "Plant Disease Detection",
    subtitle: "AI-Powered Agricultural Intelligence",
    description:
      "Built a CNN-based deep learning model to detect 15+ plant leaf diseases from image inputs with high classification accuracy. Performed dataset preprocessing, augmentation (rotation, flipping, zoom) to improve model generalization and reduce overfitting.",
    highlights: [
      "15+ plant diseases detected",
      "CNN architecture with high accuracy",
      "Image augmentation pipeline",
      "Flask web deployment",
      "Confusion matrix & F1-score evaluation",
    ],
    tech: ["Python", "TensorFlow", "CNN", "OpenCV", "Flask", "NumPy"],
    icon: <Leaf size={28} />,
    iconBg: "linear-gradient(135deg, #059669, #34D399)",
    accentColor: "#34D399",
    accentShadow: "rgba(52,211,153,0.2)",
    github: "https://github.com/Hardik-Sonawane/plant-final",
    live: "https://github.com/Hardik-Sonawane",
    span: 2,
    featured: true,
  },
  {
    id: "recruit-ai",
    title: "Recruit AI",
    subtitle: "AI ATS Resume Optimizer",
    description:
      "Developed an AI-powered platform to help job seekers optimize resumes against ATS filters. Utilized NLP and BERT to compute TF-IDF and Cosine Similarity matching scores against Job Descriptions, providing real-time feedback and auto-generating optimized resumes.",
    highlights: [
      "Real-time resume matching score",
      "NLP-driven keyword extraction",
      "PyPDF2 automated parsing",
      "Docker & AWS Cloud deployment",
    ],
    tech: ["React", "Django", "NLP (spaCy)", "BERT", "MySQL", "AWS"],
    icon: <Briefcase size={28} />,
    iconBg: "linear-gradient(135deg, #3B82F6, #60A5FA)",
    accentColor: "#60A5FA",
    accentShadow: "rgba(96,165,250,0.2)",
    github: "https://github.com/05Maithili/ATS_Frontend",
    live: "https://github.com/05Maithili/ATS_Frontend",
    span: 1,
    featured: true,
  },
  {
    id: "gesture-connect",
    title: "Gesture Connect",
    subtitle: "Vision-Based Gesture Interaction",
    description:
      "Implemented real-time hand gesture recognition system for controlling digital interfaces without physical input devices. Utilized MediaPipe hand landmark tracking pipeline to detect and map 21 hand keypoints.",
    highlights: [
      "21 hand keypoints tracked",
      "Touchless interface control",
      "AR/VR ready",
      "Low-latency gesture mapping",
    ],
    tech: ["Python", "MediaPipe", "OpenCV", "Hand Landmark Detection"],
    icon: <Hand size={28} />,
    iconBg: "linear-gradient(135deg, #0891B2, #06B6D4)",
    accentColor: "#06B6D4",
    accentShadow: "rgba(6,182,212,0.2)",
    github: "https://github.com/Hardik-Sonawane",
    live: "https://github.com/Hardik-Sonawane",
    span: 1,
    featured: true,
  },
  {
    id: "drone-swarm",
    title: "AI Drone Swarm Response",
    subtitle: "Autonomous Disaster Management",
    description: "Developed a collaborative multi-drone system using Swarm Intelligence for rapid disaster response. Drones autonomously coordinate via ROS2 and MAVLink to map areas, detect victims using YOLOv8, and calculate optimal rescuer paths without single points of failure.",
    highlights: [
      "Swarm Intelligence coordination",
      "Real-time YOLOv8 human detection",
      "Dynamic A* path planning",
      "Fault-tolerant mesh network",
    ],
    tech: ["YOLOv8", "ROS2", "MAVLink", "Gazebo", "A*", "React"],
    icon: <Radar size={28} />,
    iconBg: "linear-gradient(135deg, #F59E0B, #FBBF24)",
    accentColor: "#FBBF24",
    accentShadow: "rgba(251,191,36,0.2)",
    github: "https://github.com/wakharedevashree/disasterProject",
    live: "https://disasterproject-2-vf49.onrender.com",
    span: 2,
    featured: true,
  },
  {
    id: "nath-clinic",
    title: "Nath Clinic Platform",
    subtitle: "Healthcare Web Application",
    description: "Designed and developed a comprehensive, full-stack medical web application for Nath Dental Care. Engineered a highly responsive user experience featuring secure patient authentication, a real-time online appointment scheduling system, and an engaging service catalog.",
    highlights: [
      "Secure patient authentication",
      "Real-time appointment booking",
      "High-conversion responsive UI",
      "Dynamic data management",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "Vercel"],
    icon: <Globe size={28} />,
    iconBg: "linear-gradient(135deg, #14B8A6, #2DD4BF)",
    accentColor: "#2DD4BF",
    accentShadow: "rgba(45,212,191,0.2)",
    github: "https://github.com/Hardik-Sonawane/nath_clinic_front",
    live: "https://nathclinicfront.vercel.app/",
    span: 2,
    featured: true,
  },
  {
    id: "siddhi-collection",
    title: "Siddhi Collection Store",
    subtitle: "MERN E-Commerce Platform (Group Project)",
    description: "Developed a full-stack e-commerce solution to digitalize a retail clothing store. Engineered secure user authentication, an intuitive shopping cart experience, and a robust admin dashboard for real-time inventory and order management.",
    highlights: [
      "Secure JWT authentication & orders",
      "Custom admin inventory dashboard",
      "Cloudinary media integration",
      "MongoDB Atlas & Express backend",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    icon: <ShoppingCart size={28} />,
    iconBg: "linear-gradient(135deg, #EC4899, #F43F5E)",
    accentColor: "#F43F5E",
    accentShadow: "rgba(244,63,94,0.2)",
    github: "https://github.com/Tushar-Shinde-1/Cloth_Store_Siddhi-Collection_Project",
    live: "https://siddhis-admin.vercel.app/",
    span: 1,
    featured: true,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="relative py-10 md:py-16 px-4 md:px-6"
      style={{ background: "linear-gradient(to bottom, rgba(3,0,13,0.60), rgba(6,0,15,0.68), rgba(3,0,13,0.60))" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/4 w-[600px] h-[600px] pointer-events-none -translate-x-1/2"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
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
            — What I've Built
          </p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Real-world AI systems built from scratch</p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className={`glass-card relative overflow-hidden group col-span-1 ${
                project.span >= 2 ? "md:col-span-2" : "md:col-span-1"
              } flex flex-col h-full`}
              style={{
                padding: "0",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -6 }}
            >
              {/* Hover glow border */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${project.accentColor}15, transparent)`,
                  boxShadow: `inset 0 0 30px ${project.accentShadow}`,
                }}
              />

              {/* Top accent line */}
              <div
                className="h-0.5 w-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
              />

              <div className="p-7 flex flex-col flex-1">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: project.iconBg,
                        boxShadow: `0 0 20px ${project.accentShadow}`,
                        color: "white",
                      }}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg leading-tight"
                        style={{ fontFamily: "Orbitron", color: "#E2E8F0", fontSize: "1.05rem" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs mt-1" style={{ color: project.accentColor }}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {project.featured && (
                    <span
                      className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        background: "rgba(168,85,247,0.15)",
                        border: "1px solid rgba(168,85,247,0.3)",
                        color: "#C084FC",
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      ⭐ Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#94A3B8" }}
                >
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-5 space-y-1.5">
                  {project.highlights.map((hl) => (
                    <div key={hl} className="flex items-center gap-2 text-xs" style={{ color: "#64748B" }}>
                      <span style={{ color: project.accentColor }}>▸</span>
                      {hl}
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg"
                      style={{
                        background: `${project.accentColor}12`,
                        border: `1px solid ${project.accentColor}30`,
                        color: project.accentColor,
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  {/* View Code Button */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#E2E8F0",
                      fontFamily: "Space Grotesk",
                    }}
                    whileHover={{
                      scale: 1.03,
                      borderColor: project.accentColor + "60",
                      color: project.accentColor,
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>

                  {/* View Live Button */}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-300"
                    style={{
                      background: `${project.accentColor}1A`, // Subtle color tint
                      border: `1px solid ${project.accentColor}30`,
                      color: project.accentColor,
                      fontFamily: "Space Grotesk",
                    }}
                    whileHover={{
                      scale: 1.03,
                      background: `${project.accentColor}25`,
                      borderColor: project.accentColor + "60",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <ExternalLink size={16} />
                    View Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="https://github.com/Hardik-Sonawane"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
