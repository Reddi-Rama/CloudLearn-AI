"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Code2,
  ClipboardCheck,
  Award,
  Bookmark,
  Bell,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Courses",
    href: "/courses",
    icon: BookOpen,
  },
  {
    title: "Learning Paths",
    href: "/learning-paths",
    icon: GraduationCap,
  },
  {
    title: "Programming Lab",
    href: "/programming",
    icon: Code2,
  },
  {
    title: "Assessments",
    href: "/assessments",
    icon: ClipboardCheck,
  },
  {
    title: "Certificates",
    href: "/certificates",
    icon: Award,
  },
  {
    title: "Bookmarks",
    href: "/bookmarks",
    icon: Bookmark,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-20 h-[calc(100vh-80px)] w-72 overflow-y-auto border-r border-slate-200 bg-white">

      <div className="p-6">

        <h2 className="text-2xl font-black text-slate-800">
          Student Panel
        </h2>

      </div>

      <nav className="space-y-2 px-4">

        {menu.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-sky-600 text-white"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-600"
              }`}
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}

      </nav>

      <div className="p-4 mt-6">

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 transition hover:bg-red-50">

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}