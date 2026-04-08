import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hardik Sonawane | AI/ML Engineer · Computer Vision · Full-Stack Developer",
  description:
    "Portfolio of Hardik Sonawane — AI/ML Engineer specializing in Computer Vision, Deep Learning, and Full-Stack Development. Building intelligent systems from CNNs to full-stack AI web apps.",
  keywords: [
    "Hardik Sonawane",
    "AI ML Engineer",
    "Computer Vision",
    "Deep Learning",
    "Full Stack Developer",
    "TensorFlow",
    "Python",
    "React",
    "Portfolio"
  ],
  authors: [{ name: "Hardik Sonawane" }],
  creator: "Hardik Sonawane",
  openGraph: {
    title: "Hardik Sonawane | AI/ML Engineer Portfolio",
    description: "Building intelligent systems — from CNNs to full-stack AI applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
