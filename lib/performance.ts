/** Shared performance tier detection (client-only helpers). */

export type MotionProfile = "full" | "lite" | "minimal";

export function detectMotionProfile(): MotionProfile {
  if (typeof window === "undefined") return "lite";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return "minimal";

  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.innerWidth < 768;
  const saveData = "connection" in navigator && (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  const lowMemory =
    "deviceMemory" in navigator &&
    typeof (navigator as Navigator & { deviceMemory?: number }).deviceMemory === "number" &&
    (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 4;
  const lowCpu =
    typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;

  if (coarse || narrow || saveData || lowMemory || lowCpu) return "lite";
  return "full";
}

export function shouldUseLenis(): boolean {
  return detectMotionProfile() === "full";
}

/** GPU-friendly transform + opacity only (no layout properties). */
export const GPU_LAYER = "transform-gpu will-change-transform";
