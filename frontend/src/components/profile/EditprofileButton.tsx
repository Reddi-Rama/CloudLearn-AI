"use client";

import { Edit3 } from "lucide-react";

interface EditprofileButtonProps {
  onClick?: () => void;
}

export default function EditprofileButton({
  onClick,
}: EditprofileButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2
        rounded-2xl
        bg-sky-600
        px-6 py-3
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-300
        hover:bg-sky-700
        hover:scale-105
      "
    >
      <Edit3 size={18} />

      Edit Profile
    </button>
  );
}