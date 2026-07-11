"use client";

import { Save } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function SaveProfileButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-3 text-white transition hover:bg-green-700"
    >
      <Save size={18} />
      Save Changes
    </button>
  );
}