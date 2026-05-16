"use client";

import { useReducedMotion } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getServiceCardTheme } from "@/lib/service-card-themes";
import { useRevealOnce } from "@/hooks/useRevealOnce";
import { ServiceCardBackgroundIcons } from "./HeroTechCornerIcons";

export type HeroScrollService = {
  id: string;
  title: string;
  slug: string;
  desc: string;
  features: string;
  icon: LucideIcon;
  previewImage: string;
};

export function ServiceCard({
  service,
  index,
}: {
  service: HeroScrollService;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const theme = getServiceCardTheme(service.id);
  const reduceMotion = useReducedMotion();
  const fromLeft = index % 2 === 0;
  const isVisible = useRevealOnce(cardRef, !reduceMotion);

  const gridPatternIdDesktop = `grid-desktop-svc-${index}`;
  const Icon = service.icon;

  const swayStyle = {
    "--sway-x": fromLeft ? "-3rem" : "3rem",
    "--sway-x-desktop": fromLeft ? "-3.5rem" : "3.5rem",
    "--sway-delay": `${index * 70}ms`,
  } as CSSProperties;

  return (
    <div
      ref={cardRef}
      style={swayStyle}
      className={`service-card-sway relative flex flex-col ${isVisible ? "is-visible" : ""} ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-4 md:gap-12`}
    >
      <ServiceCardBackgroundIcons serviceId={service.id} cardIndex={index} animate={isVisible} />
      <div className="relative z-[1] w-full md:w-1/2 group">
        <div
          className={`relative overflow-hidden rounded-[2.5rem] border p-8 transition-all duration-700 md:rounded-[3rem] md:p-10 ${theme.card}`}
        >
          <div
            className={`pointer-events-none absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] ${theme.overlay}`}
          />
          <div className="relative">
            <div
              className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[1.5rem] border bg-white/80 shadow-sm transition-all duration-700 group-hover:rotate-6 group-hover:scale-110 md:mx-0 md:mb-8 md:h-20 md:w-20 md:rounded-[2rem] ${theme.highlight}`}
            >
              <Icon className={`h-8 w-8 md:h-10 md:w-10 ${theme.label}`} />
            </div>
            <h2
              className={`mb-4 text-center text-3xl font-black tracking-tighter md:mb-6 md:text-left md:text-4xl ${theme.headline}`}
            >
              {service.title}
            </h2>
            <p className={`mb-6 text-base font-medium leading-relaxed md:mb-8 md:text-lg ${theme.body}`}>
              {service.desc}
            </p>
            <div className="border-t border-dashed border-black/10 pt-6 md:pt-8">
              <div className="flex flex-wrap gap-2">
                {service.features.split(" · ").map((f: string) => (
                  <span
                    key={f}
                    className={`rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-wider md:px-4 md:py-1.5 md:text-[10px] ${theme.highlight}`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[1] hidden w-full flex-col items-center justify-center md:flex md:w-1/2">
        <div className="relative group">
          <div
            className={`pointer-events-none absolute inset-0 opacity-15 blur-[100px] transition-opacity duration-700 group-hover:opacity-25 ${theme.overlay}`}
          />

          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <svg className="h-full w-full opacity-10" viewBox="0 0 400 400">
              <defs>
                <pattern id={gridPatternIdDesktop} width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${gridPatternIdDesktop})`} className={theme.label} />
            </svg>
          </div>

          <div
            className={`relative rounded-3xl border bg-white/40 p-3 backdrop-blur-md transition-all duration-700 hover:rotate-1 hover:scale-105 ${theme.imageBorder}`}
          >
            <div className={`relative h-72 w-[22rem] overflow-hidden rounded-2xl border shadow-2xl ${theme.imageBorder}`}>
              <Image
                src={service.previewImage}
                alt={service.title}
                width={350}
                height={288}
                quality={80}
                priority={index < 2}
                unoptimized={service.previewImage.endsWith(".jfif")}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>
          </div>
          <div
            className={`absolute -right-6 -top-6 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border bg-white shadow-2xl ${theme.highlight}`}
          >
            <Icon className={`h-7 w-7 ${theme.label}`} />
          </div>
        </div>
        <Link
          href={`/services/${service.slug}`}
          className={`group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3 ${theme.label}`}
        >
          <span>See more</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </Link>
      </div>

      <div className="relative z-[1] w-full md:hidden">
        <div
          className={`relative w-full rounded-2xl border p-2 backdrop-blur-md transition-all duration-700 ${theme.imageBorder} bg-white/50`}
        >
          <div className={`relative h-48 w-full overflow-hidden rounded-xl border shadow-lg ${theme.imageBorder}`}>
            <Image
              src={service.previewImage}
              alt={service.title}
              width={400}
              height={256}
              quality={80}
              priority={index < 2}
              unoptimized={service.previewImage.endsWith(".jfif")}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      <div className="relative z-[1] flex w-full justify-center md:hidden">
        <Link
          href={`/services/${service.slug}`}
          className={`inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${theme.cta}`}
        >
          <span>View Service</span>
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}
