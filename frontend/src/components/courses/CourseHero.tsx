"use client";

export default function CourseHero() {
  return (
    <section className="py-24 text-center">
      <span className="rounded-full bg-sky-100 px-5 py-2 text-sky-700">
        Explore Courses
      </span>

      <h1 className="mt-8 text-6xl font-bold">
        Learn One Course
        <br />
        <span className="text-sky-600">
          At A Time
        </span>
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-500">
        Discover professionally designed courses with lessons,
        projects and certificates.
      </p>
    </section>
  );
}