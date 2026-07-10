"use client";

export default function NotificationSettings() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        Notification Settings
      </h2>

      <div className="mt-6 space-y-4">

        <label className="flex justify-between">
          Course Notifications
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex justify-between">
          Assessment Reminders
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex justify-between">
          Certificate Alerts
          <input type="checkbox" defaultChecked />
        </label>

      </div>
    </div>
  );
}