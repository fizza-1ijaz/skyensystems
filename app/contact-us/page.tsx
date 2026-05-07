import type { Metadata } from "next";
import ContactUsContent from "@/components/marketing/ContactUsContent";

export const metadata: Metadata = {
  title: "Contact | Skyen Systems",
  description:
    "Contact Skyen Systems for websites, mobile apps, growth services, and custom product development.",
};

export default function ContactUsPage() {
  return <ContactUsContent />;
}
