"use client";

interface Props {
  current?: number;
  total?: number;
}

export default function QuizProgress({
  current = 1,
  total = 20,
}: Props) {
  const safeTotal = Math.max(total, 1);
  const safeCurrent = Math.min(
    Math.max(current, 0),
    safeTotal
  );

  const percent = (safeCurrent / safeTotal) * 100;

  return (
    <div className="mb-8 rounded-3xl bg-white p-6 shadow-lg">
      <div className="mb-3 flex justify-between">
        <span className="font-semibold">
          Question {safeCurrent} of {safeTotal}
        </span>

        <span>
          {Math.round(percent)}%
        </span>
      </div>

      <div className="h-4 overflow-hidden rounded-full bg-slate-200">
        <div
          style={{ width: `${percent}%` }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-600"
        />
      </div>
    </div>
  );
}
