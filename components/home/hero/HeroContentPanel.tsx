"use client";

import type { MotionStyle } from "framer-motion";
import { motion } from "framer-motion";

type HeroContentPanelProps = {
  children: React.ReactNode;
  motionStyle: MotionStyle;
};

/** Curved divider between cosmic left panel and white content (desktop). */
function PanelCurve() {
  return (
    <svg
      className="pointer-events-none absolute -left-[clamp(2rem,6vw,5rem)] top-0 z-10 hidden h-full w-[clamp(3rem,8vw,6rem)] lg:block"
      viewBox="0 0 80 800"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M80,0 C40,120 20,280 35,400 C50,520 15,640 0,800 L80,800 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function HeroContentPanel({ children, motionStyle }: HeroContentPanelProps) {
  return (
    <div className="relative flex min-h-[58vh] items-center justify-center bg-[#070B2B] px-4 py-12 sm:px-6 lg:min-h-full lg:bg-transparent lg:px-8 lg:py-16 xl:px-12">
      <PanelCurve />

      {/* Glow behind card */}
      <motion.div
        className="pointer-events-none absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#6366f1]/20 via-[#22d3ee]/10 to-transparent blur-3xl lg:inset-8"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <motion.article
        style={motionStyle}
        className="relative z-20 w-full max-w-xl rounded-[2rem] border border-white/80 bg-white/95 p-8 shadow-[0_32px_100px_-24px_rgba(15,23,42,0.22)] backdrop-blur-sm sm:max-w-2xl sm:p-10 lg:max-w-none lg:rounded-[2.75rem] lg:rounded-tl-[4rem] lg:rounded-bl-[2rem] lg:p-12 xl:p-14"
      >
        <motion.div
          className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#22d3ee]/10 blur-2xl"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity }}
          aria-hidden
        />
        <motion.div className="relative space-y-6 sm:space-y-7 md:space-y-8">{children}</motion.div>
      </motion.article>
    </div>
  );
}
