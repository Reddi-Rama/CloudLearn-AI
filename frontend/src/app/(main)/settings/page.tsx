import {
  SettingsHeader,
  AccountSettings,
  SecuritySettings,
  NotificationSettings,
  AppearanceSettings,
  LanguageSettings,
  PrivacySettings,
  DangerZone,
  SaveSettingsButton,
} from "@/components/settings";

export default function SettingsPage() {
  return (
    <main className="container-custom space-y-8 py-10">

      <SettingsHeader />

      <AccountSettings />

      <SecuritySettings />

      <NotificationSettings />

      <AppearanceSettings />

      <LanguageSettings />

      <PrivacySettings />

      <DangerZone />

      <div className="flex justify-end">

        <SaveSettingsButton onClick={() => {}} />

      </div>

    </main>
  );
}