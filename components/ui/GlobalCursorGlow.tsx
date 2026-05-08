"use client";

import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function GlobalCursorGlow() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 220, damping: 30, mass: 0.6 });
  const smoothY = useSpring(cursorY, { stiffness: 220, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    cursorX.set(window.innerWidth / 2);
    cursorY.set(window.innerHeight / 2);

    const handlePointerMove = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [cursorX, cursorY]);

  const glow = useMotionTemplate`radial-gradient(240px circle at ${smoothX}px ${smoothY}px, rgba(108,99,255,0.22), rgba(108,99,255,0.08) 28%, rgba(30,58,138,0.05) 42%, transparent 64%)`;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40"
      style={{ background: glow }}
    />
  );
}
