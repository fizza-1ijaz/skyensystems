"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMotionProfile } from "@/hooks/useMotionProfile";

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const profile = useMotionProfile();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.01], [0, 1]);

  if (reduceMotion || profile !== "full") {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-[var(--site-nav-height)] z-[55] h-px origin-left bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#1E3A8A]"
      style={{ scaleX: scrollYProgress, opacity }}
    />
  );
}
