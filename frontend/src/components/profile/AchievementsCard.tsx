"use client";

interface AchievementsCardProps {
  achievements: string[];
}

export default function AchievementsCard({
  achievements,
}: AchievementsCardProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-lg dark:bg-slate-900">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        Achievements
      </h2>

      {achievements.length > 0 ? (
        <div className="mt-4 space-y-2">
          {achievements.map((achievement) => (
            <div
              key={achievement}
              className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {achievement}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          No achievements yet.
        </p>
      )}
    </section>
  );
}
