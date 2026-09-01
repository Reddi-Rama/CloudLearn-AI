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
      className="
        group
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-slate-200
        bg-white
        px-4
        py-2.5
        text-sm
        font-semibold
        text-slate-700
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-sky-300
        hover:text-sky-600
        hover:shadow-lg
      "
    >
      <ArrowLeft
        size={18}
        className="
          transition-transform
          duration-200
          group-hover:-translate-x-1
        "
      />

      {label}
    </Link>
  );
}