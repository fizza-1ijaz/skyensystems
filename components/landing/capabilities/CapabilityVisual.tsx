"use client";

import type { CapabilityVisualId } from "@/components/landing/landing-data";

const accent = "#6C63FF";
const ink = "#141414";
const muted = "#8A8A8A";
const line = "#D4D4D4";
const faint = "#EBEBEB";

type VisualProps = {
  id: CapabilityVisualId;
  className?: string;
};

export function CapabilityVisual({ id, className = "" }: VisualProps) {
  const base = `pointer-events-none select-none ${className}`;

  switch (id) {
    case "web":
      return (
        <svg viewBox="8 8 536 308" className={`${base} h-full w-full`} aria-hidden fill="none">
          {/* Main browser window */}
          <rect x="16" y="24" width="360" height="292" rx="7" stroke={ink} strokeWidth="1.75" fill="white" />
          <rect x="16" y="24" width="360" height="36" rx="7" fill={faint} />
          <rect x="16" y="52" width="360" height="8" fill={faint} />
          <circle cx="34" cy="42" r="5" fill="#FF5F57" opacity="0.85" />
          <circle cx="50" cy="42" r="5" fill="#FEBC2E" opacity="0.85" />
          <circle cx="66" cy="42" r="5" fill="#28C840" opacity="0.85" />
          <rect x="88" y="36" width="180" height="12" rx="6" fill="white" stroke={line} strokeWidth="1" />
          <rect x="96" y="40" width="72" height="4" rx="2" fill={muted} opacity="0.35" />

          {/* Nav + hero */}
          <rect x="28" y="68" width="48" height="5" rx="2" fill={ink} opacity="0.7" />
          <rect x="88" y="68" width="32" height="5" rx="2" fill={ink} opacity="0.12" />
          <rect x="128" y="68" width="32" height="5" rx="2" fill={ink} opacity="0.12" />
          <rect x="168" y="68" width="32" height="5" rx="2" fill={ink} opacity="0.12" />
          <rect x="320" y="64" width="44" height="14" rx="5" fill={accent} opacity="0.9" />

          <rect x="28" y="92" width="120" height="10" rx="2" fill={ink} opacity="0.85" />
          <rect x="28" y="110" width="168" height="5" rx="2" fill={ink} opacity="0.14" />
          <rect x="28" y="122" width="140" height="5" rx="2" fill={ink} opacity="0.1" />
          <rect x="28" y="138" width="72" height="20" rx="5" fill={accent} opacity="0.85" />
          <rect x="108" y="144" width="48" height="8" rx="2" fill={ink} opacity="0.12" />

          {/* Content grid */}
          <rect x="28" y="172" width="100" height="64" rx="5" fill={faint} stroke={line} strokeWidth="1" />
          <rect x="38" y="184" width="56" height="32" rx="4" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1" />
          <rect x="38" y="222" width="72" height="4" rx="2" fill={ink} opacity="0.12" />
          <rect x="140" y="172" width="100" height="64" rx="5" fill={faint} stroke={line} strokeWidth="1" />
          <rect x="150" y="184" width="56" height="32" rx="4" fill={ink} opacity="0.06" />
          <rect x="150" y="222" width="64" height="4" rx="2" fill={ink} opacity="0.1" />
          <rect x="252" y="172" width="108" height="64" rx="5" fill={faint} stroke={line} strokeWidth="1" />
          <rect x="262" y="184" width="72" height="4" rx="2" fill={ink} opacity="0.14" />
          <rect x="262" y="196" width="88" height="4" rx="2" fill={ink} opacity="0.08" />
          <rect x="262" y="208" width="56" height="16" rx="4" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" />

          {/* Component / CMS panel */}
          <rect x="200" y="72" width="160" height="88" rx="5" stroke={line} strokeWidth="1.25" strokeDasharray="5 4" fill={faint} fillOpacity="0.4" />
          <rect x="212" y="84" width="56" height="5" rx="2" fill={ink} opacity="0.15" />
          <rect x="212" y="96" width="136" height="24" rx="4" stroke={line} strokeWidth="1" fill="white" />
          <rect x="220" y="104" width="48" height="8" rx="2" fill={accent} opacity="0.5" />
          <rect x="212" y="128" width="64" height="20" rx="4" fill={accent} opacity="0.75" />
          <rect x="284" y="132" width="52" height="12" rx="3" stroke={line} fill="white" />

          {/* Floating analytics / admin panel */}
          <rect x="300" y="8" width="244" height="168" rx="6" stroke={ink} strokeWidth="1.5" fill="white" />
          <rect x="300" y="8" width="244" height="28" rx="6" fill={faint} />
          <rect x="300" y="28" width="244" height="8" fill={faint} />
          <rect x="312" y="16" width="48" height="5" rx="2" fill={ink} opacity="0.2" />
          <circle cx="524" cy="22" r="4" fill={accent} opacity="0.7" />

          {/* Mini chart */}
          <rect x="312" y="44" width="104" height="56" rx="4" fill={faint} stroke={line} strokeWidth="1" />
          <path d="M324 84 L340 72 L356 76 L372 58 L388 64" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M324 88 L388 88" stroke={line} strokeWidth="1" />
          <rect x="324" y="92" width="24" height="3" rx="1" fill={muted} opacity="0.4" />

          {/* Stats row */}
          <rect x="428" y="44" width="104" height="24" rx="4" fill={accent} fillOpacity="0.1" stroke={accent} strokeWidth="1" />
          <rect x="438" y="52" width="36" height="6" rx="2" fill={accent} opacity="0.7" />
          <rect x="428" y="76" width="48" height="24" rx="4" fill={faint} stroke={line} />
          <rect x="484" y="76" width="48" height="24" rx="4" fill={faint} stroke={line} />

          {/* Code / API snippet */}
          <rect x="312" y="112" width="220" height="52" rx="4" fill={ink} fillOpacity="0.04" stroke={line} />
          <rect x="322" y="122" width="48" height="4" rx="2" fill={accent} opacity="0.6" />
          <rect x="322" y="132" width="80" height="3" rx="1" fill={ink} opacity="0.2" />
          <rect x="322" y="140" width="64" height="3" rx="1" fill={ink} opacity="0.12" />
          <rect x="322" y="148" width="96" height="3" rx="1" fill={accent} opacity="0.25" />

          {/* Performance badge */}
          <rect x="312" y="172" width="72" height="22" rx="4" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="1" />
          <circle cx="326" cy="183" r="5" stroke={accent} strokeWidth="1.25" fill="none" />
          <path d="M324 183 L326 185 L330 180" stroke={accent} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="338" y="179" width="36" height="4" rx="2" fill={accent} opacity="0.5" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 400 280" className={`${base} h-full w-full`} aria-hidden fill="none">
          {/* Primary device — shipped app */}
          <rect x="96" y="22" width="148" height="236" rx="22" stroke={ink} strokeWidth="2" fill="white" />
          <rect x="148" y="34" width="44" height="6" rx="3" fill={faint} />
          <rect x="108" y="52" width="124" height="192" rx="4" fill={faint} fillOpacity="0.5" />

          {/* App UI */}
          <rect x="116" y="60" width="56" height="6" rx="2" fill={ink} opacity="0.75" />
          <rect x="116" y="72" width="88" height="4" rx="2" fill={ink} opacity="0.12" />
          <rect x="116" y="88" width="108" height="64" rx="6" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1.25" />
          <rect x="128" y="100" width="48" height="32" rx="4" fill={accent} opacity="0.35" />
          <rect x="128" y="140" width="72" height="4" rx="2" fill={ink} opacity="0.15" />

          {/* Card stack */}
          <rect x="116" y="164" width="108" height="36" rx="5" fill="white" stroke={line} strokeWidth="1" />
          <circle cx="132" cy="182" r="10" fill={faint} stroke={line} />
          <rect x="148" y="176" width="56" height="4" rx="2" fill={ink} opacity="0.18" />
          <rect x="148" y="186" width="40" height="3" rx="1" fill={ink} opacity="0.1" />
          <rect x="116" y="208" width="108" height="28" rx="5" fill="white" stroke={line} strokeWidth="1" />
          <rect x="128" y="218" width="36" height="8" rx="3" fill={accent} opacity="0.8" />

          {/* Tab bar */}
          <rect x="108" y="228" width="124" height="16" rx="3" fill={faint} />
          <circle cx="132" cy="236" r="4" fill={accent} opacity="0.7" />
          <circle cx="156" cy="236" r="3" fill={muted} opacity="0.35" />
          <circle cx="180" cy="236" r="3" fill={muted} opacity="0.35" />
          <circle cx="204" cy="236" r="3" fill={muted} opacity="0.35" />

          {/* Wireframe second device */}
          <rect x="262" y="40" width="108" height="196" rx="16" stroke={line} strokeWidth="1.25" strokeDasharray="4 3" fill={faint} fillOpacity="0.25" />
          <rect x="278" y="68" width="76" height="4" rx="2" fill={ink} opacity="0.08" />
          <rect x="278" y="80" width="56" height="4" rx="2" fill={ink} opacity="0.06" />
          <rect x="278" y="100" width="76" height="48" rx="4" stroke={line} strokeDasharray="3 3" />
          <rect x="278" y="160" width="40" height="40" rx="8" stroke={line} strokeDasharray="3 3" />

          {/* Cross-platform arrow */}
          <path d="M248 130 L258 130" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M252 124 L260 130 L252 136" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Store badges */}
          <rect x="24" y="48" width="56" height="56" rx="8" fill={faint} stroke={line} strokeWidth="1" />
          <rect x="36" y="62" width="32" height="28" rx="6" stroke={ink} strokeWidth="1.25" fill="white" />
          <circle cx="52" cy="72" r="6" fill={accent} opacity="0.6" />
          <rect x="32" y="112" width="40" height="4" rx="2" fill={ink} opacity="0.12" />

          <rect x="24" y="128" width="56" height="56" rx="8" fill={accent} fillOpacity="0.08" stroke={accent} strokeWidth="1" />
          <path d="M36 148 L52 140 L68 148 L68 168 L36 168 Z" stroke={accent} strokeWidth="1.25" fill={accent} fillOpacity="0.2" />
          <rect x="32" y="192" width="40" height="4" rx="2" fill={accent} opacity="0.4" />

          {/* Push / notification pill */}
          <rect x="108" y="8" width="124" height="28" rx="8" fill="white" stroke={line} strokeWidth="1" />
          <circle cx="124" cy="22" r="8" fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="1" />
          <rect x="138" y="16" width="56" height="4" rx="2" fill={ink} opacity="0.2" />
          <rect x="138" y="24" width="40" height="3" rx="1" fill={muted} opacity="0.4" />

          {/* Retention metric */}
          <rect x="262" y="248" width="108" height="22" rx="5" fill={faint} stroke={line} />
          <rect x="272" y="256" width="32" height="5" rx="2" fill={accent} opacity="0.65" />
          <path d="M318 260 L328 254 L338 258 L348 250" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 400 260" className={`${base} h-full w-full`} aria-hidden fill="none">
          {/* Input sources */}
          <rect x="20" y="32" width="72" height="48" rx="5" fill={faint} stroke={line} strokeWidth="1" />
          <rect x="30" y="44" width="40" height="4" rx="2" fill={ink} opacity="0.15" />
          <rect x="30" y="54" width="52" height="3" rx="1" fill={ink} opacity="0.08" />
          <rect x="30" y="62" width="36" height="3" rx="1" fill={ink} opacity="0.06" />

          <rect x="20" y="92" width="72" height="48" rx="5" fill={faint} stroke={line} strokeWidth="1" />
          <rect x="30" y="104" width="32" height="24" rx="3" fill={ink} opacity="0.06" />
          <rect x="68" y="108" width="16" height="4" rx="2" fill={ink} opacity="0.12" />
          <rect x="68" y="118" width="12" height="3" rx="1" fill={ink} opacity="0.08" />

          <rect x="20" y="152" width="72" height="48" rx="5" fill={accent} fillOpacity="0.08" stroke={accent} strokeWidth="1" />
          <rect x="30" y="166" width="48" height="4" rx="2" fill={accent} opacity="0.5" />
          <rect x="30" y="176" width="36" height="3" rx="1" fill={accent} opacity="0.3" />
          <rect x="30" y="184" width="44" height="3" rx="1" fill={accent} opacity="0.2" />

          {/* Flow lines to hub */}
          <path d="M92 56 C120 56 130 80 148 100" stroke={line} strokeWidth="1.25" strokeDasharray="4 3" />
          <path d="M92 116 L148 128" stroke={line} strokeWidth="1.25" strokeDasharray="4 3" />
          <path d="M92 176 C120 168 130 148 148 138" stroke={accent} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.8" />

          {/* Central processing hub */}
          <circle cx="200" cy="118" r="36" stroke={accent} strokeWidth="2" fill={accent} fillOpacity="0.08" />
          <circle cx="200" cy="118" r="24" stroke={ink} strokeWidth="1.5" fill="white" />
          <circle cx="200" cy="118" r="8" fill={accent} opacity="0.85" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 200 + Math.cos(rad) * 12;
            const y1 = 118 + Math.sin(rad) * 12;
            const x2 = 200 + Math.cos(rad) * 22;
            const y2 = 118 + Math.sin(rad) * 22;
            return (
              <line
                key={deg}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={deg % 90 === 0 ? accent : line}
                strokeWidth={deg % 90 === 0 ? 1.5 : 1}
                opacity={deg % 90 === 0 ? 0.8 : 0.5}
              />
            );
          })}

          {/* Output nodes */}
          {(
            [
              { cx: 300, cy: 52, active: false },
              { cx: 340, cy: 118, active: true },
              { cx: 300, cy: 184, active: false },
              { cx: 260, cy: 210, active: false },
            ] as const
          ).map((node, i) => (
            <g key={i}>
              <path
                d={`M236 ${118} Q268 ${118} ${node.cx - 22} ${node.cy}`}
                stroke={node.active ? accent : line}
                strokeWidth={node.active ? 1.5 : 1.25}
                strokeDasharray="4 3"
                fill="none"
                opacity={node.active ? 0.85 : 0.6}
              />
              <circle
                cx={node.cx}
                cy={node.cy}
                r="18"
                stroke={node.active ? accent : ink}
                strokeWidth={node.active ? 2 : 1.25}
                fill={node.active ? accent : faint}
                fillOpacity={node.active ? 0.12 : 1}
              />
              <circle cx={node.cx} cy={node.cy} r="5" fill={node.active ? accent : muted} opacity={node.active ? 1 : 0.5} />
            </g>
          ))}

          {/* Copilot / chat panel */}
          <rect x="108" y="208" width="184" height="40" rx="6" stroke={ink} strokeWidth="1.5" fill="white" />
          <rect x="108" y="208" width="184" height="14" rx="6" fill={faint} />
          <rect x="108" y="214" width="184" height="8" fill={faint} />
          <circle cx="122" cy="215" r="4" fill={accent} opacity="0.7" />
          <rect x="132" y="212" width="48" height="4" rx="2" fill={ink} opacity="0.15" />
          <rect x="118" y="228" width="96" height="4" rx="2" fill={ink} opacity="0.12" />
          <rect x="118" y="236" width="72" height="3" rx="1" fill={accent} opacity="0.35" />
          <rect x="248" y="226" width="32" height="14" rx="4" fill={accent} opacity="0.85" />

          {/* Automation badge */}
          <rect x="308" y="208" width="72" height="40" rx="5" fill={faint} stroke={line} />
          <rect x="318" y="218" width="24" height="4" rx="2" fill={ink} opacity="0.12" />
          <rect x="318" y="228" width="52" height="12" rx="3" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" />
          <path d="M324 234 L328 238 L338 228" stroke={accent} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 400 260" className={`${base} h-full w-full`} aria-hidden fill="none">
          {/* Wireframe canvas */}
          <rect x="24" y="24" width="168" height="212" rx="6" stroke={line} strokeWidth="1.25" strokeDasharray="5 4" fill={faint} fillOpacity="0.35" />
          <rect x="36" y="38" width="72" height="6" rx="2" fill={ink} opacity="0.12" />
          <rect x="36" y="52" width="108" height="4" rx="2" fill={ink} opacity="0.08" />
          <rect x="36" y="62" width="88" height="4" rx="2" fill={ink} opacity="0.06" />
          <rect x="36" y="84" width="144" height="72" rx="4" stroke={line} strokeDasharray="4 3" />
          <rect x="48" y="96" width="48" height="32" rx="3" fill={ink} opacity="0.06" />
          <rect x="104" y="100" width="64" height="4" rx="2" fill={ink} opacity="0.1" />
          <rect x="104" y="112" width="52" height="4" rx="2" fill={ink} opacity="0.07" />
          <rect x="104" y="124" width="40" height="4" rx="2" fill={ink} opacity="0.05" />
          <rect x="36" y="168" width="56" height="20" rx="4" stroke={line} strokeDasharray="3 3" />
          <rect x="100" y="168" width="56" height="20" rx="4" stroke={line} strokeDasharray="3 3" />
          <rect x="36" y="200" width="144" height="24" rx="4" fill={ink} opacity="0.05" />

          {/* Flow arrow wireframe → hi-fi */}
          <path d="M196 128 L212 128" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M206 122 L214 128 L206 134" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Hi-fi screen mockup */}
          <rect x="218" y="32" width="158" height="188" rx="7" stroke={ink} strokeWidth="1.75" fill="white" />
          <rect x="218" y="32" width="158" height="28" rx="7" fill={faint} />
          <rect x="218" y="52" width="158" height="8" fill={faint} />
          <circle cx="234" cy="46" r="4" fill={accent} opacity="0.85" />
          <rect x="246" y="43" width="36" height="5" rx="2" fill={ink} opacity="0.2" />
          <rect x="334" y="41" width="28" height="10" rx="4" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" />

          {/* Hero block */}
          <rect x="230" y="72" width="72" height="8" rx="2" fill={ink} opacity="0.85" />
          <rect x="230" y="86" width="108" height="4" rx="2" fill={ink} opacity="0.15" />
          <rect x="230" y="96" width="92" height="4" rx="2" fill={ink} opacity="0.1" />
          <rect x="230" y="110" width="56" height="18" rx="5" fill={accent} opacity="0.9" />
          <rect x="294" y="116" width="40" height="6" rx="2" fill={ink} opacity="0.12" />

          {/* Image / content card */}
          <rect x="230" y="140" width="134" height="56" rx="5" fill={faint} stroke={line} strokeWidth="1" />
          <rect x="242" y="152" width="48" height="32" rx="4" fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="1" />
          <rect x="298" y="156" width="54" height="5" rx="2" fill={ink} opacity="0.18" />
          <rect x="298" y="168" width="42" height="4" rx="2" fill={ink} opacity="0.1" />
          <rect x="298" y="178" width="36" height="4" rx="2" fill={ink} opacity="0.08" />

          {/* Selection handles on accent block */}
          <rect x="226" y="106" width="64" height="26" rx="6" stroke={accent} strokeWidth="1.25" strokeDasharray="3 2" fill="none" opacity="0.7" />
          <circle cx="226" cy="106" r="3" fill="white" stroke={accent} strokeWidth="1.25" />
          <circle cx="290" cy="132" r="3" fill="white" stroke={accent} strokeWidth="1.25" />

          {/* Color / type tokens */}
          <rect x="218" y="228" width="158" height="22" rx="5" fill={faint} stroke={line} strokeWidth="1" />
          <circle cx="236" cy="239" r="7" fill={accent} />
          <circle cx="258" cy="239" r="7" fill={ink} />
          <circle cx="280" cy="239" r="7" fill={faint} stroke={line} />
          <rect x="300" y="234" width="4" height="10" rx="1" fill={ink} opacity="0.7" />
          <rect x="308" y="236" width="4" height="8" rx="1" fill={ink} opacity="0.45" />
          <rect x="316" y="238" width="4" height="6" rx="1" fill={ink} opacity="0.25" />
          <rect x="332" y="236" width="32" height="6" rx="2" fill={accent} opacity="0.35" />
        </svg>
      );
    case "growth":
      return (
        <svg viewBox="0 0 400 260" className={`${base} h-full w-full`} aria-hidden fill="none">
          {/* Dashboard frame */}
          <rect x="24" y="20" width="352" height="220" rx="7" stroke={ink} strokeWidth="1.5" fill="white" />
          <rect x="24" y="20" width="352" height="28" rx="7" fill={faint} />
          <rect x="24" y="40" width="352" height="8" fill={faint} />
          <rect x="36" y="28" width="64" height="5" rx="2" fill={ink} opacity="0.2" />
          <rect x="320" y="26" width="44" height="12" rx="4" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" />

          {/* KPI cards */}
          <rect x="36" y="56" width="72" height="40" rx="5" fill={faint} stroke={line} strokeWidth="1" />
          <rect x="46" y="66" width="32" height="5" rx="2" fill={muted} opacity="0.5" />
          <rect x="46" y="78" width="44" height="8" rx="2" fill={ink} opacity="0.7" />
          <rect x="120" y="56" width="72" height="40" rx="5" fill={accent} fillOpacity="0.1" stroke={accent} strokeWidth="1" />
          <rect x="130" y="66" width="28" height="5" rx="2" fill={accent} opacity="0.5" />
          <rect x="130" y="78" width="48" height="8" rx="2" fill={accent} opacity="0.75" />
          <rect x="204" y="56" width="72" height="40" rx="5" fill={faint} stroke={line} strokeWidth="1" />
          <rect x="214" y="66" width="36" height="5" rx="2" fill={muted} opacity="0.45" />
          <rect x="214" y="78" width="40" height="8" rx="2" fill={ink} opacity="0.55" />
          <rect x="288" y="56" width="72" height="40" rx="5" fill={faint} stroke={line} strokeWidth="1" />
          <path d="M302 88 L314 76 L326 80 L338 68 L350 72" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Bar chart */}
          <rect x="36" y="112" width="148" height="112" rx="5" fill={faint} fillOpacity="0.5" stroke={line} strokeWidth="1" />
          <rect x="48" y="188" width="20" height="24" rx="3" fill={faint} stroke={line} />
          <rect x="76" y="168" width="20" height="44" rx="3" fill={faint} stroke={line} />
          <rect x="104" y="148" width="20" height="64" rx="3" fill={accent} opacity="0.55" />
          <rect x="132" y="128" width="20" height="84" rx="3" fill={accent} opacity="0.75" />
          <rect x="160" y="156" width="20" height="56" rx="3" fill={accent} opacity="0.45" />
          <path d="M44 124 L168 124" stroke={line} strokeWidth="1" />
          <rect x="48" y="118" width="40" height="4" rx="2" fill={ink} opacity="0.15" />

          {/* Trend line chart */}
          <rect x="196" y="112" width="156" height="72" rx="5" fill="white" stroke={line} strokeWidth="1" />
          <path d="M212 168 L236 152 L260 158 L284 132 L308 138 L332 112" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M212 172 L332 172" stroke={line} strokeWidth="1" />
          <circle cx="284" cy="132" r="4" fill={accent} stroke="white" strokeWidth="1.5" />
          <rect x="206" y="118" width="48" height="4" rx="2" fill={ink} opacity="0.12" />

          {/* Funnel / conversion */}
          <rect x="196" y="196" width="156" height="28" rx="5" fill={faint} stroke={line} strokeWidth="1" />
          <rect x="206" y="206" width="120" height="8" rx="2" fill={ink} opacity="0.08" />
          <rect x="206" y="206" width="96" height="8" rx="2" fill={accent} opacity="0.35" />
          <rect x="206" y="206" width="56" height="8" rx="2" fill={accent} opacity="0.65" />
          <rect x="310" y="204" width="32" height="12" rx="3" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" />

          {/* SEO / channel tags */}
          <rect x="36" y="232" width="48" height="16" rx="4" stroke={line} fill={faint} />
          <rect x="42" y="238" width="28" height="4" rx="2" fill={muted} opacity="0.5" />
          <rect x="92" y="232" width="48" height="16" rx="4" stroke={line} fill={faint} />
          <rect x="98" y="238" width="24" height="4" rx="2" fill={muted} opacity="0.45" />
          <rect x="148" y="232" width="56" height="16" rx="4" stroke={accent} fill={accent} fillOpacity="0.1" />
          <rect x="154" y="238" width="32" height="4" rx="2" fill={accent} opacity="0.55" />

          {/* Growth arrow overlay */}
          <path d="M300 228 L340 188" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M332 188 L340 188 L340 196" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="340" cy="188" r="14" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="1.25" />
          <path d="M336 192 L340 184 L344 192" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "teams":
      return (
        <svg viewBox="0 0 520 200" className={`${base} h-full w-full`} aria-hidden fill="none">
          {/* Shared sprint / roadmap strip */}
          <rect x="20" y="14" width="480" height="30" rx="5" fill={faint} stroke={line} strokeWidth="1.25" />
          <rect x="32" y="24" width="56" height="5" rx="2" fill={ink} opacity="0.15" />
          <rect x="96" y="24" width="88" height="5" rx="2" fill={accent} opacity="0.55" />
          <rect x="192" y="24" width="64" height="5" rx="2" fill={ink} opacity="0.12" />
          <rect x="264" y="24" width="72" height="5" rx="2" fill={accent} opacity="0.35" />
          <rect x="344" y="24" width="48" height="5" rx="2" fill={ink} opacity="0.1" />
          <circle cx="458" cy="29" r="6" stroke={accent} strokeWidth="1.5" fill="white" />
          <path d="M455 29h6M458 26v6" stroke={accent} strokeWidth="1.25" strokeLinecap="round" />

          {/* Squad sync connectors */}
          <path
            d="M98 148 C98 118 130 108 156 108 C182 108 214 118 214 148"
            stroke={line}
            strokeWidth="1.25"
            strokeDasharray="4 3"
          />
          <path
            d="M214 148 C214 118 246 108 272 108 C298 108 330 118 330 148"
            stroke={accent}
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.85"
          />
          <path
            d="M330 148 C330 118 362 108 388 108 C414 108 446 118 446 148"
            stroke={line}
            strokeWidth="1.25"
            strokeDasharray="4 3"
          />

          {/* Team member pods */}
          {(
            [
              { x: 24, lead: false, online: true },
              { x: 142, lead: true, online: true },
              { x: 260, lead: false, online: true },
              { x: 378, lead: false, online: false },
            ] as const
          ).map((member, i) => (
            <g key={i}>
              <rect
                x={member.x}
                y="54"
                width="108"
                height="132"
                rx="6"
                stroke={member.lead ? accent : line}
                strokeWidth={member.lead ? 2 : 1.25}
                fill="white"
              />
              {member.lead ? (
                <rect x={member.x} y="54" width="108" height="132" rx="6" fill={accent} fillOpacity="0.06" />
              ) : null}
              {/* Avatar */}
              <circle
                cx={member.x + 54}
                cy={82}
                r="18"
                stroke={member.lead ? accent : ink}
                strokeWidth={member.lead ? 2 : 1.25}
                fill={faint}
              />
              <circle cx={member.x + 54} cy={78} r="7" fill={member.lead ? accent : ink} opacity={member.lead ? 0.9 : 0.35} />
              <path
                d={`M${member.x + 38} 98 Q${member.x + 54} 108 ${member.x + 70} 98`}
                stroke={member.lead ? accent : ink}
                strokeWidth="1.25"
                fill="none"
                opacity={member.lead ? 0.5 : 0.25}
              />
              {/* Status */}
              <circle
                cx={member.x + 68}
                cy={68}
                r="5"
                fill={member.online ? accent : muted}
                opacity={member.online ? 1 : 0.4}
              />
              <circle cx={member.x + 68} cy={68} r="5" stroke="white" strokeWidth="1.5" />
              {/* Role / task lines */}
              <rect
                x={member.x + 16}
                y="108"
                width="76"
                height="5"
                rx="2"
                fill={member.lead ? accent : ink}
                opacity={member.lead ? 0.7 : 0.18}
              />
              <rect x={member.x + 16} y="120" width="52" height="4" rx="2" fill={ink} opacity="0.12" />
              <rect x={member.x + 16} y="132" width="64" height="4" rx="2" fill={ink} opacity="0.08" />
              {/* Skill chips */}
              <rect
                x={member.x + 16}
                y="148"
                width="28"
                height="14"
                rx="3"
                stroke={line}
                fill={faint}
              />
              <rect
                x={member.x + 50}
                y="148"
                width="36"
                height="14"
                rx="3"
                stroke={member.lead ? accent : line}
                fill={member.lead ? accent : faint}
                fillOpacity={member.lead ? 0.12 : 1}
              />
              {member.lead ? (
                <>
                  {/* Video / lead call indicator */}
                  <rect x={member.x + 78} y="60" width="22" height="14" rx="3" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" />
                  <rect x={member.x + 82} y="64" width="8" height="6" rx="1" stroke={accent} strokeWidth="1" />
                  <circle cx={member.x + 94} cy="67" r="2" fill={accent} />
                </>
              ) : null}
            </g>
          ))}

          {/* Timezone row */}
          <rect x="32" y="178" width="36" height="12" rx="3" fill={faint} stroke={line} />
          <rect x="38" y="183" width="20" height="3" rx="1" fill={muted} opacity="0.6" />
          <rect x="168" y="178" width="36" height="12" rx="3" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="1" />
          <rect x="174" y="183" width="22" height="3" rx="1" fill={accent} opacity="0.7" />
          <rect x="286" y="178" width="36" height="12" rx="3" fill={faint} stroke={line} />
          <rect x="292" y="183" width="18" height="3" rx="1" fill={muted} opacity="0.5" />
          <rect x="404" y="178" width="36" height="12" rx="3" fill={faint} stroke={line} />
          <rect x="410" y="183" width="24" height="3" rx="1" fill={muted} opacity="0.45" />
        </svg>
      );
    default:
      return null;
  }
}
