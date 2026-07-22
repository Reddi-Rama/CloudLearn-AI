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
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Lesson Content
      </h2>

      <div className="mt-6 space-y-6 text-slate-700 leading-8">
        <p>
          This lesson belongs to the <strong>{courseId}</strong> course,
          inside <strong>{moduleId}</strong>, and covers{" "}
          <strong>{lessonId}</strong>.
        </p>

        <p>
          Your actual lesson content from your content files will appear
          here dynamically.
        </p>
      </div>
    </div>
  );
}