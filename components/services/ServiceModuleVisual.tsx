"use client";

import type { ReactNode } from "react";
import type { CapabilityVisualId } from "@/components/landing/landing-data";

type ServiceModuleVisualProps = {
  id: CapabilityVisualId;
  dark?: boolean;
  className?: string;
};

const accent = "#6C63FF";
const accentSoft = "rgba(108, 99, 255, 0.22)";

function palette(dark?: boolean) {
  return {
    ink: dark ? "#FAFAF8" : "#141414",
    muted: dark ? "#9A9A9A" : "#8A8A8A",
    line: dark ? "#3A3A3A" : "#D4D4D4",
    faint: dark ? "#1E1E1E" : "#F0F0EE",
    surface: dark ? "#0F0F0F" : "#FFFFFF",
    grid: dark ? "#2A2A2A" : "#E8E8E6",
  };
}

function Frame({
  label,
  dark,
  children,
}: {
  label: string;
  dark?: boolean;
  children: ReactNode;
}) {
  const c = palette(dark);
  return (
    <div
      className={`relative h-full min-h-[260px] w-full overflow-hidden border ${
        dark ? "border-[#3A3A3A] bg-[#0A0A0A]" : "border-[#E5E5E3] bg-[#FAFAF8]"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `linear-gradient(${c.grid} 1px, transparent 1px), linear-gradient(90deg, ${c.grid} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div className="relative flex h-full flex-col">
        <div
          className={`flex shrink-0 items-center justify-between border-b px-4 py-2.5 ${
            dark ? "border-[#3A3A3A] bg-[#141414]" : "border-[#E5E5E3] bg-white"
          }`}
        >
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#6C63FF]">
            {label}
          </span>
          <span className={`font-mono text-[10px] ${dark ? "text-[#6A6A6A]" : "text-[#B0B0B0]"}`}>
            FIG. {idToFig(label)}
          </span>
        </div>
        <div className="relative flex flex-1 items-center justify-center p-4 md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

function idToFig(label: string) {
  const map: Record<string, string> = {
    "Web platform": "01",
    "Mobile product": "02",
    "Design system": "03",
    "AI pipeline": "04",
    "Growth stack": "05",
    "Team embed": "06",
  };
  return map[label] ?? "00";
}

function WebVisual({ dark }: { dark?: boolean }) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 480 320" className="h-full w-full max-h-[220px]" aria-hidden fill="none">
      <rect x="24" y="20" width="280" height="200" rx="4" stroke={c.ink} strokeWidth="2" fill={c.surface} />
      <rect x="24" y="20" width="280" height="28" fill={c.faint} />
      <circle cx="44" cy="34" r="5" fill={accent} />
      <circle cx="60" cy="34" r="5" fill={c.line} />
      <circle cx="76" cy="34" r="5" fill={c.line} />
      <rect x="40" y="64" width="120" height="12" rx="1" fill={c.ink} />
      <rect x="40" y="86" width="200" height="6" rx="1" fill={c.line} />
      <rect x="40" y="100" width="160" height="6" rx="1" fill={c.line} />
      <rect x="40" y="128" width="88" height="32" rx="2" fill={accent} fillOpacity="0.85" />
      <rect x="136" y="128" width="88" height="32" rx="2" stroke={c.ink} strokeWidth="1.5" fill={c.surface} />
      <rect x="40" y="176" width="240" height="32" stroke={c.line} strokeDasharray="4 3" />
      <rect x="220" y="8" width="236" height="156" rx="4" stroke={accent} strokeWidth="2" fill={c.surface} />
      <rect x="236" y="24" width="80" height="8" fill={c.ink} />
      <rect x="236" y="44" width="196" height="48" fill={accentSoft} stroke={accent} strokeWidth="1" />
      <rect x="236" y="104" width="60" height="40" fill={accent} fillOpacity="0.7" />
      <rect x="304" y="104" width="60" height="40" stroke={c.line} />
      <rect x="372" y="104" width="60" height="40" stroke={c.line} />
      <path d="M304 220 L304 176 M236 176 L432 176" stroke={accent} strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="40" y="248" fill={c.muted} fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">
        NEXT.JS · API · CMS
      </text>
    </svg>
  );
}

function MobileVisual({ dark }: { dark?: boolean }) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 480 320" className="h-full w-full max-h-[220px]" aria-hidden fill="none">
      <rect x="72" y="24" width="156" height="272" rx="20" stroke={c.ink} strokeWidth="2" fill={c.surface} />
      <rect x="132" y="44" width="36" height="6" rx="3" fill={c.line} />
      <rect x="88" y="72" width="124" height="8" fill={c.ink} />
      <rect x="88" y="92" width="96" height="6" fill={c.line} />
      <rect x="88" y="120" width="124" height="72" rx="4" fill={accentSoft} stroke={accent} strokeWidth="1.5" />
      <rect x="88" y="204" width="56" height="56" rx="10" fill={accent} fillOpacity="0.9" />
      <rect x="152" y="204" width="60" height="24" rx="2" stroke={c.line} />
      <rect x="152" y="236" width="60" height="24" rx="2" stroke={c.line} />
      <rect x="268" y="48" width="180" height="88" rx="3" stroke={c.line} strokeDasharray="5 4" fill={c.faint} />
      <text x="284" y="72" fill={c.muted} fontSize="9" fontFamily="ui-monospace, monospace">
        PUSH · OFFLINE
      </text>
      <rect x="284" y="88" width="140" height="6" fill={c.line} />
      <rect x="284" y="102" width="100" height="6" fill={c.line} />
      <rect x="268" y="156" width="180" height="120" rx="3" stroke={accent} strokeWidth="1.5" fill={c.surface} />
      <circle cx="300" cy="188" r="16" fill={accent} fillOpacity="0.8" />
      <rect x="328" y="176" width="100" height="8" fill={c.ink} />
      <rect x="328" y="194" width="72" height="6" fill={c.line} />
      <rect x="328" y="220" width="88" height="28" rx="2" fill={accent} fillOpacity="0.5" />
      <text x="88" y="308" fill={c.muted} fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.08em">
        RN · FLUTTER · SWIFT · KOTLIN
      </text>
    </svg>
  );
}

