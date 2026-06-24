"use client";

import type { DetailedService } from "@/lib/services-page-data";
import { ServiceModuleVisual } from "@/components/services/ServiceModuleVisual";
import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";

type ServiceModuleBlockProps = {
  service: DetailedService;
  index: number;
};

export function ServiceModuleBlock({ service, index }: ServiceModuleBlockProps) {
  const visualRight = index % 2 === 1;
  const bg = service.dark ? "bg-[#141414] text-[#FAFAF8]" : "bg-white text-[#141414]";
  const muted = service.dark ? "text-[#B8B8B8]" : "text-[#5C5C5C]";
  const faint = service.dark ? "text-[#9A9A9A]" : "text-[#8A8A8A]";

  return (
    <div className={bg}>
      <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-14 md:grid-cols-12 md:items-center md:gap-12 md:px-10 md:py-20">
        <Reveal
          className={`md:col-span-5 ${visualRight ? "md:order-2" : ""}`}
          delay={0.04}
        >
          <ServiceModuleVisual
            id={service.visual}
            dark={service.dark}
            className="h-[min(320px,42vw)] min-h-[260px] w-full sm:min-h-[280px] md:min-h-[300px]"
          />
        </Reveal>

        <Reveal
          className={`md:col-span-7 ${visualRight ? "md:order-1" : ""}`}
          delay={0.08}
        >
          <span className={`font-heading text-6xl font-bold leading-none ${faint}`}>
            {service.num}
          </span>
          <h1 className="mt-2 font-heading text-3xl font-bold md:text-4xl">{service.title}</h1>
          <p
            className={`mt-2 text-lg font-medium ${
              service.dark ? "text-[#E8E8E8]" : "text-[#141414]"
            }`}
          >
            {service.headline}
          </p>
          <p className={`mt-4 max-w-xl text-sm leading-relaxed md:text-base ${muted}`}>
            {service.description}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${faint}`}>
                Deliverables
              </p>
              <ul className={`mt-2 space-y-1.5 text-sm ${muted}`}>
                {service.deliverables.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${faint}`}>
                Example outcomes
              </p>
              <ul className={`mt-2 space-y-1.5 text-sm ${muted}`}>
                {service.outcomes.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className={`mt-6 text-xs uppercase tracking-[0.12em] ${faint}`}>
            {service.technologies}
          </p>

          <div className="mt-8">
            <EditorialBoxCta href="/contact-us" variant="primary">
              Book Discovery
            </EditorialBoxCta>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
