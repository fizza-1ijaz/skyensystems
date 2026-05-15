"use client";

import { useCallback, useEffect, useState } from "react";

type UseInViewportOptions = {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
};

/**
 * IntersectionObserver hook — use to pause offscreen animations / defer work.
 */
export function useInViewport({
  rootMargin = "120px",
  threshold = 0,
  once = false,
}: UseInViewportOptions = {}) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  const ref = useCallback((el: HTMLElement | null) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, rootMargin, threshold, once]);

  return { ref, inView };
}
