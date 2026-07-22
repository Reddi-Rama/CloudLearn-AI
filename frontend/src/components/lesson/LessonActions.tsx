interface LessonActionsProps {
  onBookmark?: () => void;
  onShare?: () => void;
}

export default function LessonActions({
  onBookmark,
  onShare,
}: LessonActionsProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Lesson Actions
      </h2>

      <div className="mt-5 flex flex-wrap gap-4">
        <button
          onClick={onBookmark}
          className="rounded-xl bg-sky-500 px-5 py-3 text-white transition hover:bg-sky-600"
        >
          Bookmark Lesson
        </button>

        <button
          onClick={onShare}
          className="rounded-xl bg-slate-800 px-5 py-3 text-white transition hover:bg-slate-900"
        >
          Share Lesson
        </button>
      </div>
    </div>
  );
}