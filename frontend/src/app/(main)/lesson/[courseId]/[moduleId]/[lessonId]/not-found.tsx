import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">

      <div className="text-center">

        <h1 className="text-7xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Lesson Not Found
        </h2>

        <p className="mt-4 text-slate-600">
          The lesson you are looking for does not exist.
        </p>

        <Link
          href="/domains/programming"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 text-white"
        >
          Back to Programming Domain
        </Link>

      </div>

    </div>
  );
}