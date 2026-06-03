import type { Metadata } from "next";
import { LocationsPage } from "@/components/about/locations/LocationsPage";

export const metadata: Metadata = {
  title: "Locations | Skyen Systems",
  description:
    "Global delivery network — head office in Bahrain, engineering centre in Lahore, and client operations across the US, UK, and GCC.",
  alternates: {
    canonical: "/about/locations",
  },
};

export default function LocationsRoute() {
  return <LocationsPage />;
}
