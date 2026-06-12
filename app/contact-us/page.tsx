import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Skyen Systems | Start Your Project",
  description:
    "Contact Skyen Systems for web development, mobile app development, AI automation, UI/UX design, SEO, digital marketing, and dedicated development teams.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return <ContactPage />;
}
