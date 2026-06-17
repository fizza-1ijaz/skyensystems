"use client";

import { Reveal } from "@/components/landing/Reveal";
import {
  PACKAGE_DIRECTION_PACKAGES,
  PACKAGE_DIRECTION_SECTION,
} from "@/lib/pricing-page-data";

export function PricingPackageDirection() {
  return (
    <section className="border-b border-[#DADAD8] bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A8A8A]">
            {PACKAGE_DIRECTION_SECTION.label}
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-balance text-[#141414]">
            {PACKAGE_DIRECTION_SECTION.heading}
          </h2>
          <p className="mx-auto mt-4 w-full max-w-none text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {PACKAGE_DIRECTION_SECTION.paragraph}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {PACKAGE_DIRECTION_PACKAGES.map((pkg, index) => {
            const featured = Boolean(pkg.featured);

            return (
              <Reveal key={pkg.title} delay={index * 0.06} className="min-h-0 flex">
                <article
                  className={`group flex w-full flex-col border bg-white p-8 transition-all duration-200 ease-out hover:-translate-y-1 md:p-10 ${
                    featured
                      ? "relative z-10 border-[#31C3C3]/35 shadow-[0_20px_48px_-28px_rgba(49,195,195,0.35)] lg:-my-2 lg:py-12"
                      : "border-[#DADAD8] shadow-[0_1px_0_0_#E5E5E3] hover:border-[#141414]/20"
                  }`}
                >
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                      featured ? "text-[#31C3C3]" : "text-[#8A8A8A]"
                    }`}
                  >
                    {pkg.badge}
                  </p>

                  <div className="mt-4 flex flex-col gap-4 border-b border-[#E5E5E3] pb-6 md:flex-row md:items-start md:justify-between md:gap-6">
                    <h3 className="font-heading text-2xl font-bold tracking-tight text-[#141414] md:text-[1.75rem]">
                      {pkg.title}
                    </h3>
                    <div className="flex shrink-0 items-stretch gap-3">
                      <span className="w-0.5 shrink-0 bg-[#31C3C3]" aria-hidden />
                      <p className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-none tracking-tight text-[#141414]">
                        {pkg.price}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-[#5C5C5C]">{pkg.description}</p>

                  <ul className="mt-8 flex flex-1 flex-col gap-3.5 border-t border-[#E5E5E3] pt-8">
                    {pkg.included.map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed text-[#5C5C5C]">
                        <span className="mt-2 h-px w-3 shrink-0 bg-[#31C3C3]" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
