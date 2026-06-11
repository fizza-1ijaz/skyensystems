"use client";

import { DedicatedTeamsCollaborationStack } from "@/components/services/dedicated-teams/DedicatedTeamsCollaborationStack";
import { DedicatedTeamsEngagementModels } from "@/components/services/dedicated-teams/DedicatedTeamsEngagementModels";
import { DedicatedTeamsFaqSection } from "@/components/services/dedicated-teams/DedicatedTeamsFaqSection";
import { DedicatedTeamsFinalCta } from "@/components/services/dedicated-teams/DedicatedTeamsFinalCta";
import { DedicatedTeamsHero } from "@/components/services/dedicated-teams/DedicatedTeamsHero";
import { DedicatedTeamsProblemSolution } from "@/components/services/dedicated-teams/DedicatedTeamsProblemSolution";
import { DedicatedTeamsProcessSection } from "@/components/services/dedicated-teams/DedicatedTeamsProcessSection";
import { DedicatedTeamsRelatedWork } from "@/components/services/dedicated-teams/DedicatedTeamsRelatedWork";
import { DedicatedTeamsRoles } from "@/components/services/dedicated-teams/DedicatedTeamsRoles";
import { DedicatedTeamsServiceOverview } from "@/components/services/dedicated-teams/DedicatedTeamsServiceOverview";
import { DedicatedTeamsTrustStrip } from "@/components/services/dedicated-teams/DedicatedTeamsTrustStrip";
import { DedicatedTeamsUseCases } from "@/components/services/dedicated-teams/DedicatedTeamsUseCases";
import { DedicatedTeamsWhyChoose } from "@/components/services/dedicated-teams/DedicatedTeamsWhyChoose";

export function DedicatedTeamsServicePage() {
  return (
    <div className="landing-editorial bg-[#FAFAF8] text-[#141414]">
      <DedicatedTeamsHero />
      <DedicatedTeamsTrustStrip />
      <DedicatedTeamsServiceOverview />
      <DedicatedTeamsRoles />
      <DedicatedTeamsEngagementModels />
      <DedicatedTeamsProblemSolution />
      <DedicatedTeamsWhyChoose />
      <DedicatedTeamsProcessSection />
      <DedicatedTeamsCollaborationStack />
      <DedicatedTeamsUseCases />
      <DedicatedTeamsRelatedWork />
      <DedicatedTeamsFaqSection />
      <DedicatedTeamsFinalCta />
    </div>
  );
}
