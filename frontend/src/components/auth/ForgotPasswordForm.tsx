"use client";

import { Mail, Send } from "lucide-react";

export default function ForgotPasswordForm() {
  return (
    <form className="space-y-6">

      <div>

        <label className="mb-2 block font-medium">
          Registered Email
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

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 text-white"
      >
        <Send size={18} />
        Send OTP
      </button>

    </form>
  );
}