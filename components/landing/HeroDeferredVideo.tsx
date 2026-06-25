"use client";

import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_SRC = "/videos/hero-bg.mp4";

export function HeroDeferredVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const startPlayback = () => {
      video.muted = true;
      void video.play().catch(() => {
        // Autoplay may be blocked until user interaction.
      });
    };

    const loadVideo = () => {
      if (video.src) return;
      video.src = HERO_VIDEO_SRC;
      video.load();
      startPlayback();
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(loadVideo, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(loadVideo, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      onPlaying={() => setVisible(true)}
      className={`h-full w-full object-cover transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
