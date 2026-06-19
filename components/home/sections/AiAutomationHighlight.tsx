"use client";

import Image from "next/image";
import { AI_AUTOMATION_HIGHLIGHT } from "@/lib/homepage-data";
import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import { SITE_IMAGE_QUALITY, shouldBypassImageOptimization } from "@/lib/site-image";

function CapabilityCard({
  capability,
  index,
}: {
  capability: (typeof AI_AUTOMATION_HIGHLIGHT.capabilities)[number];
  index: number;
}) {
  return (
    <li className="group flex flex-col overflow-hidden border border-[#E5E5E3] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#31C3C3]/50 hover:shadow-[0_20px_50px_-35px_rgba(49,195,195,0.35)]">
      <div className="relative h-36 w-full overflow-hidden bg-[#F4F4F2] sm:h-40">
        <Image
          src={capability.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)]:group-hover:scale-105 motion-reduce:group-hover:scale-100"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={SITE_IMAGE_QUALITY.content}
          loading="lazy"
          unoptimized={shouldBypassImageOptimization(capability.image)}
        />
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-0 z-0 h-0 bg-[#31C3C3] transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)]:group-hover:h-full motion-reduce:[@media(hover:hover)]:group-hover:h-0"
          aria-hidden
        />

        <div className="relative z-10 p-5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 [@media(hover:hover)]:group-hover:-translate-y-1 md:p-6">
          <span className="font-heading text-sm font-bold text-[#31C3C3] transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 font-heading text-base font-bold text-[#141414] transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white md:text-lg">
            {capability.title}
          </p>
        </div>
      </div>
    </li>
  );
}

export function AiAutomationHighlight() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(49,195,195,0.15), transparent 45%), radial-gradient(circle at 80% 70%, rgba(20,20,20,0.06), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="page-hero-copy lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
              {AI_AUTOMATION_HIGHLIGHT.eyebrow}
            </p>
            <h2 className="editorial-section-title mt-4 text-balance text-[#141414]">
              {AI_AUTOMATION_HIGHLIGHT.headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              {AI_AUTOMATION_HIGHLIGHT.description}
            </p>
            <div className="page-hero-cta-row mt-8">
              <EditorialBoxCta href={AI_AUTOMATION_HIGHLIGHT.cta.href} variant="primary">
                {AI_AUTOMATION_HIGHLIGHT.cta.label}
              </EditorialBoxCta>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {AI_AUTOMATION_HIGHLIGHT.capabilities.map((capability, index) => (
                <CapabilityCard key={capability.title} capability={capability} index={index} />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
