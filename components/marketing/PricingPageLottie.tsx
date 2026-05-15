"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { useReducedMotion } from "framer-motion";

type PricingPageLottieProps = {
  animationData: object;
  className?: string;
  loop?: boolean;
};

/**
 * Mount-gated Lottie that pauses when offscreen and respects reduced motion.
 */
export function PricingPageLottie({
  animationData,
  className,
  loop = true,
}: PricingPageLottieProps) {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!ready || reduceMotion) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lottieRef.current?.play();
        } else {
          lottieRef.current?.pause();
        }
      },
      { rootMargin: "80px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ready, reduceMotion]);

  if (reduceMotion) {
    return <div className={className ?? "h-full w-full"} aria-hidden />;
  }

  if (!ready) {
    return <div className={className ?? "h-full w-full"} aria-hidden />;
  }

  return (
    <div ref={containerRef} className={className ?? "h-full w-full"}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={false}
        className="h-full w-full"
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      />
    </div>
  );
}
