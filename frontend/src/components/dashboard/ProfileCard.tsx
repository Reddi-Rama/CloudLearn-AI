"use client";

import {
  UserCircle2,
  Mail,
  GraduationCap,
} from "lucide-react";

export default function ProfileCard() {
  return (
    <section className="mt-14">

      <div className="rounded-[32px] bg-white p-8 shadow-lg">

        <div className="flex items-center gap-6">

          <UserCircle2
            size={80}
            className="text-blue-600"
          />

          <div>

            <h2 className="text-3xl font-bold">
              Rama
            </h2>

            <p className="mt-2 text-slate-500">
              B.Tech Information Technology
            </p>

          </div>

        </div>

        <div className="mt-8 space-y-5">

          <div className="flex items-center gap-3">

            <Mail
              size={20}
              className="text-blue-600"
            />

            <span>rama@email.com</span>

          </div>

          <div className="flex items-center gap-3">

            <GraduationCap
              size={20}
              className="text-blue-600"
            />

            <span>CloudLearn AI Student</span>

          </div>

        </div>

      </div>

    </section>
  );
}