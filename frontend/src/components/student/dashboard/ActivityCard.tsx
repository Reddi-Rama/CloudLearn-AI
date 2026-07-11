"use client";

import { Clock3 } from "lucide-react";

interface ActivityCardProps {
  title: string;
  time: string;
}

export default function ActivityCard({
  title,
  time,
}: ActivityCardProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-md">

      <div>

        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {time}
        </p>

      </div>

      <Clock3
        size={20}
        className="text-sky-600"
      />

    </div>
  );
}