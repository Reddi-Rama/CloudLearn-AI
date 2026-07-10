"use client";

import PartnerCard from "./PartnerCard";

const partners = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Cisco",
  "Oracle",
  "IBM",
  "Red Hat",
  "Docker",
];

export default function Partners() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            Industry Partners
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Learn Technologies Used By
            Top Companies
          </h2>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {partners.map((partner) => (

            <PartnerCard
              key={partner}
              name={partner}
            />

          ))}

        </div>

      </div>

    </section>
  );
}