"use client";

interface ResultCardProps {
  correct: number;
  incorrect: number;
  total: number;
}

export default function ResultCard({
  correct,
  incorrect,
  total,
}: ResultCardProps) {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Assessment Summary
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl bg-green-50 p-6 text-center">

          <h3 className="text-4xl font-black text-green-600">
            {correct}
          </h3>

          <p className="mt-2">
            Correct
          </p>

        </div>

        <div className="rounded-2xl bg-red-50 p-6 text-center">

          <h3 className="text-4xl font-black text-red-600">
            {incorrect}
          </h3>

          <p className="mt-2">
            Incorrect
          </p>

        </div>

        <div className="rounded-2xl bg-blue-50 p-6 text-center">

          <h3 className="text-4xl font-black text-blue-600">
            {total}
          </h3>

          <p className="mt-2">
            Total Questions
          </p>

        </div>

      </div>

    </section>
  );
}