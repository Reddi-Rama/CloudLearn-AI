"use client";

import { Clock3 } from "lucide-react";

interface TimerProps {
  time: string;
}

export default function Timer({
  time,
}: TimerProps) {
  return (
    <div className="glass-card flex items-center gap-3 rounded-full px-6 py-3">

      <Clock3 className="text-blue-600" />

      <span className="font-semibold">
        {time}
      </span>

    </div>
  );
}