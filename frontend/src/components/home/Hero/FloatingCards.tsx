"use client";

import {
  Award,
  BookOpen,
  Cloud,
  Code2,
} from "lucide-react";

const cards = [
  {
    title: "Cloud Computing",
    icon: Cloud,
    color: "text-sky-500",
    position: "top-0 left-0",
  },
  {
    title: "Programming",
    icon: Code2,
    color: "text-indigo-600",
    position: "top-20 right-0",
  },
  {
    title: "Certificates",
    icon: Award,
    color: "text-yellow-500",
    position: "bottom-20 left-0",
  },
  {
    title: "500+ Lessons",
    icon: BookOpen,
    color: "text-emerald-500",
    position: "bottom-0 right-0",
  },
];

export default function FloatingCards() {
  return (
    <>
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className={`absolute ${card.position} hidden w-48 rounded-3xl border border-white/40 bg-white/80 p-5 shadow-xl backdrop-blur-xl lg:block animate-[float_5s_ease-in-out_infinite]`}
          >
            <Icon
              size={32}
              className={card.color}
            />

            <h3 className="mt-4 font-bold text-slate-900">
              {card.title}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Learn with interactive paths.
            </p>

          </div>
        );
      })}
    </>
  );
}