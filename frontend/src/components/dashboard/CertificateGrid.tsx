"use client";

import { Award } from "lucide-react";

const certificates = [
  "Artificial Intelligence",
  "Python Programming",
  "Cloud Computing",
  "Machine Learning",
  "Data Science",
  "Cyber Security",
];

export default function CertificateGrid() {
  return (
    <section className="mt-14">

      <h2 className="mb-8 text-3xl font-bold">
        Certificate Gallery
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {certificates.map((item) => (

          <div
            key={item}
            className="rounded-[28px] bg-white p-8 shadow-lg hover:shadow-2xl transition"
          >

            <Award
              size={46}
              className="text-yellow-500"
            />

            <h3 className="mt-5 text-xl font-bold">
              {item}
            </h3>

            <p className="mt-2 text-slate-500">
              Successfully Completed
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}