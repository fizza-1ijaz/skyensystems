"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import {
  MAIN_NAV_ITEMS,
  MAIN_NAV_LINK_MOBILE_CLASS,
  isNavItemActive,
  type MainNavItem,
} from "@/lib/main-nav";

const GlobalSearchModal = dynamic(
  () =>
    import("@/components/layout/GlobalSearchModal").then((mod) => ({
      default: mod.GlobalSearchModal,
    })),
  { ssr: false },
);

const NAV_LINK_CLASS =
  "whitespace-nowrap px-2 py-2 text-[12px] font-medium transition-colors sm:px-2.5 sm:text-[13px] lg:px-3";

const MOBILE_ICON_BUTTON =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-md transition-colors lg:h-full lg:w-auto lg:rounded-none";

function NavDropdownLink({
  child,
  onClose,
  onNavigate,
  className = "",
}: {
  child: { label: string; href: string; description?: string };
  onClose: () => void;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={child.href}
      role="menuitem"
      className={`group block px-5 py-4 transition-colors hover:bg-[#FAFAF8] ${className}`}
      onClick={() => {
        onClose();
        onNavigate?.();
      }}
    >
      <span className="font-heading text-lg font-bold text-[#141414] transition-colors group-hover:text-[#31C3C3]">
        {child.label}
      </span>
      {child.description ? (
        <span className="mt-1 block text-xs leading-relaxed text-[#8A8A8A]">{child.description}</span>
      ) : null}
    </Link>
  );
}

