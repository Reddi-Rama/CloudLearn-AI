"use client";

import { Bookmark, Clock } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";

interface BookmarkCardProps {
  title: string;
  category: string;
  duration: string;
}

export default function BookmarkCard({
  title,
  category,
  duration,
}: BookmarkCardProps) {
  return (
    <GlassCard className="p-6">

      <div className="flex items-start justify-between">

        <Bookmark
          className="text-sky-600"
          size={22}
        />

        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
          {category}
        </span>

      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <div className="mt-6 flex items-center gap-2 text-slate-500">

        <Clock size={16} />

        {duration}

      </div>

    </GlassCard>
  );
}