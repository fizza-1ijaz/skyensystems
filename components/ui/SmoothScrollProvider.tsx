"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { shouldUseLenis } from "@/lib/performance";

type LenisRootProps = { children: ReactNode };

/**
 * Lenis smooth scroll only on capable desktop pointers, deferred until idle
 * so it does not compete with initial parse, layout, and LCP.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [LenisRoot, setLenisRoot] = useState<((props: LenisRootProps) => ReactNode) | null>(
    null,
  );

  useEffect(() => {
    if (!shouldUseLenis()) return;

    let cancelled = false;

    const enableLenis = () => {
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
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(enableLenis, { timeout: 3000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }

    const timer = setTimeout(enableLenis, 2000);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  if (!LenisRoot) {
    return <>{children}</>;
  }

  return <LenisRoot>{children}</LenisRoot>;
}
