import type { Metadata } from "next";
import { ServicesPage as ServicesPageView } from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Software Engineering & Product Development Services | Skyen Systems",
  description:
    "Strategy, design, engineering, AI, and growth — one accountable team solving complex business and technical problems for US, UK, and GCC clients.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesRoute() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software engineering and product development",
    provider: {
      "@type": "Organization",
      name: "Skyen Systems",
      url: "https://skyensystems.com",
    },
    areaServed: ["US", "UK", "Pakistan", "Bahrain"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesPageView />
    </>
  );
}
