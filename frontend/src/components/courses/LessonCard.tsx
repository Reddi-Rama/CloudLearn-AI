"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  Clock3,
  Lock,
  PlayCircle,
} from "lucide-react";

interface LessonCardProps {
  lessonNumber: number;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  active?: boolean;
}

export default function LessonCard({
  lessonNumber,
  title,
  duration,
  completed,
  locked,
  active = false,
}: LessonCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`glass-card rounded-2xl border p-5 transition-all ${
        active
          ? "border-blue-500 ring-2 ring-blue-200"
          : "border-blue-100"
      }`}
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          {/* Status */}

          {completed ? (
            <CheckCircle2
              size={24}
              className="text-green-500"
            />
          ) : locked ? (
            <Lock
              size={22}
              className="text-slate-400"
            />
          ) : (
            <Circle
              size={22}
              className="text-blue-500"
            />
          )}

          {/* Lesson Info */}

          <div>

            <p className="text-sm text-slate-500">
              Lesson {lessonNumber}
            </p>

            <h3 className="mt-1 text-lg font-semibold text-slate-800">
              {title}
            </h3>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          <div className="flex items-center gap-2 text-slate-500">

            <Clock3 size={16} />

            <span>{duration}</span>

          </div>

          {!locked && (
            <PlayCircle
              size={26}
              className="text-blue-600"
            />
          )}

        </div>

      </div>
    </motion.div>
  );
}