"use client";

import { Reveal } from "@/components/landing/Reveal";

const ink = "rgba(20, 20, 20, 0.08)";
const accent = "rgba(108, 99, 255, 0.25)";
const grid = "rgba(20, 20, 20, 0.04)";

type ContactHeroBlueprintProps = {
  className?: string;
};

export function ContactHeroBlueprint({ className = "" }: ContactHeroBlueprintProps) {
  return (
    <Reveal delay={0.14} y={8} className={className}>
      <svg
        viewBox="0 0 520 440"
        className="h-full w-full"
        aria-hidden
        fill="none"
      >
        {/* Alignment grid */}
        {[88, 176, 264, 352].map((y) => (
          <line key={`h-${y}`} x1="0" y1={y} x2="520" y2={y} stroke={grid} strokeWidth="1" />
        ))}
        {[104, 208, 312, 416].map((x) => (
          <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="440" stroke={grid} strokeWidth="1" />
        ))}

        {/* Platform backbone */}
        <path
          d="M48 220 H472"
          stroke={ink}
          strokeWidth="1"
        />
        <path
          d="M260 48 V392"
          stroke={ink}
          strokeWidth="1"
        />

        {/* Primary network paths */}
        <path d="M104 132 C168 132, 192 88, 260 88" stroke={ink} strokeWidth="1" />
        <path d="M260 88 C328 88, 352 132, 416 132" stroke={ink} strokeWidth="1" />
        <path d="M104 132 C168 168, 192 220, 260 220" stroke={ink} strokeWidth="1" />
        <path d="M260 220 C328 220, 352 168, 416 132" stroke={ink} strokeWidth="1" />
        <path d="M104 308 C168 308, 192 352, 260 352" stroke={ink} strokeWidth="1" />
        <path d="M260 352 C328 352, 352 308, 416 308" stroke={ink} strokeWidth="1" />
        <path d="M260 88 V220" stroke={ink} strokeWidth="1" />
        <path d="M260 220 V352" stroke={ink} strokeWidth="1" />
        <path d="M104 132 V308" stroke={ink} strokeWidth="1" />
        <path d="M416 132 V308" stroke={ink} strokeWidth="1" />

        {/* Secondary mesh */}
        <path d="M104 132 L192 220" stroke={ink} strokeWidth="1" opacity="0.7" />
        <path d="M416 132 L328 220" stroke={ink} strokeWidth="1" opacity="0.7" />
        <path d="M192 220 L328 220" stroke={ink} strokeWidth="1" opacity="0.7" />
        <path d="M104 308 L192 220" stroke={ink} strokeWidth="1" opacity="0.55" />
        <path d="M416 308 L328 220" stroke={ink} strokeWidth="1" opacity="0.55" />
        <path d="M192 220 L260 352" stroke={ink} strokeWidth="1" opacity="0.55" />
        <path d="M328 220 L260 352" stroke={ink} strokeWidth="1" opacity="0.55" />

        {/* Nodes — standard */}
        {(
          [
            [104, 132],
            [416, 132],
            [104, 308],
            [416, 308],
            [192, 220],
            [328, 220],
            [260, 352],
          ] as const
        ).map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="14" stroke={ink} strokeWidth="1" />
            <circle cx={cx} cy={cy} r="4" fill={ink} />
          </g>
        ))}

        {/* Nodes — accent hub */}
        <circle cx="260" cy="88" r="18" stroke={accent} strokeWidth="1" />
        <circle cx="260" cy="88" r="5" fill={accent} />
        <circle cx="260" cy="220" r="22" stroke={accent} strokeWidth="1.25" />
        <circle cx="260" cy="220" r="6" fill={accent} />

        {/* Outer ring nodes */}
        <circle cx="48" cy="220" r="10" stroke={ink} strokeWidth="1" />
        <circle cx="48" cy="220" r="3" fill={ink} />
        <circle cx="472" cy="220" r="10" stroke={ink} strokeWidth="1" />
        <circle cx="472" cy="220" r="3" fill={ink} />
      </svg>
    </Reveal>
  );
}
