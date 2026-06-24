export type BlogHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function normalizeBlogHtml(html: string): string {
  return html
    .replace(/<p>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")
    .replace(/<li>\s*<p>([\s\S]*?)<\/p>\s*<\/li>/gi, (_match, inner: string) => `<li>${inner.trim()}</li>`)
    .replace(/<h([23])>\s*<strong>([\s\S]*?)<\/strong>\s*<\/h\1>/gi, "<h$1>$2</h$1>");
}

export function prepareBlogArticleContent(html: string): {
  html: string;
  headings: BlogHeading[];
} {
  if (!html.trim()) {
    return { html: "", headings: [] };
  }

  const normalized = normalizeBlogHtml(html);
  const headings: BlogHeading[] = [];
  const usedIds = new Set<string>();

  const processed = normalized.replace(
    /<h([23])(\s[^>]*)?>([\s\S]*?)<\/h\1>/gi,
    (_match, level: string, attrs = "", inner: string) => {
      const text = stripHtml(inner);
      if (!text) return "";

      let id = slugifyHeading(text);
      if (!id) id = `section-${headings.length + 1}`;

      let uniqueId = id;
      let suffix = 2;
      while (usedIds.has(uniqueId)) {
        uniqueId = `${id}-${suffix}`;
        suffix += 1;
      }
      usedIds.add(uniqueId);

      headings.push({
        id: uniqueId,
        text,
        level: Number(level) as 2 | 3,
      });

      const cleanAttrs = attrs.replace(/\s*id=(["'])[^"']*\1/gi, "");
      return `<h${level}${cleanAttrs} id="${uniqueId}">${inner}</h${level}>`;
    },
  );

  return { html: processed, headings };
}

export function estimateReadingTimeFromHtml(html: string): number {
  const text = stripHtml(html);
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.ceil(words / 200));
}
