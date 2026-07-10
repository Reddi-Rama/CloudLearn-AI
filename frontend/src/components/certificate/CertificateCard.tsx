"use client";

interface CertificateCardProps {
  course: string;
  score: number;
  issueDate: string;
  credentialId: string;
}

export default function CertificateCard({
  course,
  score,
  issueDate,
  credentialId,
}: CertificateCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg transition hover:shadow-xl">

      <h2 className="text-2xl font-bold text-slate-900">
        {course}
      </h2>

      <div className="mt-6 space-y-2 text-slate-600">

        <p>
          Score: <span className="font-semibold">{score}%</span>
        </p>

        <p>
          Issued: {issueDate}
        </p>

        <p className="text-sm text-slate-500">
          {credentialId}
        </p>

      </div>

      <button className="mt-6 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white hover:bg-sky-700">
        View Certificate
      </button>

    </div>
  );
}