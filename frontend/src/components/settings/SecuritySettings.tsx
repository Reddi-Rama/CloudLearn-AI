"use client";

export default function SecuritySettings() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        Security
      </h2>

      <div className="mt-6 space-y-4">

        <input
          type="password"
          placeholder="Current Password"
          className="w-full rounded-xl border p-4"
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full rounded-xl border p-4"
        />

      </div>

      <button className="mt-6 rounded-xl bg-sky-600 px-6 py-3 text-white">
        Update Password
      </button>
    </div>
  );
}