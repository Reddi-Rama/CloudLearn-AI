"use client";

interface Props {
  onClick: () => void;
}

export default function SubmitButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-2xl bg-emerald-600 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700"
    >
      Submit Assessment
    </button>
  );
}