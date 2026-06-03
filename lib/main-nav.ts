/** Shared main navigation — single source for layout and Navbar. */

export type NavChildItem = {
  label: string;
  href: string;
  description?: string;
};

export type MainNavItem = {
  label: string;
  href: string;
  children?: readonly NavChildItem[];
};

export const ABOUT_NAV_CHILDREN = [
  {
    label: "Who we are",
    href: "/about/who-we-are",
    description: "Story, principles & culture",
  },
  {
    label: "Locations",
    href: "/about/locations",
    description: "Global delivery network",
  },
] as const satisfies readonly NavChildItem[];

export const MAIN_NAV_ITEMS: readonly MainNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about/who-we-are", children: ABOUT_NAV_CHILDREN },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact-us" },
  { label: "Blog", href: "/blog" },
];

export const MAIN_NAV_LINK_DESKTOP_CLASS =
  "group relative whitespace-nowrap text-[13px] font-medium text-slate-700 transition-colors hover:text-[#0F172A] xl:text-sm";

export const MAIN_NAV_LINK_MOBILE_CLASS =
  "text-lg font-semibold text-slate-700 transition-all duration-300 ease-in-out hover:text-[#0F172A]";

export function isNavItemActive(
  pathname: string,
  item: MainNavItem,
): boolean {
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}
