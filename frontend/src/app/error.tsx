"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F8FAFC]">

      <h1 className="text-5xl font-black">

        Something went wrong

      </h1>

      <button
        onClick={reset}
        className="mt-8 rounded-2xl bg-sky-500 px-8 py-4 font-bold text-white"
      >

        Try Again

      </button>

    </main>
  );
}