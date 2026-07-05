"use client";

import { Share2 } from "lucide-react";

interface ShareButtonProps {
  onClick: () => void;
}

export default function ShareButton({
  onClick,
}: ShareButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-2xl border border-blue-200 px-6 py-3 font-semibold hover:bg-blue-50"
    >
      <Share2 size={18} />
      Share
    </button>
  );
}