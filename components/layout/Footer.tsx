"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogBlueprintBackdrop } from "@/components/blog/BlogBlueprintBackdrop";
import { SERVICE_NAV_LINKS, PRIMARY_SERVICE_HREF } from "@/lib/services-page-data";
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

const servicesLinks = SERVICE_NAV_LINKS;

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: PRIMARY_SERVICE_HREF },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact-us" },
] as const;

const productsLinks = [
  { label: "Studiely", href: "https://studiely.com" },
  { label: "Make My Lesson", href: "https://makemylesson.ai" },
  { label: "Linguatude", href: "https://linguatude.com" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookies Policy", href: "/cookies-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
] as const;

const FOOTER_METRICS = [
  { value: "Software", label: "Engineering" },
  { value: "AI", label: "Solutions" },
  { value: "Bahrain", label: "HQ" },
  { value: "Pakistan", label: "Delivery Centre" },
] as const;

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "group inline-flex text-sm text-white/65 transition-colors duration-200 hover:text-white";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <span className="border-b border-transparent pb-0.5 transition-colors duration-200 group-hover:border-[#31C3C3]">
          {children}
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className="border-b border-transparent pb-0.5 transition-colors duration-200 group-hover:border-[#31C3C3]">
        {children}
      </span>
    </Link>
  );
}

function FooterNavGroup({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href} external={link.href.startsWith("http")}>
              {link.label}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-0 overflow-hidden bg-[#111827] text-white">
      <BlogBlueprintBackdrop variant="dark" className="opacity-[0.035]" parallax />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <section className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-12 md:gap-10 md:py-20 lg:gap-12">
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden border border-white/15">
                <Image
                  src="/logo.jpeg"
                  alt="Skyen Systems logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                SKYEN <span className="text-[#31C3C3]">SYSTEMS</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              Software engineering, AI solutions, and digital products for ambitious
              organizations.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:col-span-4">
            <FooterNavGroup title="Company" links={companyLinks} />
            <FooterNavGroup title="Services" links={servicesLinks} />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:col-span-4">
            <FooterNavGroup title="Products" links={productsLinks} />
            <FooterNavGroup title="Legal" links={legalLinks} />
          </div>
        </section>

        {/* Metrics strip */}
        <section className="border-b border-white/10 py-12 md:py-14">
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {FOOTER_METRICS.map((metric) => (
              <div key={metric.label} className="bg-[#111827] px-6 py-6 md:px-8 md:py-7">
                <p className="font-heading text-2xl font-bold tracking-tight text-[#FAFAF8] md:text-[1.75rem]">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Offices */}
        <section className="py-16 md:py-20">
          <h3 className="font-heading text-3xl font-bold tracking-[-0.03em] text-[#FAFAF8] md:text-4xl">
            Global presence
          </h3>

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
            <article className="border-t-2 border-[#31C3C3] bg-white/[0.03] p-8 transition-colors duration-200 hover:border-[#31C3C3]/80 hover:bg-white/[0.045] md:p-10 lg:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
                Head office
              </p>
              <p className="mt-3 font-heading text-xl font-bold text-white md:text-2xl">
                Bahrain
              </p>
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
              <p className="mt-3 font-heading text-xl font-bold text-white md:text-2xl">
                Pakistan
              </p>
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
        </section>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:py-10">
          <p className="font-medium tracking-wide text-white/55">© 2025 Skyen Systems</p>
          <p className="text-white/45">
            A trade name of Qismat Ventures W.L.L. · CR 190698-1
          </p>
        </div>
      </div>
    </footer>
  );
}
