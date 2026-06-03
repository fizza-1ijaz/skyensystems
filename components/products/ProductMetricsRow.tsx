"use client";

import { Reveal } from "@/components/landing/Reveal";
import type { ProductMetric } from "@/lib/products-page-data";

type ProductMetricsRowProps = {
  metrics: readonly ProductMetric[];
  dark?: boolean;
};

export function ProductMetricsRow({ metrics, dark = false }: ProductMetricsRowProps) {
  return (
    <div
      className={`mt-10 grid grid-cols-2 gap-px sm:grid-cols-4 ${
        dark ? "bg-white/10" : "bg-[#DADAD8]"
      }`}
    >
      {metrics.map((metric, index) => (
        <Reveal key={metric.label} delay={0.08 + index * 0.05}>
          <div className={`px-4 py-5 md:px-5 md:py-6 ${dark ? "bg-[#0F172A]" : "bg-[#FAFAF8]"}`}>
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
          </div>
        </Reveal>
      ))}
    </div>
  );
}
