"use client";

import { Settings } from "lucide-react";

export default function SettingsHeader() {
  return (
    <section className="pt-32 pb-12">

      <div className="container-custom text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">

          <Settings
            size={48}
            className="text-blue-600"
          />

        </div>

        <h1 className="mt-6 text-5xl font-bold">

          Settings

        </h1>

        <p className="mt-4 text-slate-600">

          Customize your CloudLearn AI experience.

        </p>

      </div>

    </section>
  );
}