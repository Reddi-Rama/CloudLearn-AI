export default function LessonSummary() {
  return (
    <div className="rounded-3xl border border-green-200 bg-green-50 p-8">
      <h2 className="text-2xl font-bold text-green-700">
        Lesson Summary
      </h2>

      <p className="mt-5 text-slate-700 leading-8">
        You have successfully completed this lesson.
        Review the key concepts before moving to the next lesson.
      </p>
    </div>
  );
}