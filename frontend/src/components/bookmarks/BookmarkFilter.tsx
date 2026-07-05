"use client";

export default function BookmarkFilter() {
  return (
    <div className="mb-8 flex flex-wrap gap-3">

      <button className="rounded-full bg-sky-600 px-5 py-2 text-white">
        All
      </button>

      <button className="rounded-full bg-sky-100 px-5 py-2">
        Courses
      </button>

      <button className="rounded-full bg-sky-100 px-5 py-2">
        Lessons
      </button>

    </div>
  );
}