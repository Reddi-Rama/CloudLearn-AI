"use client";

import { BellOff } from "lucide-react";

export default function EmptyNotifications() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-sky-200 bg-white/70 p-16 text-center">

      <BellOff
        size={70}
        className="text-sky-400"
      />

      <h2 className="mt-6 text-3xl font-bold">

        No Notifications

      </h2>

      <p className="mt-4 max-w-lg text-slate-600">

        You're all caught up! New course updates, assessments, and certificates will appear here.

      </p>

    </div>
  );
}