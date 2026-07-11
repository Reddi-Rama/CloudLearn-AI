"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  BookOpen,
  Code2,
  ClipboardCheck,
  Award,
  Bookmark,
  Bell,
  User,
  Settings,
  GraduationCap,
} from "lucide-react";

const links = [
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
    title: "Programming",
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

export default function StudentSidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r bg-white">

      <div className="flex items-center gap-4 border-b p-8">

        <div className="rounded-2xl bg-sky-600 p-3 text-white">

          <GraduationCap />

        </div>

        <div>

          <h2 className="text-xl font-bold">

            CloudLearn AI

          </h2>

          <p className="text-sm text-slate-500">

            Student Portal

          </p>

        </div>

      </div>

      <nav className="flex-1 space-y-2 p-6">

        {links.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-4 rounded-2xl px-5 py-4 transition hover:bg-sky-50 hover:text-sky-600"
            >

              <Icon size={22} />

              {item.title}

            </Link>
          );

        })}

      </nav>

    </aside>
  );
}