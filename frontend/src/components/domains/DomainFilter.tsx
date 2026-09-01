"use client";

const categories = [
  "All",
  "Programming",
  "Artificial Intelligence",
  "Data Science",
  "Cloud Computing",
  "Cyber Security",
];

interface DomainFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function DomainFilter({
  selected,
  onSelect,
}: DomainFilterProps) {
  return (
    <section className="relative z-10 px-6 pb-14 pt-4">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4">

        {categories.map((category) => {
          const isSelected = selected === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelect(category)}
              className={`
                rounded-full
                border
                px-6
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  isSelected
                    ? "border-sky-600 bg-sky-600 text-white shadow-lg shadow-sky-200"
                    : "border-slate-200 bg-white text-slate-700 shadow-sm hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
                }
              `}
            >
              {category}
            </button>
          );
        })}

      </div>
    </section>
  );
}