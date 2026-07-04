"use client";

import Link from "next/link";
import { Eye, Mail, Lock } from "lucide-react";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

      <h1 className="text-4xl font-black text-center">
        Welcome Back
      </h1>

      <p className="mt-3 text-center text-slate-500">
        Login to continue learning.
      </p>

      <div className="mt-10 space-y-6">

        <div className="relative">
          <Mail className="absolute left-4 top-4 text-slate-400" />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border pl-12 pr-4 py-4 outline-none focus:border-sky-500"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-4 text-slate-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border pl-12 pr-12 py-4 outline-none focus:border-sky-500"
          />
          <Eye className="absolute right-4 top-4 text-slate-400 cursor-pointer" />
        </div>

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sky-600 font-medium"
          >
            Forgot Password?
          </Link>
        </div>

        <button className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 py-4 text-white font-bold">
          Login
        </button>

        <p className="text-center text-slate-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-sky-600"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}