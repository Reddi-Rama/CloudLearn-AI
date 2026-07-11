"use client";

export default function RememberMe() {
  return (
    <label className="flex cursor-pointer items-center gap-3">

      <input
        type="checkbox"
        className="h-4 w-4 rounded"
      />

      <span className="text-sm text-slate-600">
        Remember me
      </span>

    </label>
  );
}