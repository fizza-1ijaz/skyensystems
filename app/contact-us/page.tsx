import type { Metadata } from "next";
import ContactUsContent from "@/components/marketing/ContactUsContent";

export const metadata: Metadata = {
  title: "Contact Skyen Solutions | Get in Touch for EdTech Services",
  description: "Contact us for custom EdTech solutions, LMS, Odoo, mobile app, AI integrations, web development, virtual assistance, digital marketing, social media handling and more.",
  keywords: ["Contact EdTech company", "education software inquiry", "Contact Skyen Solutions"],
};

export default function ContactUsPage() {
  return <ContactUsContent />;
}
