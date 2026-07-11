"use client";

export default function CourseSearch() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <input
        type="text"
        placeholder="Search courses..."
        className="w-full rounded-full border border-slate-200 bg-white px-8 py-5 shadow-sm outline-none"
      />
    </div>
  );
}