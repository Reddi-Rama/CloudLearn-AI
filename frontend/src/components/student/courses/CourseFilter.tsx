"use client";

const categories = [
  "All",
  "Programming",
  "Cloud",
  "AI",
];

export default function CourseFilter() {
  return (
    <div className="flex flex-wrap gap-4">

      {categories.map((item) => (

        <button
          key={item}
          className="rounded-full border px-5 py-3 hover:bg-sky-600 hover:text-white"
        >
          {item}
        </button>

      ))}

    </div>
  );
}