import type { Metadata } from "next";
import { ProductsPageContent } from "@/components/marketing/ProductsPageContent";

export const metadata: Metadata = {
  title: "Products | Skyen Systems",
  description: "Explore Skyen products: Studiely, Make My Lesson, and Linguatude.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "Product", name: "Studiely" },
      { "@type": "Product", name: "Make My Lesson" },
      { "@type": "Product", name: "Linguatude" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductsPageContent />
    </>
  );
}
