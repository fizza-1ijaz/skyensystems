"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, {
    damping: 18,
    stiffness: 120,
    mass: 0.25,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#1E3A8A]"
      style={{ scaleX: width, width: "100%" }}
    />
  );
}
