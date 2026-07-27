import Link from "next/link";
import { domains } from "./domainData";

export default function DomainGrid() {
  return (
    <div
      className="
      grid
      gap-8
      md:grid-cols-2
      lg:grid-cols-3
      "
    >

      {domains.map((domain) => (

        <Link
          key={domain.slug}
          href={`/domains/${domain.slug}`}
          className="
          flex
          min-h-[180px]
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white
          px-10
          py-8
          text-center
          shadow-sm
          transition
          hover:-translate-y-1
          hover:shadow-xl
          "
        >

          <h2
            className="
            text-2xl
            font-bold
            text-slate-900
            "
          >
            {domain.name}
          </h2>


          <p
            className="
            mt-3
            max-w-xs
            text-sm
            leading-6
            text-slate-600
            "
          >
            {domain.description}
          </p>


        </Link>

      ))}

    </div>
  );
}