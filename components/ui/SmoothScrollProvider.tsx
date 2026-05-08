"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider() {
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const lowCpu = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
    const lowMemory =
      typeof (navigator as Navigator & { deviceMemory?: number }).deviceMemory === "number" &&
      ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 4;
    if (connection?.saveData || prefersReducedMotion || isCoarsePointer || lowCpu || lowMemory) return;

    const lenis = new Lenis({
      duration: 0.6,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
