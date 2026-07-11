"use client";

import Link from "next/link";
import {
  User,
  Bell,
  Shield,
  Moon,
  ChevronRight,
} from "lucide-react";

const settings = [
  {
    title: "Profile Settings",
    icon: User,
    href: "/profile",
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/notifications",
  },
  {
    title: "Privacy & Security",
    icon: Shield,
    href: "/settings",
  },
  {
    title: "Appearance",
    icon: Moon,
    href: "/settings",
  },
];

export default function SettingsPanel() {
  return (
    <section className="mt-14">

      <div className="rounded-[32px] bg-white p-8 shadow-lg">

        <h2 className="mb-8 text-3xl font-bold">
          Quick Settings
        </h2>

        <div className="space-y-4">

          {settings.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center justify-between rounded-2xl bg-slate-50 p-5 transition hover:bg-blue-50"
              >

                <div className="flex items-center gap-4">

                  <Icon
                    size={22}
                    className="text-blue-600"
                  />

                  <span className="font-medium">
                    {item.title}
                  </span>

                </div>

                <ChevronRight size={20} />

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}