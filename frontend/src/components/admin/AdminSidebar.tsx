"use client";

import {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  CreditCard,
  ClipboardList,
  BarChart3,
  Settings,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "Users" },
  { icon: GraduationCap, label: "Students" },
  { icon: BookOpen, label: "Courses" },
  { icon: ClipboardList, label: "Lessons" },
  { icon: CreditCard, label: "Payments" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

export default function AdminSidebar() {
  return (
    <aside className="w-72 border-r bg-white p-6">

      <nav className="space-y-3">

        {items.map(({ icon: Icon, label }) => (

          <button
            key={label}
            className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition hover:bg-sky-50 hover:text-sky-600"
          >

            <Icon size={22} />

            <span className="font-medium">
              {label}
            </span>

          </button>

        ))}

      </nav>

    </aside>
  );
}