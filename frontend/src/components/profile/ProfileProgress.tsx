"use client";

export default function ProfileProgress() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        Learning Progress
      </h2>

      <div className="mt-6">
        <div className="h-3 rounded-full bg-slate-200">
          <div className="h-3 w-[72%] rounded-full bg-sky-500"></div>
        </div>

        <p className="mt-3 text-slate-600">
          Overall Progress: 72%
        </p>
      </div>
    </div>
  );
}