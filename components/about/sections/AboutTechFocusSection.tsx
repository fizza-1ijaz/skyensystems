"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/landing/Reveal";
import { ABOUT_TECH_STACK } from "@/lib/about-page-data";

const eyebrowClass =
  "text-[10px] font-semibold uppercase tracking-[0.24em] text-[#31C3C3]";

function TechBubble({
  className,
  delay = 0,
  duration = 5,
  reduceMotion,
}: {
  className: string;
  delay?: number;
  duration?: number;
  reduceMotion: boolean;
}) {
  if (reduceMotion) {
    return <span className={`absolute rounded-full ${className}`} aria-hidden />;
  }

  return (
    <motion.span
      className={`absolute rounded-full ${className}`}
      aria-hidden
      animate={{
        y: [0, -10, 4, 0],
        x: [0, 6, -4, 0],
        scale: [1, 1.08, 0.96, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function TechFocusBubbleButton({
  item,
  index,
}: {
  item: (typeof ABOUT_TECH_STACK)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal delay={0.05 * index}>
      <motion.div
        whileHover={reduceMotion ? undefined : { scale: 1.04, y: -4 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className={`group relative h-[5.75rem] overflow-hidden rounded-full border bg-gradient-to-br shadow-[0_12px_32px_-20px_rgba(20,20,20,0.35)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_22px_44px_-18px_rgba(20,20,20,0.28)] ${item.surface} ${item.border}`}
      >
        <TechBubble
          reduceMotion={Boolean(reduceMotion)}
          className={`-left-5 -top-6 h-20 w-20 blur-[1px] transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-1 ${item.bubbleA}`}
          delay={index * 0.35}
          duration={4.8 + index * 0.4}
        />
        <TechBubble
          reduceMotion={Boolean(reduceMotion)}
          className={`-bottom-7 right-2 h-24 w-24 blur-[2px] transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2 ${item.bubbleB}`}
          delay={0.6 + index * 0.25}
          duration={5.4 + index * 0.3}
        />
        <TechBubble
          reduceMotion={Boolean(reduceMotion)}
          className={`right-[28%] top-[18%] h-10 w-10 blur-0 transition-transform duration-500 group-hover:scale-150 ${item.bubbleC}`}
          delay={1.1 + index * 0.2}
          duration={4.2 + index * 0.5}
        />
        <TechBubble
          reduceMotion={Boolean(reduceMotion)}
          className={`left-[18%] bottom-2 h-7 w-7 opacity-80 blur-0 transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-2 ${item.bubbleC}`}
          delay={0.2 + index * 0.45}
          duration={3.8 + index * 0.35}
        />

        <div
          className="pointer-events-none absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />

        <div className="relative z-10 flex h-full items-center justify-center px-5">
          <span className="text-center font-heading text-sm font-bold tracking-[-0.02em] text-[#141414] transition-transform duration-300 group-hover:scale-105 md:text-base">
            {item.label}
          </span>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function AboutTechFocusSection() {
  return (
    <section className="py-16 md:py-[4.375rem]">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal className="max-w-3xl">
          <p className={eyebrowClass}>Technology Focus</p>
          <h2 className="editorial-section-title mt-3 text-[#141414]">
            We work across modern product, web, app, AI and growth systems.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_TECH_STACK.map((item, index) => (
            <TechFocusBubbleButton key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
