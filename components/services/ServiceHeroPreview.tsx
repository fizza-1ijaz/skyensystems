"use client";

import Image from "next/image";
import type { CapabilityVisualId } from "@/components/landing/landing-data";
import { getServicePreviewImage } from "@/lib/service-preview-images";

type ServiceHeroPreviewProps = {
  id: CapabilityVisualId;
};

export function ServiceHeroPreview({ id }: ServiceHeroPreviewProps) {
  const { src, alt } = getServicePreviewImage(id);
  const isLocalAsset = src.startsWith("/images/");

  return (
    <div className="-mt-4 overflow-hidden border border-[#E5E5E3] bg-[#FAFAF8] md:-mt-6 lg:-mt-8">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={900}
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="h-auto w-full object-contain"
        quality={100}
        unoptimized={isLocalAsset}
      />
    </div>
  );
}
