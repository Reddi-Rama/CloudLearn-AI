"use client";

import React, { useEffect, useMemo, useState } from "react";

interface VisualItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  pageUrl: string;
  artist?: string;
  license?: string;
}

interface Props {
  query: string;
  compact?: boolean;
}

function getSearchQuery(value: string) {
  return value
    .replace(/^Lesson\s+\d+\s*/i, "")
    .replace(/^#+\s*/, "")
    .replace(/\b(complete|introduction to|introduction|workflow)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 90);
}

export default function AIMLRealtimeVisual({ query, compact = false }: Props) {
  const [items, setItems] = useState<VisualItem[]>([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  const searchQuery = useMemo(() => getSearchQuery(query), [query]);

  useEffect(() => {
    if (!searchQuery) return;

    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/lesson-images?q=${encodeURIComponent(searchQuery)}`,
          { signal: controller.signal },
        );

        if (!response.ok) return;

        const data = (await response.json()) as { images?: VisualItem[] };
        setItems(data.images || []);
        setActive(0);
      } catch {
        // A visual is enhancement-only. Never break the lesson if search fails.
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();

    return () => controller.abort();
  }, [searchQuery]);

  if (loading || !items.length) return null;

  const item = items[active];

  return (
    <figure
      className={
        compact
          ? "my-6 overflow-hidden rounded-2xl border border-sky-500/20 bg-slate-950/70"
          : "my-7 overflow-hidden rounded-3xl border border-sky-500/20 bg-slate-950/70 shadow-xl shadow-black/20"
      }
    >
      <a
        href={item.pageUrl}
        target="_blank"
        rel="noreferrer"
        className="group block"
      >
        <div className={compact ? "aspect-[16/7] overflow-hidden" : "aspect-[16/8] overflow-hidden"}>
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </a>

      <figcaption className="flex flex-col gap-3 border-t border-slate-800 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-200">
            {item.title}
          </p>
          {item.description && (
            <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
              {item.description}
            </p>
          )}
          {(item.artist || item.license) && (
            <p className="mt-1 text-[11px] leading-4 text-slate-600">
              {item.artist ? `Creator: ${item.artist}` : ""}
              {item.artist && item.license ? " · " : ""}
              {item.license || ""}
            </p>
          )}
        </div>

        <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-400">
          Wikimedia Commons
        </span>
      </figcaption>

      {items.length > 1 && (
        <div className="flex items-center gap-2 border-t border-slate-800 px-4 py-2.5">
          {items.map((candidate, index) => (
            <button
              key={candidate.id}
              type="button"
              aria-label={`Show visual ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-1.5 flex-1 rounded-full transition ${
                index === active ? "bg-sky-400" : "bg-slate-700 hover:bg-slate-600"
              }`}
            />
          ))}
        </div>
      )}
    </figure>
  );
}
