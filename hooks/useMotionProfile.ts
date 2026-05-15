"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { MotionProfile } from "@/lib/performance";
import { detectMotionProfile } from "@/lib/performance";

export function useMotionProfile(): MotionProfile {
  const reduceMotion = useReducedMotion();
  const [profile, setProfile] = useState<MotionProfile>("lite");

  useEffect(() => {
    const apply = () => {
      if (reduceMotion) {
        setProfile("minimal");
        return;
      }
      setProfile(detectMotionProfile());
    };

    apply();
    window.addEventListener("resize", apply, { passive: true });
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", apply);
    return () => {
      window.removeEventListener("resize", apply);
      mq.removeEventListener("change", apply);
    };
  }, [reduceMotion]);

  return profile;
}
