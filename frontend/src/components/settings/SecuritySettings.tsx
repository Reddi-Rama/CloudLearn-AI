"use client";

export default function SecuritySettings() {
  return (
    <div className="glass-card rounded-3xl p-8">

      <h2 className="text-2xl font-bold">

        Security

      </h2>

      <div className="mt-8 space-y-5">

        <input
          type="password"
          placeholder="Current Password"
          className="w-full rounded-2xl border border-slate-200 p-4"
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full rounded-2xl border border-slate-200 p-4"
        />

      </div>

    </div>
  );
}