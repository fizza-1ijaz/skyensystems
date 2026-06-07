"use client";

import { DETAILED_SERVICES, type DetailedService } from "@/lib/services-page-data";
import { ServiceModuleBlock } from "@/components/services/sections/ServiceModuleBlock";
import { ServicesFinalCta } from "@/components/services/sections/ServicesFinalCta";

type ServiceDetailPageProps = {
  service: DetailedService;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const index = DETAILED_SERVICES.findIndex((item) => item.slug === service.slug);

  return (
    <div className="landing-editorial bg-[#FAFAF8] text-[#141414]">
      <ServiceModuleBlock service={service} index={index === -1 ? 0 : index} />
      <ServicesFinalCta />
    </div>
  );
}
