"use client";

import {
  Bell,
  Award,
  BookOpen,
  Flame,
} from "lucide-react";

interface Props {
  title: string;
  message: string;
  time: string;
  type: string;
}

export default function NotificationCard({
  title,
  message,
  time,
  type,
}: Props) {

  const icon =
    type === "success"
      ? <Award className="text-green-500" />
      : type === "warning"
      ? <Flame className="text-orange-500" />
      : <BookOpen className="text-sky-500" />;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-md transition-all">

      <div className="flex gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
          {icon}
        </div>

        <div className="flex-1">

          <div className="flex items-center justify-between">

            <h3 className="text-lg font-bold text-slate-900">
              {title}
            </h3>

            <span className="text-sm text-slate-400">
              {time}
            </span>

          </div>

          <p className="mt-2 text-slate-600">
            {message}
          </p>

        </div>

      </div>

    </div>
  );
}