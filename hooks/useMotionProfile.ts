"use client";

import { useEffect, useState } from "react";
import type { MotionProfile } from "@/lib/performance";
import { detectMotionProfile } from "@/lib/performance";

export function useMotionProfile(): MotionProfile {
  const [profile, setProfile] = useState<MotionProfile>("lite");

  useEffect(() => {
    const apply = () => setProfile(detectMotionProfile());

    apply();
    window.addEventListener("resize", apply, { passive: true });
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", apply);

    return () => {
      window.removeEventListener("resize", apply);
      mq.removeEventListener("change", apply);
    };
  }, []);

  return profile;
}
