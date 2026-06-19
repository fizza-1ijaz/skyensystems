import Image from "next/image";
import {
  SITE_IMAGE_QUALITY,
  shouldBypassImageOptimization,
} from "@/lib/site-image";

type OptimizedPhotoProps = {
  src: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  className?: string;
};

/** Fill-mode photo with lazy loading and WebP/AVIF delivery via next/image. */
export function OptimizedPhoto({
  src,
  alt = "",
  sizes = "100vw",
  priority = false,
  quality = SITE_IMAGE_QUALITY.content,
  className = "object-cover",
}: OptimizedPhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={quality}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      unoptimized={shouldBypassImageOptimization(src)}
      className={className}
    />
  );
}
