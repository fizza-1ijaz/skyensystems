"use client";

import { useEffect, useState } from "react";
import { useMotionProfile } from "@/hooks/useMotionProfile";

export function ScrollProgress() {
  const profile = useMotionProfile();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (profile !== "full") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [profile]);

  if (profile !== "full") {
    return null;
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-[var(--site-nav-height)] z-[55] h-px origin-left bg-gradient-to-r from-[#31C3C3] via-[#8B5CF6] to-[#1E3A8A] transition-opacity duration-150"
      style={{
        transform: `scaleX(${progress})`,
        opacity: progress > 0.01 ? 1 : 0,
      }}
    />
  );
}
