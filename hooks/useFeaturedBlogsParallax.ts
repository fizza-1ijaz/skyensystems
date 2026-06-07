"use client";

import { type RefObject } from "react";
import {
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { FEATURED_BLOGS_MOTION } from "@/components/home/featured-blogs-constants";

export type FeaturedBlogsParallax = {
  featuredY: MotionValue<number>;
  featuredRotate: MotionValue<number>;
  topRightY: MotionValue<number>;
  bottomRightY: MotionValue<number>;
};

/**
 * Scroll-linked motion values for soft card sway.
 * Springs smooth raw scroll progress — avoids janky transform updates.
 */
export function useFeaturedBlogsParallax(
  sectionRef: RefObject<HTMLElement | null>,
): FeaturedBlogsParallax | null {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const spring = FEATURED_BLOGS_MOTION.parallax.spring;

  const featuredY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [14, 0, -15]),
    spring,
  );
  const featuredRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [-1, 1]),
    spring,
  );
  const topRightY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -10]),
    spring,
  );
  const bottomRightY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -15]),
    spring,
  );

  if (reduceMotion) return null;

  return { featuredY, featuredRotate, topRightY, bottomRightY };
}
