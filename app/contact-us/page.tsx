import type { Metadata } from "next";
import ContactUsContent from "@/components/marketing/ContactUsContent";

export const metadata: Metadata = {
  title: "Contact Web Development Team | Skyen Systems",
  description:
    "Contact Skyen Systems for web development, mobile apps, AI solutions, and digital marketing for small businesses.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return <ContactUsContent />;
}
