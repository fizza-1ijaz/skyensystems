/** Shared main navigation — single source for layout (SSR) and client Navbar (mobile). */
export const MAIN_NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact-us" },
  { label: "Blog", href: "/blog" },
] as const;

export type MainNavItem = (typeof MAIN_NAV_ITEMS)[number];

export const MAIN_NAV_LINK_DESKTOP_CLASS =
  "group relative whitespace-nowrap text-[13px] font-medium text-slate-700 transition-colors hover:text-[#0F172A] xl:text-sm";

export const MAIN_NAV_LINK_MOBILE_CLASS =
  "text-lg font-semibold text-slate-700 transition-all duration-300 ease-in-out hover:text-[#0F172A]";
