"use client";

import { WHO_WE_ARE_HERO } from "@/lib/who-we-are-data";
import { Reveal } from "@/components/landing/Reveal";

function ArchitectureVisual() {
  return (
    <svg viewBox="0 0 400 360" className="h-full w-full" aria-hidden fill="none">
      <rect x="16" y="16" width="368" height="328" stroke="#D4D4D4" strokeWidth="1.5" />
      <line x1="16" y1="56" x2="384" y2="56" stroke="#E5E5E3" />
      <text x="32" y="40" fill="#8A8A8A" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.14em">
        COMPANY PROFILE
      </text>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={32 + (i % 2) * 180}
          y={72 + Math.floor(i / 2) * 120}
          width="160"
          height="96"
          stroke={i === 1 ? "#31C3C3" : "#D4D4D4"}
          strokeWidth={i === 1 ? 2 : 1}
          fill={i === 1 ? "rgba(49,195,195,0.08)" : "#FAFAF8"}
        />
      ))}
      <path d="M112 120 L288 120 M200 168 L200 264" stroke="#31C3C3" strokeWidth="1.5" strokeDasharray="5 4" />
      <circle cx="200" cy="192" r="10" fill="#31C3C3" />
      <rect x="32" y="288" width="120" height="8" fill="#141414" />
      <rect x="32" y="304" width="200" height="6" fill="#D4D4D4" />
    </svg>
  );
}

export function WhoWeAreHero() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#F4F4F2]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8A8A]">
              {WHO_WE_ARE_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-[14ch] font-heading text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#141414]">
              {WHO_WE_ARE_HERO.headline}
            </h1>
          </Reveal>
          <div className="mt-8 space-y-4">
            {WHO_WE_ARE_HERO.supporting.map((p, i) => (
              <Reveal key={i} delay={0.08 + i * 0.04}>
                <p className="max-w-xl text-base leading-relaxed text-[#5C5C5C] md:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.12} className="lg:col-span-5">
          <div className="min-h-[280px] border border-[#E5E5E3] bg-white p-4 md:min-h-[340px]">
            <ArchitectureVisual />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
