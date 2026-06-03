"use client";

import { useEffect } from "react";
import { ProductFeatureSection } from "@/components/products/sections/ProductFeatureSection";
import { ProductsFinalCta } from "@/components/products/sections/ProductsFinalCta";
import { ProductsHero } from "@/components/products/sections/ProductsHero";
import { ProductsQuoteBand } from "@/components/products/sections/ProductsQuoteBand";
import { FEATURED_PRODUCT_INDEX, PRODUCTS } from "@/lib/products-page-data";

type ProductsPageProps = {
  initialProductId?: string;
};

export function ProductsPage({ initialProductId }: ProductsPageProps) {
  useEffect(() => {
    if (!initialProductId) return;
    const target = document.getElementById(`product-${initialProductId}`);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [initialProductId]);

  return (
    <div className="landing-editorial bg-[#F4F4F2] text-[#141414]">
      <ProductsHero />

      {PRODUCTS.map((product, index) => (
        <ProductFeatureSection
          key={product.id}
          product={product}
          index={index}
          featured={index === FEATURED_PRODUCT_INDEX}
          highlighted={initialProductId === product.id}
        />
      ))}

      <ProductsQuoteBand />
      <ProductsFinalCta />
    </div>
  );
}
