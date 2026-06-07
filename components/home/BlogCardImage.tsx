"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FEATURED_BLOGS_MOTION } from "@/components/home/featured-blogs-constants";

const { hover } = FEATURED_BLOGS_MOTION;

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: hover.imageScaleCompact,
    transition: { duration: hover.imageDuration, ease: hover.imageEase },
  },
};

type BlogCardImageProps = {
  src: string | null;
  sizes: string;
  priority?: boolean;
  featured?: boolean;
};

export function BlogCardImage({
  src,
  sizes,
  priority = false,
  featured = false,
}: BlogCardImageProps) {
  const variants = featured
    ? {
        rest: { scale: 1 },
        hover: {
          scale: hover.imageScale,
          transition: { duration: hover.imageDuration, ease: hover.imageEase },
        },
      }
    : imageVariants;

  return (
    <motion.div
      className="absolute inset-0 origin-center will-change-transform"
      variants={variants}
    >
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-cover"
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1A1A1A] ${
            featured ? "to-brand-cyan/30" : "to-brand-cyan/25"
          }`}
          aria-hidden
        />
      )}
    </motion.div>
  );
}
