"use client";

import { BookmarkX } from "lucide-react";

export default function EmptyBookmarks() {
  return (
    <section className="rounded-[32px] bg-white p-16 text-center shadow-lg">

      <BookmarkX
        size={70}
        className="mx-auto text-slate-400"
      />

      <h2 className="mt-6 text-3xl font-bold text-slate-900">
        No Bookmarks Yet
      </h2>

      <p className="mt-4 text-slate-500">
        Save your favorite courses and lessons to access them quickly later.
      </p>

    </section>
  );
}