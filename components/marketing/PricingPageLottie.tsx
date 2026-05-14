"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

type PricingPageLottieProps = {
  animationData: object;
  className?: string;
};

/**
 * lottie-react output differs between SSR and the browser, so we render it only after mount.
 * Uses a static import (not next/dynamic) to avoid Turbopack "module factory is not available" errors.
 */
export function PricingPageLottie({ animationData, className }: PricingPageLottieProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setReady(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (!ready) {
    return <div className={className ?? "h-full w-full"} aria-hidden />;
  }

  return <Lottie animationData={animationData} loop className={className} />;
}
