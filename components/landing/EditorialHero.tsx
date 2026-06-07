"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/landing/Reveal";

const HERO_VIDEO_SRC = "/videos/hero-bg.mp4";
const DESKTOP_MEDIA = "(min-width: 768px)";

export function EditorialHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!window.matchMedia(DESKTOP_MEDIA).matches) {
      video.pause();
      return;
    }

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

    const desktopMq = window.matchMedia(DESKTOP_MEDIA);
    const onViewportChange = () => startPlayback();
    desktopMq.addEventListener("change", onViewportChange);
    return () => desktopMq.removeEventListener("change", onViewportChange);
  }, []);

  return (
    <section className="relative -mt-[var(--site-nav-height)] min-h-[calc(100svh+var(--site-nav-height)-1in)] overflow-hidden bg-[#0B1220] md:h-[calc(100svh+var(--site-nav-height))] md:min-h-0">
      <div className="absolute inset-0" aria-hidden>
        {/* Mobile — static backdrop, no video */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0B1220] to-[#070B14] md:hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(49,195,195,0.12),transparent_55%)] md:hidden" />

        {/* Desktop — video background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src={HERO_VIDEO_SRC}
          className="hidden h-full w-full object-cover md:block"
          onLoadedData={startPlayback}
          onCanPlay={startPlayback}
        />
        <div className="absolute inset-0 hidden bg-[#0B1220]/62 md:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0B1220]/88 via-[#0B1220]/45 to-[#0B1220]/20 md:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-[#0B1220]/75 via-transparent to-[#0B1220]/35 md:block" />
      </div>

      <div className="editorial-hero-content pointer-events-none relative z-10 flex min-h-[calc(100svh+var(--site-nav-height)-1in)] flex-col md:absolute md:inset-0 md:min-h-0">
        <div className="pointer-events-auto relative flex flex-1 flex-col items-center gap-10 px-6 pb-12 sm:px-8 md:h-full md:w-full md:items-stretch md:justify-start md:gap-0 md:px-12 md:pb-20 md:pt-52">
          <Reveal className="w-full shrink-0 pt-[calc(var(--site-nav-height)+0.5in)] text-center md:-mt-5 md:mb-4 md:pt-0">
            <p className="editorial-hero-eyebrow font-semibold uppercase text-white/65">
              Software house · Bahrain & Pakistan
            </p>
          </Reveal>

          <div className="-mt-[2in] flex w-full flex-col items-center gap-10 md:mt-0 md:contents">
            <div className="w-full min-h-[24vh] shrink-0 md:hidden" aria-hidden />
            <div className="w-full max-w-4xl shrink-0 pl-4 sm:pl-6 md:max-w-4xl md:pl-12 lg:pl-16">
              <Reveal delay={0.06} className="shrink-0">
                <h1 className="editorial-hero-headline text-left font-heading font-bold text-white">
                  We engineer
                  <br />
                  digital <span className="text-[#31C3C3]">products</span>
                  <br />
                  that hold up.
                </h1>
              </Reveal>

              <Reveal delay={0.12} className="mt-10 w-full md:mt-6">
                <p className="editorial-hero-body w-full max-w-lg text-justify text-white/82 md:max-w-2xl md:text-left">
                  Skyen Systems is a PSEB-registered software company building websites, apps, and
                  AI systems for businesses that need one accountable team — not seven vendors.
                </p>
              </Reveal>
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
              aria-label="Discuss your project with Skyen Systems"
            >
              <span className="editorial-hero-cta-label max-w-[9rem] shrink-0 px-4 font-semibold text-white">
                Let&apos;s Discuss Your Idea
              </span>
            </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
