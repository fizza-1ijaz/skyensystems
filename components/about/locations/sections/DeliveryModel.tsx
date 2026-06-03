"use client";

import { Reveal } from "@/components/landing/Reveal";

function DeliveryDiagram() {
  return (
    <svg viewBox="0 0 560 280" className="h-full w-full max-h-[260px]" aria-hidden fill="none">
      <rect x="16" y="100" width="120" height="80" stroke="#141414" strokeWidth="1.5" fill="#FAFAF8" />
      <text x="76" y="128" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="ui-monospace, monospace">
        CLIENT
      </text>
      <text x="76" y="158" textAnchor="middle" fill="#141414" fontSize="10" fontWeight="bold" fontFamily="system-ui">
        US · UK · GCC
      </text>

      <rect x="220" y="40" width="120" height="64" stroke="#6C63FF" strokeWidth="2" fill="rgba(108,99,255,0.08)" />
      <text x="280" y="68" textAnchor="middle" fill="#6C63FF" fontSize="8" fontFamily="ui-monospace, monospace">
        HQ
      </text>
      <text x="280" y="88" textAnchor="middle" fill="#141414" fontSize="10" fontWeight="bold" fontFamily="system-ui">
        Bahrain
      </text>

      <rect x="220" y="176" width="120" height="64" stroke="#141414" strokeWidth="1.5" fill="#FAFAF8" />
      <text x="280" y="204" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="ui-monospace, monospace">
        ENGINEERING
      </text>
      <text x="280" y="224" textAnchor="middle" fill="#141414" fontSize="10" fontWeight="bold" fontFamily="system-ui">
        Lahore
      </text>

      <rect x="424" y="100" width="120" height="80" stroke="#141414" strokeWidth="1.5" fill="#FAFAF8" />
      <text x="484" y="128" textAnchor="middle" fill="#8A8A8A" fontSize="8" fontFamily="ui-monospace, monospace">
        OUTPUT
      </text>
      <text x="484" y="158" textAnchor="middle" fill="#141414" fontSize="10" fontWeight="bold" fontFamily="system-ui">
        Ship · Scale
      </text>

      <path d="M136 140 L220 72" stroke="#6C63FF" strokeWidth="1.5" strokeDasharray="5 4" />
      <path d="M136 140 L220 208" stroke="#6C63FF" strokeWidth="1.5" strokeDasharray="5 4" />
      <path d="M340 72 L424 140" stroke="#141414" strokeWidth="1" />
      <path d="M340 208 L424 140" stroke="#141414" strokeWidth="1" />
      <circle cx="280" cy="140" r="8" fill="#6C63FF" />
    </svg>
  );
}

export function DeliveryModel() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#F4F4F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <h2 className="font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
              How teams collaborate across locations.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#5C5C5C]">
              Client-facing leadership in Bahrain coordinates strategy and contracts. Lahore executes
              design, engineering, and delivery — with direct engineer access and weekly demos.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="border border-[#E5E5E3] bg-white p-6 md:p-10">
              <DeliveryDiagram />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
