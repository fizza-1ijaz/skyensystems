"use client";

import { LOCATIONS_HERO } from "@/lib/locations-page-data";
import { Reveal } from "@/components/landing/Reveal";

function MapComposition() {
  return (
    <svg viewBox="0 0 480 320" className="h-full w-full" aria-hidden fill="none">
      <rect x="0" y="0" width="480" height="320" fill="#FAFAF8" />
      <path
        d="M40 200 Q120 80 240 120 T440 100"
        stroke="#D4D4D4"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M60 240 Q180 160 300 200 T420 180"
        stroke="#E5E5E3"
        strokeWidth="1"
        fill="none"
      />
      {[
        { cx: 120, cy: 140, label: "US" },
        { cx: 220, cy: 100, label: "UK" },
        { cx: 300, cy: 130, label: "BH" },
        { cx: 340, cy: 110, label: "PK" },
        { cx: 280, cy: 160, label: "GCC" },
      ].map((node) => (
        <g key={node.label}>
          <circle cx={node.cx} cy={node.cy} r="28" stroke="#D4D4D4" strokeWidth="1" fill="white" />
          <circle cx={node.cx} cy={node.cy} r="6" fill="#6C63FF" />
          <text
            x={node.cx}
            y={node.cy + 44}
            textAnchor="middle"
            fill="#8A8A8A"
            fontSize="9"
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.1em"
          >
            {node.label}
          </text>
        </g>
      ))}
      <path d="M120 140 L220 100 L300 130 L340 110" stroke="#6C63FF" strokeWidth="1" strokeDasharray="6 4" opacity="0.7" />
      <path d="M300 130 L340 110 L280 160" stroke="#6C63FF" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
    </svg>
  );
}

export function LocationsHero() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#F4F4F2]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8A8A]">
              {LOCATIONS_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-[12ch] font-heading text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#141414]">
              {LOCATIONS_HERO.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#5C5C5C] md:text-lg">
              {LOCATIONS_HERO.supporting}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.12} className="lg:col-span-6">
          <div className="min-h-[240px] border border-[#E5E5E3] bg-white p-2 md:min-h-[300px]">
            <MapComposition />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
