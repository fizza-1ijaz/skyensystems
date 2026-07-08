"use client";

import type { ReactNode } from "react";
import { useInViewport } from "@/hooks/useInViewport";

type LazyWhenVisibleProps = {
  children: ReactNode;
  className?: string;
  minHeight?: number;
};

/** Mount children only when near the viewport so their JS chunks load later. */
export function LazyWhenVisible({
  children,
  className = "",
  minHeight = 320,
}: LazyWhenVisibleProps) {
  const { ref, inView } = useInViewport({ rootMargin: "280px 0px", once: true });

  return (
    <div
      ref={ref}
      className={className}
      style={inView ? undefined : { minHeight }}
    >
      {inView ? children : null}
    </div>
  );
}
