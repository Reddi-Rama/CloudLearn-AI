export default function LessonResources() {
  const resources = [
    "Official Documentation",
    "Practice Exercises",
    "Additional Reading Material",
    "Reference Examples",
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Resources
      </h2>

      <div className="mt-6 space-y-4">
        {resources.map((resource) => (
          <div
            key={resource}
            className="rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
          >
            {resource}
          </div>
        ))}
      </div>
    </div>
  );
}