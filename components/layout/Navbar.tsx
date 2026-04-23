"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact-us" },
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
          ? "py-3 glass shadow-lg shadow-blue-500/5 mt-2 mx-4 rounded-2xl border border-white/20" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative overflow-hidden rounded-xl border border-blue-200/50 shadow-md transition-transform group-hover:scale-105">
            <Image
              src="/logo.jpeg"
              alt="Skyen Systems logo"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-[#1b2151]">
            Skyen<span className="text-blue-600">Systems</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-[#3a467a] transition-colors hover:text-blue-600 group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/services"
            className="hidden items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 md:flex"
          >
            Start Project
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="p-2 md:hidden text-[#1b2151]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden bg-white/95 backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col gap-4 p-6 border-t border-blue-100">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg font-semibold text-[#3a467a]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/services"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Start Project
          </Link>
        </div>
      </motion.div>
    </header>
  );
}

