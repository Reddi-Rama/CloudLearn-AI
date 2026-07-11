"use client";

import { LucideIcon } from "lucide-react";

interface CloudCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  lessons: number;
}

export default function CloudCard({
  title,
  description,
  icon: Icon,
  lessons,
}: CloudCardProps) {
  return (
    <div className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-sky-300 hover:shadow-2xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100">

        <Icon
          size={30}
          className="text-sky-600"
        />

      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-slate-600">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between">

        <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">

          {lessons}+ Lessons

        </span>

        <button className="rounded-xl bg-sky-600 px-5 py-2 font-semibold text-white transition hover:bg-sky-700">
          Explore
        </button>

      </div>

    </div>
  );
}