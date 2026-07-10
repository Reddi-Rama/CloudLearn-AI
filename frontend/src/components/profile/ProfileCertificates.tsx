"use client";

export default function ProfileCertificates() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        Certificates
      </h2>

      <div className="mt-5 space-y-3">
        <div className="rounded-xl bg-slate-50 p-4">
          Frontend Development Certificate
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          Cloud Computing Certificate
        </div>
      </div>
    </div>
  );
}