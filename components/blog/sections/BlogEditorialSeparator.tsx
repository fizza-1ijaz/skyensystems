"use client";

import { Reveal } from "@/components/landing/Reveal";
import { EDITORIAL_INSIGHTS } from "@/components/blog/blog-ui-utils";

type BlogEditorialSeparatorProps = {
  index: number;
};

export function BlogEditorialSeparator({ index }: BlogEditorialSeparatorProps) {
  const item = EDITORIAL_INSIGHTS[index % EDITORIAL_INSIGHTS.length];

  if (item.type === "blueprint") {
    return (
      <Reveal className="col-span-full">
        <div className="relative overflow-hidden border border-[#DADAD8] bg-[#FAFAF8] px-8 py-10 md:px-12 md:py-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            aria-hidden
            style={{
              backgroundImage:
                "linear-gradient(#141414 1px, transparent 1px), linear-gradient(90deg, #141414 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <p className="relative text-[10px] font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {item.label}
          </p>
          <p className="relative mt-4 max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight text-[#141414] md:text-3xl">
            {item.body}
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal className="col-span-full">
      <div
        className={`border px-8 py-10 md:px-12 md:py-12 ${
          item.type === "quote"
            ? "border-[#DADAD8] bg-[#F4F4F2]"
            : "border-[rgba(49,195,195,0.15)] bg-[rgba(49,195,195,0.04)]"
        }`}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">
          {item.label}
        </p>
        <p className="mt-4 max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight text-[#141414] md:text-3xl">
          {item.body}
        </p>
      </div>
    </Reveal>
  );
}
