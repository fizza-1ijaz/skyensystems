import Image from "next/image";
import type { CapabilityVisualId } from "@/components/landing/landing-data";
import { getServicePreviewImage } from "@/lib/service-preview-images";
import { SITE_IMAGE_QUALITY, shouldBypassImageOptimization } from "@/lib/site-image";

type CapabilityPreviewProps = {
  id: CapabilityVisualId;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function CapabilityPreview({
  id,
  className = "",
  sizes = "(max-width: 639px) 100vw, 300px",
  priority = false,
}: CapabilityPreviewProps) {
  const { src, alt } = getServicePreviewImage(id);

  return (
    <div className={`relative overflow-hidden bg-[#0F172A] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        quality={SITE_IMAGE_QUALITY.thumb}
        unoptimized={shouldBypassImageOptimization(src)}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141414]/25 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
    </div>
  );
}
