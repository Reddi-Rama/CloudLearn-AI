"use client";

import { ArrowRight, BookOpen } from "lucide-react";

interface SearchCardProps {
  title: string;
  category: string;
  description: string;
}

export default function SearchCard({
  title,
  category,
 description,
}: SearchCardProps) {
  return (
    <div className="rounded-[30px] bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <BookOpen
          size={28}
          className="text-sky-600"
        />

        <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
          {category}
        </span>

      </div>

      <h2 className="mt-5 text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 text-slate-600">
        {description}
      </p>

      <button className="mt-6 flex items-center gap-2 font-semibold text-sky-600">

        View Details

        <ArrowRight size={18} />

      </button>

    </div>
  );
}