"use client";

const skills = [
  "Python",
  "C++",
  "React",
  "Cloud Computing",
  "Machine Learning",
];

export default function ProfileSkills() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        Skills
      </h2>

      <div className="mt-5 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-sky-100 px-4 py-2 text-sky-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}