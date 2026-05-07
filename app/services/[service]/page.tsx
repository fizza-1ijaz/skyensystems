import type { Metadata } from "next";
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
  "social-media-management": {
    title: "Social Media Management Services | Skyen Systems",
    description:
      "Brand-led social media management services by Skyen Systems with strategy, design, and measurable monthly reporting.",
  },
  "digital-marketing": {
    title: "Digital Marketing Services | Skyen Systems",
    description:
      "SEO and paid campaign services by Skyen Systems focused on technical foundations, customer intent, and sustainable growth.",
  },
  "brand-ui-ux-design": {
    title: "Brand & UI/UX Design Services | Skyen Systems",
    description:
      "Brand identity and UI/UX design services by Skyen Systems to create consistent digital experiences across web, app, and social.",
  },
  "web-applications-saas": {
    title: "Web Applications & SaaS Services | Skyen Systems",
    description:
      "Custom web app and SaaS development services by Skyen Systems for client portals, internal tools, and scalable product MVPs.",
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
  return meta;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service } = await params;
  if (!SERVICE_META[service]) {
    notFound();
  }
  return <ServicesPageContent initialServiceSlug={service} />;
}
