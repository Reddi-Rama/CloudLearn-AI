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
        fixed
        left-5
        top-[112px]
        z-40

        inline-flex
        h-10
        items-center
        gap-2

        rounded-lg
        border
        border-slate-300
        bg-white
        px-3.5

        text-sm
        font-semibold
        text-slate-700

        shadow-sm

        transition-all
        duration-200

        hover:border-sky-400
        hover:bg-sky-50
        hover:text-sky-600
        hover:shadow-md

        focus:outline-none
        focus:ring-2
        focus:ring-sky-400/40

        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-200

        dark:hover:border-sky-500
        dark:hover:bg-slate-800
        dark:hover:text-sky-300
      "
    >
      <ArrowLeft
        size={17}
        strokeWidth={2.3}
        className="shrink-0"
      />

      <span className="whitespace-nowrap">
        {label}
      </span>
    </Link>
  );
}
