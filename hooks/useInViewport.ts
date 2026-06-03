"use client";

import { useCallback, useEffect, useState } from "react";

type UseInViewportOptions = {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
};

/**
 * IntersectionObserver hook — use to pause offscreen animations / defer work.
 * Target node state is updated after commit so we never setState during render/ref attachment.
 */
export function useInViewport({
  rootMargin = "120px",
  threshold = 0,
  once = false,
}: UseInViewportOptions = {}) {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  const ref = useCallback((el: HTMLElement | null) => {
    queueMicrotask(() => setTarget(el));
  }, []);

  useEffect(() => {
    if (!target) {
      setInView(false);
      return;
    }

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

    observer.observe(target);
    return () => observer.disconnect();
  }, [target, rootMargin, threshold, once]);

  return { ref, inView };
}
