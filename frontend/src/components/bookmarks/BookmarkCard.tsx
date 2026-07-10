"use client";

import { Bookmark, ArrowRight } from "lucide-react";

interface BookmarkCardProps {
  title: string;
  category: string;
  progress: number;
}

export default function BookmarkCard({
  title,
  category,
  progress,
}: BookmarkCardProps) {
  return (
    <div className="rounded-[30px] bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <Bookmark className="text-sky-600" />

        <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
          {category}
        </span>

      </div>

      <h2 className="mt-5 text-2xl font-bold">
        {title}
      </h2>

      <div className="mt-6">

        <div className="flex justify-between text-sm">

          <span>Progress</span>

          <span>{progress}%</span>

        </div>

        <div className="mt-2 h-2 rounded-full bg-slate-200">

          <div
            className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      <button className="mt-8 flex items-center gap-2 font-semibold text-sky-600">

        Continue Learning

        <ArrowRight size={18} />

      </button>

    </div>
  );
}