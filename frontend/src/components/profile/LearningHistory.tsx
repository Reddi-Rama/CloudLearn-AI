"use client";

interface HistoryItem {
  title: string;
  completed: string;
}

interface LearningHistoryProps {
  history: HistoryItem[];
}

export default function LearningHistory({
  history,
}: LearningHistoryProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-lg dark:bg-slate-900">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        Learning History
      </h2>

      {history.length > 0 ? (
        <div className="mt-4 space-y-3">
          {history.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="rounded-xl bg-slate-50 px-4 py-3 dark:bg-slate-800"
            >
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                {item.title}
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {item.completed}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          No learning history yet.
        </p>
      )}
    </section>
  );
}
