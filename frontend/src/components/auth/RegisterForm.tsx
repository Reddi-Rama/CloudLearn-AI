"use client";

import { useEffect, useState } from "react";
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
import { API } from "@/lib/api";

type RegisterStep = "register" | "verify";

export default function RegisterForm() {
  const router = useRouter();

  const [step, setStep] =
    useState<RegisterStep>("register");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [otp, setOtp] = useState("");
  const [resendCooldown, setResendCooldown] =
    useState(0);

  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] =
    useState(false);
  const [resending, setResending] =
    useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (resendCooldown <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setResendCooldown((current) =>
        current > 0 ? current - 1 : 0
      );
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [resendCooldown]);

  async function handleRegister(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const data =
        await authService.register({
          fullName: fullName.trim(),
          email: email.trim().toLowerCase(),
          password,
          phone,
        });

      void data;

      setStep("verify");
      setOtp("");
      setResendCooldown(60);

      setSuccess(
        `Verification OTP sent to ${email.trim().toLowerCase()}`
      );
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyOtp(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!/^\d{6}$/.test(otp)) {
      setError(
        "Please enter the 6-digit verification code."
      );
      return;
    }

    setVerifying(true);

    try {
      const response = await fetch(
        `${API.BASE_URL}${API.ENDPOINTS.LOGIN.replace(
          "/login",
          "/verify-email"
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email:
              email.trim().toLowerCase(),
            otp,
          }),
        }
      );

      const data = await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Email verification failed"
        );
      }

      setSuccess(
        "Email verified successfully! Redirecting to login..."
      );

      window.setTimeout(() => {
        router.replace(
          `/login?verified=1&email=${encodeURIComponent(
            email.trim().toLowerCase()
          )}`
        );
      }, 1200);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Email verification failed"
      );
    } finally {
      setVerifying(false);
    }
  }

  async function handleResendOtp() {
    if (resendCooldown > 0 || resending) {
      return;
    }

    setError("");
    setSuccess("");
    setResending(true);

    try {
      const response = await fetch(
        `${API.BASE_URL}${API.ENDPOINTS.LOGIN.replace(
          "/login",
          "/resend-otp"
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email:
              email.trim().toLowerCase(),
          }),
        }
      );

      const data = await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Failed to resend OTP"
        );
      }

      setOtp("");
      setResendCooldown(60);

      setSuccess(
        "A new verification OTP has been sent to your email."
      );
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to resend OTP"
      );
    } finally {
      setResending(false);
    }
  }

  if (step === "verify") {
    return (
      <form
        onSubmit={handleVerifyOtp}
        className="space-y-6 rounded-[36px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl lg:p-10"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Verify Your Email
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            We sent a 6-digit verification code to
          </p>

          <p className="mt-1 break-all font-semibold text-sky-600">
            {email.trim().toLowerCase()}
          </p>
        </div>

        <div>
          <label
            htmlFor="otp"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Verification Code
          </label>

          <input
            id="otp"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            value={otp}
            onChange={(e) =>
              setOtp(
                e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 6)
              )
            }
            placeholder="Enter 6-digit OTP"
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-center text-2xl font-bold tracking-[0.45em] text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            required
          />
        </div>

        <FormError message={error} />

        <FormSuccess message={success} />

        <LoadingButton
          loading={verifying}
          text="Verify Email"
        />

        <div className="text-center">
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={
              resendCooldown > 0 ||
              resending
            }
            className="text-sm font-semibold text-sky-600 transition hover:text-sky-700 disabled:cursor-not-allowed disabled:text-slate-400"
          >
            {resending
              ? "Sending..."
              : resendCooldown > 0
                ? `Resend OTP in ${resendCooldown}s`
                : "Resend OTP"}
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            setStep("register");
            setOtp("");
            setError("");
            setSuccess("");
          }}
          className="w-full text-sm font-semibold text-slate-500 transition hover:text-slate-700"
        >
          ← Back to registration
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleRegister}
      className="space-y-6 rounded-[36px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl lg:p-10"
    >
      <AuthInput
        label="Full Name"
        placeholder="John Doe"
        value={fullName}
        onChange={(e) =>
          setFullName(e.target.value)
        }
        required
      />

      <AuthInput
        label="Email"
        type="email"
        placeholder="john@example.com"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        required
      />

      <AuthInput
        label="Phone Number"
        type="tel"
        placeholder="+91 9876543210"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value)
        }
      />

      <PasswordInput
        label="Password"
        placeholder="Create Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        required
      />

      <PasswordStrength
        password={password}
      />

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) =>
          setConfirmPassword(e.target.value)
        }
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
