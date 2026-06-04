"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import {
  MAIN_NAV_ITEMS,
  MAIN_NAV_LINK_MOBILE_CLASS,
  isNavItemActive,
  type MainNavItem,
} from "@/lib/main-nav";
import { GlobalSearchModal } from "@/components/layout/GlobalSearchModal";

const NAV_LINK_CLASS =
  "whitespace-nowrap px-3 py-2 text-[13px] font-medium text-[#0F172A] transition-colors hover:text-[#6C63FF] xl:px-3.5 xl:text-sm";

const MOBILE_ICON_BUTTON =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-[#0F172A] transition-colors hover:bg-[#E8E8E6] active:bg-[#E0E0DE] hover:text-[#6C63FF] lg:h-full lg:w-auto lg:rounded-none lg:hover:bg-transparent lg:active:bg-transparent";

function NavDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`hidden h-8 w-px shrink-0 bg-[#D4D4D4] lg:block ${className}`}
      aria-hidden
    />
  );
}

function AboutNavDropdown({
  item,
  isActive,
  onNavigate,
}: {
  item: MainNavItem & { children: readonly { label: string; href: string }[] };
  isActive: boolean;
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
        className={`inline-flex items-center gap-0.5 ${NAV_LINK_CLASS} ${isActive ? "text-[#6C63FF]" : ""}`}
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
          className="absolute left-1/2 top-full z-[100] w-[min(100vw-2rem,20rem)] -translate-x-1/2 pt-2"
          role="menu"
        >
          <div className="border border-[#E5E5E3] bg-white shadow-[0_24px_64px_-16px_rgba(20,20,20,0.18)]">
            <p className="border-b border-[#F0F0EE] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8A8A8A]">
              About
            </p>
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                className="group block border-b border-[#F0F0EE] px-5 py-4 transition-colors last:border-b-0 hover:bg-[#FAFAF8]"
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                <span className="font-heading text-lg font-bold text-[#141414] transition-colors group-hover:text-[#6C63FF]">
                  {child.label}
                </span>
                {child.description ? (
                  <span className="mt-1 block text-xs text-[#8A8A8A]">{child.description}</span>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobileAboutNavGroup({
  item,
  isActive,
  onNavigate,
}: {
  item: MainNavItem & { children: readonly { label: string; href: string }[] };
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
            ? "bg-white font-semibold text-[#6C63FF]"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-visible border-b border-[#E0E0E0] bg-[#F2F2F2]">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center overflow-visible px-4 sm:px-6 lg:items-stretch lg:px-8">
        <div className="flex min-w-0 shrink-0 items-center lg:pr-6">
          <Link
            href="/"
            className="truncate text-[15px] font-semibold tracking-tight text-[#0F172A] transition-colors hover:text-[#6C63FF] sm:text-base md:text-lg"
          >
            Skyen <span className="font-bold">Systems</span>
          </Link>
        </div>

        <NavDivider />

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0 overflow-visible lg:flex"
          aria-label="Main navigation"
        >
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = mounted && isNavItemActive(pathname, item);

            if (item.children?.length) {
              return (
                <AboutNavDropdown
                  key={item.href}
                  item={{ ...item, children: item.children }}
                  isActive={isActive}
                />
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${NAV_LINK_CLASS} ${isActive ? "text-[#6C63FF]" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <NavDivider />

        <div className="ml-auto flex shrink-0 items-center gap-0.5 lg:ml-0 lg:gap-0">
          <Link
            href="/contact-us"
            className="hidden h-full items-center bg-[#6C63FF] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#5A52E8] lg:inline-flex xl:px-6 xl:text-sm"
          >
            Start Project
          </Link>

          <NavDivider />

          <button
            type="button"
            className={`${MOBILE_ICON_BUTTON} lg:px-5`}
            aria-label="Search site"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5 stroke-[2] lg:h-[18px] lg:w-[18px]" />
          </button>

          <button
            type="button"
            className={`${MOBILE_ICON_BUTTON} lg:hidden`}
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
                  <MobileAboutNavGroup
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
                      ? "bg-white font-semibold text-[#6C63FF]"
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
              className="mt-2 flex items-center justify-center bg-[#6C63FF] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5A52E8]"
              onClick={closeMobile}
            >
              Start Project
            </Link>
          </div>
        </div>
      ) : null}

      <GlobalSearchModal open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
