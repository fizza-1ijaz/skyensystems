"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  buildStaticSearchIndex,
  searchIndex,
  type SearchIndexItem,
  type SearchResultGroup,
} from "@/lib/search-index";

type GlobalSearchModalProps = {
  open: boolean;
  onClose: () => void;
};

function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebounced(value), delayMs);
    return () => window.clearTimeout(timer);
  }, [value, delayMs]);

  return debounced;
}

export function GlobalSearchModal({ open, onClose }: GlobalSearchModalProps) {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [blogItems, setBlogItems] = useState<SearchIndexItem[]>([]);
  const [blogLoaded, setBlogLoaded] = useState(false);

  const debouncedQuery = useDebouncedValue(query, 250);

  const staticItems = useMemo(() => buildStaticSearchIndex(), []);

  const fullIndex = useMemo(
    () => [...staticItems, ...blogItems],
    [staticItems, blogItems],
  );

  const { groups, flat } = useMemo(
    () => searchIndex(fullIndex, debouncedQuery),
    [fullIndex, debouncedQuery],
  );

  const loadBlogIndex = useCallback(async () => {
    if (blogLoaded) return;
    try {
      const response = await fetch("/api/search-index");
      const data = (await response.json()) as { items?: SearchIndexItem[] };
      setBlogItems(data.items ?? []);
    } catch {
      setBlogItems([]);
    } finally {
      setBlogLoaded(true);
    }
  }, [blogLoaded]);

  useEffect(() => {
    loadBlogIndex();
  }, [loadBlogIndex]);

  useEffect(() => {
    if (!open) return;
    loadBlogIndex();
    setQuery("");
    setActiveIndex(0);
    const timer = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => window.clearTimeout(timer);
  }, [open, loadBlogIndex]);

  useEffect(() => {
    setActiveIndex(0);
  }, [debouncedQuery]);

  useEffect(() => {
    if (!open || flat.length === 0) return;
    const activeEl = panelRef.current?.querySelector(
      `[data-search-index="${activeIndex}"]`,
    );
    activeEl?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open, flat.length]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (flat.length === 0) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % flat.length);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((index) => (index - 1 + flat.length) % flat.length);
      }

      if (event.key === "Enter") {
        event.preventDefault();
        const target = flat[activeIndex];
        if (target) {
          onClose();
          router.push(target.href);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, flat, activeIndex, onClose, router]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const handleSelect = (item: SearchIndexItem) => {
    onClose();
    router.push(item.href);
  };

  let runningIndex = -1;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center px-4 pt-[10vh] md:items-center md:px-6 md:pt-0"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.18 }}
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
        >
          <div
            className="absolute inset-0 bg-[#0F172A]/55 backdrop-blur-[2px]"
            aria-hidden
          />

          <motion.div
            ref={panelRef}
            className="relative flex max-h-[min(88vh,720px)] w-full max-w-[680px] flex-col overflow-hidden border border-[#DADAD8] bg-[#FAFAF8] shadow-[0_24px_64px_-24px_rgba(15,23,42,0.35)] md:max-h-[min(78vh,680px)] max-md:fixed max-md:inset-0 max-md:max-h-none max-md:max-w-none max-md:border-0 max-md:safe-area-top max-md:safe-area-bottom"
            initial={
              prefersReducedMotion ? false : { opacity: 0, scale: 0.98, y: 8 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98, y: 8 }
            }
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-0 z-10 border-b border-[#DADAD8] bg-[#FAFAF8] px-4 py-4 md:px-6">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 shrink-0 text-[#8A8A8A]" strokeWidth={1.75} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products, articles, pages..."
                  className="min-w-0 flex-1 bg-transparent font-heading text-lg font-semibold tracking-tight text-[#141414] outline-none placeholder:text-[#8A8A8A] md:text-xl"
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Search"
                />
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 shrink-0 items-center justify-center text-[#8A8A8A] transition-colors hover:text-[#141414]"
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-2 py-3 md:px-3 md:py-4">
              {!debouncedQuery.trim() ? (
                <p className="px-3 py-8 text-center text-sm text-[#8A8A8A]">
                  Search across products, blog posts, and pages.
                  <span className="mt-2 block text-[10px] uppercase tracking-[0.16em]">
                    <kbd className="rounded border border-[#DADAD8] px-1.5 py-0.5">⌘</kbd>
                    {" + "}
                    <kbd className="rounded border border-[#DADAD8] px-1.5 py-0.5">K</kbd>
                  </span>
                </p>
              ) : null}

              {debouncedQuery.trim() && flat.length === 0 ? (
                <p className="break-words px-3 py-8 text-center text-sm text-[#5C5C5C]">
                  No results for &ldquo;{debouncedQuery}&rdquo;
                </p>
              ) : null}

              {groups.map((group: SearchResultGroup) => (
                <div key={group.type} className="mb-4 last:mb-0">
                  <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8A8A]">
                    {group.label}
                  </p>
                  <ul>
                    {group.items.map((item) => {
                      runningIndex += 1;
                      const itemIndex = runningIndex;
                      const isActive = itemIndex === activeIndex;

                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            data-search-index={itemIndex}
                            onClick={() => handleSelect(item)}
                            onMouseEnter={() => setActiveIndex(itemIndex)}
                            className={`group flex w-full items-center justify-between gap-4 px-3 py-3 text-left transition-colors duration-150 md:py-3.5 ${
                              isActive ? "bg-[rgba(108,99,255,0.08)]" : "hover:bg-[#F4F4F2]"
                            }`}
                          >
                            <div className="min-w-0">
                              <p
                                className={`truncate font-heading text-base font-bold tracking-tight md:text-lg ${
                                  isActive ? "text-[#6C63FF]" : "text-[#141414]"
                                }`}
                              >
                                {item.title}
                              </p>
                              <p className="mt-0.5 truncate text-[11px] font-medium uppercase tracking-[0.12em] text-[#8A8A8A]">
                                {item.subtitle}
                              </p>
                            </div>
                            <ArrowRight
                              className={`h-4 w-4 shrink-0 transition-all duration-150 ${
                                isActive
                                  ? "translate-x-0 text-[#6C63FF] opacity-100"
                                  : "translate-x-1 text-[#8A8A8A] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                              }`}
                            />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {flat.length > 0 ? (
              <div className="hidden border-t border-[#DADAD8] px-6 py-3 text-[10px] uppercase tracking-[0.14em] text-[#8A8A8A] md:flex md:items-center md:justify-between">
                <span>Navigate with ↑ ↓ · Enter to open · Esc to close</span>
                <span>
                  {flat.length} result{flat.length === 1 ? "" : "s"}
                </span>
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
