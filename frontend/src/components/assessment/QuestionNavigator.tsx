"use client";

interface QuestionNavigatorProps {
  total: number;
  current: number;
}

export default function QuestionNavigator({
  total,
  current,
}: QuestionNavigatorProps) {
  return (
    <section className="rounded-[30px] bg-white p-6 shadow-lg">

      <h2 className="mb-5 text-xl font-bold">
        Navigate Questions
      </h2>

      <div className="grid grid-cols-5 gap-3">

        {Array.from(
          { length: total },
          (_, index) => (
            <button
              key={index}
              className={`h-12 rounded-xl font-semibold transition ${
                current === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 hover:bg-blue-100"
              }`}
            >
              {index + 1}
            </button>
          )
        )}

      </div>

    </section>
  );
}