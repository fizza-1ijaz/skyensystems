"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PROCESS_OBSERVER } from "@/components/landing/process/process-constants";

type UseActiveProcessStageOptions = {
  stageCount: number;
  rootMargin?: string;
  thresholds?: readonly number[];
};

/**
 * Tracks which process stage is closest to the viewport focus band.
 * Uses a single IntersectionObserver instance with per-stage ratio tracking
 * so scroll handlers are not needed.
 */
export function useActiveProcessStage({
  stageCount,
  rootMargin = PROCESS_OBSERVER.rootMargin,
  thresholds = PROCESS_OBSERVER.thresholds,
}: UseActiveProcessStageOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ratiosRef = useRef<number[]>(Array.from({ length: stageCount }, () => 0));
  const elementsRef = useRef<(HTMLElement | null)[]>(
    Array.from({ length: stageCount }, () => null),
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  const pickActiveIndex = useCallback(() => {
    const ratios = ratiosRef.current;
    let bestIndex = 0;
    let bestRatio = -1;

    for (let index = 0; index < stageCount; index += 1) {
      if (ratios[index] > bestRatio) {
        bestRatio = ratios[index];
        bestIndex = index;
      }
    }

    setActiveIndex(bestIndex);
  }, [stageCount]);

  const setStageRef = useCallback(
    (index: number) => (element: HTMLElement | null) => {
      const observer = observerRef.current;
      const previous = elementsRef.current[index];

      if (previous === element) return;

      if (observer && previous) {
        observer.unobserve(previous);
      }

      elementsRef.current[index] = element;

      if (observer && element) {
        observer.observe(element);
      }
    },
    [],
  );

  useEffect(() => {
    ratiosRef.current = Array.from({ length: stageCount }, () => 0);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = elementsRef.current.indexOf(entry.target as HTMLElement);
          if (index === -1) continue;
          ratiosRef.current[index] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        }
        pickActiveIndex();
      },
      { rootMargin, threshold: [...thresholds] },
    );

    observerRef.current = observer;

    for (const element of elementsRef.current) {
      if (element) observer.observe(element);
    }

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [stageCount, rootMargin, thresholds, pickActiveIndex]);

  return { activeIndex, setStageRef };
}
