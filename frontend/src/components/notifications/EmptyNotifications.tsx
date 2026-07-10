"use client";

import { BellOff } from "lucide-react";

export default function EmptyNotifications() {
  return (
    <section className="rounded-[32px] bg-white p-16 text-center shadow-lg">

      <BellOff
        size={70}
        className="mx-auto text-slate-400"
      />

      <h2 className="mt-6 text-3xl font-bold">
        No Notifications
      </h2>

      <p className="mt-4 text-slate-500">
        You're all caught up. We'll notify you when something new happens.
      </p>

    </section>
  );
}