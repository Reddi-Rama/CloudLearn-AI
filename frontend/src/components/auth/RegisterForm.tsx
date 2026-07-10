"use client";

import { useState } from "react";
import Link from "next/link";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";
import TermsCheckbox from "./TermsCheckbox";
import SocialLogin from "./SocialLogin";
import Divider from "./Divider";
import LoadingButton from "./LoadingButton";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";

export default function RegisterForm() {

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error] = useState("");

  const [success] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[36px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl lg:p-10"
    >
      <AuthInput
        label="Full Name"
        placeholder="John Doe"
      />

      <AuthInput
        label="Email"
        type="email"
        placeholder="john@example.com"
      />

      <AuthInput
        label="Phone Number"
        type="tel"
        placeholder="+91 9876543210"
      />

      <PasswordInput
        label="Password"
        placeholder="Create Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <PasswordStrength password={password} />

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm Password"
      />

      <TermsCheckbox />

      <FormError message={error} />

      <FormSuccess message={success} />

      <LoadingButton
        loading={loading}
        text="Create Account"
      />

      <Divider text="OR SIGN UP WITH" />

      <SocialLogin />

      <p className="pt-4 text-center text-sm text-slate-600">
        Already have an account?

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