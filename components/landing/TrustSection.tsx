"use client";

import { TRUST_STATS } from "@/components/landing/landing-data";
import { Reveal } from "@/components/landing/Reveal";

const TESTIMONIAL = {
  quote:
    "Skyen Systems delivered a polished platform on time — clear communication, strong engineering, and no agency fluff.",
  role: "Founding client · US small business",
};

export function TrustSection() {
  return (
    <section className="border-y border-[#E5E5E3] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Stats block — annual report style */}
          <Reveal className="grid grid-cols-2 gap-px bg-[#E5E5E3] sm:grid-cols-4 lg:col-span-7">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="bg-white p-6 md:p-8">
                <p className="font-heading text-4xl font-bold tracking-tight text-[#141414] md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>

          {/* PSEB / credentials */}
          <Reveal delay={0.08} className="border border-[#E5E5E3] bg-[#FAFAF8] p-8 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6C63FF]">
              Registration
            </p>
            <p className="mt-4 font-heading text-2xl font-bold text-[#141414]">
              PSEB-registered software export house
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C]">
              Qismat Ventures W.L.L. · CR 190698-1 · Bahrain head office · Lahore delivery centre
            </p>
            <ul className="mt-6 space-y-2 text-xs uppercase tracking-[0.12em] text-[#8A8A8A]">
              <li>Studiely — Live on App Store & Play Store</li>
              <li>Make My Lesson — In development</li>
              <li>Linguatude — In development</li>
            </ul>
          </Reveal>

          {/* Testimonial — wide */}
          <Reveal
            delay={0.12}
            className="border-l-4 border-[#6C63FF] bg-[#141414] p-8 text-[#FAFAF8] lg:col-span-8"
          >
            <p className="font-heading text-2xl font-medium leading-snug md:text-3xl">
              &ldquo;{TESTIMONIAL.quote}&rdquo;
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-[#9A9A9A]">
              {TESTIMONIAL.role}
            </p>
          </Reveal>

          {/* Founding offer */}
          <Reveal
            delay={0.16}
            className="flex flex-col justify-between border border-[#E5E5E3] p-8 lg:col-span-4"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">
                Founding client program
              </p>
              <p className="mt-3 font-heading text-xl font-bold text-[#141414]">
                20% off for early US partners
              </p>
              <p className="mt-2 text-sm text-[#5C5C5C]">
                In exchange for an honest review after delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
