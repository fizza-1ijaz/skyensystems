"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect, useState } from "react";
import { shouldUseLenis } from "@/lib/performance";

/**
 * Lenis smooth scroll only on capable desktop pointers.
 * Native scroll on mobile / reduced-motion avoids fighting Framer scroll listeners.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [useLenis, setUseLenis] = useState(false);

  useEffect(() => {
    setUseLenis(shouldUseLenis());
  }, []);

  if (!useLenis) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
