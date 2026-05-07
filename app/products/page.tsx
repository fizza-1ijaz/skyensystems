import type { Metadata } from "next";
import { ProductsPageContent } from "@/components/marketing/ProductsPageContent";

export const metadata: Metadata = {
  title: "Products | Skyen Systems",
  description: "Explore Skyen products: Studiely, Make My Lesson, and Linguatude.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
