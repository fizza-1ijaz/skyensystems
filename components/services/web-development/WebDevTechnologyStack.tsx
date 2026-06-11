"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/landing/Reveal";
import { WEB_DEV_TECHNOLOGY_STACK } from "@/lib/web-development-service-data";

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

export function WebDevTechnologyStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStack = WEB_DEV_TECHNOLOGY_STACK.groups[activeIndex];

  return (
    <section className="border-b border-[#E5E5E3] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {WEB_DEV_TECHNOLOGY_STACK.label}
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-[#141414]">
            {WEB_DEV_TECHNOLOGY_STACK.heading}
          </h2>
          <p className="mx-auto mt-4 w-full max-w-3xl text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {WEB_DEV_TECHNOLOGY_STACK.paragraph}
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]">
              Select a stack
            </p>
            <ul className="flex flex-col gap-3" role="tablist" aria-label="Web development technology stacks">
              {WEB_DEV_TECHNOLOGY_STACK.groups.map((group, index) => {
                const isActive = activeIndex === index;
                return (
                  <li key={group.category}>
                    <StackBubbleButton
                      label={group.category}
                      isActive={isActive}
                      index={index}
                      onClick={() => setActiveIndex(index)}
                      tabId={`web-dev-tech-tab-${index}`}
                      panelId={`web-dev-tech-panel-${index}`}
                    />
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeStack.category}
                id={`web-dev-tech-panel-${activeIndex}`}
                role="tabpanel"
                aria-labelledby={`web-dev-tech-tab-${activeIndex}`}
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
                  Technologies we use for {activeStack.category.toLowerCase()} in web projects.
                </p>

                <ul className="mt-8 flex flex-wrap justify-center gap-2.5 md:gap-3">
                  {activeStack.items.map((tech, index) => (
                    <TechBubblePill key={tech} label={tech} index={index} />
                  ))}
                </ul>
              </motion.article>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
