"use client";

import { Monitor, Moon, Sun } from "lucide-react";

export default function AppearanceSettings() {
  return (
    <div className="glass-card rounded-3xl p-8">

      <h2 className="text-2xl font-bold">
        Appearance
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <button className="rounded-2xl border border-blue-200 p-6 hover:border-blue-600">

          <Sun className="mx-auto mb-3 text-yellow-500" />

          Light

        </button>

        <button className="rounded-2xl border border-blue-200 p-6 hover:border-blue-600">

          <Moon className="mx-auto mb-3 text-slate-700" />

          Dark

        </button>

        <button className="rounded-2xl border border-blue-200 p-6 hover:border-blue-600">

          <Monitor className="mx-auto mb-3 text-blue-600" />

          System

        </button>

      </div>

    </div>
  );
}