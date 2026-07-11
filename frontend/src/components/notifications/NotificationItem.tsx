"use client";

import { BellRing } from "lucide-react";

interface NotificationItemProps {
  title: string;
  description: string;
  time: string;
  unread?: boolean;
}

export default function NotificationItem({
  title,
  description,
  time,
  unread = false,
}: NotificationItemProps) {
  return (
    <div
      className={`rounded-[28px] border p-6 shadow-sm transition hover:shadow-lg ${
        unread
          ? "border-sky-300 bg-sky-50"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex gap-4">

        <div className="rounded-2xl bg-sky-100 p-3">
          <BellRing
            className="text-sky-600"
            size={22}
          />
        </div>

        <div className="flex-1">

          <div className="flex items-center justify-between">

            <h3 className="text-lg font-bold">
              {title}
            </h3>

            <span className="text-sm text-slate-500">
              {time}
            </span>

          </div>

          <p className="mt-2 text-slate-600">
            {description}
          </p>

        </div>

      </div>
    </div>
  );
}