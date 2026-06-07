import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getServiceBySlug, SERVICE_PAGE_META } from "@/lib/services-page-data";

type ServicePageProps = {
  params: Promise<{ service: string }>;
};

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service } = await params;
  const meta = SERVICE_PAGE_META[service];
  if (!meta) {
    return {
      title: "Services | Skyen Systems",
      description:
        "Explore web, mobile, design, AI, marketing, and dedicated team services from Skyen Systems.",
    };
  }
  return {
    ...meta,
    alternates: {
      canonical: `/services/${service}`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(SERVICE_PAGE_META).map((service) => ({ service }));
}

export default async function ServiceDetailRoute({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || !SERVICE_PAGE_META[slug]) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
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
      <ServiceDetailPage service={service} />
    </>
  );
}
