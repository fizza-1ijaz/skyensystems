"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

export type EditorialProcessStep = {
  phase: string;
  title: string;
  detail: string;
};

type EditorialProcessTimelineProps = {
  steps: readonly EditorialProcessStep[];
};

const PANEL_SPRING = { type: "spring" as const, stiffness: 380, damping: 30, mass: 0.5 };

function StepNode({
  step,
  index,
  isActive,
  isComplete,
  onSelect,
}: {
  step: EditorialProcessStep;
  index: number;
  isActive: boolean;
  isComplete: boolean;
  onSelect: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <li className="relative flex min-w-[4.5rem] flex-1 flex-col items-center">
      {index > 0 ? (
        <span
          className={`absolute right-1/2 top-5 h-px w-full -translate-y-1/2 transition-colors duration-300 ${
            isComplete || isActive ? "bg-[#31C3C3]/70" : "bg-white/15"
          }`}
          aria-hidden
        />
      ) : null}

      <motion.button
        type="button"
        onClick={onSelect}
        aria-current={isActive ? "step" : undefined}
        aria-label={`Step ${step.phase}: ${step.title}`}
        whileHover={reduceMotion ? undefined : { scale: 1.08 }}
        whileTap={reduceMotion ? undefined : { scale: 0.96 }}
        transition={PANEL_SPRING}
        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold transition-colors duration-300 md:h-11 md:w-11 ${
          isActive
            ? "border-[#31C3C3] bg-[#31C3C3] text-[#141414] shadow-[0_0_24px_rgba(49,195,195,0.45)]"
            : isComplete
              ? "border-[#31C3C3]/60 bg-[#141414] text-[#31C3C3]"
              : "border-white/20 bg-[#141414] text-white/50 hover:border-[#31C3C3]/40 hover:text-[#31C3C3]"
        }`}
      >
        {step.phase}
      </motion.button>

      <p
        className={`mt-3 hidden max-w-[7rem] text-center text-[11px] font-semibold leading-snug transition-colors duration-300 sm:block ${
          isActive ? "text-[#31C3C3]" : "text-white/45"
        }`}
      >
        {step.title}
      </p>
    </li>
  );
}

export function EditorialProcessTimeline({ steps }: EditorialProcessTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeStep = steps[activeIndex];
  const panelId = "process-step-panel";

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.max(0, Math.min(steps.length - 1, index)));
    },
    [steps.length],
  );

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  return (
    <div className="mt-14">
      <Reveal>
        <div className="overflow-x-auto pb-2 no-scrollbar">
          <ol className="mx-auto flex min-w-[36rem] max-w-4xl items-start justify-between gap-0 px-2 md:min-w-0 md:px-0">
            {steps.map((step, index) => (
              <StepNode
                key={step.phase}
                step={step}
                index={index}
                isActive={index === activeIndex}
                isComplete={index < activeIndex}
                onSelect={() => goTo(index)}
              />
            ))}
          </ol>
        </div>
      </Reveal>

      <Reveal delay={0.06} className="mt-10 md:mt-12">
        <div className="relative overflow-hidden border border-white/10 bg-white/[0.03] p-6 md:p-10">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(49,195,195,0.12),transparent_60%)]"
            aria-hidden
          />

          <AnimatePresence mode="wait">
            <motion.article
              key={activeStep.phase}
              id={panelId}
              role="region"
              aria-live="polite"
              initial={reduceMotion ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -24 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#31C3C3]">
                Step {activeStep.phase} of {String(steps.length).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#FAFAF8] md:text-3xl">
                {activeStep.title}
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#B8B8B8] md:text-base">
                {activeStep.detail}
              </p>
            </motion.article>
          </AnimatePresence>

          <div className="relative z-10 mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
            <button
              type="button"
              onClick={goPrev}
              disabled={activeIndex === 0}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/70 transition-colors duration-200 hover:border-[#31C3C3]/40 hover:text-[#31C3C3] disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
              Previous
            </button>

            <div className="hidden flex-1 px-4 sm:block">
              <div className="h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-[#31C3C3]"
                  initial={false}
                  animate={{ width: `${((activeIndex + 1) / steps.length) * 100}%` }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={activeIndex === steps.length - 1}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/70 transition-colors duration-200 hover:border-[#31C3C3]/40 hover:text-[#31C3C3] disabled:pointer-events-none disabled:opacity-30"
            >
              Next
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      </Reveal>

      <div className="mt-4 flex flex-wrap justify-center gap-2 sm:hidden">
        {steps.map((step, index) => (
          <button
            key={step.phase}
            type="button"
            onClick={() => goTo(index)}
            className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
              index === activeIndex
                ? "bg-[#31C3C3] text-[#141414]"
                : "bg-white/10 text-white/50"
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>
    </div>
  );
}