function DesignVisual({ dark }: { dark?: boolean }) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 480 320" className="h-full w-full max-h-[220px]" aria-hidden fill="none">
      <rect x="32" y="32" width="200" height="256" stroke={c.line} strokeDasharray="6 4" fill={c.faint} />
      <text x="48" y="56" fill={c.muted} fontSize="9" fontFamily="ui-monospace, monospace">
        WIREFRAME
      </text>
      <rect x="48" y="72" width="80" height="6" fill={c.line} />
      <rect x="48" y="88" width="168" height="6" fill={c.line} />
      <rect x="48" y="120" width="168" height="80" stroke={c.line} />
      <rect x="48" y="216" width="72" height="24" stroke={c.line} />
      <rect x="128" y="216" width="72" height="24" stroke={c.line} />
      <path d="M248 160 L280 160" stroke={accent} strokeWidth="2" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill={accent} />
        </marker>
      </defs>
      <rect x="288" y="48" width="160" height="200" rx="4" stroke={c.ink} strokeWidth="2" fill={c.surface} />
      <rect x="304" y="64" width="48" height="48" rx="6" fill={accent} fillOpacity="0.85" />
      <rect x="360" y="64" width="72" height="10" fill={c.ink} />
      <rect x="360" y="82" width="56" height="6" fill={c.line} />
      <rect x="304" y="128" width="128" height="8" fill={c.ink} />
      <rect x="304" y="148" width="128" height="40" fill={accentSoft} />
      <rect x="304" y="200" width="56" height="28" rx="14" fill={accent} fillOpacity="0.7" />
      <rect x="368" y="200" width="64" height="28" stroke={c.ink} strokeWidth="1.5" />
      <text x="304" y="252" fill={c.muted} fontSize="9" fontFamily="ui-monospace, monospace">
        FIGMA · TOKENS
      </text>
    </svg>
  );
}

function AiVisual({ dark }: { dark?: boolean }) {
  const c = palette(dark);
  const nodes = [
    { x: 80, y: 80, label: "INPUT" },
    { x: 240, y: 48, label: "MODEL", active: true },
    { x: 400, y: 80, label: "OUTPUT" },
    { x: 160, y: 200, label: "RAG" },
    { x: 320, y: 200, label: "API" },
  ];
  return (
    <svg viewBox="0 0 480 320" className="h-full w-full max-h-[220px]" aria-hidden fill="none">
      <path d="M104 80 L216 56 L336 80" stroke={accent} strokeWidth="1.5" strokeDasharray="6 4" />
      <path d="M240 72 L160 200 M240 72 L320 200" stroke={c.line} strokeWidth="1" strokeDasharray="4 3" />
      <path d="M184 200 L296 200" stroke={accent} strokeWidth="1.5" />
      {nodes.map((n) => (
        <g key={n.label}>
          <rect
            x={n.x - 44}
            y={n.y - 28}
            width="88"
            height="56"
            rx="4"
            stroke={n.active ? accent : c.ink}
            strokeWidth={n.active ? 2 : 1.5}
            fill={n.active ? accentSoft : c.surface}
          />
          <circle cx={n.x} cy={n.y - 4} r="8" fill={n.active ? accent : c.muted} />
          <text
            x={n.x}
            y={n.y + 18}
            textAnchor="middle"
            fill={c.muted}
            fontSize="8"
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.12em"
          >
            {n.label}
          </text>
        </g>
      ))}
      <rect x="200" y="248" width="80" height="24" rx="2" fill={accent} fillOpacity="0.6" />
      <text x="240" y="264" textAnchor="middle" fill={dark ? "#FAFAF8" : "#141414"} fontSize="8" fontFamily="ui-monospace, monospace">
        GUARDRAILS
      </text>
    </svg>
  );
}

