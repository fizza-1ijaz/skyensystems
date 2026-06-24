"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/landing/Reveal";

const HERO_VIDEO_SRC = "/videos/hero-bg.mp4";
const HERO_VIDEO_POSTER = "/images/Team.png";

export function EditorialHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    video.muted = true;
    void video.play().catch(() => {
      // Autoplay may be blocked until user interaction.
    });
  };

  useEffect(() => {
    startPlayback();
  }, []);

  return (
    <section className="relative -mt-[var(--site-nav-height)] min-h-[calc(100svh+var(--site-nav-height)-1in)] overflow-hidden bg-[#0B1220] md:h-[calc(100svh+var(--site-nav-height))] md:min-h-0">
      <div className="absolute inset-0" aria-hidden>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_VIDEO_POSTER}
          src={HERO_VIDEO_SRC}
          className="h-full w-full object-cover"
          onLoadedData={startPlayback}
          onCanPlay={startPlayback}
        />
        <div className="absolute inset-0 bg-[#0B1220]/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/88 via-[#0B1220]/45 to-[#0B1220]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/75 via-transparent to-[#0B1220]/35" />
      </div>

      <div className="editorial-hero-content pointer-events-none relative z-10 flex min-h-[calc(100svh+var(--site-nav-height)-1in)] flex-col md:absolute md:inset-0 md:min-h-0">
        <Reveal className="pointer-events-auto w-full shrink-0 pt-[calc(var(--site-nav-height)+0.5in)] text-center md:absolute md:inset-x-0 md:top-[calc(var(--site-nav-height)+1in)] md:z-20 md:pt-0">
          <p className="editorial-hero-eyebrow font-semibold uppercase text-white/65">
            Software house · Bahrain & Pakistan
          </p>
        </Reveal>

        <div className="pointer-events-auto relative flex flex-1 flex-col items-center gap-10 px-6 pb-12 sm:px-8 md:h-full md:w-full md:justify-start md:gap-0 md:px-12 md:pb-20 md:pt-52">
          <div className="-mt-[2in] flex w-full flex-col items-center gap-10 md:mt-0 md:w-full">
            <div className="w-full min-h-[24vh] shrink-0 md:hidden" aria-hidden />

            <div className="flex w-full justify-center md:px-6">
              <div className="w-full max-w-4xl shrink-0 px-4 text-center sm:px-6 md:px-0">
                <Reveal delay={0.06} className="shrink-0">
                  <h1 className="editorial-hero-headline text-left font-heading font-bold text-white">
                    Custom Software Development &amp;
                    <br />
                    <span className="text-[#31C3C3]">AI Solutions</span> for Australian Businesses
                  </h1>
                </Reveal>

                <Reveal delay={0.12} className="mt-10 w-full md:mt-6">
                  <p className="editorial-hero-body mx-auto w-full max-w-lg !text-center text-white/82 md:max-w-2xl">
                    Skyen Systems helps Australian and US businesses build custom websites, mobile
                    apps, AI automation systems, SaaS platforms, UI/UX designs, and digital growth
                    solutions with one accountable remote team.
                  </p>
                </Reveal>
              </div>
            </div>

            <motion.div
              className="pointer-events-auto mt-8 shrink-0 self-end md:absolute md:bottom-8 md:right-12 md:mt-0 md:self-auto"
              initial={{ opacity: 0, rotate: 0, y: 0 }}
              animate={{
                opacity: 1,
                rotate: [0, 3, 0, -3, 0],
                y: [0, -6, 0, -4, 0],
              }}
              transition={{
                opacity: { delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                rotate: { delay: 0.9, duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                y: { delay: 0.9, duration: 5.5, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{
                rotate: [0, -6, 6, -4, 4, -2, 2, 0],
                y: [0, -2, 2, 0],
                transition: { duration: 0.55, ease: "easeInOut" },
              }}
              whileTap={{
                rotate: [0, -10, 10, -7, 7, 0],
                scale: 0.94,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
            >
              <Link
                href="/contact-us"
                className="editorial-hero-cta group relative flex items-center justify-center rounded-full bg-[#31C3C3] text-center shadow-[0_24px_48px_-16px_rgba(49,195,195,0.65)]"
                aria-label="Book a Free Consultation With Skyen Systems"
              >
                <span className="editorial-hero-cta-label max-w-[10.5rem] shrink-0 px-3 font-semibold text-white">
                  Book a Free Consultation
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
