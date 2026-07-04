"use client";

import {
  Mail,
  GraduationCap,
  UserCircle,
} from "lucide-react";

export default function ProfileCard() {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-lg">

      <div className="text-center">

        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white">

          <UserCircle size={60} />

        </div>

        <h2 className="mt-6 text-2xl font-bold">

          Reddi Rama

        </h2>

        <p className="mt-2 text-slate-500">

          B.Tech Student

        </p>

      </div>

      <div className="mt-10 space-y-5">

        <div className="flex items-center gap-4">

          <Mail
            size={20}
            className="text-sky-600"
          />

          <span>

            rama@email.com

          </span>

        </div>

        <div className="flex items-center gap-4">

          <GraduationCap
            size={20}
            className="text-indigo-600"
          />

          <span>

            Information Technology

          </span>

        </div>

      </div>

      <button className="mt-10 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 py-4 font-semibold text-white">

        Edit Profile

      </button>

    </section>
  );
}