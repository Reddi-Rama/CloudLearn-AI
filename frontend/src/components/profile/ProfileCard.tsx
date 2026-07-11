"use client";

import ProfileAvatar from "./ProfileAvatar";
import EditprofileButton from "./EditprofileButton";

interface ProfileCardProps {
  name?: string;
  email?: string;
  role?: string;
}

export default function ProfileCard({
  name = "Rama",
  email = "rama@example.com",
  role = "B.Tech IT Student",
}: ProfileCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex flex-col items-center text-center">

        <ProfileAvatar />

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          {name}
        </h2>

        <p className="mt-2 text-slate-600">
          {email}
        </p>

        <span className="mt-4 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
          {role}
        </span>

        <div className="mt-8">
          <EditprofileButton />
        </div>

      </div>

      <div className="mt-10 grid grid-cols-3 gap-4 text-center">

        <div className="rounded-2xl bg-slate-50 p-4">
          <h3 className="text-2xl font-bold text-sky-600">
            12
          </h3>

          <p className="text-sm text-slate-500">
            Courses
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <h3 className="text-2xl font-bold text-sky-600">
            8
          </h3>

          <p className="text-sm text-slate-500">
            Certificates
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <h3 className="text-2xl font-bold text-sky-600">
            245
          </h3>

          <p className="text-sm text-slate-500">
            Problems Solved
          </p>
        </div>

      </div>

    </div>
  );
}