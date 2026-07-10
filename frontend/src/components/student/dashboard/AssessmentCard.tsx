"use client";

interface AssessmentCardProps {
  subject: string;
  date: string;
}

export default function AssessmentCard({
  subject,
  date,
}: AssessmentCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">

      <h3 className="text-xl font-bold">
        {subject}
      </h3>

      <p className="mt-2 text-slate-500">
        {date}
      </p>

      <button className="mt-5 rounded-xl bg-sky-600 px-5 py-2 text-white hover:bg-sky-700">
        Start Assessment
      </button>

    </div>
  );
}