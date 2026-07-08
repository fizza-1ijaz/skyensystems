"use client";

import { useEffect, useRef, useState } from "react";

export function GlobalCursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });

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

    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    smooth.current = { ...target.current };

    let rafId = 0;

    const tick = () => {
      const el = glowRef.current;
      if (el) {
        smooth.current.x += (target.current.x - smooth.current.x) * 0.15;
        smooth.current.y += (target.current.y - smooth.current.y) * 0.15;
        el.style.background = `radial-gradient(180px circle at ${smooth.current.x}px ${smooth.current.y}px, rgba(49,195,195,0.18), rgba(49,195,195,0.06) 28%, rgba(30,58,138,0.04) 42%, transparent 64%)`;
      }
      rafId = window.requestAnimationFrame(tick);
    };

    const handlePointerMove = (event: PointerEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
    };

    rafId = window.requestAnimationFrame(tick);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40"
    />
  );
}
