/** Shared main navigation — single source for layout and Navbar. */



import { DETAILED_SERVICES, PRIMARY_SERVICE_HREF } from "@/lib/services-page-data";



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



export const SERVICES_NAV_CHILDREN = DETAILED_SERVICES.map((service) => ({

  label: service.title,

  href: service.slug,

  description: service.outcomes[0],

})) satisfies readonly NavChildItem[];



export const MAIN_NAV_ITEMS: readonly MainNavItem[] = [

  { label: "Home", href: "/" },

  { label: "About us", href: "/about" },

  { label: "Services", href: PRIMARY_SERVICE_HREF, children: SERVICES_NAV_CHILDREN },

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

  if (item.label === "Services") {

    return pathname.startsWith("/services/");

  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);

}

