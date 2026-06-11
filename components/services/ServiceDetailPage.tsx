"use client";

import {
  DETAILED_SERVICES,
  getServiceSlug,
  type DetailedService,
} from "@/lib/services-page-data";
import { AiSolutionsServicePage } from "@/components/services/AiSolutionsServicePage";
import { DedicatedTeamsServicePage } from "@/components/services/DedicatedTeamsServicePage";
import { DigitalMarketingServicePage } from "@/components/services/DigitalMarketingServicePage";
import { UiUxDesignServicePage } from "@/components/services/UiUxDesignServicePage";
import { MobileAppServicePage } from "@/components/services/MobileAppServicePage";
import { WebDevelopmentServicePage } from "@/components/services/WebDevelopmentServicePage";
import { ServiceModuleBlock } from "@/components/services/sections/ServiceModuleBlock";
import { ServicesFinalCta } from "@/components/services/sections/ServicesFinalCta";

type ServiceDetailPageProps = {
  service: DetailedService;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const slug = getServiceSlug(service);

  if (slug === "web-design-development") {
    return <WebDevelopmentServicePage />;
  }

  if (slug === "mobile-apps") {
    return <MobileAppServicePage />;
  }

  if (slug === "ai-solutions") {
    return <AiSolutionsServicePage />;
  }

  if (slug === "brand-ui-ux-design") {
    return <UiUxDesignServicePage />;
  }

  if (slug === "digital-marketing") {
    return <DigitalMarketingServicePage />;
  }

  if (slug === "dedicated-teams") {
    return <DedicatedTeamsServicePage />;
  }

  const index = DETAILED_SERVICES.findIndex((item) => item.slug === service.slug);

  return (
    <div className="landing-editorial bg-[#FAFAF8] text-[#141414]">
      <ServiceModuleBlock service={service} index={index === -1 ? 0 : index} />
      <ServicesFinalCta />
    </div>
  );
}
