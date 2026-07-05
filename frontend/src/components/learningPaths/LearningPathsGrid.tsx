import LearningPathsCard from "./LearningPathsCard";

const paths = [
  {
    title: "Artificial Intelligence",
    level: "Beginner → Advanced",
    duration: "6 Months",
  },
  {
    title: "Machine Learning",
    level: "Beginner → Advanced",
    duration: "5 Months",
  },
  {
    title: "Data Science",
    level: "Intermediate",
    duration: "7 Months",
  },
  {
    title: "Full Stack Development",
    level: "Beginner",
    duration: "8 Months",
  },
  {
    title: "Cloud Computing",
    level: "Intermediate",
    duration: "4 Months",
  },
  {
    title: "Cyber Security",
    level: "Intermediate",
    duration: "5 Months",
  },
];

export default function LearningPathsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {paths.map((path) => (
          <LearningPathsCard
            key={path.title}
            {...path}
          />
        ))}

      </div>

    </section>
  );
}