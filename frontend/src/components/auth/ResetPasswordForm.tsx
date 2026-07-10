"use client";

import { useState } from "react";
import Link from "next/link";

import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";
import LoadingButton from "./LoadingButton";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";

export default function ResetPasswordForm() {
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error] = useState("");

  const [success, setSuccess] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess("Password updated successfully.");
    }, 1500);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[36px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl lg:p-10"
    >
      <PasswordInput
        label="New Password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <PasswordStrength password={password} />

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm new password"
      />

      <FormError message={error} />

      <FormSuccess message={success} />

      <LoadingButton
        loading={loading}
        text="Reset Password"
      />

      <p className="text-center text-sm text-slate-600">
        Back to

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