"use client";

import { InputHTMLAttributes } from "react";

interface AuthInputProps
  extends InputHTMLAttributes<HTMLInputElement> {

  label: string;
}

export default function AuthInput({

  label,

  ...props

}: AuthInputProps) {

  return (

    <div className="space-y-2">

      <label className="font-semibold">

        {label}

      </label>

      <input

        {...props}

        className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-600"

      />

    </div>

  );

}