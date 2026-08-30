"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";
import TermsCheckbox from "./TermsCheckbox";
import SocialLogin from "./SocialLogin";
import Divider from "./Divider";
import LoadingButton from "./LoadingButton";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";

import { authService } from "@/services/auth.service";
import { login } from "@/lib/auth";

export default function RegisterForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const data = await authService.register({
        fullName,
        email,
        password,
        phone,
      });

      // Save the newly registered user
      login(data);

      setSuccess("Account created successfully!");

      // Go directly to Home
      router.replace("/");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Registration failed"
      );

      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[36px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl lg:p-10"
    >
      <AuthInput
        label="Full Name"
        placeholder="John Doe"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <AuthInput
        label="Email"
        type="email"
        placeholder="john@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <AuthInput
        label="Phone Number"
        type="tel"
        placeholder="+91 9876543210"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <PasswordInput
        label="Password"
        placeholder="Create Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <PasswordStrength password={password} />

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
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