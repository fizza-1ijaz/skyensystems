"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMotionProfile } from "@/hooks/useMotionProfile";

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const profile = useMotionProfile();
  const { scrollYProgress } = useScroll();

  if (reduceMotion || profile !== "full") {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#1E3A8A]"
      style={{ scaleX: scrollYProgress, width: "100%" }}
    />
  );
}
