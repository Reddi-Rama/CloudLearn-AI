"use client";

import { Pencil } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function EditProfileButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
    >
      <Pencil size={18} />
      Edit Profile
    </button>
  );
}