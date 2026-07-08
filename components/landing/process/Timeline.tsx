"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProcessCard } from "@/components/landing/process/ProcessCard";
import {
  PROCESS_MOTION,
  PROCESS_OBSERVER,
  PROCESS_STYLES,
} from "@/components/landing/process/process-constants";
import type { ProcessStage } from "@/components/landing/process/types";

type TimelineProps = {
  stages: ProcessStage[];
  activeIndex: number;
  setStageRef: (index: number) => (element: HTMLElement | null) => void;
  reduceMotion: boolean;
};

function getFocusY() {
  if (typeof window === "undefined") return 0;
  return window.innerHeight * PROCESS_OBSERVER.focusRatio;
}

export function Timeline({ stages, activeIndex, setStageRef, reduceMotion }: TimelineProps) {
  const lineTrackRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);
  const rafRef = useRef<number | null>(null);

  const measureProgress = useCallback(() => {
    const lineTrack = lineTrackRef.current;
    if (!lineTrack) return;

    const lineTrackTop = lineTrack.getBoundingClientRect().top;
    const focusY = getFocusY();
    const lastCard = lineTrack.querySelector<HTMLElement>(
      `[data-stage-index="${stages.length - 1}"]`,
    );

    if (!lastCard) return;

    const lastCardBottom = lastCard.getBoundingClientRect().bottom - lineTrackTop;
    const scrollProgress = focusY - lineTrackTop;
    const height = Math.min(lastCardBottom, Math.max(0, scrollProgress));

    setProgressHeight(height);
  }, [stages.length]);

  const scheduleMeasure = useCallback(() => {
    if (rafRef.current !== null) return;

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      measureProgress();
    });
  }, [measureProgress]);

  useEffect(() => {
    scheduleMeasure();
  }, [scheduleMeasure, stages.length]);

  useEffect(() => {
    const lineTrack = lineTrackRef.current;
    if (!lineTrack || typeof ResizeObserver === "undefined") return;

    const resizeObserver = new ResizeObserver(() => {
      scheduleMeasure();
    });

    resizeObserver.observe(lineTrack);
    return () => resizeObserver.disconnect();
  }, [scheduleMeasure]);

  useEffect(() => {
    window.addEventListener("scroll", scheduleMeasure, { passive: true });
    window.addEventListener("resize", scheduleMeasure, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleMeasure);
      window.removeEventListener("resize", scheduleMeasure);

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [scheduleMeasure]);

  return (
    <div className={PROCESS_STYLES.timelineTrack}>
      <div ref={lineTrackRef} className="relative">
        <div className={PROCESS_STYLES.timelineLine} aria-hidden />
        <motion.div
          className={PROCESS_STYLES.timelineProgress}
          aria-hidden
          initial={false}
          animate={{ height: progressHeight }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: PROCESS_MOTION.progressLine.duration,
                  ease: PROCESS_MOTION.progressLine.ease,
                }
          }
        />

        <div className={PROCESS_STYLES.stageList}>
          {stages.map((stage, index) => (
            <ProcessCard
              key={stage.id}
              stage={stage}
              index={index}
              totalStages={stages.length}
              isActive={index === activeIndex}
              setStageRef={setStageRef}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>

      <div className={PROCESS_STYLES.timelineSpacer} aria-hidden />
    </div>
  );
}
