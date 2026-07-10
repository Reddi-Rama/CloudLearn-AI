"use client";

interface PasswordStrengthProps {
  password: string;
}

export default function PasswordStrength({
  password,
}: PasswordStrengthProps) {

  const strength =
    password.length >= 12
      ? 100
      : password.length >= 8
      ? 70
      : password.length >= 5
      ? 40
      : 15;

  const label =
    strength >= 100
      ? "Strong"
      : strength >= 70
      ? "Good"
      : strength >= 40
      ? "Weak"
      : "Very Weak";

  return (
    <div className="space-y-2">

      <div className="h-2 overflow-hidden rounded-full bg-slate-200">

        <div
          style={{ width: `${strength}%` }}
          className="h-full rounded-full bg-sky-600 transition-all"
        />

      </div>

      <p className="text-sm text-slate-500">
        Password Strength :
        <span className="ml-2 font-semibold">
          {label}
        </span>
      </p>

    </div>
  );
}