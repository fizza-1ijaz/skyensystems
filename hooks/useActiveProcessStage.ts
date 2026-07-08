"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PROCESS_OBSERVER } from "@/components/landing/process/process-constants";

type UseActiveProcessStageOptions = {
  stageCount: number;
};

/**
 * Tracks the active process stage with IntersectionObserver instead of scroll-time
 * layout reads (getBoundingClientRect), avoiding forced reflows while scrolling.
 */
export function useActiveProcessStage({ stageCount }: UseActiveProcessStageOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const elementsRef = useRef<(HTMLElement | null)[]>(
    Array.from({ length: stageCount }, () => null),
  );
  const ratiosRef = useRef<number[]>(Array.from({ length: stageCount }, () => 0));
  const observerRef = useRef<IntersectionObserver | null>(null);

  const applyActiveFromRatios = useCallback(() => {
    const ratios = ratiosRef.current;
    let bestIndex = 0;
    let bestRatio = -1;

    for (let index = 0; index < stageCount; index += 1) {
      if (ratios[index] > bestRatio) {
        bestRatio = ratios[index];
        bestIndex = index;
      }
    }

    if (bestRatio > 0) {
      setActiveIndex(bestIndex);
    }
  }, [stageCount]);

  const setStageRef = useCallback((index: number) => {
    return (element: HTMLElement | null) => {
      const observer = observerRef.current;
      const previous = elementsRef.current[index];

      if (previous && observer) {
        observer.unobserve(previous);
      }

      elementsRef.current[index] = element;

      if (element && observer) {
        observer.observe(element);
      }
    };
  }, []);

  useEffect(() => {
    elementsRef.current = Array.from(
      { length: stageCount },
      (_, index) => elementsRef.current[index] ?? null,
    );
    ratiosRef.current = Array.from({ length: stageCount }, () => 0);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = Number((entry.target as HTMLElement).dataset.stageIndex);
          if (!Number.isNaN(index) && index >= 0 && index < stageCount) {
            ratiosRef.current[index] = entry.intersectionRatio;
          }
        }
        applyActiveFromRatios();
      },
      {
        root: null,
        rootMargin: PROCESS_OBSERVER.rootMargin,
        threshold: [...PROCESS_OBSERVER.thresholds],
      },
    );

    observerRef.current = observer;

    for (const element of elementsRef.current) {
      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [stageCount, applyActiveFromRatios]);

  return { activeIndex, setStageRef };
}
