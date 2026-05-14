"use client";

import { INDIVIDUAL, PACKAGES, RETAINERS } from "./pricingPanelsData";
import { PricingTierCards } from "./PricingTierCards";

type TabKey = "packages" | "retainers" | "individual";

const TABS: {
  key: TabKey;
  label: string;
  active: string;
  inactive: string;
}[] = [
  {
    key: "packages",
    label: "Launch Packages",
    active:
      "bg-gradient-to-br from-[#6c63ff] via-[#7c6cff] to-[#8b5cf6] text-white shadow-[0_10px_28px_-6px_rgba(108,99,255,0.55),inset_0_1px_0_rgba(255,255,255,0.25)] ring-1 ring-white/40",
    inactive:
      "border border-[#6c63ff]/25 bg-gradient-to-br from-[#6c63ff]/12 to-[#a78bfa]/10 text-[#3b2f7a] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] hover:border-[#6c63ff]/40 hover:from-[#6c63ff]/18 hover:to-[#a78bfa]/14",
  },
  {
    key: "retainers",
    label: "Monthly Retainers",
    active:
      "bg-gradient-to-br from-sky-400 via-sky-500 to-[#0ea5e9] text-white shadow-[0_10px_28px_-6px_rgba(14,165,233,0.5),inset_0_1px_0_rgba(255,255,255,0.25)] ring-1 ring-white/40",
    inactive:
      "border border-sky-400/35 bg-gradient-to-br from-sky-400/18 to-sky-500/10 text-sky-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] hover:border-sky-400/50 hover:from-sky-400/26 hover:to-sky-500/16",
  },
  {
    key: "individual",
    label: "Individual Services",
    active:
      "bg-gradient-to-br from-[#f9a8d4] via-[#f472b6] to-[#ec4899] text-white shadow-[0_10px_28px_-6px_rgba(236,72,153,0.45),inset_0_1px_0_rgba(255,255,255,0.3)] ring-1 ring-white/40",
    inactive:
      "border border-pink-400/35 bg-gradient-to-br from-pink-200/50 to-[#fbcfe8]/40 text-[#831843] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] hover:border-pink-400/50 hover:from-pink-200/70 hover:to-[#fbcfe8]/55",
  },
];

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
        {TABS.map((t) => {
          const isOn = selectedTab === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setSelectedTab(t.key)}
              className={`pricing-tab rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-200 ease-out ${isOn ? `${t.active} scale-[1.02]` : `${t.inactive} scale-100`} active:scale-[0.98]`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div>
        {selectedTab === "packages" ? <PricingTierCards plans={PACKAGES} /> : null}

        {selectedTab === "retainers" ? <PricingTierCards plans={RETAINERS} tierArtSet="retainer" /> : null}

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
