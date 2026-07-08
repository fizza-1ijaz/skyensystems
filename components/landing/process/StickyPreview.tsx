"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { ProcessStageImage } from "@/components/landing/process/ProcessStageImage";
import { PROCESS_MOTION, PROCESS_STYLES } from "@/components/landing/process/process-constants";
import type { ProcessStage } from "@/components/landing/process/types";

type StickyPreviewProps = {
  stages: ProcessStage[];
  activeIndex: number;
  reduceMotion: boolean;
};

function StickyPreviewComponent({ stages, activeIndex, reduceMotion }: StickyPreviewProps) {
  const slideShare = 100 / stages.length;

  const imageY = useMemo(
    () => `${-activeIndex * slideShare}%`,
    [activeIndex, slideShare],
  );

  return (
    <div className={PROCESS_STYLES.previewSticky}>
      <div className={`${PROCESS_STYLES.previewFrame} ${PROCESS_STYLES.previewSize}`}>
        <motion.div
          className="flex w-full flex-col will-change-transform"
          animate={{ y: imageY }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: PROCESS_MOTION.imagePreview.duration,
                  ease: PROCESS_MOTION.imagePreview.ease,
                }
          }
        >
          {stages.map((stage) => (
            <div
              key={stage.id}
              className={`relative shrink-0 ${PROCESS_STYLES.previewSize}`}
            >
              <ProcessStageImage
                stage={stage}
                sizes="(min-width: 1024px) 560px, 448px"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#141414]/50 via-transparent to-[#141414]/10"
                aria-hidden
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export const StickyPreview = memo(
  StickyPreviewComponent,
  (previous, next) =>
    previous.activeIndex === next.activeIndex &&
    previous.stages === next.stages &&
    previous.reduceMotion === next.reduceMotion,
);
