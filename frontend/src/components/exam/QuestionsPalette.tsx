"use client";

export default function QuestionPalette() {

  return (

    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="mb-8 text-2xl font-bold">

        Question Palette

      </h2>

      <div className="grid grid-cols-5 gap-4">

        {Array.from({ length: 30 }).map((_, i) => (

          <button
            key={i}
            className={`h-12 w-12 rounded-xl font-bold

            ${
              i < 12
                ? "bg-green-500 text-white"
                : "bg-slate-100"
            }`}
          >

            {i + 1}

          </button>

        ))}

      </div>

    </section>

  );

}