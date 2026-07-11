"use client";

import { UserCircle2 } from "lucide-react";

export default function ProfileHeader() {
  return (
    <section className="pt-32 pb-12">

      <div className="container-custom text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">

          <UserCircle2
            size={54}
            className="text-blue-600"
          />

        </div>

        <h1 className="mt-6 text-5xl font-bold">

          My Profile

        </h1>

        <p className="mt-4 text-slate-600">

          Manage your CloudLearn AI profile and learning journey.

        </p>

      </div>

    </section>
  );
}