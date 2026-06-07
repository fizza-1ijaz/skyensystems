"use client";

import Link from "next/link";
import Image from "next/image";
import { ProductMetricsRow } from "@/components/products/ProductMetricsRow";
import { ProductMockupShowcase } from "@/components/products/ProductMockupShowcase";
import { ProductProcessStrip } from "@/components/products/ProductProcessStrip";
import { ProductsBlueprintBackdrop } from "@/components/products/ProductsBlueprintBackdrop";
import { Reveal } from "@/components/landing/Reveal";
import type { ProductScene } from "@/lib/products-page-data";

type ProductFeatureSectionProps = {
  product: ProductScene;
  index: number;
  featured?: boolean;
  highlighted?: boolean;
};

function CapabilityItem({ item, dark }: { item: string; dark?: boolean }) {
  const colonIndex = item.indexOf(":");
  const title = colonIndex > -1 ? item.slice(0, colonIndex) : item;
  const body = colonIndex > -1 ? item.slice(colonIndex + 1).trim() : "";

  return (
    <li className="flex gap-3">
      <span
        className={`mt-2 h-px w-3 shrink-0 ${dark ? "bg-[#31C3C3]" : "bg-[#31C3C3]/70"}`}
        aria-hidden
      />
      <span className={`text-sm leading-relaxed ${dark ? "text-white/70" : "text-[#4A4A4A]"}`}>
        {body ? (
          <>
            <span className={`font-semibold ${dark ? "text-white/90" : "text-[#141414]"}`}>
              {title}:
            </span>{" "}
            {body}
          </>
        ) : (
          item
        )}
      </span>
    </li>
  );
}

export function ProductFeatureSection({
  product,
  index,
  featured = false,
  highlighted = false,
}: ProductFeatureSectionProps) {
  const mockupLeft = index % 2 === 1;

  return (
    <section
      id={`product-${product.id}`}
      className={`relative overflow-hidden ${
        index === 0 ? "pb-20 pt-10 md:pb-28 md:pt-14" : "py-20 md:py-28"
      } ${
        featured ? "bg-[#0F172A] text-[#FAFAF8]" : "bg-[#F4F4F2] text-[#141414]"
      } ${highlighted ? "ring-2 ring-inset ring-[#31C3C3]/40" : ""}`}
    >
      <ProductsBlueprintBackdrop variant={featured ? "dark" : "light"} parallax />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div
          className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16 ${
            mockupLeft ? "" : ""
          }`}
        >
          {/* Content column */}
          <div
            className={`lg:col-span-6 ${mockupLeft ? "lg:order-2" : "lg:order-1"}`}
          >
            <Reveal>
              <p
                className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                  featured ? "text-white/40" : "text-[#8A8A8A]"
                }`}
              >
                {product.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
                <div
                  className={`relative h-16 w-16 shrink-0 overflow-hidden border ${
                    featured ? "border-white/15 bg-white/5" : "border-[#DADAD8] bg-white"
                  }`}
                >
                  <Image
                    src={product.logoSrc}
                    alt={`${product.name} logo`}
                    fill
                    sizes="64px"
                    quality={85}
                    className="object-contain p-2"
                  />
                </div>
                <h2
                  className={`break-words font-heading text-[clamp(1.75rem,5vw,3.25rem)] font-bold tracking-[-0.03em] ${
                    featured ? "text-[#FAFAF8]" : "text-[#141414]"
                  }`}
                >
                  {product.name}
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p
                className={`mt-6 text-lg font-semibold leading-snug sm:text-xl md:text-2xl ${
                  featured ? "text-white/85" : "text-[#141414]"
                }`}
              >
                {product.tagline}
              </p>
              <p
                className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                  featured ? "text-[#31C3C3]" : "text-[#31C3C3]"
                }`}
              >
                {product.status}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className={`mt-6 space-y-4 text-base leading-relaxed ${
                  featured ? "text-white/60" : "text-[#5C5C5C]"
                }`}
              >
                {product.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10">
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                    featured ? "text-white/40" : "text-[#8A8A8A]"
                  }`}
                >
                  {product.platforms[0] ?? "Key capabilities"}
                </p>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {product.tech.map((item) => (
                    <CapabilityItem key={item} item={item} dark={featured} />
                  ))}
                </ul>
              </div>
            </Reveal>

            <ProductMetricsRow metrics={product.metrics} dark={featured} />
            <ProductProcessStrip dark={featured} />

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={product.primaryCtaHref}
                  target={product.primaryExternal ? "_blank" : undefined}
                  rel={product.primaryExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center bg-[#31C3C3] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-[#2AB0B0]"
                >
                  {product.primaryCtaLabel}
                </a>
                {product.secondaryCtaLabel && product.secondaryCtaHref ? (
                  <Link
                    href={product.secondaryCtaHref}
                    className={`inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                      featured
                        ? "border border-white/30 text-white hover:border-white hover:bg-white/5"
                        : "border border-[#DADAD8] text-[#141414] hover:border-[#141414]"
                    }`}
                  >
                    {product.secondaryCtaLabel}
                  </Link>
                ) : null}
              </div>

              {product.waitlistNote ? (
                <p className={`mt-4 text-xs ${featured ? "text-white/40" : "text-[#8A8A8A]"}`}>
                  {product.waitlistNote}
                </p>
              ) : null}

              {product.showStoreButtons ? (
                <div
                  className={`mt-8 border-t pt-6 ${featured ? "border-white/10" : "border-[#DADAD8]"}`}
                >
                  <p
                    className={`mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                      featured ? "text-white/40" : "text-[#8A8A8A]"
                    }`}
                  >
                    Download and see it now
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={product.appStoreHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-200 ${
                        featured
                          ? "border-white/20 text-white hover:border-[#31C3C3] hover:text-[#31C3C3]"
                          : "border-[#DADAD8] text-[#141414] hover:border-[#31C3C3] hover:text-[#31C3C3]"
                      }`}
                    >
                      App Store
                    </a>
                    <a
                      href={product.playStoreHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-200 ${
                        featured
                          ? "border-white/20 text-white hover:border-[#31C3C3] hover:text-[#31C3C3]"
                          : "border-[#DADAD8] text-[#141414] hover:border-[#31C3C3] hover:text-[#31C3C3]"
                      }`}
                    >
                      Google Play
                    </a>
                  </div>
                </div>
              ) : null}
            </Reveal>
          </div>

          {/* Mockup column */}
          <Reveal delay={0.1} className={`lg:col-span-6 ${mockupLeft ? "lg:order-1" : "lg:order-2"}`}>
            <ProductMockupShowcase
              product={product}
              priority={index === 0}
              frameBg={featured ? "#111827" : "#0F172A"}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
