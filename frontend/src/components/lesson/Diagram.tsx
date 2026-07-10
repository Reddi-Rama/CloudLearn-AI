"use client";

export default function Diagram() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-sky-300 bg-sky-50 p-10">

      <div className="rounded-xl bg-sky-600 px-6 py-3 text-white font-bold">
        HTML
      </div>

      <div className="my-4 h-10 w-1 bg-sky-300" />

      <div className="flex gap-6">

        <div className="rounded-xl bg-white px-5 py-3 shadow">
          Head
        </div>

        <div className="rounded-xl bg-white px-5 py-3 shadow">
          Body
        </div>

      </div>

    </div>
  );
}