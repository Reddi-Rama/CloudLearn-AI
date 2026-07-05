"use client";

import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function SecondaryButton({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
        rounded-full
        border
        border-sky-200
        bg-white
        px-8
        py-4
        font-semibold
        text-sky-700
        transition
        hover:bg-sky-50
        ${className}
      `}
    >
      {children}
    </button>
  );
}