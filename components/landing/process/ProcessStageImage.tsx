import Image from "next/image";
import type { ProcessStage } from "@/components/landing/process/types";
import { SITE_IMAGE_QUALITY, shouldBypassImageOptimization } from "@/lib/site-image";

/** Local roadmap assets under /roadmap/ and /images/. */
const LOCAL_ROADMAP_PREFIXES = ["/roadmap/", "/images/"];

type ProcessStageImageProps = {
  stage: ProcessStage;
  className?: string;
  sizes: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
};

export function ProcessStageImage({
  stage,
  className = "object-cover",
  sizes,
  priority,
  loading,
}: ProcessStageImageProps) {
  const rotation = stage.imageRotation ?? 0;
  const isLocalAsset = LOCAL_ROADMAP_PREFIXES.some((prefix) => stage.image.startsWith(prefix));
  const imageProps = {
    src: stage.image,
    alt: stage.imageAlt,
    className,
    sizes,
    priority,
    loading,
    quality: isLocalAsset ? SITE_IMAGE_QUALITY.content : SITE_IMAGE_QUALITY.hero,
    unoptimized: shouldBypassImageOptimization(stage.image),
  } as const;

  if (rotation !== 0) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[142%] w-[142%]"
          style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
        >
          <Image {...imageProps} fill />
        </div>
      </div>
    );
  }

  return <Image {...imageProps} fill />;
}
