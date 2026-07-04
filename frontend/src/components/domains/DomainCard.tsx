"use client";

import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

type Props = {
  title: string;
  courses: number;
  href: string;
  color: string;
  icon: LucideIcon;
};

export default function DomainCard({
  title,
  courses,
  href,
  color,
  icon: Icon,
}: Props) {
  return (
    <Link href={href}>
      <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${color} text-white`}
        >
          <Icon size={30} />
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-slate-500">
          {courses} Courses
        </p>

        <div className="mt-8 flex items-center font-semibold text-blue-600">

          Explore

          <ArrowRight
            className="ml-2 transition group-hover:translate-x-2"
            size={18}
          />

        </div>

      </div>
    </Link>
  );
}