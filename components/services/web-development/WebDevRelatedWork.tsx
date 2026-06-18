"use client";

import { ServiceRelatedWorkSection } from "@/components/services/sections/ServiceRelatedWorkSection";
import { WEB_DEV_RELATED_WORK } from "@/lib/web-development-service-data";

export function WebDevRelatedWork() {
  return <ServiceRelatedWorkSection data={WEB_DEV_RELATED_WORK} />;
}
