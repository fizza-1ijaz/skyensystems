"use client";

import "./reveal.css";
import { useInViewport } from "@/hooks/useInViewport";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className = "", delay = 0, y = 28 }: RevealProps) {
  const { ref, inView } = useInViewport({
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.15,
    once: true,
  });

  const style = {
    "--reveal-delay": `${delay}s`,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`reveal-fade ${inView ? "is-visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
