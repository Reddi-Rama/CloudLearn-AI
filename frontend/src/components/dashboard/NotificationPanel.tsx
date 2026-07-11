"use client";

import {
  Bell,
  BookOpen,
  Award,
  CalendarDays,
} from "lucide-react";

const notifications = [
  {
    title: "New AI lesson available",
    icon: BookOpen,
    color: "text-blue-600",
  },
  {
    title: "Python Quiz tomorrow",
    icon: CalendarDays,
    color: "text-orange-500",
  },
  {
    title: "Certificate generated",
    icon: Award,
    color: "text-green-600",
  },
  {
    title: "Welcome to CloudLearn AI",
    icon: Bell,
    color: "text-purple-600",
  },
];

export default function NotificationPanel() {
  return (
    <section className="mt-14">

      <div className="rounded-[32px] bg-white p-8 shadow-lg">

        <h2 className="mb-8 text-3xl font-bold">
          Notifications
        </h2>

        <div className="space-y-5">

          {notifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-5 rounded-2xl bg-slate-50 p-5"
              >

                <Icon
                  size={24}
                  className={item.color}
                />

                <span className="font-medium">
                  {item.title}
                </span>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}