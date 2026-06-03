"use client";

import Link from "next/link";
import { CAPABILITIES } from "@/components/landing/landing-data";
import { CapabilityVisual } from "@/components/landing/capabilities/CapabilityVisual";
import { Reveal } from "@/components/landing/Reveal";

export function CapabilitiesGrid() {
  return (
    <section className="overflow-hidden bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="max-w-xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
              Capabilities across the full product lifecycle.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/services"
              className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6C63FF] hover:underline"
            >
              View all services →
            </Link>
          </Reveal>
        </div>

        <div className="grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {CAPABILITIES.map((item, index) => {
            const isWeb = item.visual === "web";

            return (
              <Reveal
                key={item.num}
                delay={index * 0.05}
                className={`${item.span} ${"colStart" in item ? item.colStart : ""} ${item.minH}`}
              >
                <article className="group relative flex h-full flex-col overflow-visible border border-[#E5E5E3] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#141414] hover:shadow-[0_24px_60px_-40px_rgba(20,20,20,0.2)]">
                  <span
                    className="absolute right-4 top-4 z-20 font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-none text-[#EFEFED] transition-colors duration-300 group-hover:text-[#6C63FF]/20"
                    aria-hidden
                  >
                    {item.num}
                  </span>

                  {isWeb ? (
                    <>
                      <div className="relative z-20 px-5 pb-2 pt-5 md:px-6 md:pt-6">
                        <h3 className="pr-14 font-heading text-xl font-bold tracking-tight text-[#141414] md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-[#5C5C5C]">
                          {item.description}
                        </p>
                      </div>
                      <div
                        className={`relative z-10 h-[6.75rem] shrink-0 overflow-visible px-2 pb-2 sm:h-[7.25rem] md:h-[7.75rem] ${item.visualBleed}`}
                      >
                        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                          <CapabilityVisual id={item.visual} className="h-full w-full opacity-95" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={`relative z-10 flex min-h-[38%] flex-1 items-center justify-center overflow-visible px-3 pt-4 md:px-4 md:pt-5 ${item.visualBleed}`}
                      >
                        <div className="h-[8.5rem] w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-0.5 sm:h-[9.5rem] md:h-[10rem]">
                          <CapabilityVisual id={item.visual} className="h-full w-full opacity-95" />
                        </div>
                      </div>
                      <div className="relative z-20 mt-auto border-t border-[#F0F0EE] bg-white px-5 py-4 md:px-6 md:py-5">
                        <h3 className="pr-14 font-heading text-lg font-bold tracking-tight text-[#141414] md:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 max-w-md text-sm leading-relaxed text-[#5C5C5C]">
                          {item.description}
                        </p>
                      </div>
                    </>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
