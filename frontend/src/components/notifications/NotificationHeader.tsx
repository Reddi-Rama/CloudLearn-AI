"use client";

import { BellRing } from "lucide-react";

export default function NotificationHeader() {
  return (
    <section className="rounded-[32px] bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 p-10 text-white">

      <div className="flex items-center gap-4">

        <BellRing size={44} />

        <div>

          <h1 className="text-5xl font-black">
            Notifications
          </h1>

          <p className="mt-2 text-sky-100">
            Stay updated with your learning journey.
          </p>

        </div>

      </div>

    </section>
  );
}