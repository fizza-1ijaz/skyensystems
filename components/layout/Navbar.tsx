"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "mx-3 mt-3 rounded-2xl border border-white/40 bg-white/70 py-3 shadow-[0_20px_60px_-26px_rgba(108,99,255,0.6)] backdrop-blur-xl"
          : "mx-3 mt-3 rounded-2xl border border-white/55 bg-white/82 py-3 shadow-[0_14px_44px_-28px_rgba(15,23,42,0.45)] backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-6 lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative overflow-hidden rounded-xl border border-white/50 shadow-md transition-transform group-hover:scale-105">
            <Image
              src="/logo.jpeg"
              alt="Skyen Systems logo"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <span className="whitespace-nowrap text-base font-bold tracking-tight text-[#0F172A] lg:text-lg">
            SKYEN <span className="text-[#8B8CFF]">SYSTEMS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative whitespace-nowrap text-[13px] font-medium text-slate-700 transition-colors hover:text-[#0F172A] xl:text-sm"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#6C63FF] to-[#1E3A8A] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
            href="/services"
            className="hidden items-center gap-2 whitespace-nowrap rounded-xl bg-[#112B44] px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_14px_40px_-18px_rgba(17,43,68,0.65)] transition-colors hover:bg-[#1B3E5E] lg:flex xl:px-6 xl:text-sm"
          >
            Start Project
            <ArrowRight className="h-4 w-4" />
          </Link>
          </motion.div>

          <button
            className="p-2 text-slate-800 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="overflow-hidden border-t border-white/40 bg-white/85 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-semibold text-slate-700 transition-all duration-300 ease-in-out hover:text-[#0F172A]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/services"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#112B44] py-3 text-white transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#1B3E5E]"
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

