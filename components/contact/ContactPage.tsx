"use client";

import { ContactEngagements } from "@/components/contact/sections/ContactEngagements";
import { ContactFinalCta } from "@/components/contact/sections/ContactFinalCta";
import { ContactHero } from "@/components/contact/sections/ContactHero";
import { ContactInquiryForm } from "@/components/contact/sections/ContactInquiryForm";
import { ContactProcess } from "@/components/contact/sections/ContactProcess";
import { ContactTrust } from "@/components/contact/sections/ContactTrust";

export function ContactPage() {
  return (
    <div className="landing-editorial bg-[#F4F4F2] text-[#141414]">
      <ContactHero />
      <ContactInquiryForm />
      <ContactEngagements />
      <ContactProcess />
      <ContactTrust />
      <ContactFinalCta />
    </div>
  );
}
