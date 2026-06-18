"use client";

import { ServiceRelatedWorkSection } from "@/components/services/sections/ServiceRelatedWorkSection";
import { AI_SOLUTIONS_RELATED_WORK } from "@/lib/ai-solutions-service-data";

export function AiSolutionsRelatedWork() {
  return <ServiceRelatedWorkSection data={AI_SOLUTIONS_RELATED_WORK} />;
}
