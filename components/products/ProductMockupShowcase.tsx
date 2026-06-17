"use client";

import Image from "next/image";
import { BookOpen } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ProductScene } from "@/lib/products-page-data";

type ProductMockupShowcaseProps = {
  product: ProductScene;
  priority?: boolean;
  frameBg?: "#0F172A" | "#111827";
};

export function ProductMockupShowcase({
  product,
  priority = false,
  frameBg = "#0F172A",
}: ProductMockupShowcaseProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const mockups = [product.mockup1Src, product.mockup2Src].filter(Boolean);
  const isLinguatude = product.id === "linguatude";
  const bgClass = frameBg === "#111827" ? "bg-[#111827]" : "bg-[#0F172A]";

  if (mockups.length === 0) {
    return (
      <div
        className={`relative flex min-h-[28rem] items-center justify-center border border-white/10 ${bgClass} p-10 md:min-h-[32rem] md:p-14`}
      >
        <div className="flex flex-col items-center gap-4 text-white/30">
          <BookOpen size={48} strokeWidth={1} />
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em]">Prototype stage</p>
        </div>
      </div>
    );
  }

  const mainWidthClass = isLinguatude ? "w-[200px] md:w-[240px]" : "w-[180px] md:w-[220px]";
  const secondaryWidthClass = isLinguatude ? "w-[180px] md:w-[220px]" : "w-[160px] md:w-[200px]";
  const secondaryOffsetClass = isLinguatude
    ? "mt-0 md:-ml-24 md:mt-6"
    : "mt-0 md:-ml-16 md:mt-12";
  const mainSizes = isLinguatude ? "(max-width: 768px) 200px, 240px" : "(max-width: 768px) 180px, 220px";
  const secondarySizes = isLinguatude ? "(max-width: 768px) 180px, 220px" : "(max-width: 768px) 160px, 200px";
  const mainImgClass = isLinguatude ? "object-cover scale-110 -translate-y-1" : "object-cover";
  const secondaryImgClass = isLinguatude ? "object-cover scale-105 -translate-y-0.5" : "object-cover";

  const floatAnimation = prefersReducedMotion
    ? {}
    : {
        animate: { y: [0, -6, 0] },
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
      };

  return (
    <div
      className={`group relative min-h-[22rem] overflow-hidden border border-white/10 ${bgClass} p-6 sm:min-h-[28rem] sm:p-8 md:min-h-[32rem] md:p-12 lg:p-14`}
    >
      {/* Blueprint overlay inside frame */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mb-6 border-b border-white/10 pb-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
          {product.mockupLabel}
        </p>
        <p className="mt-2 text-sm text-white/50">{product.mockupNote}</p>
        {product.previewLabels.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {product.previewLabels.map((label) => (
              <span
                key={label}
                className="border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/55"
              >
                {label}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <motion.div
        className="relative z-10 flex min-h-[20rem] items-center justify-center py-4"
        {...floatAnimation}
      >
        <div className="relative flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
          <div
            className={`relative ${mainWidthClass} aspect-[9/19] overflow-hidden rounded-[2.25rem] border-[5px] border-[#1a2438] bg-[#0a0f1a] shadow-[0_32px_64px_-24px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-[1.02] z-10`}
          >
            <div className="absolute left-1/2 top-0 z-20 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-[#0a0f1a]" />
            <div className="relative h-full w-full">
              <Image
                src={mockups[0]!}
                alt={`${product.name} mockup 1`}
                fill
                sizes={mainSizes}
                quality={isLinguatude ? 100 : 85}
                className={mainImgClass}
                priority={priority || isLinguatude}
              />
            </div>
          </div>

          {mockups[1] ? (
            <div
              className={`relative ${secondaryWidthClass} aspect-[9/19] overflow-hidden rounded-[2.25rem] border-[5px] border-[#1a2438] bg-[#0a0f1a] shadow-[0_24px_48px_-20px_rgba(0,0,0,0.5)] opacity-90 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100 ${secondaryOffsetClass}`}
            >
              <div className="absolute left-1/2 top-0 z-20 h-4 w-16 -translate-x-1/2 rounded-b-xl bg-[#0a0f1a]" />
              <div className="relative h-full w-full">
                <Image
                  src={mockups[1]}
                  alt={`${product.name} mockup 2`}
                  fill
                  sizes={secondarySizes}
                  quality={isLinguatude ? 90 : 85}
                  className={secondaryImgClass}
                  priority={priority || isLinguatude}
                />
              </div>
            </div>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}
