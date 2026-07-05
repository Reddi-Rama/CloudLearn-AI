"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Award,
 FileQuestion,
  Bell,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "My Courses",
    icon: BookOpen,
    href: "/courses",
  },
  {
    title: "Learning Paths",
    icon: GraduationCap,
    href: "/learning-paths",
  },
  {
    title: "Certificates",
    icon: Award,
    href: "/certificates",
  },
  {
    title: "Exams",
    icon: FileQuestion,
    href: "/exam",
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/notifications",
  },
  {
    title: "Profile",
    icon: User,
    href: "/profile",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function DashboardSidebar() {
  return (
    <aside className="sticky top-32 h-fit rounded-[32px] bg-white p-6 shadow-xl">

      <h2 className="mb-8 text-2xl font-bold text-slate-800">
        Dashboard
      </h2>

      <div className="space-y-3">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-4 rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}

      </div>

      <button className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600">

        <LogOut size={20} />

        Logout

      </button>

    </aside>
  );
}