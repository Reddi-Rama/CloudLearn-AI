"use client";

import { Save } from "lucide-react";

interface SaveSettingsButtonProps {
  onClick: () => void;
}

export default function SaveSettingsButton({
  onClick,
}: SaveSettingsButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
    >
      <Save size={18} />

      Save Settings

    </button>
  );
}