"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

type TimelineMetrics = {
  lineTrackDocTop: number;
  trackHeight: number;
};

function getFocusDocY() {
  if (typeof window === "undefined") return 0;
  return window.scrollY + window.innerHeight * PROCESS_OBSERVER.focusRatio;
}

export function Timeline({ stages, activeIndex, setStageRef, reduceMotion }: TimelineProps) {
  const lineTrackRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<TimelineMetrics | null>(null);
  const [progressScale, setProgressScale] = useState(0);
  const scrollRafRef = useRef<number | null>(null);
  const measureRafRef = useRef<number | null>(null);

  const updateProgressFromScroll = useCallback(() => {
    const metrics = metricsRef.current;
    if (!metrics || metrics.trackHeight <= 0) return;

    const scrolled = getFocusDocY() - metrics.lineTrackDocTop;
    const ratio = Math.min(1, Math.max(0, scrolled / metrics.trackHeight));
    setProgressScale(ratio);
  }, []);

  const measureMetrics = useCallback(() => {
    const lineTrack = lineTrackRef.current;
    if (!lineTrack) return;

    const scrollY = window.scrollY;
    const lineTrackDocTop = lineTrack.getBoundingClientRect().top + scrollY;
    const lastCard = lineTrack.querySelector<HTMLElement>(
      `[data-stage-index="${stages.length - 1}"]`,
    );

    if (!lastCard) return;

    const lastCardDocBottom = lastCard.getBoundingClientRect().bottom + scrollY;
    const trackHeight = lastCardDocBottom - lineTrackDocTop;

    metricsRef.current = { lineTrackDocTop, trackHeight };
    updateProgressFromScroll();
  }, [stages.length, updateProgressFromScroll]);

  const scheduleMeasure = useCallback(() => {
    if (measureRafRef.current !== null) return;

    measureRafRef.current = window.requestAnimationFrame(() => {
      measureRafRef.current = null;
      measureMetrics();
    });
  }, [measureMetrics]);

  const scheduleScrollUpdate = useCallback(() => {
    if (scrollRafRef.current !== null) return;

    scrollRafRef.current = window.requestAnimationFrame(() => {
      scrollRafRef.current = null;
      updateProgressFromScroll();
    });
  }, [updateProgressFromScroll]);

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
    window.addEventListener("scroll", scheduleScrollUpdate, { passive: true });
    window.addEventListener("resize", scheduleMeasure, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleScrollUpdate);
      window.removeEventListener("resize", scheduleMeasure);

      if (scrollRafRef.current !== null) {
        window.cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = null;
      }

      if (measureRafRef.current !== null) {
        window.cancelAnimationFrame(measureRafRef.current);
        measureRafRef.current = null;
      }
    };
  }, [scheduleMeasure, scheduleScrollUpdate]);

  const progressTransition = reduceMotion
    ? undefined
    : `transform ${PROCESS_MOTION.progressLine.duration}s cubic-bezier(${PROCESS_MOTION.progressLine.ease.join(", ")})`;

  return (
    <div className={PROCESS_STYLES.timelineTrack}>
      <div ref={lineTrackRef} className="relative">
        <div className={PROCESS_STYLES.timelineLine} aria-hidden />
        <div
          className={PROCESS_STYLES.timelineProgress}
          aria-hidden
          style={{
            height: "100%",
            transform: `scaleY(${progressScale})`,
            transition: progressTransition,
          }}
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
