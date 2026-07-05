"use client";

import { ShieldCheck } from "lucide-react";

export default function AuthHero() {
  return (
    <div className="mb-8 text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">

        <ShieldCheck
          size={42}
          className="text-blue-600"
        />

      </div>

      <h2 className="mt-6 text-3xl font-bold">
        CloudLearn AI
      </h2>

      <p className="mt-3 text-slate-500">
        Learn • Practice • Get Certified
      </p>

    </div>
  );
}