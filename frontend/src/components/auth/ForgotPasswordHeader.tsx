"use client";

import Link from "next/link";
import { ArrowLeft, KeyRound } from "lucide-react";

export default function ForgotPasswordHeader() {
  return (
    <div className="mb-8">

      <Link
        href="/login"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft size={18} />
        Back to Login
      </Link>

      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100">

        <KeyRound
          size={38}
          className="text-blue-600"
        />

      </div>

      <h1 className="text-4xl font-bold text-slate-900">
        Forgot Password
      </h1>

      <p className="mt-3 text-slate-600 leading-7">
        Don't worry. Enter your registered email address and
        we'll send you a One-Time Password (OTP) to reset your password.
      </p>

    </div>
  );
}