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
const PRODUCT_SCHEMA: Record<string, { name: string; description: string }> = {
  studiely: {
    name: "Studiely",
    description: "AI study app with flashcards, quizzes, and personalized revision plans.",
  },
  "make-my-lesson": {
    name: "Make My Lesson",
    description: "AI lesson planning product for teachers.",
  },
  linguatude: {
    name: "Linguatude",
    description: "AI-powered language learning platform in development.",
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
  return {
    ...meta,
    alternates: {
      canonical: `/products/${product}`,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { product } = await params;
  if (!PRODUCT_META[product]) {
    notFound();
  }
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_SCHEMA[product].name,
    description: PRODUCT_SCHEMA[product].description,
    brand: {
      "@type": "Organization",
      name: "Skyen Systems",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProductsPageContent initialProductId={product} />
    </>
  );
}
