"use client";

import { INDIVIDUAL, PACKAGES, RETAINERS } from "./pricingPanelsData";
import { PricingTierCards } from "./PricingTierCards";

type TabKey = "packages" | "retainers" | "individual";

export default function PricingPanels({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: TabKey;
  setSelectedTab: (tab: TabKey) => void;
}) {
  return (
    <>
      <div className="mt-6 mb-6 flex flex-wrap items-center gap-3">
        {[
          { key: "packages" as const, label: "Launch Packages" },
          { key: "retainers" as const, label: "Monthly Retainers" },
          { key: "individual" as const, label: "Individual Services" },
        ].map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setSelectedTab(t.key)}
            className={`pricing-tab rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${selectedTab === t.key ? "bg-[#1E3A8A] text-white" : "border border-slate-300/80 bg-white/60 text-[#0F172A]"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div>
        {selectedTab === "packages" ? <PricingTierCards plans={PACKAGES} /> : null}

        {selectedTab === "retainers" ? <PricingTierCards plans={RETAINERS} /> : null}

        {selectedTab === "individual" ? (
          <div className="space-y-4">
            <div className="space-y-3 md:hidden">
              {INDIVIDUAL.map((s) => (
                <article
                  key={s.name}
                  className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-[#0a1624] via-[#0c1f33] to-[#082830] p-4 shadow-[0_18px_40px_-28px_rgba(6,182,212,0.35)]"
                >
                  <h3 className="text-sm font-semibold leading-snug text-cyan-50">{s.name}</h3>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-cyan-300/80">
                        Our Price
                      </div>
                      <div className="mt-1 font-bold text-cyan-100">{s.price}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-cyan-300/80">
                        You Save
                      </div>
                      <div className="mt-1 font-bold text-cyan-100">{s.save}</div>
                    </div>
                  </div>
                  <div className="mt-3 rounded-xl border border-cyan-500/20 bg-[#061018]/80 px-3 py-2 text-sm text-slate-300">
                    <span className="block text-[11px] font-semibold uppercase tracking-wide text-cyan-400/70">
                      US Agency Rate
                    </span>
                    <span className="mt-1 block font-medium text-slate-200">{s.us}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="hidden overflow-x-auto rounded-2xl border border-cyan-400/25 shadow-[0_24px_56px_-32px_rgba(8,47,73,0.55)] md:block">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-[#0b1220] via-[#0f2742] to-[#0c3542]">
                    <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-cyan-100/95">
                      Service
                    </th>
                    <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-cyan-100/95">
                      Our Price
                    </th>
                    <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-cyan-100/95">
                      US Agency Rate
                    </th>
                    <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-cyan-100/95">
                      You Save
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#060d14]">
                  {INDIVIDUAL.map((s, row) => (
                    <tr
                      key={s.name}
                      className={`border-t border-cyan-500/15 transition-colors hover:bg-cyan-500/[0.06] ${row % 2 === 0 ? "bg-[#070f18]/90" : "bg-[#08121c]/90"}`}
                    >
                      <td className="px-4 py-3.5 text-sm text-slate-200">{s.name}</td>
                      <td className="px-4 py-3.5 text-sm font-semibold text-cyan-100">{s.price}</td>
                      <td className="px-4 py-3.5 text-sm text-slate-400">{s.us}</td>
                      <td className="px-4 py-3.5 text-sm font-medium text-cyan-200/90">{s.save}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
