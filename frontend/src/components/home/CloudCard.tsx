"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CloudCardProps {
  title: string;
  description: string;
  lessons: number;
  icon: React.ElementType;
  href: string;
}

export default function CloudCard({
  title,
  description,
  lessons,
  icon: Icon,
  href,
}: CloudCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full"
    >
      <article
        className="
          relative
          flex
          min-h-[330px]
          h-full
          flex-col
          overflow-hidden
          rounded-[28px]
          border
          border-slate-200
          bg-white
          p-7
          shadow-[0_10px_30px_rgba(15,23,42,0.07)]
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-sky-300
          hover:shadow-[0_20px_45px_rgba(14,165,233,0.15)]
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-sky-100
            opacity-60
            blur-3xl
          "
        />

        <div
          className="
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-sky-100
            bg-sky-50
            text-sky-600
          "
        >
          <Icon size={27} />
        </div>

        <h3
          className="
            relative
            mt-6
            text-2xl
            font-extrabold
            tracking-tight
            text-slate-900
            transition
            group-hover:text-sky-600
          "
        >
          {title}
        </h3>

        <p
          className="
            relative
            mt-4
            text-base
            leading-7
            text-slate-600
          "
        >
          {description}
        </p>

        <div className="relative mt-auto flex items-center justify-between pt-8">

          <span
            className="
              rounded-full
              bg-sky-50
              px-4
              py-2
              text-sm
              font-bold
              text-sky-600
            "
          >
            {lessons}+ Lessons
          </span>

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-sky-600
              px-5
              py-3
              text-sm
              font-bold
              text-white
              transition
              group-hover:bg-sky-700
            "
          >
            Explore

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>

        </div>

      </article>
    </Link>
  );
}