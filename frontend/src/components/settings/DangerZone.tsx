"use client";

export default function DangerZone() {
  return (
    <div className="rounded-3xl border-2 border-red-300 bg-red-50 p-8">

      <h2 className="text-2xl font-bold text-red-600">

        Danger Zone

      </h2>

      <p className="mt-4 text-slate-600">

        Deleting your account is permanent and cannot be undone.

      </p>

      <button className="mt-8 rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">

        Delete Account

      </button>

    </div>
  );
}