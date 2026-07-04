"use client";

interface Props {
  passed: boolean;
}

export default function PassBadge({
  passed,
}: Props) {
  return (
    <div
      className={`inline-flex rounded-full px-6 py-3 font-bold text-white

      ${
        passed
          ? "bg-green-500"
          : "bg-red-500"
      }`}
    >

      {passed ? "PASSED" : "FAILED"}

    </div>
  );
}