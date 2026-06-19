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
    const scrollToProduct = (id: string) => {
      const target = document.getElementById(id);
      if (!target) return;
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    };

    if (initialProductId) {
      scrollToProduct(`product-${initialProductId}`);
      return;
    }

    const storedTarget = sessionStorage.getItem("products-scroll-target");
    if (storedTarget) {
      sessionStorage.removeItem("products-scroll-target");
      scrollToProduct(`product-${storedTarget}`);
    }
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
