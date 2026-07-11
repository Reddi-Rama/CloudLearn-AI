"use client";

import { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export default function Tooltip({
  text,
  children,
}: TooltipProps) {
  return (
    <div className="group relative inline-flex">

      {children}

      <div
        className="
          pointer-events-none
          absolute
          -top-10
          left-1/2
          hidden
          -translate-x-1/2
          whitespace-nowrap
          rounded-lg
          bg-slate-800
          px-3
          py-2
          text-xs
          text-white
          group-hover:block
        "
      >
        {text}
      </div>

    </div>
  );
}