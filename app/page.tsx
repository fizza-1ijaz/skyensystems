import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";

export const metadata: Metadata = {
  title: "Custom Software Development & AI Solutions | Skyen Systems",
  description:
    "PSEB-registered software house delivering web, mobile, and AI products for US, UK, and GCC businesses — one accountable engineering team.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Skyen Systems",
    url: "https://skyensystems.com",
    logo: "https://skyensystems.com/logo-png.png",
    email: "info@skyensystem.com",
    areaServed: ["US", "Pakistan", "Bahrain"],
    sameAs: [
      "https://apps.apple.com/us/app/studiely-your-daily-study-app/id6758246110",
      "https://play.google.com/store/apps/details?id=com.skyensolutions.eduplayce.eduplayce",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <LandingPage />
    </>
  );
}
