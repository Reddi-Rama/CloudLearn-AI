"use client";

const stats = [
  {
    number: "50K+",
    title: "Students",
  },
  {
    number: "500+",
    title: "Lessons",
  },
  {
    number: "25+",
    title: "Learning Domains",
  },
  {
    number: "98%",
    title: "Student Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.title}
              className="rounded-[32px] bg-white p-10 text-center shadow-xl transition hover:-translate-y-2"
            >

              <h2 className="text-5xl font-black text-sky-600">

                {item.number}

              </h2>

              <p className="mt-4 text-lg text-slate-600">

                {item.title}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}