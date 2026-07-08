"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const GlobalCursorGlow = dynamic(
  () =>
    import("@/components/ui/GlobalCursorGlow").then((mod) => ({
      default: mod.GlobalCursorGlow,
    })),
  { ssr: false },
);

const ScrollProgress = dynamic(
  () =>
    import("@/components/ui/ScrollProgress").then((mod) => ({
      default: mod.ScrollProgress,
    })),
  { ssr: false },
);

const CookieConsent = dynamic(
  () =>
    import("@/components/CookieConsent").then((mod) => ({
      default: mod.CookieConsent,
    })),
  { ssr: false },
);

const ConsentAwareAnalytics = dynamic(
  () =>
    import("@/components/ConsentAwareAnalytics").then((mod) => ({
      default: mod.ConsentAwareAnalytics,
    })),
  { ssr: false },
);

function useIdleEnhancements() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(enable, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(enable, 1500);
    return () => clearTimeout(timer);
  }, []);

  return ready;
}

export function DeferredLayoutEnhancements() {
  const ready = useIdleEnhancements();

  return (
    <>
      <ConsentAwareAnalytics />
      {ready ? (
        <>
          <ScrollProgress />
          <GlobalCursorGlow />
          <CookieConsent />
        </>
      ) : null}
    </>
  );
}
