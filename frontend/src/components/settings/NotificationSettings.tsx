"use client";

export default function NotificationSettings() {
  return (
    <div className="glass-card rounded-3xl p-8">

      <h2 className="text-2xl font-bold">

        Notifications

      </h2>

      <div className="mt-8 space-y-5">

        <label className="flex items-center justify-between">

          Email Notifications

          <input type="checkbox" />

        </label>

        <label className="flex items-center justify-between">

          Assessment Reminders

          <input type="checkbox" />

        </label>

      </div>

    </div>
  );
}