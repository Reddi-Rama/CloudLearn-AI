"use client";

const categories = [
  "All",
  "Popular",
  "Beginner",
  "Intermediate",
  "Advanced",
];

export default function CourseFilter() {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-8">
      {categories.map((category) => (
        <button
          key={category}
          className="rounded-full bg-white px-6 py-3 shadow-sm hover:bg-sky-600 hover:text-white"
        >
          {category}
        </button>
      ))}
    </div>
  );
}