"use client";

import Link from "next/link";
import { User, Mail, Lock } from "lucide-react";

export default function RegisterForm() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

      <h1 className="text-4xl font-black text-center">
        Create Account
      </h1>

      <div className="mt-8 space-y-5">

        <Input icon={<User size={18} />} placeholder="Full Name" />

        <Input icon={<Mail size={18} />} placeholder="Email Address" />

        <Input icon={<Lock size={18} />} placeholder="Password" type="password" />

        <Input icon={<Lock size={18} />} placeholder="Confirm Password" type="password" />

        <button className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 py-4 text-white font-bold">
          Create Account
        </button>

        <p className="text-center text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="text-sky-600 font-semibold">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

function Input({
  icon,
  placeholder,
  type = "text",
}: {
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-4 text-slate-400">{icon}</div>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border py-4 pl-12 pr-4 outline-none focus:border-sky-500"
      />
    </div>
  );
}