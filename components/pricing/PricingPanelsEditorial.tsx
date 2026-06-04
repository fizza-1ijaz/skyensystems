"use client";

import { INDIVIDUAL, PACKAGES, RETAINERS } from "@/components/marketing/pricingPanelsData";
import { PricingTierCardsEditorial } from "@/components/pricing/PricingTierCardsEditorial";

type TabKey = "packages" | "retainers" | "individual";

const TABS: { key: TabKey; label: string }[] = [
  { key: "packages", label: "Launch Packages" },
  { key: "retainers", label: "Monthly Retainers" },
  { key: "individual", label: "Individual Services" },
];

function PriceCell({ value }: { value: string }) {
  return (
    <div className="flex items-stretch gap-2.5">
      <span className="w-0.5 shrink-0 self-stretch bg-[#6C63FF]/60" aria-hidden />
      <span className="font-heading text-base font-bold tracking-tight text-[#141414] md:text-lg">
        {value}
      </span>
    </div>
  );
}

export function PricingPanelsEditorial({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: TabKey;
  setSelectedTab: (tab: TabKey) => void;
}) {
  return (
    <>
      <div className="-mx-6 flex items-center gap-x-6 gap-y-3 overflow-x-auto border-b border-[#DADAD8] px-6 pb-px no-scrollbar md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
        {TABS.map((tab) => {
          const isOn = selectedTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSelectedTab(tab.key)}
              className={`-mb-px flex shrink-0 items-center gap-2 border-b-2 pb-3 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-200 sm:text-sm sm:tracking-[0.12em] ${
                isOn
                  ? "border-[#6C63FF] text-[#141414]"
                  : "border-transparent text-[#8A8A8A] hover:text-[#141414]"
              }`}
            >
              {isOn ? (
                <span className="h-1.5 w-1.5 rounded-full bg-[#6C63FF]" aria-hidden />
              ) : null}
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="relative mt-10">
        {selectedTab === "packages" ? <PricingTierCardsEditorial plans={PACKAGES} /> : null}
        {selectedTab === "retainers" ? <PricingTierCardsEditorial plans={RETAINERS} /> : null}

        {selectedTab === "individual" ? (
          <>
            <div className="space-y-3 lg:hidden">
              {INDIVIDUAL.map((row, index) => (
                <article
                  key={row.name}
                  className={`border border-[#DADAD8] p-4 shadow-[0_1px_0_0_#E5E5E3] ${
                    index % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"
                  }`}
                >
                  <h3 className="text-sm font-semibold leading-snug text-[#141414]">{row.name}</h3>
                  <div className="mt-3 grid grid-cols-1 gap-3 text-sm min-[400px]:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]">
                        Our price
                      </p>
                      <div className="mt-1">
                        <PriceCell value={row.price} />
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]">
                        You save
                      </p>
                      <p className="mt-1 font-heading text-sm font-bold text-[#6C63FF]">{row.save}</p>
                    </div>
                  </div>
                  <p className="mt-3 border-t border-[#E5E5E3] pt-3 text-sm text-[#5C5C5C]">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]">
                      US agency rate
                    </span>
                    {row.us}
                  </p>
                </article>
              ))}
            </div>

            <div className="hidden overflow-x-auto border border-[#DADAD8] bg-white shadow-[0_1px_0_0_#E5E5E3] lg:block">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#DADAD8] bg-[#F7F7F5]">
                  <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#141414]">
                    Service
                  </th>
                  <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#141414]">
                    Our price
                  </th>
                  <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#141414]">
                    US agency rate
                  </th>
                  <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#141414]">
                    You save
                  </th>
                </tr>
              </thead>
              <tbody>
                {INDIVIDUAL.map((row, index) => (
                  <tr
                    key={row.name}
                    className={`border-b border-[#E5E5E3] transition-colors duration-200 last:border-b-0 hover:bg-[rgba(108,99,255,0.05)] ${
                      index % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"
                    }`}
                  >
                    <td className="px-6 py-5 text-sm text-[#141414]">{row.name}</td>
                    <td className="px-6 py-5">
                      <PriceCell value={row.price} />
                    </td>
                    <td className="px-6 py-5 text-sm text-[#5C5C5C]">{row.us}</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-2 font-heading text-sm font-bold text-[#6C63FF] md:text-base">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#6C63FF]" aria-hidden />
                        {row.save}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </>
        ) : null}
      </div>
    </>
  );
}
