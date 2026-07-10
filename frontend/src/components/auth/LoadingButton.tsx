"use client";

import { Loader2 } from "lucide-react";

interface LoadingButtonProps {
  loading?: boolean;
  text: string;
}

export default function LoadingButton({
  loading = false,
  text,
}: LoadingButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-sky-600 py-4 font-bold text-white transition hover:bg-sky-700 disabled:opacity-60"
    >
      {loading && (
        <Loader2
          size={20}
          className="animate-spin"
        />
      )}

      {loading ? "Please wait..." : text}
    </button>
  );
}