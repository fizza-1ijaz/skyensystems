import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductsPageContent } from "@/components/marketing/ProductsPageContent";

const PRODUCT_META: Record<string, { title: string; description: string }> = {
  studiely: {
    title: "Studiely | Skyen Systems Products",
    description:
      "Explore Studiely, Skyen Systems' live education product built for iOS, Android, and web.",
  },
  "make-my-lesson": {
    title: "Make My Lesson | Skyen Systems Products",
    description:
      "Discover Make My Lesson, an AI-powered lesson planning product by Skyen Systems.",
  },
  linguatude: {
    title: "Linguatude | Skyen Systems Products",
    description:
      "Learn about Linguatude, Skyen Systems' upcoming exam-focused English learning product.",
  },
};

type ProductPageProps = {
  params: Promise<{ product: string }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { product } = await params;
  const meta = PRODUCT_META[product];
  if (!meta) {
    return {
      title: "Products | Skyen Systems",
      description:
        "Explore Skyen products: Studiely, Make My Lesson, and Linguatude.",
    };
  }
  return meta;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { product } = await params;
  if (!PRODUCT_META[product]) {
    notFound();
  }
  return <ProductsPageContent initialProductId={product} />;
}
