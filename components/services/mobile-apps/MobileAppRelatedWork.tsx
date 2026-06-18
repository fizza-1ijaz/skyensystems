"use client";

import { ServiceRelatedWorkSection } from "@/components/services/sections/ServiceRelatedWorkSection";
import { MOBILE_APP_RELATED_WORK } from "@/lib/mobile-app-service-data";

export function MobileAppRelatedWork() {
  return <ServiceRelatedWorkSection data={MOBILE_APP_RELATED_WORK} />;
}
