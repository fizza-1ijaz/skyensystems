"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TECHNOLOGY_STACK } from "@/lib/homepage-data";
import { Reveal } from "@/components/landing/Reveal";

const BUBBLY_SPRING = { type: "spring" as const, stiffness: 520, damping: 22, mass: 0.45 };
const SUBTLE_BUBBLY_SPRING = { type: "spring" as const, stiffness: 420, damping: 26, mass: 0.5 };

function StackBubbleButton({
  label,
  isActive,
  index,
  onClick,
  tabId,
  panelId,
}: {
  label: string;
  isActive: boolean;
  index: number;
  onClick: () => void;
  tabId: string;
  panelId: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      id={tabId}
      onClick={onClick}
      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ...SUBTLE_BUBBLY_SPRING,
        delay: reduceMotion ? 0 : index * 0.04,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              scale: 1.03,
              boxShadow: isActive
                ? "0 16px 36px -22px rgba(49,195,195,0.6)"
                : "0 14px 32px -24px rgba(49,195,195,0.35)",
            }
      }
      whileTap={reduceMotion ? undefined : { y: -1, scale: 1.015 }}
      tabIndex={isActive ? 0 : -1}
      className={`w-full rounded-full border px-5 py-3 text-center text-sm font-semibold transition-[border-color,background-color,color] duration-200 md:text-base ${
        isActive
          ? "border-[#31C3C3] bg-[#31C3C3]/10 text-[#141414] shadow-[0_12px_32px_-24px_rgba(49,195,195,0.55)]"
          : "border-[#DADAD8] bg-[#FAFAF8] text-[#5C5C5C] hover:border-[#31C3C3]/40 hover:bg-white hover:text-[#141414]"
      }`}
    >
      {label}
    </motion.button>
  );
}

function TechBubblePill({ label, index }: { label: string; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        ...BUBBLY_SPRING,
        delay: reduceMotion ? 0 : index * 0.05,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.08,
              boxShadow: "0 18px 40px -18px rgba(49,195,195,0.55)",
            }
      }
      whileTap={reduceMotion ? undefined : { y: -2, scale: 1.04 }}
      className="cursor-default rounded-full border border-[#DADAD8] bg-white px-4 py-2 text-sm font-semibold text-[#141414] shadow-[0_8px_24px_-20px_rgba(20,20,20,0.2)] transition-[border-color,background-color,color] duration-200 hover:border-[#31C3C3]/55 hover:bg-[#31C3C3]/8 hover:text-[#0f5f5f]"
    >
      {label}
    </motion.li>
  );
}

export function TechnologyStackSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStack = TECHNOLOGY_STACK[activeIndex];

  return (
    <section className="border-y border-[#E5E5E3] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            Technology stack
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-[#141414]">
            Modern, scalable tools, documented and handed over with full ownership.
          </h2>
          <p className="mx-auto mt-4 w-full max-w-none text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            Every application we build uses proven technologies suited to your product&apos;s scale,
            security, and maintenance needs.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 max-w-5xl grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]">
              Select a Stack
            </p>
            <div className="flex flex-col gap-3" role="tablist" aria-label="Technology stacks">
              {TECHNOLOGY_STACK.map((group, index) => {
                const isActive = activeIndex === index;
                return (
                  <StackBubbleButton
                    key={group.category}
                    label={group.category}
                    isActive={isActive}
                    index={index}
                    onClick={() => setActiveIndex(index)}
                    tabId={`tech-stack-tab-${index}`}
                    panelId={`tech-stack-panel-${index}`}
                  />
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStack.category}
                id={`tech-stack-panel-${activeIndex}`}
                role="tabpanel"
                aria-labelledby={`tech-stack-tab-${activeIndex}`}
                tabIndex={0}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex min-h-[16rem] flex-col border border-[#E5E5E3] bg-[#FAFAF8] p-6 text-center md:min-h-[18rem] md:p-10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-bold text-[#141414] md:text-3xl">
                  {activeStack.category}
                </h3>
                <p className="mt-3 text-sm text-[#5C5C5C] md:text-base">
                  Technologies we use for {activeStack.category.toLowerCase()} delivery.
                </p>

                <ul className="mt-8 flex flex-wrap justify-center gap-2.5 md:gap-3">
                  {activeStack.items.map((tech, index) => (
                    <TechBubblePill key={tech} label={tech} index={index} />
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
