import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogBlueprintBackdropStatic } from "@/components/blog/BlogBlueprintBackdropStatic";
import { SERVICE_NAV_LINKS, PRIMARY_SERVICE_HREF } from "@/lib/services-page-data";

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
    "group inline-flex text-sm text-[#C5CDD6] transition-colors duration-200 hover:text-white";

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
      <BlogBlueprintBackdropStatic variant="dark" className="opacity-[0.035]" />

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
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#B8BFC9]">
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

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs text-[#9CA3AF] md:flex-row md:items-center md:justify-between md:py-10">
          <p className="font-medium tracking-wide">© 2025 Skyen Systems</p>
          <p>A trade name of Qismat Ventures W.L.L. · CR 190698-1</p>
        </div>
      </div>
    </footer>
  );
}
