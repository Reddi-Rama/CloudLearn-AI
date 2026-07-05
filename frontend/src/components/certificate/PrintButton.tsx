"use client";

import { Printer } from "lucide-react";

interface PrintButtonProps {
  onClick: () => void;
}

export default function PrintButton({
  onClick,
}: PrintButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-2xl border border-blue-200 px-6 py-3 font-semibold hover:bg-blue-50"
    >
      <Printer size={18} />
      Print
    </button>
  );
}