"use client";

import { User, Mail, Lock, UserPlus } from "lucide-react";

export default function RegisterForm() {
  return (
    <form className="space-y-6">

      <div>

        <label className="mb-2 block font-medium">
          Full Name
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">

          <User size={18} />

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full bg-transparent outline-none"
          />

        </div>

      </div>

      <div>

        <label className="mb-2 block font-medium">
          Email
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">

          <Mail size={18} />

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

          <Lock size={18} />

          <input
            type="password"
            placeholder="Create a password"
            className="w-full bg-transparent outline-none"
          />

        </div>

      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
      >
        <UserPlus size={18} />
        Create Account
      </button>

    </form>
  );
}