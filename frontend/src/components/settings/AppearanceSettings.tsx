"use client";

export default function AppearanceSettings() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        Appearance
      </h2>

      <div className="mt-6 flex gap-4">

        <button className="rounded-xl border px-6 py-3">
          Light
        </button>

        <button className="rounded-xl border px-6 py-3">
          Dark
        </button>

        <button className="rounded-xl border px-6 py-3">
          System
        </button>

      </div>
    </div>
  );
}