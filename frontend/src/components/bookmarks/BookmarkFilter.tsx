const filters = [
  "All",
  "Courses",
  "Lessons",
  "Assessments",
];

export default function BookmarkFilter() {
  return (
    <div className="flex justify-center gap-4 py-10">

      {filters.map((filter) => (
        <button
          key={filter}
          className="rounded-full bg-white px-6 py-3 shadow-sm hover:bg-sky-600 hover:text-white"
        >
          {filter}
        </button>
      ))}

    </div>
  );
}