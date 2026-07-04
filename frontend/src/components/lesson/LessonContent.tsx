"use client";

export default function LessonContent() {
  return (
    <section className="rounded-3xl bg-white p-10 shadow-lg">

      <span className="rounded-full bg-sky-100 px-4 py-2 text-sky-600">

        Module 2

      </span>

      <h1 className="mt-6 text-5xl font-black">

        Python Data Types

      </h1>

      <p className="mt-8 text-lg leading-9 text-slate-600">

        Python provides several built-in data types.

        The most common are integers, floats,
        strings, booleans, lists, tuples,
        dictionaries and sets.

      </p>

      <div className="mt-10 rounded-3xl bg-slate-100 p-8">

        <pre>

{`age = 20

name = "Rama"

price = 99.5

print(type(age))

print(type(name))

print(type(price))`}

        </pre>

      </div>

    </section>
  );
}