"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProcessCard } from "@/components/landing/process/ProcessCard";
import { PROCESS_MOTION, PROCESS_STYLES } from "@/components/landing/process/process-constants";
import type { ProcessStage } from "@/components/landing/process/types";

type TimelineProps = {
  stages: ProcessStage[];
  activeIndex: number;
  setStageRef: (index: number) => (element: HTMLElement | null) => void;
  reduceMotion: boolean;
};

export function Timeline({ stages, activeIndex, setStageRef, reduceMotion }: TimelineProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);

  const measureProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const activeCard = track.querySelector<HTMLElement>(
      `[data-stage-index="${activeIndex}"]`,
    );
    if (!activeCard) return;

    const trackTop = track.getBoundingClientRect().top;
    const cardRect = activeCard.getBoundingClientRect();
    const midpoint = cardRect.top - trackTop + cardRect.height * 0.5;

    setProgressHeight(Math.max(0, midpoint));
  }, [activeIndex]);

  useLayoutEffect(() => {
    measureProgress();
  }, [measureProgress, stages.length]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || typeof ResizeObserver === "undefined") return;

    const resizeObserver = new ResizeObserver(() => {
      measureProgress();
    });

    resizeObserver.observe(track);
    return () => resizeObserver.disconnect();
  }, [measureProgress]);

  return (
    <div ref={trackRef} className={PROCESS_STYLES.timelineTrack}>
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
  );
}
