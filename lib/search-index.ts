import { MAIN_NAV_ITEMS } from "@/lib/main-nav";
import { PRODUCTS } from "@/lib/products-page-data";

export type SearchResultType = "product" | "blog" | "page";

export type SearchIndexItem = {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle: string;
  href: string;
  searchText: string;
};

export type SearchResultGroup = {
  type: SearchResultType;
  label: string;
  items: SearchIndexItem[];
};

export type ScoredSearchItem = SearchIndexItem & { score: number };

const GROUP_LABELS: Record<SearchResultType, string> = {
  product: "Products",
  blog: "Blog posts",
  page: "Pages",
};

const GROUP_ORDER: SearchResultType[] = ["product", "blog", "page"];

function buildProductItems(): SearchIndexItem[] {
  return PRODUCTS.map((product) => ({
    id: `product-${product.id}`,
    type: "product",
    title: product.name,
    subtitle: product.eyebrow,
    href: `/products/${product.id}`,
    searchText: [product.name, product.tagline, product.eyebrow, ...product.paragraphs]
      .join(" ")
      .toLowerCase(),
  }));
}

function buildPageItems(): SearchIndexItem[] {
  const pages: SearchIndexItem[] = [];

  for (const item of MAIN_NAV_ITEMS) {
    pages.push({
      id: `page-${item.href}`,
      type: "page",
      title: item.label,
      subtitle: "Page",
      href: item.href,
      searchText: item.label.toLowerCase(),
    });

    if (item.children) {
      for (const child of item.children) {
        pages.push({
          id: `page-${child.href}`,
          type: "page",
          title: child.label,
          subtitle: `${item.label} · Page`,
          href: child.href,
          searchText: [child.label, child.description ?? ""].join(" ").toLowerCase(),
        });
      }
    }
  }

  const extraPages = [
    {
      href: "/about/locations",
      label: "Locations",
      description: "Global delivery network",
    },
  ] as const;

  for (const child of extraPages) {
    if (!pages.some((page) => page.href === child.href)) {
      pages.push({
        id: `page-${child.href}`,
        type: "page",
        title: child.label,
        subtitle: "About · Page",
        href: child.href,
        searchText: [child.label, child.description].join(" ").toLowerCase(),
      });
    }
  }

  return pages;
}

export function buildStaticSearchIndex(): SearchIndexItem[] {
  return [...buildProductItems(), ...buildPageItems()];
}

export function blogPostToSearchItem(post: {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  keywords: string | null;
  category: { name: string } | null;
}): SearchIndexItem {
  return {
    id: `blog-${post.id}`,
    type: "blog",
    title: post.title,
    subtitle: post.category?.name ?? "Blog",
    href: `/blog/${post.slug}`,
    searchText: [post.title, post.description ?? "", post.keywords ?? "", post.category?.name ?? ""]
      .join(" ")
      .toLowerCase(),
  };
}

function scoreItem(item: SearchIndexItem, query: string): number {
  const q = query.trim().toLowerCase();
  if (!q) return 0;

  const title = item.title.toLowerCase();
  const subtitle = item.subtitle.toLowerCase();
  const text = item.searchText;

  if (title === q) return 100;
  if (title.startsWith(q)) return 85;
  if (title.includes(q)) return 70;

  const titleWords = title.split(/\s+/);
  if (titleWords.some((word) => word.startsWith(q))) return 60;

  if (subtitle.includes(q)) return 45;
  if (text.includes(q)) return 30;

  const queryParts = q.split(/\s+/).filter(Boolean);
  if (queryParts.length > 1 && queryParts.every((part) => text.includes(part))) {
    return 25;
  }

  return 0;
}

export function searchIndex(
  items: SearchIndexItem[],
  query: string,
  limit = 12,
): { groups: SearchResultGroup[]; flat: ScoredSearchItem[] } {
  const trimmed = query.trim();
  if (!trimmed) {
    return { groups: [], flat: [] };
  }

  const scored = items
    .map((item) => ({ ...item, score: scoreItem(item, trimmed) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);

  const groups = GROUP_ORDER.map((type) => ({
    type,
    label: GROUP_LABELS[type],
    items: scored.filter((item) => item.type === type),
  })).filter((group) => group.items.length > 0);

  return { groups, flat: scored };
}
