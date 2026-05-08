"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function GlobalCursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 170, damping: 32, mass: 0.9 });
  const smoothY = useSpring(cursorY, { stiffness: 170, damping: 32, mass: 0.9 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isSmallViewport = window.innerWidth < 1024;
    const shouldEnable =
      !prefersReducedMotion && !connection?.saveData && !isCoarsePointer && !isSmallViewport;

    setEnabled(shouldEnable);
    if (!shouldEnable) return;

    cursorX.set(window.innerWidth / 2);
    cursorY.set(window.innerHeight / 2);

    let rafId = 0;
    let pendingEvent: PointerEvent | null = null;
    const flush = () => {
      if (pendingEvent) {
        cursorX.set(pendingEvent.clientX);
        cursorY.set(pendingEvent.clientY);
      }
      rafId = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pendingEvent = event;
      if (!rafId) {
        rafId = window.requestAnimationFrame(flush);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY]);

  const glow = useMotionTemplate`radial-gradient(180px circle at ${smoothX}px ${smoothY}px, rgba(108,99,255,0.18), rgba(108,99,255,0.06) 28%, rgba(30,58,138,0.04) 42%, transparent 64%)`;

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40"
      style={{ background: glow }}
    />
  );
}
