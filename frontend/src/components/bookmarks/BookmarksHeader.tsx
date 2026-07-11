"use client";

import { Bookmark } from "lucide-react";

export default function BookmarksHeader() {
  return (
    <section className="pt-28 pb-10">

      <div className="container-custom text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-100">

          <Bookmark
            size={40}
            className="text-sky-600"
          />

        </div>

        <h1 className="mt-6 text-5xl font-bold">
          My Bookmarks
        </h1>

        <p className="mt-4 text-slate-600">
          Quickly access your saved courses and lessons.
        </p>

      </div>

    </section>
  );
}