interface KeyPointsProps {
  points: string[];
}

export default function KeyPoints({
  points,
}: KeyPointsProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Key Takeaways
      </h2>

      <div className="mt-6 space-y-4">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
          >
            <div className="mt-2 h-3 w-3 rounded-full bg-sky-500" />

            <p className="text-slate-700">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}