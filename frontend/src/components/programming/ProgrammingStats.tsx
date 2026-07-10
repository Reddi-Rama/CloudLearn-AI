"use client";

export default function ProgrammingStats() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="text-2xl font-bold">

        Your Progress

      </h2>

      <div className="mt-8 space-y-6">

        <div>

          <p className="text-slate-500">
            Solved
          </p>

          <h3 className="text-4xl font-black text-sky-600">
            18
          </h3>

        </div>

        <div>

          <p className="text-slate-500">
            Success Rate
          </p>

          <h3 className="text-4xl font-black text-emerald-600">
            82%
          </h3>

        </div>

        <div>

          <p className="text-slate-500">
            Ranking
          </p>

          <h3 className="text-4xl font-black text-indigo-600">
            #124
          </h3>

        </div>

      </div>

    </section>
  );
}