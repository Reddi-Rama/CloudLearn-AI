import Link from "next/link";

export default function DomainPage({
  params,
}: {
  params: {
    domain: string;
  };
}) {
  const courses = {
    programming: [
      "python-development",
      "cpp-development",
      "java-development",
      "c-development",
    ],
  };

  const domainCourses =
    courses[
      params.domain as keyof typeof courses
    ] || [];

  return (
    <main className="mx-auto max-w-7xl py-20">

      <h1 className="text-5xl font-bold mb-12 capitalize">
        {params.domain}
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {domainCourses.map((course) => (
          <Link
            key={course}
            href={`/courses/${course}`}
            className="rounded-3xl bg-white p-8 shadow-sm"
          >
            {course.replace("-", " ")}
          </Link>
        ))}

      </div>

    </main>
  );
}