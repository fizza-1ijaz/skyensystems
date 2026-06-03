"use client";

import { Reveal } from "@/components/landing/Reveal";
import { PRODUCT_PROCESS_STEPS } from "@/lib/products-page-data";

type ProductProcessStripProps = {
  dark?: boolean;
};

export function ProductProcessStrip({ dark = false }: ProductProcessStripProps) {
  return (
    <Reveal delay={0.16}>
      <div
        className={`mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t pt-8 ${
          dark ? "border-white/10" : "border-[#DADAD8]"
        }`}
      >
        {PRODUCT_PROCESS_STEPS.map((step, index) => (
          <div key={step} className="flex items-center gap-3">
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                dark ? "text-white/55" : "text-[#8A8A8A]"
              }`}
            >
              {step}
            </span>
            {index < PRODUCT_PROCESS_STEPS.length - 1 ? (
              <span
                className={`text-xs ${dark ? "text-[#6C63FF]/70" : "text-[#6C63FF]/55"}`}
                aria-hidden
              >
                ↓
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
