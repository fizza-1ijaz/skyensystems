"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { MAIN_NAV_ITEMS, MAIN_NAV_LINK_MOBILE_CLASS } from "@/lib/main-nav";
import { NavbarDesktopLinks } from "@/components/layout/NavbarDesktopLinks";

const HERO_NAV_LINK_CLASS =
  "group relative whitespace-nowrap text-[13px] font-medium text-[#070B2B] transition-colors hover:text-white xl:text-sm";

const HERO_NAV_LINK_SCROLLED_CLASS =
  "group relative whitespace-nowrap text-[13px] font-medium text-white/75 transition-colors hover:text-white xl:text-sm";

export function Navbar() {
  const pathname = usePathname();
  const isHero = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shellClass = isHero
    ? isScrolled
      ? "border-white/20 bg-[#070B2B]/75 shadow-[0_20px_60px_-20px_rgba(99,102,241,0.45)] backdrop-blur-xl"
      : "border-transparent bg-transparent shadow-none"
    : isScrolled
      ? "border-white/40 bg-white/70 shadow-[0_20px_60px_-26px_rgba(108,99,255,0.6)] backdrop-blur-xl"
      : "border-white/55 bg-white/82 shadow-[0_14px_44px_-28px_rgba(15,23,42,0.45)] backdrop-blur-xl";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 mx-auto mt-4 max-w-6xl px-3 transition-all duration-300 lg:max-w-7xl lg:px-4 ${shellClass} rounded-2xl border py-2.5 ${!isHero || isScrolled ? "backdrop-blur-xl" : ""}`}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-2 md:px-4">
        <Link href="/" className="group flex items-center gap-2.5 justify-self-start">
          <div
            className={`relative overflow-hidden rounded-xl border shadow-md transition-transform group-hover:scale-105 ${
              isHero && !isScrolled ? "border-slate-200/70" : "border-white/30"
            }`}
          >
            <Image
              src="/logo.jpeg"
              alt="Skyen Systems logo"
              width={36}
              height={36}
              className="object-cover"
              priority
            />
          </div>
          <span
            className={`hidden whitespace-nowrap text-sm font-bold tracking-tight sm:inline lg:text-base ${
              isHero ? (isScrolled ? "text-white" : "text-[#070B2B]") : "text-[#0F172A]"
            }`}
          >
            SKYEN{" "}
            <span
              className={
                isHero ? (isScrolled ? "text-cyan-300" : "text-[#6C63FF]") : "text-[#8B8CFF]"
              }
            >
              SYSTEMS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-3 lg:flex xl:gap-6">
          <NavbarDesktopLinks
            linkClassName={
              isHero ? (isScrolled ? HERO_NAV_LINK_SCROLLED_CLASS : HERO_NAV_LINK_CLASS) : undefined
            }
          />
        </nav>

        <motion.div className="flex items-center justify-self-end gap-2">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact-us"
              className={`hidden items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all lg:flex xl:px-6 xl:text-sm ${
                isHero
                  ? "bg-white text-[#070B2B] shadow-[0_0_28px_-6px_rgba(255,255,255,0.5)] hover:bg-white/95"
                  : "bg-[#112B44] text-white shadow-[0_14px_40px_-18px_rgba(17,43,68,0.65)] hover:bg-[#1B3E5E]"
              }`}
            >
              Start Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <button
            type="button"
            className={`p-2 lg:hidden ${
              isHero ? (isScrolled ? "text-white" : "text-[#070B2B]") : "text-slate-800"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </motion.div>
      </div>

      {isMobileMenuOpen ? (
        <div
          className={`overflow-hidden border-t lg:hidden ${
            isHero ? "border-white/15 bg-[#070B2B]/90" : "border-white/40 bg-white/85"
          } backdrop-blur-xl`}
        >
          <div className="flex flex-col gap-4 p-6">
            {MAIN_NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isHero ? "text-lg font-semibold text-white/85 hover:text-white" : MAIN_NAV_LINK_MOBILE_CLASS}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className={`mt-2 flex items-center justify-center gap-2 rounded-full py-3 font-semibold transition-all ${
                isHero ? "bg-white text-[#070B2B]" : "bg-[#112B44] text-white hover:bg-[#1B3E5E]"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Project
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
