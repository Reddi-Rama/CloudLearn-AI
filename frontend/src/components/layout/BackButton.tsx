"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href?: string;
  label?: string;
}

export default function BackButton({
  href = "/",
  label = "Back to Home",
}: BackButtonProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="
        group
        inline-flex
        w-auto
        max-w-full
        min-w-0
        shrink-0
        items-center
        justify-center
        gap-2.5
        whitespace-nowrap

        rounded-2xl
        border
        border-slate-200/90
        bg-white/95

        px-4
        py-2.5

        text-sm
        font-semibold
        text-slate-700

        shadow-[0_8px_24px_rgba(15,23,42,0.10)]

        backdrop-blur-xl

        transition-[transform,background-color,border-color,box-shadow,color]
        duration-300

        hover:-translate-y-0.5
        hover:border-sky-300
        hover:bg-white
        hover:text-sky-600
        hover:shadow-[0_12px_30px_rgba(14,165,233,0.16)]

        focus:outline-none
        focus:ring-2
        focus:ring-sky-400/40
        focus:ring-offset-2

        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-200

        dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]

        dark:hover:border-sky-500
        dark:hover:bg-slate-800
        dark:hover:text-sky-300
        dark:hover:shadow-[0_12px_35px_rgba(14,165,233,0.20)]

        dark:focus:ring-sky-500/40
        dark:focus:ring-offset-slate-950
      "
    >
      <span
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-lg

          bg-slate-100
          text-slate-600

          transition-colors
          duration-300

          group-hover:bg-sky-50
          group-hover:text-sky-600

          dark:bg-slate-800
          dark:text-slate-300

          dark:group-hover:bg-sky-950
          dark:group-hover:text-sky-300
        "
      >
        <ArrowLeft
          size={16}
          strokeWidth={2.2}
          className="
            shrink-0
            transition-transform
            duration-300
            group-hover:-translate-x-0.5
          "
        />
      </span>

      <span className="block truncate">
        {label}
      </span>
    </Link>
  );
}