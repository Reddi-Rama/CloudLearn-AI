"use client";

const categories = [
  "All",
  "Programming",
  "Artificial Intelligence",
  "Data Science",
  "Cloud",
  "Cyber Security",
  "Development",
];

interface Props {
  selected: string;
  onSelect: (category: string) => void;
}

export default function DomainFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-6 py-3 font-medium transition-all ${
            selected === category
              ? "bg-blue-600 text-white shadow-lg"
              : "glass-card text-slate-700 hover:bg-blue-50"
          }`}
        >
          {category}
        </button>

      ))}

    </div>
  );
}