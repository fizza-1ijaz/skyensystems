import Image from "next/image";
import type { ProcessStage } from "@/components/landing/process/types";

/** Local roadmap assets are served at full resolution to avoid upscaling blur. */
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

  if (rotation !== 0) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[142%] w-[142%]"
          style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
        >
          <Image
            src={stage.image}
            alt={stage.imageAlt}
            fill
            className={className}
            sizes={sizes}
            priority={priority}
            loading={loading}
            quality={100}
            unoptimized={isLocalAsset}
          />
        </div>
      </div>
    );
  }

  return (
    <Image
      src={stage.image}
      alt={stage.imageAlt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      loading={loading}
      quality={100}
      unoptimized={isLocalAsset}
    />
  );
}
