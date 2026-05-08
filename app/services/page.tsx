import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/marketing/ServicesPageContent";

export const metadata: Metadata = {
  title: "Web Development Services for Small Business | Skyen Systems",
  description:
    "Every digital service your business needs: web development, mobile apps, UI/UX, AI solutions, digital marketing, and dedicated teams.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital product and growth services for small businesses",
    provider: {
      "@type": "Organization",
      name: "Skyen Systems",
      url: "https://skyensystems.com",
    },
    areaServed: "US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesPageContent />
    </>
  );
}


