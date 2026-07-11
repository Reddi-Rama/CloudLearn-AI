"use client";

interface AcademicInfoProps {
  university: string;
  degree: string;
  year: string;
}

export default function AcademicInfo({
  university,
  degree,
  year,
}: AcademicInfoProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Academic Information
      </h2>

      <div className="space-y-5">

        <div>
          <p className="text-sm text-slate-500">
            University
          </p>

          <p className="text-lg font-semibold text-slate-900">
            {university}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Degree
          </p>

          <p className="text-lg font-semibold text-slate-900">
            {degree}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Current Year
          </p>

          <p className="text-lg font-semibold text-slate-900">
            {year}
          </p>
        </div>

      </div>
    </div>
  );
}