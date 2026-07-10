"use client";

import DomainCard from "./DomainCard";
import { domains } from "./domainData";

export default function DomainGrid() {
  return (
    <section className="pb-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {domains.map((domain) => (

            <DomainCard
              key={domain.title}
              {...domain}
            />

          ))}

        </div>

      </div>

    </section>
  );
}