import Link from "next/link";

export default function ProgrammingHero() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold mb-12">
        Programming Domain
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <Link
          href="/courses/python-development"
          className="rounded-3xl bg-white p-8 shadow"
        >
          Python Development
        </Link>

        <Link
          href="/courses/cpp-development"
          className="rounded-3xl bg-white p-8 shadow"
        >
          C++ Development
        </Link>

        <Link
          href="/courses/java-development"
          className="rounded-3xl bg-white p-8 shadow"
        >
          Java Development
        </Link>

        <Link
          href="/courses/c-development"
          className="rounded-3xl bg-white p-8 shadow"
        >
          C Development
        </Link>

      </div>
    </div>
  );
}