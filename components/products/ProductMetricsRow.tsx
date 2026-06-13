"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/landing/Reveal";
import type { ProductMetric } from "@/lib/products-page-data";

type ProductMetricsRowProps = {
  metrics: readonly ProductMetric[];
  dark?: boolean;
};

const METRIC_HOVER_SPRING = { type: "spring" as const, stiffness: 320, damping: 28, mass: 0.55 };

function MetricCard({
  metric,
  dark,
  cardBg,
}: {
  metric: ProductMetric;
  dark: boolean;
  cardBg: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative flex aspect-square w-full flex-col justify-center px-4 py-5 md:px-5 md:py-6 ${cardBg}`}
      initial={false}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.03,
              zIndex: 10,
              boxShadow: "0 20px 48px -16px rgba(49,195,195,0.42)",
            }
      }
      transition={METRIC_HOVER_SPRING}
    >
      <p
        className={`font-heading text-2xl font-bold tracking-tight md:text-[1.65rem] ${
          dark ? "text-[#FAFAF8]" : "text-[#141414]"
        }`}
      >
        {metric.value}
      </p>
      <p
        className={`mt-1.5 text-[10px] font-medium uppercase tracking-[0.16em] ${
          dark ? "text-white/45" : "text-[#8A8A8A]"
        }`}
      >
        {metric.label}
      </p>
    </motion.div>
  );
}

export function ProductMetricsRow({ metrics, dark = false }: ProductMetricsRowProps) {
  const cardBg = dark ? "bg-[#0F172A]" : "bg-[#FAFAF8]";

  return (
    <div
      className={`mt-10 grid grid-cols-2 items-stretch gap-px sm:grid-cols-4 ${
        dark ? "bg-white/10" : "bg-[#DADAD8]"
      }`}
    >
      {metrics.map((metric, index) => (
        <Reveal key={metric.label} delay={0.08 + index * 0.05} className="h-full min-h-0">
          <MetricCard metric={metric} dark={dark} cardBg={cardBg} />
        </Reveal>
      ))}
    </div>
  );
}
