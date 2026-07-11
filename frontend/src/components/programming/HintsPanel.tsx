"use client";

const hints = [
  "Use loops.",
  "Use string indexing.",
  "Think about two pointers.",
];

export default function HintsPanel() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="text-2xl font-bold">

        Hints

      </h2>

      <div className="mt-6 space-y-4">

        {hints.map((hint) => (

          <div
            key={hint}
            className="rounded-xl bg-yellow-50 p-4"
          >

            {hint}

          </div>

        ))}

      </div>

    </section>
  );
}