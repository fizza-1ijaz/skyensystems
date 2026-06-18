"use client";

import { BlogBlueprintBackdrop } from "@/components/blog/BlogBlueprintBackdrop";
import {
  HEAD_OFFICE_ADDRESS_BLOCK,
  HEAD_OFFICE_CR,
  HEAD_OFFICE_PHONE,
  LEGAL_ENTITY_LINE,
  OFFICE_EMAIL,
  OFFICE_EMAIL_MAILTO,
  REGIONAL_OFFICE_ADDRESS_BLOCK,
  REGIONAL_OFFICE_HOURS,
  REGIONAL_OFFICE_NAME,
  REGIONAL_OFFICE_PHONE,
  REGIONAL_OFFICE_PSEB_PLACEHOLDER,
} from "@/lib/company-offices";

export function GlobalPresenceSection() {
  return (
    <section className="relative overflow-hidden bg-[#111827] text-white">
      <BlogBlueprintBackdrop variant="dark" className="opacity-[0.035]" parallax />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <div className="border-t border-white/10 py-16 md:py-20">
          <h2 className="font-heading text-3xl font-bold tracking-[-0.03em] text-[#FAFAF8] md:text-4xl">
            Global presence
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
            <article className="border-t-2 border-[#31C3C3] bg-white/[0.03] p-8 transition-colors duration-200 hover:border-[#31C3C3]/80 hover:bg-white/[0.045] md:p-10 lg:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
                Head office
              </p>
              <p className="mt-3 font-heading text-xl font-bold text-white md:text-2xl">Bahrain</p>
              <p className="mt-4 text-sm font-medium text-white/75">{LEGAL_ENTITY_LINE}</p>
              <div className="mt-4 space-y-1 text-sm leading-relaxed text-white/55">
                {HEAD_OFFICE_ADDRESS_BLOCK.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mt-6 space-y-2 border-t border-white/10 pt-6 text-sm text-white/55">
                <p>{HEAD_OFFICE_CR}</p>
                <p>
                  Phone:{" "}
                  <a
                    href={`tel:${HEAD_OFFICE_PHONE.replace(/\s/g, "")}`}
                    className="text-white/75 transition-colors hover:text-[#31C3C3]"
                  >
                    {HEAD_OFFICE_PHONE}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href={OFFICE_EMAIL_MAILTO}
                    className="text-white/75 transition-colors hover:text-[#31C3C3]"
                  >
                    {OFFICE_EMAIL}
                  </a>
                </p>
              </div>
            </article>

            <article className="border-t-2 border-[#31C3C3] bg-white/[0.03] p-8 transition-colors duration-200 hover:border-[#31C3C3]/80 hover:bg-white/[0.045] md:p-10 lg:col-span-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Regional office
              </p>
              <p className="mt-3 font-heading text-xl font-bold text-white md:text-2xl">Pakistan</p>
              <p className="mt-4 text-sm font-medium text-white/75">{REGIONAL_OFFICE_NAME}</p>
              <div className="mt-4 space-y-1 text-sm leading-relaxed text-white/55">
                {REGIONAL_OFFICE_ADDRESS_BLOCK.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mt-6 space-y-2 border-t border-white/10 pt-6 text-sm text-white/55">
                <p>{REGIONAL_OFFICE_PSEB_PLACEHOLDER}</p>
                <p>
                  Phone:{" "}
                  <a
                    href={`tel:${REGIONAL_OFFICE_PHONE.replace(/\s/g, "")}`}
                    className="text-white/75 transition-colors hover:text-[#31C3C3]"
                  >
                    {REGIONAL_OFFICE_PHONE}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href={OFFICE_EMAIL_MAILTO}
                    className="text-white/75 transition-colors hover:text-[#31C3C3]"
                  >
                    {OFFICE_EMAIL}
                  </a>
                </p>
                <p>{REGIONAL_OFFICE_HOURS}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
