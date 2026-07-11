"use client";

export default function ProfileActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="rounded-xl bg-sky-600 px-5 py-3 text-white">
        Edit Profile
      </button>

      <button className="rounded-xl border border-slate-300 px-5 py-3">
        Download Resume
      </button>

      <button className="rounded-xl border border-slate-300 px-5 py-3">
        View Certificates
      </button>
    </div>
  );
}