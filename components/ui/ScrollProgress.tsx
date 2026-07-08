"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionProfile } from "@/hooks/useMotionProfile";

export function ScrollProgress() {
  const profile = useMotionProfile();
  const [progress, setProgress] = useState(0);
  const maxScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (profile !== "full") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const measureMax = () => {
      maxScrollRef.current = document.documentElement.scrollHeight - window.innerHeight;
    };

    const update = () => {
      const max = maxScrollRef.current;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };

    const scheduleUpdate = () => {
      if (rafRef.current !== null) return;

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        update();
      });
    };

    measureMax();
    update();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measureMax)
        : null;

    resizeObserver?.observe(document.documentElement);

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", measureMax, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", measureMax);
      resizeObserver?.disconnect();

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
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
