"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface CloudCardProps {
  title: string;
  learners: string;
  icon: LucideIcon;
  color: string;
  href?: string;
}

export default function CloudCard({
  title,
  learners,
  icon: Icon,
  color,
  href = "/domains",
}: CloudCardProps) {
  return (
    <Link
      href={href}
      className="group flex justify-center transition duration-300 hover:-translate-y-3"
    >
      <div className="relative h-[240px] w-[290px]">

        {/* Shadow */}

        <div className="absolute bottom-5 left-1/2 h-8 w-44 -translate-x-1/2 rounded-full bg-sky-300/40 blur-xl" />

        {/* Cloud */}

        <div className="absolute left-10 top-12 h-28 w-28 rounded-full bg-white shadow-xl" />

        <div className="absolute right-10 top-12 h-28 w-28 rounded-full bg-white shadow-xl" />

        <div className="absolute left-0 top-24 h-24 w-24 rounded-full bg-white shadow-xl" />

        <div className="absolute right-0 top-24 h-24 w-24 rounded-full bg-white shadow-xl" />

        <div className="absolute left-8 right-8 bottom-6 h-24 rounded-full bg-white shadow-xl" />

        <div className="absolute left-16 top-0 h-24 w-24 rounded-full bg-white shadow-xl" />

        {/* Content */}

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

          <div
            className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${color} shadow-xl`}
          >
            <Icon className="text-white" size={30} />
          </div>

          <h3 className="text-lg font-bold text-slate-900">

            {title}

          </h3>

          <p className="mt-2 text-sm text-slate-500">

            {learners}

          </p>

          <div className="mt-4 flex items-center gap-2 text-sky-600 font-semibold opacity-0 transition duration-300 group-hover:opacity-100">

            Explore

            <ArrowRight size={18} />

          </div>

        </div>

      </div>
    </Link>
  );
}