import Link from "next/link";
import { domains } from "./domainData";

export default function DomainGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {domains.map((domain) => (
        <Link
          key={domain.slug}
          href={`/domains/${domain.slug}`}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-bold">
            {domain.name}
          </h2>

          <p className="mt-4 text-slate-600">
            {domain.description}
          </p>
        </Link>
      ))}

    </div>
  );
}