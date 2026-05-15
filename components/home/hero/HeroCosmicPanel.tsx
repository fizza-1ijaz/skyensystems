"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STARS = [
  { x: "14%", y: "16%", s: 2, d: 0 },
  { x: "32%", y: "10%", s: 1.5, d: 0.6 },
  { x: "52%", y: "22%", s: 2.5, d: 1.1 },
  { x: "68%", y: "14%", s: 1.5, d: 0.3 },
  { x: "24%", y: "38%", s: 2, d: 1.4 },
  { x: "8%", y: "52%", s: 1.5, d: 0.9 },
  { x: "44%", y: "48%", s: 2, d: 1.8 },
  { x: "78%", y: "34%", s: 1.5, d: 0.5 },
] as const;

const PARTICLES = [
  { x: "20%", y: "28%", d: 0 },
  { x: "55%", y: "18%", d: 1.2 },
  { x: "38%", y: "55%", d: 2 },
  { x: "72%", y: "42%", d: 0.8 },
] as const;

export function HeroCosmicPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <motion.div
      ref={ref}
      className="relative min-h-[42vh] overflow-hidden lg:min-h-full lg:rounded-br-[4rem]"
      aria-hidden
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 origin-center">
        <div className="absolute inset-0 bg-[#070B2B]" />
        <motion.div
          className="absolute inset-0 bg-[url('/bgs/galaxy.jfif')] bg-cover bg-[center_35%]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#070B2B]/50 via-[#1e1b4b]/30 to-[#070B2B]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B2B] via-transparent to-[#312e81]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#070B2B]/40 lg:to-white/5" />

        <motion.div
          className="absolute -left-16 top-[5%] h-80 w-80 rounded-full bg-[#6366f1]/35 blur-[100px]"
          animate={{ opacity: [0.4, 0.7, 0.4], x: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[10%] top-[15%] h-64 w-64 rounded-full bg-[#22d3ee]/20 blur-[90px]"
          animate={{ opacity: [0.3, 0.55, 0.3], y: [0, -15, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[25%] h-56 w-56 rounded-full bg-[#8b5cf6]/25 blur-[80px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Abstract mountain / wave silhouettes */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="mountain-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <path
            d="M0,280 C200,180 380,220 560,160 C740,100 920,200 1100,140 C1220,100 1320,160 1440,120 L1440,320 L0,320 Z"
            fill="url(#mountain-grad)"
          />
          <path
            d="M0,300 C180,240 400,260 620,220 C840,180 1050,250 1280,200 C1360,180 1400,210 1440,190 L1440,320 L0,320 Z"
            fill="#070B2B"
            fillOpacity="0.5"
          />
        </svg>

        {STARS.map((star, i) => (
          <motion.span
            key={`star-${i}`}
            className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{ left: star.x, top: star.y, width: star.s, height: star.s }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: star.d }}
          />
        ))}

        {PARTICLES.map((p, i) => (
          <motion.span
            key={`particle-${i}`}
            className="absolute h-1 w-1 rounded-full bg-cyan-300/60"
            style={{ left: p.x, top: p.y }}
            animate={{ y: [0, -24, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: p.d, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      <motion.div
        className="noise absolute inset-0 opacity-[0.18] mix-blend-overlay"
        animate={{ opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </motion.div>
  );
}
