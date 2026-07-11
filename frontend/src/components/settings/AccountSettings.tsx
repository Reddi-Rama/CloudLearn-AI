"use client";

export default function AccountSettings() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        Account Settings
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">

        <input
          placeholder="Full Name"
          className="rounded-xl border p-4"
        />

        <input
          placeholder="Email Address"
          className="rounded-xl border p-4"
        />

      </div>

      <button className="mt-6 rounded-xl bg-sky-600 px-6 py-3 text-white">
        Save Changes
      </button>
    </div>
  );
}