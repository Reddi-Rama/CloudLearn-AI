"use client";

import {
  BookOpen,
  Users,
  GraduationCap,
  IndianRupee,
} from "lucide-react";

const cards = [
  {
    title: "Courses",
    value: "120",
    icon: BookOpen,
  },
  {
    title: "Students",
    value: "12,450",
    icon: GraduationCap,
  },
  {
    title: "Users",
    value: "15,280",
    icon: Users,
  },
  {
    title: "Revenue",
    value: "₹4.2L",
    icon: IndianRupee,
  },
];

export default function DashboardCards() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map(({ title, value, icon: Icon }) => (

        <div
          key={title}
          className="rounded-[30px] bg-white p-6 shadow-lg"
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500">
                {title}
              </p>

              <h2 className="mt-3 text-4xl font-black text-sky-600">
                {value}
              </h2>

            </div>

            <Icon
              size={36}
              className="text-sky-600"
            />

          </div>

        </div>

      ))}

    </section>
  );
}