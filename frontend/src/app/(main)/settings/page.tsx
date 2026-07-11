import {
  SettingsHeader,
  AccountSettings,
  NotificationSettings,
  SecuritySettings,
  AppearanceSettings,
  PrivacySettings,
  DangerZone,
} from "@/components/settings";

export default function SettingsPage() {
  return (
    <div className="space-y-8">

      <SettingsHeader />

      <AccountSettings />

      <NotificationSettings />

      <SecuritySettings />

      <AppearanceSettings />

      <PrivacySettings />

      <DangerZone />

    </div>
  );
}