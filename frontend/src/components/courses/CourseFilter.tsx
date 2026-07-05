"use client";

const filters = [
  "All",
  "Popular",
  "Beginner",
  "Intermediate",
  "Advanced",
];

interface Props {
  selected: string;
  onSelect: (value: string) => void;
}

export default function CourseFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">

      {filters.map((filter) => (

        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={`rounded-full px-6 py-3 transition-all ${
            selected === filter
              ? "bg-blue-600 text-white shadow-lg"
              : "glass-card text-slate-700 hover:bg-blue-50"
          }`}
        >
          {filter}
        </button>

      ))}

    </div>
  );
}