"use client";

import SearchCard from "./SearchCard";

const results = [
  {
    title: "Python Programming",
    category: "Course",
    description:
      "Master Python from fundamentals to advanced programming concepts.",
  },
  {
    title: "Cloud Computing",
    category: "Domain",
    description:
      "Explore cloud services, virtualization, deployment and scalability.",
  },
  {
    title: "Machine Learning Roadmap",
    category: "Learning Path",
    description:
      "A structured roadmap to become an ML Engineer.",
  },
];

export default function SearchResults() {
  return (
    <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {results.map((result) => (

        <SearchCard
          key={result.title}
          {...result}
        />

      ))}

    </section>
  );
}