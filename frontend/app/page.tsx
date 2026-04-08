"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CoreStrengths from "@/components/CoreStrengths";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Dynamic import for client-only components
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});
const VideoBackground = dynamic(() => import("@/components/VideoBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      {/* Scroll-scrubbed video background — fixed, z-index: -2 */}
      <VideoBackground />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation — z-index: 1000 via .navbar class */}
      <Navbar />

      {/* All sections sit above the video */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <CoreStrengths />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
