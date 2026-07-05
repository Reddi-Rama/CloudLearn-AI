"use client";

export default function PrivacySettings() {
  return (
    <div className="glass-card rounded-3xl p-8">

      <h2 className="text-2xl font-bold">
        Privacy
      </h2>

      <div className="mt-8 space-y-5">

        <label className="flex items-center justify-between">

          Public Profile

          <input type="checkbox" />

        </label>

        <label className="flex items-center justify-between">

          Show Certificates Publicly

          <input type="checkbox" />

        </label>

      </div>

    </div>
  );
}