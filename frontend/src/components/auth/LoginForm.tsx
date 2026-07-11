"use client";

import { useState } from "react";
import Link from "next/link";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import RememberMe from "./RememberMe";
import SocialLogin from "./SocialLogin";
import Divider from "./Divider";
import LoadingButton from "./LoadingButton";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const [error] = useState("");

  const [success] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

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

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
      />

      <div className="flex items-center justify-between">

        <RememberMe />

        <Link
          href="/forgot-password"
          className="text-sm font-semibold text-sky-600 hover:text-sky-700"
        >
          Forgot Password?
        </Link>

      </div>

      <FormError message={error} />

      <FormSuccess message={success} />

      <LoadingButton
        loading={loading}
        text="Sign In"
      />

      <Divider text="OR CONTINUE WITH" />

      <SocialLogin />

      <p className="pt-4 text-center text-sm text-slate-600">

        Don't have an account?

        <Link
          href="/register"
          className="ml-2 font-semibold text-sky-600"
        >
          Register
        </Link>

      </p>

    </form>
  );
}