"use client";

import "@/components/landing/reveal.css";
import { useInViewport } from "@/hooks/useInViewport";
import type { CSSProperties, ReactNode } from "react";

type FaqRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
};

export function FaqReveal({ children, className = "", delay = 0, x = 52 }: FaqRevealProps) {
  const { ref, inView } = useInViewport({
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.15,
    once: true,
  });

  const style = {
    "--reveal-delay": `${delay}s`,
    "--reveal-x": `${x}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`reveal-slide-x ${inView ? "is-visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
