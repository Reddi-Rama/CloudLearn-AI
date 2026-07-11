"use client";

export default function PrivacySettings() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        Privacy
      </h2>

      <div className="mt-6 space-y-4">

        <label className="flex justify-between">
          Public Profile
          <input type="checkbox" />
        </label>

        <label className="flex justify-between">
          Public Certificates
          <input type="checkbox" />
        </label>

      </div>
    </div>
  );
}