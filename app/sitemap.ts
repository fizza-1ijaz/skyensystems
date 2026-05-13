import type { MetadataRoute } from "next";
import { getBlogSlugsForConfiguredSite } from "@/lib/blogs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skyensystems.com";

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/products",
  "/pricing",
  "/faq",
  "/blog",
  "/contact-us",
  "/privacy-policy",
  "/terms",
  "/terms-of-service",
  "/cookies",
  "/cookies-policy",
  "/refund-policy",
  "/gdpr",
  "/disclaimer",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const baseEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));

  const serviceSlugs = [
    "web-design-development",
    "mobile-apps",
    "brand-ui-ux-design",
    "ai-solutions",
    "digital-marketing",
    "dedicated-teams",
  ];

  const productSlugs = ["studiely", "make-my-lesson", "linguatude"];

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${siteUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${siteUrl}/products/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const slugs = await getBlogSlugsForConfiguredSite();
    blogEntries = slugs.map((item) => ({
      url: `${siteUrl}/blog/${item.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch {
    blogEntries = [];
  }

  return [...baseEntries, ...serviceEntries, ...productEntries, ...blogEntries];
}
