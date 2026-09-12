"use client";

export default function NotFound() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">
          Page Not Found
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          The page you are looking for could not be found.
        </p>
      </div>
    </div>
  );
}
