"use client";

import { Download } from "lucide-react";

interface DownloadButtonProps {
  onClick: () => void;
}

export default function DownloadButton({
  onClick,
}: DownloadButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      <Download size={18} />
      Download PDF
    </button>
  );
}