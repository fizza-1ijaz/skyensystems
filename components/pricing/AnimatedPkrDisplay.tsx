"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";

type AnimatedPkrDisplayProps = {
  value: number | null;
  className?: string;
};

export function AnimatedPkrDisplay({ value, className = "" }: AnimatedPkrDisplayProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const prevValue = useRef(0);
  const [display, setDisplay] = useState("—");

  useEffect(() => {
    if (value == null) {
      setDisplay("—");
      return;
    }

    if (prefersReducedMotion) {
      setDisplay(value.toLocaleString("en-PK", { maximumFractionDigits: 0 }));
      prevValue.current = value;
      return;
    }

    const from = prevValue.current;
    prevValue.current = value;

    const controls = animate(from, value, {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(
          Math.round(latest).toLocaleString("en-PK", { maximumFractionDigits: 0 }),
        );
      },
    });

    return () => controls.stop();
  }, [value, prefersReducedMotion]);

  return <span className={className}>{display}</span>;
}

function formatRateUpdated(lastUpdateUtc: string | null): string {
  if (!lastUpdateUtc) return "Indicative rate";

  const updated = new Date(lastUpdateUtc);
  if (Number.isNaN(updated.getTime())) return "Recently updated";

  const today = new Date();
  if (updated.toDateString() === today.toDateString()) return "Updated today";

  return `Updated ${updated.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })}`;
}

export { formatRateUpdated };
