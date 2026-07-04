"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Award,
  User,
  Bell,
  Settings,
  LogOut,
  FolderKanban,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: FolderKanban, label: "My Courses", href: "/dashboard/courses" },
  { icon: Award, label: "Certificates", href: "/dashboard/certificates" },
  { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
  { icon: BookOpen, label: "Browse Courses", href: "/domains" },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardSidebar() {
  return (
    <aside className="sticky top-0 h-screen w-72 border-r bg-white">

      <div className="border-b p-8">

        <h1 className="text-4xl font-black text-sky-600">

          CloudLearn

        </h1>

      </div>

      <nav className="space-y-3 p-5">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 rounded-2xl px-5 py-4 transition hover:bg-sky-50 hover:text-sky-600"
            >

              <Icon size={22} />

              {item.label}

            </Link>

          );

        })}

      </nav>

      <div className="absolute bottom-8 w-full px-5">

        <button className="flex w-full items-center gap-4 rounded-2xl bg-red-50 px-5 py-4 text-red-600">

          <LogOut />

          Logout

        </button>

      </div>

    </aside>
  );
}