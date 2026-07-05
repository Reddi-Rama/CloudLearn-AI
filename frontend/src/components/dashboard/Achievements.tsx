"use client";

import {
  Trophy,
  Flame,
  Star,
  Medal,
} from "lucide-react";

const achievements = [
  {
    title: "15 Day Streak",
    icon: Flame,
    color: "text-orange-500",
  },
  {
    title: "Top Performer",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    title: "100 XP Earned",
    icon: Star,
    color: "text-blue-500",
  },
  {
    title: "Course Champion",
    icon: Medal,
    color: "text-green-500",
  },
];

export default function Achievements() {
  return (
    <section className="mt-14">

      <h2 className="mb-8 text-3xl font-bold">
        Achievements
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {achievements.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-[28px] bg-white p-8 shadow-lg hover:shadow-2xl transition"
            >

              <Icon
                size={40}
                className={item.color}
              />

              <h3 className="mt-5 text-xl font-bold">
                {item.title}
              </h3>

            </div>
          );
        })}

      </div>

    </section>
  );
}