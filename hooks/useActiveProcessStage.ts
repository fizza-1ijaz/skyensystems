"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PROCESS_OBSERVER } from "@/components/landing/process/process-constants";

type UseActiveProcessStageOptions = {
  stageCount: number;
};

function getFocusY() {
  if (typeof window === "undefined") return 0;
  return window.innerHeight * PROCESS_OBSERVER.focusRatio;
}

/**
 * Tracks which process stage aligns with the viewport focus line while scrolling.
 */
export function useActiveProcessStage({ stageCount }: UseActiveProcessStageOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const elementsRef = useRef<(HTMLElement | null)[]>(
    Array.from({ length: stageCount }, () => null),
  );
  const rafRef = useRef<number | null>(null);

  const updateActiveIndex = useCallback(() => {
    const focusY = getFocusY();
    const elements = elementsRef.current;

    for (let index = 0; index < stageCount; index += 1) {
      const element = elements[index];
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      if (rect.top <= focusY && rect.bottom > focusY) {
        setActiveIndex(index);
        return;
      }
    }

    const first = elements[0];
    const last = elements[stageCount - 1];

    if (first && last) {
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();

      if (focusY < firstRect.top) {
        setActiveIndex(0);
        return;
      }

      if (focusY >= lastRect.bottom) {
        setActiveIndex(stageCount - 1);
        return;
      }
    }

    let bestIndex = 0;
    let bestDistance = Infinity;

    for (let index = 0; index < stageCount; index += 1) {
      const element = elements[index];
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      const centerY = rect.top + rect.height * 0.5;
      const distance = Math.abs(centerY - focusY);

      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    }

    setActiveIndex(bestIndex);
  }, [stageCount]);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateActiveIndex();
    });
  }, [updateActiveIndex]);

  const setStageRef = useCallback(
    (index: number) => (element: HTMLElement | null) => {
      elementsRef.current[index] = element;
      scheduleUpdate();
    },
    [scheduleUpdate],
  );

  useEffect(() => {
    elementsRef.current = Array.from(
      { length: stageCount },
      (_, index) => elementsRef.current[index] ?? null,
    );
    updateActiveIndex();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [stageCount, scheduleUpdate, updateActiveIndex]);

  return { activeIndex, setStageRef };
}
