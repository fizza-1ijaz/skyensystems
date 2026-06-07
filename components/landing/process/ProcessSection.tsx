"use client";

import { motion, useReducedMotion } from "framer-motion";
import { StickyPreview } from "@/components/landing/process/StickyPreview";
import { Timeline } from "@/components/landing/process/Timeline";
import { PROCESS_STAGES } from "@/components/landing/process/process-data";
import { PROCESS_MOTION, PROCESS_STYLES } from "@/components/landing/process/process-constants";
import { useActiveProcessStage } from "@/hooks/useActiveProcessStage";

export function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion === true;

  const { activeIndex, setStageRef } = useActiveProcessStage({
    stageCount: PROCESS_STAGES.length,
  });

  return (
    <motion.section
      className={PROCESS_STYLES.section}
      aria-label="Product development process"
      initial={reduceMotion ? false : { opacity: 0, y: PROCESS_MOTION.sectionEntry.y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: PROCESS_MOTION.sectionEntry.duration,
        ease: PROCESS_MOTION.sectionEntry.ease,
      }}
    >
      <div className={PROCESS_STYLES.container}>
        <h2 className={PROCESS_STYLES.heading}>
          Our product <span className={PROCESS_STYLES.accent}>development process</span>
        </h2>

        <div className={PROCESS_STYLES.grid}>
          <Timeline
            stages={PROCESS_STAGES}
            activeIndex={activeIndex}
            setStageRef={setStageRef}
            reduceMotion={reduceMotion}
          />
          <StickyPreview
            stages={PROCESS_STAGES}
            activeIndex={activeIndex}
            reduceMotion={reduceMotion}
          />
        </div>
      </div>
    </motion.section>
  );
}
