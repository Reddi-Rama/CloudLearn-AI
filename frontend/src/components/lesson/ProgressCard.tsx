"use client";

export default function ProgressCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-600 p-6 text-white shadow-xl">
      <h3 className="text-xl font-bold">
        Course Progress
      </h3>

      <div className="mt-5 h-4 rounded-full bg-white/30 overflow-hidden">
        <div className="h-full w-[45%] rounded-full bg-white" />
      </div>

      <div className="mt-3 flex justify-between text-sm">
        <span>45% Completed</span>

        <span>5 / 12 Lessons</span>
      </div>
    </div>
  );
}