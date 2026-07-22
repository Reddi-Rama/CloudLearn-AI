interface LessonProgressProps {
  completed: number;
  total: number;
}

export default function LessonProgress({
  completed,
  total,
}: LessonProgressProps) {
  const percentage = (completed / total) * 100;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
      <h3 className="font-semibold text-slate-800">
        Course Progress
      </h3>

      <div className="mt-4 h-3 rounded-full bg-slate-200 overflow-hidden">
        <div
          className="h-full rounded-full bg-sky-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm text-slate-600">
        {completed} of {total} lessons completed
      </p>
    </div>
  );
}