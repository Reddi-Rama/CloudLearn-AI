"use client";

export default function DangerZone() {
  return (
    <div className="rounded-3xl border border-red-200 bg-red-50 p-8">

      <h2 className="text-2xl font-bold text-red-600">
        Danger Zone
      </h2>

      <p className="mt-4 text-red-500">
        These actions cannot be undone.
      </p>

      <div className="mt-6 flex gap-4">

        <button className="rounded-xl bg-red-500 px-6 py-3 text-white">
          Logout All Devices
        </button>

        <button className="rounded-xl bg-red-700 px-6 py-3 text-white">
          Delete Account
        </button>

      </div>

    </div>
  );
}