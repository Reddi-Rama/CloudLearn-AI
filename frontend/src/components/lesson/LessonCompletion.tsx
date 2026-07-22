interface LessonCompletionProps {
  completed?: boolean;
}

export default function LessonCompletion({
  completed = true,
}: LessonCompletionProps) {
  return (
    <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
      <div className="text-6xl">
        {completed ? "✅" : "⏳"}
      </div>

      <h2 className="mt-4 text-2xl font-bold text-green-700">
        {completed
          ? "Lesson Completed"
          : "Lesson In Progress"}
      </h2>

      <p className="mt-3 text-slate-700">
        {completed
          ? "Great job! You can continue to the next lesson."
          : "Finish the lesson to unlock the next one."}
      </p>
    </div>
  );
}