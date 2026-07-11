"use client";

import AuthHeader from "./AuthHeader";

export default function ForgotPasswordHeader() {
  return (
    <AuthHeader
      title="Forgot Password?"
      subtitle="Enter your email and we'll send you a password reset link."
    />
  );
}