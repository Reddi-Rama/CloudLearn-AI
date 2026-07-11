"use client";

export default function RecommendedCourses() {
  return (
    <section>

      <h2 className="mb-6 text-3xl font-black">
        Recommended Courses
      </h2>

      <div className="grid gap-5 lg:grid-cols-3">

        {[
          "React & Next.js",
          "AWS Cloud",
          "Machine Learning",
        ].map((course) => (

          <div
            key={course}
            className="rounded-3xl bg-white p-8 shadow-md"
          >

            <h3 className="text-xl font-bold">
              {course}
            </h3>

            <p className="mt-3 text-slate-500">
              Recommended based on your learning progress.
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}