"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 28, stiffness: 180 });
  const sy = useSpring(y, { damping: 28, stiffness: 180 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const frameId = requestAnimationFrame(() => {
      setEnabled(media.matches && !connection?.saveData);
    });
    if (!media.matches || connection?.saveData) {
      return () => cancelAnimationFrame(frameId);
    }

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - 120);
      y.set(event.clientY - 120);
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onMove);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[5] hidden h-60 w-60 rounded-full bg-[radial-gradient(circle,#8B5CF633_0%,#00C2FF0D_58%,transparent_80%)] blur-xl md:block"
      style={{ x: sx, y: sy }}
    />
  );
}
