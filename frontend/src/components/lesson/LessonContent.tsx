interface LessonContentProps {
  courseId?: string;
  moduleId?: string;
  lessonId?: string;
}

export default function LessonContent({
  courseId,
  moduleId,
  lessonId,
}: LessonContentProps) {
  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

      <div className="min-w-0 max-w-full">

        <h2 className="text-2xl font-bold text-slate-900">
          Lesson Content
        </h2>

        <div className="mt-6 min-w-0 max-w-full space-y-6 text-slate-700">

          <p className="break-words text-base leading-8 sm:text-lg">
            This lesson belongs to the{" "}
            <strong>{courseId || "course"}</strong> course,
            inside <strong>{moduleId || "module"}</strong>, and covers{" "}
            <strong>{lessonId || "this lesson"}</strong>.
          </p>

          <p className="break-words text-base leading-8 sm:text-lg">
            Your actual lesson content from your content files will appear
            here dynamically.
          </p>

        </div>

      </div>

    </section>
  );
}