function GrowthVisual({ dark }: { dark?: boolean }) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 480 320" className="h-full w-full max-h-[220px]" aria-hidden fill="none">
      <line x1="48" y1="260" x2="432" y2="260" stroke={c.line} strokeWidth="1" />
      <line x1="48" y1="260" x2="48" y2="48" stroke={c.line} strokeWidth="1" />
      {[
        { x: 88, h: 80 },
        { x: 168, h: 120 },
        { x: 248, h: 160 },
        { x: 328, h: 200, accent: true },
      ].map((bar) => (
        <g key={bar.x}>
          <rect
            x={bar.x}
            y={260 - bar.h}
            width="48"
            height={bar.h}
            fill={bar.accent ? accent : c.faint}
            stroke={bar.accent ? accent : c.line}
            strokeWidth="1.5"
          />
        </g>
      ))}
      <path
        d="M112 220 L192 180 L272 140 L352 88"
        stroke={accent}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="352" cy="88" r="6" fill={accent} />
      <rect x="48" y="32" width="120" height="48" rx="3" stroke={c.ink} strokeWidth="1.5" fill={c.surface} />
      <text x="60" y="52" fill={c.muted} fontSize="8" fontFamily="ui-monospace, monospace">
        SEO
      </text>
      <text x="60" y="68" fill={accent} fontSize="14" fontWeight="bold" fontFamily="ui-sans-serif, system-ui">
        +127%
      </text>
      <rect x="312" y="32" width="120" height="48" rx="3" stroke={accent} strokeWidth="1.5" fill={accentSoft} />
      <text x="324" y="52" fill={c.muted} fontSize="8" fontFamily="ui-monospace, monospace">
        CAC
      </text>
      <text x="324" y="68" fill={c.ink} fontSize="14" fontWeight="bold" fontFamily="ui-sans-serif, system-ui">
        ↓ 34%
      </text>
    </svg>
  );
}

function TeamsVisual({ dark }: { dark?: boolean }) {
  const c = palette(dark);
  const roles = ["PM", "DESIGN", "ENG", "QA"];
  return (
    <svg viewBox="0 0 480 320" className="h-full w-full max-h-[220px]" aria-hidden fill="none">
      <rect x="40" y="40" width="400" height="48" rx="3" stroke={c.ink} strokeWidth="1.5" fill={c.surface} />
      <text x="56" y="68" fill={c.muted} fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">
        YOUR ROADMAP · OUR SQUAD
      </text>
      {roles.map((role, i) => (
        <g key={role}>
          <rect
            x={40 + i * 102}
            y={108}
            width="94"
            height="160"
            stroke={i === 2 ? accent : c.line}
            strokeWidth={i === 2 ? 2 : 1.5}
            fill={i === 2 ? accentSoft : c.surface}
          />
          <circle cx={87 + i * 102} cy={140} r="18" fill={i === 2 ? accent : c.faint} fillOpacity={i === 2 ? 0.9 : 1} />
          <text
            x={87 + i * 102}
            y={144}
            textAnchor="middle"
            fill={i === 2 ? (dark ? "#FAFAF8" : "#FFF") : c.muted}
            fontSize="8"
            fontFamily="ui-monospace, monospace"
          >
            {role}
          </text>
          <rect x={56 + i * 102} y={172} width="62" height="5" fill={c.line} />
          <rect x={56 + i * 102} y={186} width="48" height="5" fill={c.line} />
          <rect x={56 + i * 102} y={208} width="62" height="20" rx="2" fill={i === 2 ? accent : c.faint} fillOpacity={i === 2 ? 0.7 : 1} />
        </g>
      ))}
      <path d="M40 288 L440 288" stroke={accent} strokeWidth="1" strokeDasharray="8 4" />
      <text x="240" y="304" textAnchor="middle" fill={c.muted} fontSize="9" fontFamily="ui-monospace, monospace">
        WEEKLY DEMOS · SLACK · US OVERLAP
      </text>
    </svg>
  );
}

const LABELS: Record<CapabilityVisualId, string> = {
  web: "Web platform",
  mobile: "Mobile product",
  design: "Design system",
  ai: "AI pipeline",
  growth: "Growth stack",
  teams: "Team embed",
};

export function ServiceModuleVisual({ id, dark, className = "" }: ServiceModuleVisualProps) {
  const label = LABELS[id] ?? "System";

  const visual = (() => {
    switch (id) {
      case "web":
        return <WebVisual dark={dark} />;
      case "mobile":
        return <MobileVisual dark={dark} />;
      case "design":
        return <DesignVisual dark={dark} />;
      case "ai":
        return <AiVisual dark={dark} />;
      case "growth":
        return <GrowthVisual dark={dark} />;
      case "teams":
        return <TeamsVisual dark={dark} />;
      default:
        return null;
    }
  })();

  return (
    <div className={className}>
      <Frame label={label} dark={dark}>
        {visual}
      </Frame>
    </div>
  );
}
