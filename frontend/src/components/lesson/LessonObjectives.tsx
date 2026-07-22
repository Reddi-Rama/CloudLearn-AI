export default function LessonObjectives() {
  const objectives = [
    "Understand the core concept.",
    "Learn real-world applications.",
    "Practice using examples.",
    "Prepare for assessments.",
  ];

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900">
        Learning Objectives
      </h2>

      <ul className="mt-5 space-y-4">
        {objectives.map((objective) => (
          <li
            key={objective}
            className="flex items-center gap-3"
          >
            <div className="h-3 w-3 rounded-full bg-sky-500" />

            <span className="text-slate-700">
              {objective}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}