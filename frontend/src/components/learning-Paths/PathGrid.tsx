"use client";

import PathCard from "./PathCard";

const learningPaths = [
  {
    title: "Frontend Development",
    description:
      "Master HTML, CSS, JavaScript, React and Next.js.",
    lessons: 82,
    duration: "10 Weeks",
    level: "Beginner",
    progress: 35,
  },
  {
    title: "Backend Development",
    description:
      "Learn Node.js, Express, MongoDB and APIs.",
    lessons: 76,
    duration: "9 Weeks",
    level: "Intermediate",
    progress: 10,
  },
  {
    title: "Cloud Computing",
    description:
      "AWS, Azure, Docker, Kubernetes and DevOps.",
    lessons: 95,
    duration: "14 Weeks",
    level: "Intermediate",
    progress: 50,
  },
  {
    title: "Artificial Intelligence",
    description:
      "Generative AI, ML and Deep Learning.",
    lessons: 120,
    duration: "16 Weeks",
    level: "Advanced",
    progress: 15,
  },
  {
    title: "Cyber Security",
    description:
      "Ethical Hacking and Network Security.",
    lessons: 70,
    duration: "8 Weeks",
    level: "Intermediate",
    progress: 0,
  },
  {
    title: "Data Science",
    description:
      "Python, Pandas, NumPy and Visualization.",
    lessons: 90,
    duration: "12 Weeks",
    level: "Intermediate",
    progress: 20,
  },
];

export default function PathGrid() {
  return (
    <section className="pb-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {learningPaths.map((path) => (
            <PathCard
              key={path.title}
              {...path}
            />
          ))}

        </div>

      </div>

    </section>
  );
}