"use client";

interface SkillsCardProps {
  skills: string[];
}

export default function SkillsCard({
  skills,
}: SkillsCardProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-lg dark:bg-slate-900">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        Skills
      </h2>

      {skills.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>
      ) : (
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          No skills added yet.
        </p>
      )}
    </section>
  );
}
