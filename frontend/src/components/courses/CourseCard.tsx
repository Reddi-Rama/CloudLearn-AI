"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  BookOpen,
  Star,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
  lessons: number;
  duration: string;
  level: string;
  rating: number;
  href: string;
}

export default function CourseCard({
  title,
  description,
  lessons,
  duration,
  level,
  rating,
  href,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="glass-card rounded-3xl overflow-hidden"
    >

      <div className="h-48 bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200" />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-3 text-slate-600 leading-7">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <span className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm">

            <BookOpen size={16} />

            {lessons} Lessons

          </span>

          <span className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm">

            <Clock3 size={16} />

            {duration}

          </span>

          <span className="flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm">

            <Star size={16} />

            {rating}

          </span>

        </div>

        <div className="mt-8 flex items-center justify-between">

          <span className="rounded-full bg-slate-100 px-4 py-2">

            {level}

          </span>

          <Link
            href={href}
            className="flex items-center gap-2 font-semibold text-blue-600"
          >

            Start Course

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </motion.div>
  );
}