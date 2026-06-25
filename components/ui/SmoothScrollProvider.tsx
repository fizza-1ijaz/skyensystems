"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { shouldUseLenis } from "@/lib/performance";

type LenisRootProps = { children: ReactNode };

/**
 * Lenis smooth scroll only on capable desktop pointers.
 * Native scroll on mobile / reduced-motion avoids fighting Framer scroll listeners.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [LenisRoot, setLenisRoot] = useState<((props: LenisRootProps) => ReactNode) | null>(
    null,
  );

  useEffect(() => {
    if (!shouldUseLenis()) return;

    let cancelled = false;

    void import("lenis/react").then(({ ReactLenis }) => {
      if (cancelled) return;

      function LenisWrapper({ children: lenisChildren }: LenisRootProps) {
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
            {lenisChildren}
          </ReactLenis>
        );
      }

      setLenisRoot(() => LenisWrapper);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!LenisRoot) {
    return <>{children}</>;
  }

  return <LenisRoot>{children}</LenisRoot>;
}
