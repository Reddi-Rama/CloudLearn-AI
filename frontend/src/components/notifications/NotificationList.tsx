"use client";

import { Bell, Clock } from "lucide-react";

export interface NotificationItemProps {
  title: string;
  description: string;
  time: string;
  isRead?: boolean;
}

export default function NotificationItem({
  title,
  description,
  time,
  isRead = false,
}: NotificationItemProps) {
  return (
    <div
      className={`rounded-3xl border p-5 transition hover:shadow-md ${
        isRead
          ? "border-slate-200 bg-white"
          : "border-sky-200 bg-sky-50"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-sky-100 p-3">
          <Bell
            size={22}
            className="text-sky-600"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-slate-600">
            {description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <Clock size={16} />
            {time}
          </div>
        </div>
      </div>
    </div>
  );
}