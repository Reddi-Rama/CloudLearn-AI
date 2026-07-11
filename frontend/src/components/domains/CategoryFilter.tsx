"use client";

interface Props {
  selected: string;
  onSelect: (category: string) => void;
}

const categories = [
  "All",
  "Cloud",
  "Programming",
  "AI",
  "Data Science",
  "Cyber Security",
  "Blockchain",
];

export default function CategoryFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <section className="pb-10">

      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-6">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`rounded-full px-6 py-3 transition ${
              selected === category
                ? "bg-sky-600 text-white"
                : "border border-slate-300 hover:bg-sky-100"
            }`}
          >
            {category}
          </button>

        ))}

      </div>

    </section>
  );
}