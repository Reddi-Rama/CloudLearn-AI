"use client";

import { Mail } from "lucide-react";

export default function ForgotPasswordForm() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

      <h1 className="text-4xl font-black text-center">
        Reset Password
      </h1>

      <p className="mt-3 text-center text-slate-500">
        Enter your email to receive a reset link.
      </p>

      <div className="relative mt-10">

        <Mail className="absolute left-4 top-4 text-slate-400" />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-2xl border py-4 pl-12 pr-4 outline-none focus:border-sky-500"
        />

      </div>

      <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 py-4 font-bold text-white">
        Send Reset Link
      </button>

    </div>
  );
}