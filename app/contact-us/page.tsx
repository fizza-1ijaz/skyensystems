import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Start a Project with Skyen Systems",
  description:
    "Reach Skyen Systems to discuss SaaS platforms, enterprise software, AI solutions, and custom product development. Bahrain head office · Pakistan delivery centre.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return <ContactPage />;
}
