import Link from "next/link";
import { MAIN_NAV_ITEMS, MAIN_NAV_LINK_DESKTOP_CLASS } from "@/lib/main-nav";

type NavbarDesktopLinksProps = {
  linkClassName?: string;
};

/** Server-rendered desktop links — avoids client/server drift during hydration. */
export function NavbarDesktopLinks({ linkClassName }: NavbarDesktopLinksProps) {
  const linkClass = linkClassName ?? MAIN_NAV_LINK_DESKTOP_CLASS;

  return (
    <>
      {MAIN_NAV_ITEMS.map((item) => (
        <Link key={item.href} href={item.href} className={linkClass}>
          {item.label}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#6C63FF] to-[#22D3EE] transition-all group-hover:w-full" />
        </Link>
      ))}
    </>
  );
}
