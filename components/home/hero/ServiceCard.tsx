"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ service, index }: { service: any; index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.4], [index % 2 === 0 ? -100 : 100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.4], [index % 2 === 0 ? -10 : 10, 0]);

  const gridPatternIdDesktop = `grid-desktop-svc-${index}`;
  const gridPatternIdMobile = `grid-mobile-svc-${index}`;

  return (
    <motion.div
      ref={cardRef}
      style={{ x, opacity, scale, rotate }}
      className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-4 md:gap-12`}
    >
      {/* The Content Card */}
      <div className="w-full md:w-1/2 group">
        <div
          className={`rounded-[2.5rem] border border-slate-200/60 bg-white/40 p-8 shadow-2xl shadow-slate-200/50 backdrop-blur-3xl transition-all duration-700 md:rounded-[3rem] md:p-10 hover:border-[#6C63FF22] hover:shadow-[#6C63FF11]`}
        >
          <div
            className={`mb-6 flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-gradient-to-br ${service.color} text-[#6C63FF] transition-all duration-700 group-hover:rotate-6 group-hover:scale-110 md:mb-8 md:h-20 md:w-20 md:rounded-[2rem]`}
          >
            <service.icon className="h-8 w-8 md:h-10 md:w-10" />
          </div>
          <h2 className="mb-4 text-3xl font-black tracking-tighter text-slate-900 md:mb-6 md:text-4xl">
            {service.title}
          </h2>
          <p className="mb-6 text-base font-medium leading-relaxed text-slate-600 md:mb-8 md:text-lg">
            {service.desc}
          </p>
          <div className="border-t border-dashed border-slate-200 pt-6 md:pt-8">
            <div className="flex flex-wrap gap-2">
              {service.features.split(" · ").map((f: string) => (
                <span
                  key={f}
                  className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500 md:px-4 md:py-1.5 md:text-[10px]"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop visual */}
      <div className="hidden w-full flex-col items-center justify-center md:flex md:w-1/2">
        <div className="relative group">
          <div className="absolute inset-0 bg-[#6C63FF] opacity-10 blur-[120px] transition-opacity duration-700 group-hover:opacity-20" />

          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <svg className="h-full w-full opacity-10" viewBox="0 0 400 400">
              <defs>
                <pattern id={gridPatternIdDesktop} width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1E3A8A" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${gridPatternIdDesktop})`} />
              <circle cx="10%" cy="10%" r="60" fill="none" stroke="#1E40AF" strokeWidth="1" opacity="0.3" />
              <circle cx="90%" cy="85%" r="40" fill="none" stroke="#6C63FF" strokeWidth="1" opacity="0.2" />
              <polygon
                points="350,50 370,40 390,50 390,70 370,80 350,70"
                fill="none"
                stroke="#1E3A8A"
                strokeWidth="1"
                opacity="0.2"
              />
            </svg>
          </div>

          <div className="relative rounded-3xl border border-slate-200/40 bg-white/10 p-3 backdrop-blur-md transition-all duration-700 hover:rotate-1 hover:scale-105">
            <div className="relative h-72 w-[22rem] overflow-hidden rounded-2xl border border-slate-200/60 shadow-2xl">
              <Image
                src={service.previewImage}
                alt={service.title}
                width={350}
                height={288}
                quality={80}
                priority={index < 2}
                unoptimized={service.previewImage.endsWith(".jfif")}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 -top-6 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#6C63FF] shadow-2xl"
          >
            <service.icon className="h-7 w-7" />
          </motion.div>
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#6C63FF] transition-all duration-300 hover:gap-3"
        >
          <span>See more</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </Link>
      </div>

      {/* Mobile: preview image directly under the card (same scroll target as above) */}
      <div className="relative md:hidden w-full">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-40">
          <svg className="h-full w-full opacity-20" viewBox="0 0 400 400">
            <defs>
              <pattern id={gridPatternIdMobile} width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E3A8A" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${gridPatternIdMobile})`} />
            <circle cx="20%" cy="30%" r="40" fill="none" stroke="#1E40AF" strokeWidth="1" opacity="0.3" />
            <circle cx="80%" cy="70%" r="30" fill="none" stroke="#6C63FF" strokeWidth="1" opacity="0.2" />
            <polygon
              points="300,50 330,35 360,50 360,80 330,95 300,80"
              fill="none"
              stroke="#1E3A8A"
              strokeWidth="1"
              opacity="0.2"
            />
            <path d="M 50,300 Q 150,250 250,350" fill="none" stroke="#1E40AF" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>
        <div className="relative group w-full px-0">
          <div className="absolute inset-0 rounded-2xl bg-[#6C63FF] opacity-15 blur-[60px] transition-opacity duration-700 group-hover:opacity-25" />
          <div className="relative rounded-2xl border border-slate-200/50 bg-white/10 p-2 backdrop-blur-md transition-all duration-700">
            <div className="relative h-48 w-full overflow-hidden rounded-xl border border-slate-200/60 shadow-lg">
              <Image
                src={service.previewImage}
                alt={service.title}
                width={400}
                height={256}
                quality={80}
                priority={index < 2}
                unoptimized={service.previewImage.endsWith(".jfif")}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center md:hidden">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <span>View Service</span>
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}