function ServicesNavMenu({
  items,
  onClose,
  onNavigate,
}: {
  items: readonly { label: string; href: string; description?: string }[];
  onClose: () => void;
  onNavigate?: () => void;
}) {
  const leftColumn = items.slice(0, 3);
  const rightColumn = items.slice(3, 6);

  return (
    <div className="border border-[#E5E5E3] bg-white shadow-[0_24px_64px_-16px_rgba(20,20,20,0.18)]">
      <p className="border-b border-[#F0F0EE] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8A8A8A]">
        Services
      </p>

      <div className="grid grid-cols-2 divide-x divide-[#F0F0EE]">
        <div className="flex flex-col">
          {leftColumn.map((child, index) => (
            <NavDropdownLink
              key={child.href}
              child={child}
              onClose={onClose}
              onNavigate={onNavigate}
              className={index < leftColumn.length - 1 ? "border-b border-[#F0F0EE]" : ""}
            />
          ))}
        </div>
        <div className="flex flex-col">
          {rightColumn.map((child, index) => (
            <NavDropdownLink
              key={child.href}
              child={child}
              onClose={onClose}
              onNavigate={onNavigate}
              className={index < rightColumn.length - 1 ? "border-b border-[#F0F0EE]" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function NavDropdown({
  item,
  isActive,
  linkClass,
  activeClass,
  onNavigate,
}: {
  item: MainNavItem & { children: readonly { label: string; href: string; description?: string }[] };
  isActive: boolean;
  linkClass: string;
  activeClass: string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`inline-flex items-center gap-0.5 ${linkClass} ${isActive ? activeClass : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 opacity-70 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          className={`absolute left-1/2 top-full z-[100] -translate-x-1/2 pt-2 ${
            item.label === "Services"
              ? "w-[min(100vw-2rem,40rem)]"
              : "w-[min(100vw-2rem,20rem)]"
          }`}
          role="menu"
        >
          {item.label === "Services" ? (
            <ServicesNavMenu
              items={item.children}
              onClose={() => setOpen(false)}
              onNavigate={onNavigate}
            />
          ) : (
            <div className="border border-[#E5E5E3] bg-white shadow-[0_24px_64px_-16px_rgba(20,20,20,0.18)]">
              <p className="border-b border-[#F0F0EE] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8A8A8A]">
                {item.label}
              </p>
              {item.children.map((child, index) => (
                <NavDropdownLink
                  key={child.href}
                  child={child}
                  onClose={() => setOpen(false)}
                  onNavigate={onNavigate}
                  className={index < item.children.length - 1 ? "border-b border-[#F0F0EE]" : ""}
                />
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

function MobileNavGroup({
  item,
  isActive,
  onNavigate,
}: {
  item: MainNavItem & { children: readonly { label: string; href: string; description?: string }[] };
  isActive: boolean;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(isActive);

  return (
    <div className="flex flex-col">
      <button
        type="button"
        className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-left ${
          isActive
            ? "bg-white font-semibold text-[#31C3C3]"
            : MAIN_NAV_LINK_MOBILE_CLASS
        }`}
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        {item.label}
        <ChevronDown
          className={`h-5 w-5 shrink-0 opacity-70 transition-transform ${expanded ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {expanded ? (
        <div className="ml-3 flex flex-col gap-1 border-l border-[#D4D4D4] pl-3">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="rounded-lg px-3 py-3 transition-colors hover:bg-white"
              onClick={onNavigate}
            >
              <span className="block font-heading text-lg font-bold text-[#141414]">{child.label}</span>
              {child.description ? (
                <span className="mt-0.5 block text-sm text-[#8A8A8A]">{child.description}</span>
              ) : null}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [heroScrolled, setHeroScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setHeroScrolled(false);
      return;
    }

    let rafId: number | null = null;
    let scrolled = window.scrollY > 72;
    setHeroScrolled(scrolled);

    const onScroll = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const next = window.scrollY > 72;
        if (next === scrolled) return;
        scrolled = next;
        setHeroScrolled(next);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [isHome]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  const closeMobile = () => setIsMobileMenuOpen(false);
  const transparent = isHome && !heroScrolled && !isMobileMenuOpen;

  const navLinkClass = transparent
    ? `${NAV_LINK_CLASS} text-white/88 hover:text-white`
    : `${NAV_LINK_CLASS} text-[#0F172A] hover:text-[#31C3C3]`;

  const activeNavClass = transparent ? "text-white" : "text-[#31C3C3]";

  const mobileIconClass = transparent
    ? `${MOBILE_ICON_BUTTON} text-white hover:bg-white/10 active:bg-white/15 hover:text-white lg:hover:bg-transparent lg:active:bg-transparent`
    : `${MOBILE_ICON_BUTTON} text-[#0F172A] hover:bg-[#E8E8E6] active:bg-[#E0E0DE] hover:text-[#31C3C3] lg:hover:bg-transparent lg:active:bg-transparent`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 overflow-visible border-b transition-colors duration-300 ${
        transparent
          ? "border-transparent bg-transparent"
          : "border-[#E0E0E0] bg-[#F2F2F2]"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1440px] items-center overflow-visible px-4 sm:px-6 lg:items-stretch lg:px-8">
        <div className="flex min-w-0 shrink-0 items-center lg:pr-4">
          <Link
            href="/"
            className="inline-flex truncate font-heading text-[15px] font-bold tracking-tight transition-opacity hover:opacity-80 sm:text-base"
          >
            <span className={transparent ? "text-white" : "text-[#141414]"}>SKYEN</span>
            <span className="text-[#31C3C3]">&nbsp;SYSTEMS</span>
          </Link>
        </div>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0 overflow-visible lg:flex"
          aria-label="Main navigation"
        >
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = mounted && isNavItemActive(pathname, item);

            if (item.children?.length) {
              return (
                <NavDropdown
                  key={item.href}
                  item={{ ...item, children: item.children }}
                  isActive={isActive}
                  linkClass={navLinkClass}
                  activeClass={activeNavClass}
                />
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${navLinkClass} ${isActive ? activeNavClass : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1 lg:ml-4 lg:gap-2">
          <Link
            href="/contact-us"
            className="hidden h-full items-center rounded-full bg-[#31C3C3] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#2AB0B0] lg:inline-flex lg:px-5"
          >
            Start Project
          </Link>

          <button
            type="button"
            className={`${mobileIconClass} lg:px-3`}
            aria-label="Search site"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5 stroke-[2] lg:h-[18px] lg:w-[18px]" />
          </button>

          <button
            type="button"
            className={`${mobileIconClass} lg:hidden`}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-b border-[#E0E0E0] bg-[#F2F2F2] lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1 px-5 py-4 sm:px-6">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = mounted && isNavItemActive(pathname, item);

              if (item.children?.length) {
                return (
                  <MobileNavGroup
                    key={item.href}
                    item={{ ...item, children: item.children }}
                    isActive={isActive}
                    onNavigate={closeMobile}
                  />
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2.5 ${
                    isActive
                      ? "bg-white font-semibold text-[#31C3C3]"
                      : MAIN_NAV_LINK_MOBILE_CLASS
                  }`}
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact-us"
              className="mt-2 flex items-center justify-center bg-[#31C3C3] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2AB0B0]"
              onClick={closeMobile}
            >
              Start Project
            </Link>
          </div>
        </div>
      ) : null}

      {isSearchOpen ? (
        <GlobalSearchModal open onClose={() => setIsSearchOpen(false)} />
      ) : null}
    </header>
  );
}
