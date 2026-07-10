"use client";

import { ButtonHTMLAttributes } from "react";

interface AuthButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  loading?: boolean;

  text: string;
}

export default function AuthButton({

  loading = false,

  text,

  ...props

}: AuthButtonProps) {

  return (

    <button

      {...props}

      disabled={loading}

      className="w-full rounded-2xl bg-sky-600 py-4 font-bold text-white transition hover:bg-sky-700 disabled:opacity-60"

    >

      {loading ? "Please wait..." : text}

    </button>

  );

}