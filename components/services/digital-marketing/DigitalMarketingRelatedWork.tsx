"use client";

import { ServiceRelatedWorkSection } from "@/components/services/sections/ServiceRelatedWorkSection";
import { DIGITAL_MARKETING_RELATED_WORK } from "@/lib/digital-marketing-service-data";

export function DigitalMarketingRelatedWork() {
  return <ServiceRelatedWorkSection data={DIGITAL_MARKETING_RELATED_WORK} />;
}
