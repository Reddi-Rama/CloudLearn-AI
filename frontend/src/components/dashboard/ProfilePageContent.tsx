"use client";

import ProfileCard from "./ProfileCard";
import SettingsPanel from "./SettingsPanel";

export default function ProfilePageContent() {
  return (
    <section className="grid gap-8 lg:grid-cols-3">

      <div className="lg:col-span-1">
        <ProfileCard />
      </div>

      <div className="lg:col-span-2 space-y-8">
        <SettingsPanel />
      </div>

    </section>
  );
}
