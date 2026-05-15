"use client";

import { motion } from "framer-motion";

const STAR_POSITIONS = [
  { left: "8%", top: "12%", size: 2, delay: 0 },
  { left: "22%", top: "28%", size: 1.5, delay: 0.4 },
  { left: "45%", top: "8%", size: 2.5, delay: 0.8 },
  { left: "68%", top: "18%", size: 1.5, delay: 1.2 },
  { left: "82%", top: "32%", size: 2, delay: 0.2 },
  { left: "15%", top: "55%", size: 1.5, delay: 1.6 },
  { left: "55%", top: "42%", size: 2, delay: 0.6 },
  { left: "88%", top: "58%", size: 1.5, delay: 1.0 },
  { left: "35%", top: "72%", size: 2, delay: 1.4 },
  { left: "72%", top: "78%", size: 1.5, delay: 0.3 },
  { left: "92%", top: "12%", size: 2, delay: 1.8 },
  { left: "5%", top: "85%", size: 1.5, delay: 0.9 },
] as const;

const SHOOTING_STARS = [
  { top: "18%", left: "70%", delay: 0 },
  { top: "42%", left: "25%", delay: 2.8 },
  { top: "65%", left: "55%", delay: 5.2 },
] as const;

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* 1. Base gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#0B1220] to-[#0F172A]"
        animate={{ opacity: [0.97, 1, 0.97] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 2. Galaxy image — atmospheric, not a banner */}
      <motion.div
        className="absolute inset-0 bg-[url('/bgs/galaxy.jfif')] bg-cover bg-[center_40%] opacity-[0.28] mix-blend-screen"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/92 via-[#0B1220]/78 to-[#0F172A]/94" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(108,99,255,0.18),transparent_55%)]"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 backdrop-blur-[1px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black_20%,transparent_75%)]" />

      {/* Blur regions for depth */}
      <motion.div
        className="absolute -left-32 top-1/4 h-[min(480px,60vw)] w-[min(480px,60vw)] rounded-full bg-[#6C63FF]/20 blur-[100px]"
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-[10%] h-[min(420px,55vw)] w-[min(420px,55vw)] rounded-full bg-[#22D3EE]/15 blur-[90px]"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[5%] left-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4F46E5]/18 blur-[80px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3. Subtle grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.14]" preserveAspectRatio="none">
        <defs>
          <pattern id="hero-grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="rgba(148,163,184,0.35)" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="hero-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* 4. Abstract SVG curves & wireframe */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="hero-curve-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <motion.path
          d="M -50 400 Q 400 200 960 350 T 1970 280"
          fill="none"
          stroke="url(#hero-curve-grad)"
          strokeWidth="1.5"
          opacity="0.45"
          animate={{ pathLength: [0.85, 1, 0.85], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 100 900 Q 500 650 960 780 T 1850 850"
          fill="none"
          stroke="rgba(34,211,238,0.35)"
          strokeWidth="1"
          animate={{ pathLength: [0.9, 1, 0.9] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.circle
          cx="320"
          cy="280"
          r="90"
          fill="none"
          stroke="rgba(108,99,255,0.35)"
          strokeWidth="1"
          animate={{ scale: [1, 1.03, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "320px 280px" }}
        />
        <motion.circle
          cx="1580"
          cy="420"
          r="130"
          fill="none"
          stroke="rgba(34,211,238,0.25)"
          strokeWidth="1"
          animate={{ scale: [1, 1.02, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ transformOrigin: "1580px 420px" }}
        />
        <polygon
          points="1680,120 1730,95 1780,120 1780,170 1730,195 1680,170"
          fill="none"
          stroke="rgba(139,92,246,0.3)"
          strokeWidth="1"
        />
        <polygon
          points="140,720 190,695 240,720 240,770 190,795 140,770"
          fill="none"
          stroke="rgba(34,211,238,0.25)"
          strokeWidth="1"
        />
      </svg>

      {/* 5. Floating outlined circles */}
      <motion.div
        className="absolute left-[12%] top-[22%] h-24 w-24 rounded-full border border-white/10"
        animate={{ y: [0, -12, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[15%] top-[38%] h-16 w-16 rounded-full border border-cyan-400/20"
        animate={{ y: [0, 10, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-[28%] left-[20%] h-20 w-20 rounded-full border border-violet-400/15"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* 6. Tiny stars / particles */}
      {STAR_POSITIONS.map((star, i) => (
        <motion.span
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.2, 1] }}
          transition={{
            duration: 2.5 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      {/* Shooting stars */}
      {SHOOTING_STARS.map((star, i) => (
        <motion.span
          key={`shoot-${i}`}
          className="absolute h-px w-24 origin-left bg-gradient-to-r from-transparent via-white/80 to-transparent"
          style={{ top: star.top, left: star.left, rotate: "-35deg" }}
          animate={{
            x: [0, 180],
            y: [0, 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeOut",
            delay: star.delay,
            repeatDelay: 4 + i * 2,
          }}
        />
      ))}

      {/* 7. Cinematic vignette */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,7,18,0.55)_100%)]"
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030712]/80 to-transparent" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(108,99,255,0.12),transparent_50%)]"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 8. Film grain */}
      <motion.div
        className="noise absolute inset-0 opacity-[0.35] mix-blend-overlay"
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
