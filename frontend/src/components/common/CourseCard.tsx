"use client";

import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import GlassCard from "./GlassCard";
import Badge from "./Badge";

interface CourseCardProps {
  title: string;
  description: string;
  lessons: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  href: string;
}

export default function CourseCard({
  title,
  description,
  lessons,
  duration,
  level,
  href,
}: CourseCardProps) {
  return (
    <GlassCard className="flex h-full flex-col p-6">

      <Badge color="blue">
        {level}
      </Badge>

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">

        <div className="flex items-center gap-2">
          <BookOpen size={16} />
          {lessons} Lessons
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          {duration}
        </div>

      </div>

      <Link
        href={href}
        className="mt-8 flex items-center gap-2 font-semibold text-sky-600 hover:text-sky-700"
      >
        Start Learning
        <ArrowRight size={18} />
      </Link>

    </GlassCard>
  );
}