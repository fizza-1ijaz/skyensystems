"use client";

import { Reveal } from "@/components/landing/Reveal";

function InvestmentModelDiagram() {
  const ink = "rgba(255, 255, 255, 0.35)";
  const inkStrong = "rgba(255, 255, 255, 0.55)";
  const accent = "#6C63FF";
  const grid = "rgba(255, 255, 255, 0.06)";

  return (
    <svg viewBox="0 0 400 320" className="h-full w-full" aria-hidden fill="none">
      {[64, 128, 192, 256].map((y) => (
        <line key={`h-${y}`} x1="16" y1={y} x2="384" y2={y} stroke={grid} strokeWidth="1" />
      ))}
      {[80, 160, 240, 320].map((x) => (
        <line key={`v-${x}`} x1={x} y1="24" x2={x} y2="296" stroke={grid} strokeWidth="1" />
      ))}

      {/* Input nodes */}
      {(
        [
          { x: 56, y: 72, label: "Goals" },
          { x: 56, y: 160, label: "Scope" },
          { x: 56, y: 248, label: "Complexity" },
        ] as const
      ).map(({ x, y, label }) => (
        <g key={label}>
          <rect x={x - 36} y={y - 22} width="72" height="44" stroke={ink} strokeWidth="1" />
          <text
            x={x}
            y={y + 4}
            fill="rgba(255,255,255,0.7)"
            fontSize="10"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.08em"
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      ))}

      {/* Convergence paths */}
      <path d="M92 72 C140 72, 148 120, 200 140" stroke={inkStrong} strokeWidth="1" />
      <path d="M92 160 H200" stroke={inkStrong} strokeWidth="1" />
      <path d="M92 248 C140 248, 148 200, 200 180" stroke={inkStrong} strokeWidth="1" />

      {/* Central hub — fixed quote */}
      <circle cx="200" cy="160" r="34" stroke={accent} strokeWidth="1.25" />
      <circle cx="200" cy="160" r="8" fill={accent} />
      <text
        x="200"
        y="118"
        fill={accent}
        fontSize="9"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.14em"
        textAnchor="middle"
      >
        FIXED QUOTE
      </text>

      {/* Output path */}
      <path d="M234 160 H288" stroke={inkStrong} strokeWidth="1" />
      <path d="M288 160 C320 160, 328 160, 344 160" stroke={inkStrong} strokeWidth="1" />

      {/* Outcome node */}
      <rect x="308" y="138" width="72" height="44" stroke={accent} strokeWidth="1" fill="rgba(108,99,255,0.12)" />
      <text
        x="344"
        y="164"
        fill="rgba(255,255,255,0.85)"
        fontSize="10"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.08em"
        textAnchor="middle"
      >
        Outcomes
      </text>

      {/* Delivery rail */}
      <line x1="200" y1="194" x2="200" y2="268" stroke={ink} strokeWidth="1" strokeDasharray="4 4" />
      <rect x="164" y="268" width="72" height="36" stroke={ink} strokeWidth="1" />
      <text
        x="200"
        y="290"
        fill="rgba(255,255,255,0.55)"
        fontSize="9"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.1em"
        textAnchor="middle"
      >
        Delivery
      </text>
    </svg>
  );
}

const HERO_SIGNALS = [
  { value: "Fixed", label: "Investment" },
  { value: "No", label: "Hourly billing" },
  { value: "Scope", label: "Before quote" },
] as const;

export function PricingHeroVisual({ className = "" }: { className?: string }) {
  return (
    <Reveal delay={0.12} y={12} className={className}>
      <div className="relative border-t-2 border-[#6C63FF] bg-[#0F172A] p-6 shadow-[0_32px_64px_-40px_rgba(15,23,42,0.65)] md:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6C63FF]">
          Investment model
        </p>
        <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-white/55">
          Scope and complexity converge into a fixed quote — aligned to measurable outcomes, not
          open-ended billing.
        </p>

        <div className="mt-6 aspect-[5/4] w-full min-h-[12rem] md:min-h-[14rem]">
          <InvestmentModelDiagram />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-px bg-white/10">
          {HERO_SIGNALS.map((signal) => (
            <div key={signal.label} className="bg-[#0F172A] px-3 py-4 text-center md:px-4">
              <p className="font-heading text-lg font-bold tracking-tight text-[#FAFAF8] md:text-xl">
                {signal.value}
              </p>
              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/45">
                {signal.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
