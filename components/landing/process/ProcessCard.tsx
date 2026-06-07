"use client";

import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";
import { PROCESS_MOTION, PROCESS_STYLES } from "@/components/landing/process/process-constants";
import type { ProcessStage } from "@/components/landing/process/types";

type ProcessCardProps = {
  stage: ProcessStage;
  index: number;
  totalStages: number;
  isActive: boolean;
  setStageRef: (index: number) => (element: HTMLElement | null) => void;
  reduceMotion: boolean;
};

function ProcessCardComponent({
  stage,
  index,
  totalStages,
  isActive,
  setStageRef,
  reduceMotion,
}: ProcessCardProps) {
  const stepLabel = `${stage.step}/${String(totalStages).padStart(2, "0")}`;

  return (
    <article
      ref={setStageRef(index)}
      data-stage-index={index}
      aria-current={isActive ? "step" : undefined}
      className="relative pl-10 md:pl-12"
    >
      {isActive && (
        <div className={PROCESS_STYLES.mobilePreview}>
          <Image
            src={stage.image}
            alt={stage.imageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#141414]/50 via-transparent to-[#141414]/10"
            aria-hidden
          />
        </div>
      )}

      <motion.div
        animate={{
          opacity: isActive ? 1 : 0.45,
        }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: PROCESS_MOTION.stageHighlight.duration, ease: PROCESS_MOTION.stageHighlight.ease }
        }
      >
        <p
          className={`text-xs font-medium tracking-[0.08em] transition-colors duration-300 ${
            isActive ? PROCESS_STYLES.accent : "text-[#8A8A8A]"
          }`}
        >
          {stepLabel}
        </p>
        <h3
          className={`mt-2 font-heading text-2xl font-bold tracking-tight transition-colors duration-300 md:text-[1.75rem] lg:text-3xl ${
            isActive ? PROCESS_STYLES.accent : "text-[#FAFAF8]"
          }`}
        >
          {stage.title}
        </h3>
        <p
          className={`mt-3 max-w-lg text-sm leading-relaxed transition-colors duration-300 md:text-[0.95rem] ${
            isActive ? "text-[#D4D4D4]" : "text-[#8A8A8A]"
          }`}
        >
          {stage.description}
        </p>
      </motion.div>
    </article>
  );
}

export const ProcessCard = memo(
  ProcessCardComponent,
  (previous, next) =>
    previous.isActive === next.isActive &&
    previous.stage.id === next.stage.id &&
    previous.reduceMotion === next.reduceMotion,
);
