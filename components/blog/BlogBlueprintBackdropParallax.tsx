"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlogBlueprintBackdropStatic } from "@/components/blog/BlogBlueprintBackdropStatic";

type BlogBlueprintBackdropParallaxProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function BlogBlueprintBackdropParallax({
  className = "",
  variant = "light",
}: BlogBlueprintBackdropParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  if (prefersReducedMotion) {
    return <BlogBlueprintBackdropStatic className={className} variant={variant} />;
  }

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0">
      <motion.div style={{ y }} className="absolute inset-0">
        <BlogBlueprintBackdropStatic className={className} variant={variant} />
      </motion.div>
    </div>
  );
}
