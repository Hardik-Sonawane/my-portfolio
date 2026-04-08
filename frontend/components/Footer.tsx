"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-8 md:py-12 px-4 md:px-6 border-t"
      style={{
        borderColor: "rgba(168,85,247,0.1)",
        background: "linear-gradient(to bottom, rgba(3,0,13,0.68), rgba(1,0,8,0.72))",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 text-center md:text-left">
          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0. }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="text-xl font-bold mb-1"
              style={{ fontFamily: "Orbitron", background: "linear-gradient(135deg, #A855F7, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              Hardik Sonawane
            </div>
            <p className="text-xs" style={{ color: "#475569", fontFamily: "Space Grotesk" }}>
              AI/ML Engineer · Computer Vision · Full-Stack Developer
            </p>
          </motion.div>

          {/* Center links */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-nav-link"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: <Github size={18} />, href: "https://github.com/Hardik-Sonawane" },
              { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/hardik-so" },
              { icon: <Mail size={18} />, href: "mailto:sonawanehardik080@gmail.com" },
              { icon: <Instagram size={18} />, href: "https://www.instagram.com/hardik.sonawane.200?igsh=MXFjc25kcjB0Nm41bg==" },
              { icon: <Twitter size={18} />, href: "https://x.com/hardik_son58587" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-9 h-9 glass-card rounded-xl flex items-center justify-center"
                style={{ color: "#64748B" }}
                whileHover={{ scale: 1.1, color: "#A855F7" }}
                whileTap={{ scale: 0.95 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom line */}
        <div
          className="mt-8 pt-6 border-t text-center"
          style={{ borderColor: "rgba(168,85,247,0.08)" }}
        >
          <p className="text-xs flex items-center justify-center gap-1.5" style={{ color: "#334155" }}>
            © {year} Hardik Sonawane · Built with
            <Heart size={12} style={{ color: "#A855F7" }} fill="#A855F7" />
            using Next.js, TypeScript & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
