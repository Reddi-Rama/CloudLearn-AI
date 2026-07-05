"use client";

import { BookmarkX } from "lucide-react";
import Link from "next/link";

export default function EmptyBookmarks() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-sky-200 bg-white/80 p-16 text-center">

      <BookmarkX
        size={70}
        className="text-sky-400"
      />

      <h2 className="mt-6 text-3xl font-bold">

        No Bookmarks Yet

      </h2>

      <p className="mt-4 max-w-lg text-slate-600">

        Save your favorite courses and lessons to access them quickly anytime.

      </p>

      <Link
        href="/courses"
        className="mt-8 rounded-full bg-sky-600 px-8 py-3 font-semibold text-white transition hover:bg-sky-700"
      >
        Explore Courses
      </Link>

    </div>
  );
}