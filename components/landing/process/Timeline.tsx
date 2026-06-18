"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProcessCard } from "@/components/landing/process/ProcessCard";
import {
  PROCESS_MOTION,
  PROCESS_SCROLL_SPACER,
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

  useLayoutEffect(() => {
    measureProgress();
  }, [measureProgress, activeIndex, stages.length]);

  useLayoutEffect(() => {
    const lineTrack = lineTrackRef.current;
    if (!lineTrack || typeof ResizeObserver === "undefined") return;

    const resizeObserver = new ResizeObserver(() => {
      measureProgress();
    });

    resizeObserver.observe(lineTrack);
    return () => resizeObserver.disconnect();
  }, [measureProgress]);

  useLayoutEffect(() => {
    const onScroll = () => measureProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [measureProgress]);

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

      <div
        className={PROCESS_STYLES.timelineSpacer}
        style={{ height: PROCESS_SCROLL_SPACER }}
        aria-hidden
      />
    </div>
  );
}
