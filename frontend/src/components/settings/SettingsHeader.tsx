"use client";

export default function SettingsHeader() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-indigo-600 p-10 text-white">
      <h1 className="text-5xl font-bold">
        Settings
      </h1>

      <p className="mt-4 text-sky-100">
        Manage your account preferences and privacy settings.
      </p>
    </div>
  );
}