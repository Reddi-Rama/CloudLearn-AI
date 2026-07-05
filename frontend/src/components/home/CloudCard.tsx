"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface CloudCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  courses: number;
  level: string;
  href: string;
  color: string;
}

export default function CloudCard({
  title,
  description,
  icon: Icon,
  courses,
  level,
  href,
  color,
}: CloudCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white/80 p-7 shadow-lg backdrop-blur-xl"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-sky-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div
        className={`relative flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}
      >
        <Icon
          size={30}
          className="text-white"
        />
      </div>

      {/* Content */}
      <div className="relative mt-6">

        <h3 className="text-2xl font-bold text-slate-800">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {courses} Courses
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
            {level}
          </span>

        </div>

        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-3"
        >
          Explore Path

          <ArrowRight size={18} />

        </Link>

      </div>
    </motion.div>
  );
}