"use client";

import { ServiceRelatedWorkSection } from "@/components/services/sections/ServiceRelatedWorkSection";
import { DEDICATED_TEAMS_RELATED_WORK } from "@/lib/dedicated-teams-service-data";

export function DedicatedTeamsRelatedWork() {
  return <ServiceRelatedWorkSection data={DEDICATED_TEAMS_RELATED_WORK} />;
}
