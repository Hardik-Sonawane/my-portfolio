"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Phone, Send, ExternalLink, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "sonawanehardik080@gmail.com",
    href: "mailto:sonawanehardik080@gmail.com",
    color: "#A855F7",
    bg: "rgba(168,85,247,0.1)",
    border: "rgba(168,85,247,0.25)",
  },
  {
    icon: <Github size={24} />,
    label: "GitHub",
    value: "github.com/Hardik-Sonawane",
    href: "https://github.com/Hardik-Sonawane",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.25)",
  },
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    value: "linkedin.com/in/hardik-so",
    href: "https://linkedin.com/in/hardik-so",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.25)",
  },
  {
    icon: <Phone size={24} />,
    label: "Phone",
    value: "+91 8208465312",
    href: "tel:+918208465312",
    color: "#A855F7",
    bg: "rgba(168,85,247,0.1)",
    border: "rgba(168,85,247,0.25)",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="relative py-10 md:py-16 px-4 md:px-6"
      style={{
        background: "linear-gradient(to bottom, rgba(3,0,13,0.60), rgba(10,0,24,0.68), rgba(3,0,13,0.60))",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.15) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-line mx-auto" />
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#A78BFA", fontFamily: "Space Grotesk" }}>
            — Let's Connect
          </p>
          <h2 className="section-title">
            Let's Build Something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A855F7, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Incredible
            </span>
          </h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto text-center"
            style={{ color: "#CBD5E1" }}>
            I'm actively looking for internship opportunities and junior AI/ML roles.
            Whether you have a project in mind or just want to chat about AI — I'm all in.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          className="glass-card p-10 glow-box mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left side */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)", boxShadow: "0 0 20px rgba(168,85,247,0.3)" }}
                >
                  <MessageSquare size={22} style={{ color: "white" }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "Orbitron", color: "#E2E8F0", fontSize: "1rem" }}>
                    Get in Touch
                  </h3>
                  <p className="text-xs" style={{ color: "#64748B" }}>Response within 24 hours</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-8" style={{ color: "#CBD5E1" }}>
                Currently open to <span style={{ color: "#A855F7" }}>AI/ML Engineer internships</span>,{" "}
                <span style={{ color: "#06B6D4" }}>Computer Vision roles</span>, and Full-Stack Developer
                positions. Let's create intelligent systems together.
              </p>

              {/* Open to roles pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  "AI/ML Engineer Intern",
                  "Computer Vision Developer",
                  "Data Science Intern",
                  "Full Stack Developer",
                  "Junior AI Developer",
                ].map((role) => (
                  <span
                    key={role}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(168,85,247,0.08)",
                      border: "1px solid rgba(168,85,247,0.2)",
                      color: "#C084FC",
                      fontFamily: "Space Grotesk",
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              className="hidden md:block w-px"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(168,85,247,0.3), transparent)" }}
            />

            {/* Right — Contact Links */}
            <div className="flex-1 space-y-3">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                  style={{
                    background: method.bg,
                    border: `1px solid ${method.border}`,
                    textDecoration: "none",
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${method.color}20`, color: method.color }}
                  >
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs mb-0.5" style={{ color: "#A78BFA" }}>
                      {method.label}
                    </p>
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: "#E2E8F0", fontFamily: "Space Grotesk" }}
                    >
                      {method.value}
                    </p>
                  </div>
                  <ExternalLink
                    size={14}
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: method.color }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Email Direct CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a href="mailto:sonawanehardik080@gmail.com" className="btn-primary inline-flex">
            <Send size={18} />
            Send me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
