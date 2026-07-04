"use client";

import {
  Trophy,
  Star,
  Medal,
  Target,
} from "lucide-react";

const achievements = [
  {
    title: "First Course Completed",
    icon: Trophy,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Perfect Quiz",
    icon: Star,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Assessment Master",
    icon: Medal,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Learning Goal",
    icon: Target,
    color: "bg-green-100 text-green-600",
  },
];

export default function Achievements() {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-lg">

      <h2 className="mb-8 text-2xl font-bold">

        Achievements

      </h2>

      <div className="grid gap-6 sm:grid-cols-2">

        {achievements.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-2xl border p-6 hover:shadow-lg transition"
            >

              <div className={`inline-flex rounded-2xl p-4 ${item.color}`}>

                <Icon size={28} />

              </div>

              <h3 className="mt-5 font-bold">

                {item.title}

              </h3>

            </div>

          );

        })}

      </div>

    </section>
  );
}