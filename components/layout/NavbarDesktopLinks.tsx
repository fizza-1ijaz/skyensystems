import Link from "next/link";
import { MAIN_NAV_ITEMS, MAIN_NAV_LINK_DESKTOP_CLASS } from "@/lib/main-nav";

/** Server-rendered desktop links — avoids client/server drift during hydration. */
export function NavbarDesktopLinks() {
  return (
    <>
      {MAIN_NAV_ITEMS.map((item) => (
        <Link key={item.href} href={item.href} className={MAIN_NAV_LINK_DESKTOP_CLASS}>
          {item.label}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#6C63FF] to-[#1E3A8A] transition-all group-hover:w-full" />
        </Link>
      ))}
    </>
  );
}
