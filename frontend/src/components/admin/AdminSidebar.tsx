"use client";

import {
LayoutDashboard,
BookOpen,
Layers,
Users,
FileText,
Award,
CreditCard,
BarChart3,
Settings
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, title: "Dashboard" },
  { icon: Layers, title: "Domains" },
  { icon: BookOpen, title: "Courses" },
  { icon: FileText, title: "Lessons" },
  { icon: Users, title: "Students" },
  { icon: Award, title: "Certificates" },
  { icon: CreditCard, title: "Payments" },
  { icon: BarChart3, title: "Analytics" },
  { icon: Settings, title: "Settings" },
];

export default function AdminSidebar() {
  return (
    <aside className="w-72 bg-white border-r shadow-lg">

      <div className="p-8">

        <h1 className="text-3xl font-black text-sky-600">

          CloudLearn

        </h1>

      </div>

      <nav className="space-y-2 px-5">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 hover:bg-sky-50"
            >

              <Icon size={20} />

              {item.title}

            </button>

          );

        })}

      </nav>

    </aside>
  );
}