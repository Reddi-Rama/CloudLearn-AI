"use client";

const careers = [
  "Frontend Developer",
  "Backend Developer",
  "Cloud Engineer",
  "AI Engineer",
  "Data Scientist",
  "Cyber Security Analyst",
];

export default function CareerSection() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6 text-center">

        <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
          Career Opportunities
        </span>

        <h2 className="mt-6 text-5xl font-black">

          Build Your Dream Career

        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {careers.map((career) => (

            <div
              key={career}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold">
                {career}
              </h3>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}