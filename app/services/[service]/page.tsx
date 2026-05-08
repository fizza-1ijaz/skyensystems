import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ServicesPageContent } from "@/components/marketing/ServicesPageContent";

const SERVICE_META: Record<string, { title: string; description: string }> = {
  "web-design-development": {
    title: "Web Design & Development Services | Skyen Systems",
    description:
      "Conversion-focused web design and development services by Skyen Systems, built for speed, SEO readiness, and growth.",
  },
  "mobile-apps": {
    title: "Mobile App Development Services | Skyen Systems",
    description:
      "iOS and Android app development services from Skyen Systems with product-grade UX, scalable architecture, and launch support.",
  },
  "brand-ui-ux-design": {
    title: "UI/UX Design Services | Skyen Systems",
    description:
      "Research-driven UI/UX design services by Skyen Systems for websites, apps, and product experiences that users love.",
  },
  "ai-solutions": {
    title: "AI Solutions Services | Skyen Systems",
    description:
      "Practical AI services by Skyen Systems including chatbots, automation, LLM integration, and tailored AI workflows.",
  },
  "digital-marketing": {
    title: "Digital Marketing Services | Skyen Systems",
    description:
      "SEO and paid campaign services by Skyen Systems focused on technical foundations, customer intent, and sustainable growth.",
  },
  "dedicated-teams": {
    title: "Dedicated Teams Services | Skyen Systems",
    description:
      "Dedicated development and design teams from Skyen Systems with US timezone overlap and flexible scaling.",
  },
  "social-media-management": {
    title: "Digital Marketing Services | Skyen Systems",
    description:
      "Growth-focused digital marketing services from Skyen Systems covering SEO, Google Ads, Meta Ads, and conversion tracking.",
  },
  "web-applications-saas": {
    title: "Web Development Services | Skyen Systems",
    description:
      "Custom web development services by Skyen Systems for websites, web applications, and scalable product platforms.",
  },
};

type ServicePageProps = {
  params: Promise<{ service: string }>;
};

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service } = await params;
  const meta = SERVICE_META[service];
  if (!meta) {
    return {
      title: "Services | Skyen Systems",
      description:
        "Explore web, mobile, social, branding, marketing, and custom product services from Skyen Systems.",
    };
  }
  return {
    ...meta,
    alternates: {
      canonical: `/services/${service}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service } = await params;
  if (!SERVICE_META[service]) {
    notFound();
  }
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: SERVICE_META[service].title.replace(" | Skyen Systems", ""),
    description: SERVICE_META[service].description,
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
      <Suspense fallback={null}>
        <ServicesPageContent initialServiceSlug={service} />
      </Suspense>
    </>
  );
}
