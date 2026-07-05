"use client";

export default function AccountSettings() {
  return (
    <div className="glass-card rounded-3xl p-8">

      <h2 className="text-2xl font-bold">

        Account Settings

      </h2>

      <div className="mt-8 space-y-6">

        <input
          placeholder="Full Name"
          className="w-full rounded-2xl border border-slate-200 p-4 outline-none"
        />

        <input
          placeholder="Email"
          className="w-full rounded-2xl border border-slate-200 p-4 outline-none"
        />

      </div>

    </div>
  );
}