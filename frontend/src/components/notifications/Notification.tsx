"use client";

import { Bell } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";

interface NotificationCardProps {
  title: string;
  description: string;
  time: string;
}

export default function NotificationCard({
  title,
  description,
  time,
}: NotificationCardProps) {
  return (
    <GlassCard className="p-6">

      <div className="flex gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">

          <Bell
            size={20}
            className="text-sky-600"
          />

        </div>

        <div className="flex-1">

          <h3 className="font-bold">

            {title}

          </h3>

          <p className="mt-2 text-slate-600">

            {description}

          </p>

          <span className="mt-3 block text-sm text-slate-400">

            {time}

          </span>

        </div>

      </div>

    </GlassCard>
  );
}