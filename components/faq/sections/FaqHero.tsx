"use client";

import { FAQ_HERO } from "@/lib/faq-editorial-data";
import { Reveal } from "@/components/landing/Reveal";

function FrameworkVisual() {
  return (
    <svg viewBox="0 0 400 360" className="h-full w-full" aria-hidden fill="none">
      <rect x="20" y="20" width="360" height="320" stroke="#D4D4D4" strokeWidth="1.5" />
      <line x1="20" y1="60" x2="380" y2="60" stroke="#E5E5E3" />
      <text x="36" y="44" fill="#8A8A8A" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.14em">
        DECISION FRAMEWORK
      </text>
      {["SCOPE", "COST", "TIME", "TEAM"].map((label, i) => (
        <g key={label}>
          <rect x={36 + i * 88} y={80} width="72" height="56" stroke={i === 1 ? "#31C3C3" : "#D4D4D4"} strokeWidth={i === 1 ? 2 : 1} fill={i === 1 ? "rgba(49,195,195,0.08)" : "#FAFAF8"} />
          <text x={72 + i * 88} y="112" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="ui-monospace, monospace">
            {label}
          </text>
        </g>
      ))}
      <path d="M72 136 L200 200 L328 136" stroke="#31C3C3" strokeWidth="1.5" strokeDasharray="5 4" />
      <rect x="120" y="220" width="160" height="80" stroke="#141414" strokeWidth="1.5" fill="white" />
      <text x="200" y="252" textAnchor="middle" fill="#141414" fontSize="10" fontWeight="bold" fontFamily="system-ui">
        PROPOSAL
      </text>
      <text x="200" y="272" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="ui-monospace, monospace">
        FIXED · TRANSPARENT
      </text>
    </svg>
  );
}

export function FaqHero() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#F4F4F2]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8A8A]">
              {FAQ_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-[14ch] font-heading text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#141414]">
              {FAQ_HERO.headline}
            </h1>
          </Reveal>
          <div className="mt-8 space-y-4">
            {FAQ_HERO.supporting.map((p, i) => (
              <Reveal key={i} delay={0.08 + i * 0.04}>
                <p className="max-w-xl text-base leading-relaxed text-[#5C5C5C] md:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.12} className="lg:col-span-5">
          <div className="min-h-[280px] border border-[#E5E5E3] bg-white p-4 md:min-h-[340px]">
            <FrameworkVisual />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
