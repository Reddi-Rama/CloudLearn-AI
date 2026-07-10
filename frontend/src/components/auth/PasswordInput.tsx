"use client";

import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function PasswordInput({
  label,
  ...props
}: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">

      <label className="font-semibold">
        {label}
      </label>

      <div className="relative">

        <input
          {...props}
          type={show ? "text" : "password"}
          className="w-full rounded-2xl border border-slate-300 px-5 py-4 pr-14 outline-none transition focus:border-sky-600"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
        >
          {show ? <EyeOff size={20}/> : <Eye size={20}/>}
        </button>

      </div>

    </div>
  );
}