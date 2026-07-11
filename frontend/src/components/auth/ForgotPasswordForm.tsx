"use client";

import { useState } from "react";
import Link from "next/link";

import AuthInput from "./AuthInput";
import LoadingButton from "./LoadingButton";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";

export default function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);

  const [error] = useState("");

  const [success, setSuccess] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess("Password reset link sent successfully.");
    }, 1500);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[36px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl lg:p-10"
    >
      <AuthInput
        label="Email Address"
        type="email"
        placeholder="Enter your email"
      />

      <FormError message={error} />

      <FormSuccess message={success} />

      <LoadingButton
        loading={loading}
        text="Send Reset Link"
      />

      <p className="text-center text-sm text-slate-600">
        Remember your password?

        <Link
          href="/login"
          className="ml-2 font-semibold text-sky-600"
        >
          Login
        </Link>
      </p>
    </form>
  );
}