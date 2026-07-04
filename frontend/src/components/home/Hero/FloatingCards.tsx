"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Flame,
  TrendingUp,
} from "lucide-react";

const floatingCards = [
  {
    title: "Learning Streak",
    value: "28 Days",
    icon: Flame,
    color: "text-orange-500",
    position: "top-8 -right-10",
    delay: 0,
  },
  {
    title: "Completed",
    value: "18 Courses",
    icon: Award,
    color: "text-emerald-500",
    position: "bottom-28 -left-10",
    delay: 0.3,
  },
  {
    title: "Progress",
    value: "92%",
    icon: TrendingUp,
    color: "text-blue-600",
    position: "top-1/2 -left-16",
    delay: 0.6,
  },
  {
    title: "Current",
    value: "Machine Learning",
    icon: BookOpen,
    color: "text-violet-600",
    position: "bottom-6 -right-12",
    delay: 0.9,
  },
];

export default function FloatingCards() {
  return (
    <>
      {floatingCards.map((card) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: card.delay,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.delay,
              },
            }}
            className={`glass-card absolute ${card.position} hidden w-56 rounded-3xl p-5 shadow-xl lg:block`}
          >
            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-blue-50 p-3">

                <Icon
                  className={card.color}
                  size={24}
                />

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h4 className="mt-1 font-bold text-slate-800">
                  {card.value}
                </h4>

              </div>

            </div>
          </motion.div>
        );
      })}
    </>
  );
}