"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export type CookiePreference = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

function readAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const raw = localStorage.getItem("cookie-consent");
    if (!raw) return false;
    const parsed = JSON.parse(raw) as CookiePreference;
    return Boolean(parsed.analytics);
  } catch {
    return false;
  }
}

export function ConsentAwareAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(readAnalyticsConsent());

    const onConsentUpdate = (event: Event) => {
      const detail = (event as CustomEvent<CookiePreference>).detail;
      setEnabled(Boolean(detail?.analytics));
    };

    window.addEventListener("cookie-consent-updated", onConsentUpdate);
    return () => window.removeEventListener("cookie-consent-updated", onConsentUpdate);
  }, []);

  if (!gaMeasurementId || !enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('js', new Date());
gtag('config', '${gaMeasurementId}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
