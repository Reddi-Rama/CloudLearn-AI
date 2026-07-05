"use client";

import Link from "next/link";
import { Mail, Lock, LogIn } from "lucide-react";

export default function LoginForm() {
  return (
    <form className="space-y-6">

      <div>

        <label className="mb-2 block font-medium">
          Email
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">

          <Mail size={18} className="text-slate-500" />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent outline-none"
          />

        </div>

      </div>

      <div>

        <label className="mb-2 block font-medium">
          Password
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">

          <Lock size={18} className="text-slate-500" />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-transparent outline-none"
          />

        </div>

      </div>

      <div className="flex justify-end">

        <Link
          href="/forgot-password"
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot Password?
        </Link>

      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
      >
        <LogIn size={18} />
        Login
      </button>

    </form>
  );
}