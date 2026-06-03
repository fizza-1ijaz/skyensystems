"use client";

import { GLOBAL_NODES } from "@/lib/locations-page-data";
import { Reveal } from "@/components/landing/Reveal";

export function GlobalFootprint() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#141414] py-20 text-[#FAFAF8] md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] md:text-5xl">
            A connected delivery network — not isolated offices.
          </h2>
        </Reveal>

        <Reveal
          delay={0.08}
          className="relative mt-14 flex w-full flex-col overflow-hidden border border-[#3A3A3A] bg-[#0A0A0A]"
        >
          <div className="relative min-h-[220px] w-full flex-1 sm:min-h-[280px] md:min-h-[320px]">
            <svg
              viewBox="0 0 100 48"
              className="absolute inset-0 h-full w-full"
              aria-hidden
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <pattern id="footprint-grid" width="4" height="4" patternUnits="userSpaceOnUse">
                  <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#2A2A2A" strokeWidth="0.15" />
                </pattern>
              </defs>
              <rect width="100" height="48" fill="url(#footprint-grid)" />
              {GLOBAL_NODES.map((node, i) =>
                GLOBAL_NODES.slice(i + 1).map((other) => (
                  <line
                    key={`${node.id}-${other.id}`}
                    x1={node.x}
                    y1={node.y}
                    x2={other.x}
                    y2={other.y}
                    stroke="#6C63FF"
                    strokeWidth="0.15"
                    opacity="0.35"
                  />
                )),
              )}
              {GLOBAL_NODES.map((node) => (
                <g key={node.id}>
                  <circle cx={node.x} cy={node.y} r="2.2" fill="#6C63FF" />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="4"
                    stroke="#6C63FF"
                    strokeWidth="0.3"
                    fill="none"
                    opacity="0.5"
                  />
                </g>
              ))}
            </svg>
          </div>
          <ul className="relative shrink-0 grid grid-cols-2 gap-px border-t border-[#3A3A3A] bg-[#3A3A3A] sm:grid-cols-5">
            {GLOBAL_NODES.map((node) => (
              <li key={node.id} className="bg-[#141414] px-3 py-3 md:px-4 md:py-4">
                <p className="font-heading text-sm font-bold">{node.label}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.1em] text-[#9A9A9A]">
                  {node.role}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
