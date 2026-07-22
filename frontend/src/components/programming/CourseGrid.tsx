import Link from "next/link";

export default function CourseGrid() {
  const courses = [
    {
      name: "Python Development",
      slug: "python-development",
    },
    {
      name: "C++ Development",
      slug: "cpp-development",
    },
    {
      name: "Java Development",
      slug: "java-development",
    },
    {
      name: "C Development",
      slug: "c-development",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {courses.map((course) => (
          <Link
            key={course.slug}
            href={`/courses/${course.slug}`}
            className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-slate-900">
              {course.name}
            </h2>

            <p className="mt-4 text-slate-500">
              Start learning {course.name}
            </p>
          </Link>
        ))}

      </div>
    </div>
  );
}