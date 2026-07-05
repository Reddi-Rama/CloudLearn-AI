"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DomainCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export default function DomainCard({
  title,
  description,
  icon,
  href,
}: DomainCardProps) {
  return (
   <div className="relative mx-auto h-[245px] w-[285px] transition-all duration-300 hover:-translate-y-2 hover:scale-105">

  {/* Cloud */}
  <svg
    viewBox="0 0 340 270"
    className="absolute inset-0 h-full w-full drop-shadow-[0_15px_40px_rgba(59,130,246,0.18)]"
  >
    <path
      d="
      M85 225
      C38 225 18 190 26 155
      C33 125 58 108 90 106
      C92 62 122 35 168 35
      C198 35 225 48 238 74
      C250 66 267 62 285 62
      C324 62 340 92 340 128
      C340 152 330 171 312 184
      C320 205 309 225 280 225
      L85 225
      Z
      "
      fill="white"
      stroke="#DBEAFE"
      strokeWidth="2"
    />
  </svg>

  {/* Content */}
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-8 text-center">

    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg">
      {icon}
    </div>

    <h3 className="text-xl font-bold text-slate-900 leading-tight">
      {title}
    </h3>

    <p className="mt-3 text-sm leading-6 text-slate-600">
      {description}
    </p>

    <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
      Explore →
    </span>

  </div>

</div>
  );
}