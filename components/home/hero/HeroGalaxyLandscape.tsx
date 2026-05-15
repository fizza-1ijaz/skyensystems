"use client";

import { motion } from "framer-motion";

/** Organic top edge of the white content panel (viewBox 1440 × 200). */
export function HeroWaveTopPath() {
  return (
    <path
      d="M0,190 C80,110 160,130 280,88 C420,38 560,118 720,72 C880,28 1040,102 1200,58 C1320,28 1380,48 1440,36 L1440,200 L0,200 Z"
      fill="#ffffff"
    />
  );
}

export function HeroGalaxyLandscape() {
  return (
    <motion.div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute inset-0 bg-[#070b14]"
        animate={{ opacity: [0.96, 1, 0.96] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Galaxy dominates top & left */}
      <motion.div
        className="absolute inset-0 bg-[url('/bgs/galaxy.jfif')] bg-cover bg-[left_30%_top_20%] md:bg-[left_20%_top_15%]"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#070b14]/30 via-transparent to-[#0f172a]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/80 via-[#070b14]/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 md:to-white/25" />

      <motion.div
        className="absolute -left-20 top-[8%] h-[min(520px,70vw)] w-[min(520px,70vw)] rounded-full bg-[#6C63FF]/18 blur-[110px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[30%] top-[2%] h-64 w-64 rounded-full bg-[#22D3EE]/12 blur-[90px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle stars over galaxy */}
      {[
        { left: "12%", top: "18%", delay: 0 },
        { left: "28%", top: "8%", delay: 0.5 },
        { left: "48%", top: "22%", delay: 1 },
        { left: "8%", top: "42%", delay: 1.5 },
        { left: "62%", top: "12%", delay: 0.8 },
      ].map((star, i) => (
        <motion.span
          key={`gstar-${i}`}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{ left: star.left, top: star.top }}
          animate={{ opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: star.delay }}
        />
      ))}

      <div className="noise absolute inset-0 opacity-[0.22] mix-blend-overlay" />
    </motion.div>
  );
}
