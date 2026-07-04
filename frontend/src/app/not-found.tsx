import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F8FAFC]">

      <h1 className="text-8xl font-black text-sky-600">

        404

      </h1>

      <h2 className="mt-6 text-4xl font-bold">

        Page Not Found

      </h2>

      <p className="mt-5 text-slate-500">

        The page you're looking for doesn't exist.

      </p>

      <Link
        href="/"
        className="mt-10 rounded-2xl bg-sky-500 px-8 py-4 font-bold text-white"
      >

        Back to Home

      </Link>

    </main>
  );
}