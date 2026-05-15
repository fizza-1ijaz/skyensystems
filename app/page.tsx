import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";

const ProblemSection = dynamic(
  () => import("@/components/home/ProblemSection").then((m) => ({ default: m.ProblemSection })),
  { loading: () => <section className="min-h-[40vh]" aria-hidden /> },
);

const ProcessSection = dynamic(
  () => import("@/components/home/ProcessSection").then((m) => ({ default: m.ProcessSection })),
  { loading: () => <section className="min-h-[60vh]" aria-hidden /> },
);

const ProductsShowcase = dynamic(
  () => import("@/components/home/ProductsShowcase").then((m) => ({ default: m.ProductsShowcase })),
  { loading: () => <section className="min-h-[50vh]" aria-hidden /> },
);

const PricingSection = dynamic(
  () => import("@/components/home/PricingSection").then((m) => ({ default: m.PricingSection })),
  { loading: () => <section className="min-h-[40vh]" aria-hidden /> },
);

const FoundingBanner = dynamic(
  () => import("@/components/home/FoundingBanner").then((m) => ({ default: m.FoundingBanner })),
  { loading: () => <section className="min-h-[20vh]" aria-hidden /> },
);

export const metadata: Metadata = {
  title: "Custom Software Development & AI Solutions | Skyen Systems",
  description:
    "Affordable web development, mobile apps, AI solutions, and digital marketing for small businesses. Start your project with Skyen Systems.",
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
      <Hero />
      <ProblemSection />
      <ProcessSection />
      <ProductsShowcase />
      <PricingSection />
      <FoundingBanner />
    </>
  );
}
