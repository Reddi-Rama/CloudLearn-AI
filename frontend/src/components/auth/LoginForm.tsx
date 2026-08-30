"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import RememberMe from "./RememberMe";
import SocialLogin from "./SocialLogin";
import Divider from "./Divider";
import LoadingButton from "./LoadingButton";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";

import { authService } from "@/services/auth.service";
import { login } from "@/lib/auth";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const data = await authService.login(
        email,
        password
      );

      // Save logged-in user
      login(data);

      setSuccess("Login successful!");

      // Go directly to the Home page
      router.replace("/");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Login failed"
      );

      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <AuthInput
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
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

      <p className="text-center text-sm text-slate-600">
        Don't have an account?

        <Link
          href="/register"
          className="ml-2 font-semibold text-sky-600 hover:text-sky-700"
        >
          Register
        </Link>
      </p>
    </form>
  );
} 