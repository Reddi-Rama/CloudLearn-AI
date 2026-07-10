"use client";

interface AuthCheckboxProps {
  label: string;
}

export default function AuthCheckbox({
  label,
}: AuthCheckboxProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">

      <input type="checkbox" />

      <span>{label}</span>

    </label>
  );
}