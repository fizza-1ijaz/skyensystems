"use client";

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

export function DeferredLayoutEnhancements() {
  return (
    <>
      <ConsentAwareAnalytics />
      <ScrollProgress />
      <GlobalCursorGlow />
      <CookieConsent />
    </>
  );
}
