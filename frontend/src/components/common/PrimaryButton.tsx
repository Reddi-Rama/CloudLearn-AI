"use client";

import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
        rounded-full
        bg-gradient-to-r
        from-sky-500
        to-blue-600
        px-8
        py-4
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </button>
  );
}