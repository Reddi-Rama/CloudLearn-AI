"use client";

interface Props {
  studentName: string;
  courseName: string;
  issueDate: string;
  certificateId: string;
}

export default function CertificateDetails({
  studentName,
  courseName,
  issueDate,
  certificateId,
}: Props) {
  return (
    <div className="space-y-6">

      <div>

        <p className="text-slate-500">
          Student
        </p>

        <h2 className="text-3xl font-bold">
          {studentName}
        </h2>

      </div>

      <div>

        <p className="text-slate-500">
          Course
        </p>

        <h3 className="text-2xl font-semibold">
          {courseName}
        </h3>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div>

          <p className="text-slate-500">
            Issue Date
          </p>

          <h4>{issueDate}</h4>

        </div>

        <div>

          <p className="text-slate-500">
            Certificate ID
          </p>

          <h4>{certificateId}</h4>

        </div>

      </div>

    </div>
  );
}