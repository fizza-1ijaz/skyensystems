"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight, Globe, ShieldCheck, Zap, Clock, Terminal, Cpu, Database, Layout } from "lucide-react";
import { ServiceCard } from "./hero/ServiceCard";

const HeroScene = dynamic(() => import("./hero/HeroScene").then((module) => module.HeroScene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 h-full w-full pointer-events-none" />,
});

const rotatingTexts = [
  "Response within 4 business hours, guaranteed",
  "PSEB Registered Software House · Pakistan & Bahrain",
  "Free project consultation — 30 minutes, no obligation",
  "Trusted by 50+ US small businesses"
];

const services = [
    {
        id: "web",
        title: "Web Development",
        slug: "web-design-development",
        desc: "Custom websites, web applications, and e-commerce stores built to convert visitors into customers. Fast, secure, and built to grow with you.",
        features: "Next.js · React · WordPress · Shopify · API Integration",
        icon: Globe,
        color: "from-blue-500/20 to-cyan-500/20",
        previewImage: "/webdevelop.jfif"
    },
    {
        id: "mobile",
        title: "Mobile Apps",
        slug: "mobile-apps",
        desc: "iOS and Android apps that your users will actually use. From MVP to full launch — we handle everything including App Store submission.",
        features: "React Native · Swift · Kotlin · App Store · Play Store",
        icon: Cpu,
        color: "from-violet-500/20 to-purple-500/20",
        previewImage: "/mobapp.jfif"
    },
    {
        id: "uiux",
        title: "UI/UX Design",
        slug: "brand-ui-ux-design",
        desc: "Beautiful, intuitive interfaces that make your product a joy to use. Research-backed design that reduces churn and drives engagement.",
        features: "Figma · Prototyping · User Research · Design Systems",
        icon: Layout,
        color: "from-cyan-500/20 to-blue-500/20",
        previewImage: "/UIUX.png"
    },
    {
        id: "ai",
        title: "AI Solutions",
        slug: "ai-solutions",
        desc: "Practical AI that solves real business problems. Chatbots, automation, intelligent features — without the complexity.",
        features: "LLM Integration · Chatbots · Automation · Custom Models",
        icon: Zap,
        color: "from-purple-500/20 to-indigo-500/20",
        previewImage: "/AI.jfif"
    },
    {
        id: "marketing",
        title: "Digital Marketing",
        slug: "digital-marketing",
        desc: "More of the right customers finding your business. SEO, paid ads, content — all tied to measurable results.",
        features: "SEO · Google Ads · Meta Ads · Content Marketing",
        icon: Database,
        color: "from-blue-500/20 to-violet-500/20",
        previewImage: "/digitalmarketing.jfif"
    },
    {
        id: "teams",
        title: "Dedicated Teams",
        slug: "dedicated-teams",
        desc: "Your own extended team of developers and designers — working exclusively on your projects, in your timezone.",
        features: "Full-time Devs · Project Managers · Designers · Agile",
        icon: Terminal,
        color: "from-indigo-500/20 to-blue-500/20",
        previewImage: "/teams.jfif"
    }
];

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const heroOpacity = useTransform(smoothScroll, [0, 0.25], [1, 0]);
  const heroScale = useTransform(smoothScroll, [0, 0.25], [1, 0.95]);
  const heroY = useTransform(smoothScroll, [0, 0.25], [0, -40]);

  return (
    <section 
      ref={containerRef}
      id="hero-container"
      className="relative min-h-[400vh] w-full"
    >
      {/* Cinematic Background Canvas */}
      <div 
        id="ecosystem-container"
        className="sticky top-0 h-screen w-full overflow-hidden bg-[#F8FAFC] relative md:min-h-[600px]">
        <HeroScene />
        
        {/* Volumetric Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(108,99,255,0.1),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.06),transparent_50%)]" />
          
          {/* Navy Geometric Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large navy blob top-left */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#1E3A8A]/40 to-[#0F172A]/20 rounded-full blur-3xl" />
            
            {/* Navy blob top-right */}
            <div className="absolute -top-20 -right-32 w-80 h-80 bg-gradient-to-bl from-[#1E40AF]/35 to-transparent rounded-full blur-3xl" />
            
            {/* Navy blob bottom-left */}
            <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-gradient-to-tr from-[#0F172A]/35 to-transparent rounded-full blur-3xl" />
            
            {/* Navy blob bottom-right */}
            <div className="absolute -bottom-32 right-0 w-80 h-80 bg-gradient-to-tl from-[#1E3A8A]/30 to-[#1E40AF]/15 rounded-full blur-3xl" />
            
            {/* Center accent blob */}
            <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-b from-[#1E40AF]/25 to-transparent rounded-full blur-3xl -translate-x-1/2" />
          </div>

          {/* Navy Geometric Patterns SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#1E3A8A" strokeWidth="0.5" opacity="0.15" />
              </pattern>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#1E40AF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Grid Pattern */}
            <rect width="1920" height="1080" fill="url(#grid)" />
            
            {/* Diagonal Lines */}
            <line x1="0" y1="0" x2="1920" y2="1080" stroke="url(#lineGrad)" strokeWidth="2" opacity="0.25" />
            <line x1="1920" y1="0" x2="0" y2="1080" stroke="url(#lineGrad)" strokeWidth="2" opacity="0.2" />
            
            {/* Decorative Lines */}
            <line x1="200" y1="0" x2="200" y2="1080" stroke="#1E3A8A" strokeWidth="1" opacity="0.2" />
            <line x1="500" y1="0" x2="500" y2="1080" stroke="#1E40AF" strokeWidth="1" opacity="0.15" />
            <line x1="1200" y1="0" x2="1200" y2="1080" stroke="#1E3A8A" strokeWidth="1" opacity="0.15" />
            <line x1="1600" y1="0" x2="1600" y2="1080" stroke="#1E40AF" strokeWidth="1" opacity="0.2" />
            
            {/* Horizontal Lines */}
            <line x1="0" y1="200" x2="1920" y2="200" stroke="#1E3A8A" strokeWidth="1.5" opacity="0.2" />
            <line x1="0" y1="500" x2="1920" y2="500" stroke="#1E40AF" strokeWidth="1" opacity="0.15" />
            <line x1="0" y1="800" x2="1920" y2="800" stroke="#1E3A8A" strokeWidth="1.5" opacity="0.2" />
            
            {/* Geometric Shapes - Circles */}
            <circle cx="400" cy="300" r="80" fill="none" stroke="#1E40AF" strokeWidth="2" opacity="0.3" />
            <circle cx="1600" cy="400" r="120" fill="none" stroke="#1E3A8A" strokeWidth="1.5" opacity="0.25" />
            <circle cx="960" cy="800" r="100" fill="none" stroke="#1E40AF" strokeWidth="2" opacity="0.2" />
            
            {/* Hexagon-like shapes */}
            <polygon points="200,100 250,75 300,100 300,150 250,175 200,150" fill="none" stroke="#1E3A8A" strokeWidth="1.5" opacity="0.3" />
            <polygon points="1700,700 1750,675 1800,700 1800,750 1750,775 1700,750" fill="none" stroke="#1E40AF" strokeWidth="1.5" opacity="0.25" />
            
            {/* Abstract connecting lines */}
            <path d="M 300,200 Q 600,300 900,250 T 1500,350" fill="none" stroke="#1E40AF" strokeWidth="2" opacity="0.3" />
            <path d="M 100,900 Q 400,700 800,850 T 1800,900" fill="none" stroke="#1E3A8A" strokeWidth="1.5" opacity="0.25" />
          </svg>
          
          <div className="absolute inset-0 opacity-20 noise mix-blend-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex h-full items-center justify-center px-4 pt-20 pb-8 sm:px-6 sm:pt-24 sm:pb-10 md:px-8 md:pt-32 md:pb-14 lg:pt-40">
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="w-full max-w-6xl text-center space-y-2 sm:space-y-3 md:space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 bg-white/40 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[6px] sm:text-[7px] md:text-xs font-bold tracking-[0.15em] text-slate-500 shadow-sm backdrop-blur-xl uppercase"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6C63FF] opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#6C63FF]"></span>
              </span>
              <motion.span
                key={textIndex}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                {rotatingTexts[textIndex]}
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance text-3xl font-black leading-tight tracking-tighter text-slate-900 sm:text-4xl md:text-6xl lg:text-7xl"
            >
              One Team. <br />
              Every Digital Need. <br />
              <span className="bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent">
                Anywhere.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="mx-auto max-w-3xl text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed text-slate-600 px-2 sm:px-0"
            >
              We build websites, mobile apps, AI-powered products, and run the digital marketing that fills them with customers.{" "}
              <span className="text-slate-900 font-bold">Bahrain-incorporated. PSEB-registered. US-market focused.</span> One team that becomes a genuine part of yours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-5"
            >
              <Link
                href="/contact-us"
                className="group relative inline-flex items-center gap-2 sm:gap-3 overflow-hidden rounded-lg sm:rounded-xl bg-slate-900 px-4 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white shadow-lg sm:shadow-xl shadow-slate-300 transition-all hover:bg-slate-800 whitespace-nowrap"
              >
                Start Your Project
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </Link>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-xl border border-slate-200 bg-white/60 px-4 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-700 backdrop-blur-2xl transition-all hover:bg-white hover:border-slate-300 whitespace-nowrap"
              >
                View Our Work
                <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 transition-transform group-hover:translate-y-0.5 group-hover:-translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Spatially Integrated Services */}
      <div className="relative z-20 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-[30vh] py-[20vh]">
                {services.map((service, idx) => (
                    <ServiceCard key={idx} service={service} index={idx} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
