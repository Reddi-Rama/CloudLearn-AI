"use client";

import { Clock3 } from "lucide-react";

interface TimerProps {
  time: string;
}

export default function Timer({
  time,
}: TimerProps) {
  return (
    <section className="rounded-[30px] bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white shadow-lg">

      <div className="flex items-center gap-4">

        <Clock3 size={30} />

        <div>

          <p className="text-sm">
            Remaining Time
          </p>

          <h2 className="text-3xl font-black">
            {time}
          </h2>

        </div>

      </div>

    </section>
  );
}