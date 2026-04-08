"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, ChevronDown } from "lucide-react";
import ParticleText from "./ParticleText";

const socialLinks = [
  {
    icon: <Github size={20} />,
    label: "GitHub",
    href: "https://github.com/Hardik-Sonawane",
    color: "rgba(168,85,247,0.3)",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/hardik-so",
    color: "rgba(6,182,212,0.3)",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    href: "mailto:sonawanehardik080@gmail.com",
    color: "rgba(59,130,246,0.3)",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    href: "tel:+918208465312",
    color: "rgba(124,58,237,0.3)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Background */}
      <div className="hero-bg" />

      {/* Ambient Orbs */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
          top: "10%",
          right: "10%",
          animation: "float 8s ease-in-out infinite",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
          bottom: "20%",
          left: "5%",
          animation: "float 10s ease-in-out infinite 3s",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center pt-8 md:pt-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="glass-card px-5 py-2.5 flex items-center gap-3 rounded-full inline-flex">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "#22C55E" }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ background: "#22C55E" }}
              />
            </span>
            <span className="text-sm font-medium" style={{ color: "#86EFAC", fontFamily: "Space Grotesk" }}>
              Open to Internships & Junior Roles
            </span>
          </div>
        </motion.div>

        {/* Main Title — Particle Name + Role */}
        <motion.div variants={itemVariants}>
          <h1 className="hero-title mb-4">
            {/* Physics particle canvas for the name */}
            <ParticleText />
            <span
              className="block max-[600px]:mt-2 min-[600px]:-mt-4"
              style={{
                background: "linear-gradient(135deg, #A855F7 0%, #06B6D4 50%, #3B82F6 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 4s linear infinite",
                fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
              }}
            >
              AI/ML Engineer
            </span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div variants={itemVariants} className="mb-8">
          <div
            className="text-lg md:text-xl font-medium inline-block"
            style={{
              fontFamily: "Space Grotesk",
              color: "#94A3B8",
            }}
          >
            <span style={{ color: "#64748B" }}>{"// "}</span>
            <TypeAnimation
              sequence={[
                "Computer Vision Developer",
                2000,
                "Deep Learning Engineer",
                2000,
                "Full-Stack Developer",
                2000,
                "Data Science Enthusiast",
                2000,
                "Building Tomorrow's AI 🚀",
                2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ color: "#A855F7" }}
            />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#CBD5E1", fontFamily: "Space Grotesk" }}
        >
          Passionate about building{" "}
          <span style={{ color: "#A855F7" }}>real-world intelligent systems</span> — from CNN-based
          computer vision models to{" "}
          <span style={{ color: "#06B6D4" }}>full-stack AI-integrated web apps.</span> Currently
          pursuing B.Tech in Computer Engineering at Sanjivani College.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a href="#projects" className="btn-primary">
            <ExternalLink size={18} />
            View Projects
          </a>
          <a
            href="/Hardik_resume%20(1)%20(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Download size={18} />
            Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-xl flex items-center gap-2 text-sm font-medium"
              style={{ color: "#94A3B8", fontFamily: "Space Grotesk" }}
              whileHover={{
                scale: 1.08,
                borderColor: "rgba(168,85,247,0.5)",
                color: "#A855F7",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <span style={{ color: "#A855F7" }}>{link.icon}</span>
              <span className="hidden sm:inline">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {["Python", "TensorFlow", "OpenCV", "React", "Next.js", "Flask", "MediaPipe", "PyTorch"].map(
            (tech, i) => (
              <motion.span
                key={tech}
                className="skill-tag text-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.08 }}
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>


    </section>
  );
}
