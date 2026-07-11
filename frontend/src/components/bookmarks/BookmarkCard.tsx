interface Props {
  title: string;
  lesson: string;
  progress: number;
}

export default function BookmarkCard({
  title,
  lesson,
  progress,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-slate-500">
        {lesson}
      </p>

      <div className="mt-6 h-3 rounded-full bg-slate-200">
        <div
          className="h-3 rounded-full bg-sky-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-4 text-sky-600">
        {progress}% Completed
      </p>

      <div className="mt-6 flex gap-4">
        <button className="rounded-xl bg-sky-600 px-5 py-3 text-white">
          Resume
        </button>

        <button className="rounded-xl border border-red-200 px-5 py-3 text-red-500">
          Remove
        </button>
      </div>

    </div>
  );
}