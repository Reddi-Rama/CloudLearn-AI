"use client";

interface ProfileStatsProps {
  courses: number;
  certificates: number;
  assessments: number;
}

export default function ProfileStats({
  courses,
  certificates,
  assessments,
}: ProfileStatsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">

      <div className="glass-card rounded-3xl p-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600">
          {courses}
        </h2>
        <p className="mt-2">Courses</p>
      </div>

      <div className="glass-card rounded-3xl p-6 text-center">
        <h2 className="text-4xl font-bold text-green-600">
          {certificates}
        </h2>
        <p className="mt-2">Certificates</p>
      </div>

      <div className="glass-card rounded-3xl p-6 text-center">
        <h2 className="text-4xl font-bold text-violet-600">
          {assessments}
        </h2>
        <p className="mt-2">Assessments</p>
      </div>

    </div>
  );
}