"use client";

export default function DomainHero() {
  return (
    <section className="bg-transparent py-24 md:py-28 lg:py-32">

      <div className="mx-auto max-w-[1400px] px-6 text-center">

        {/* Badge */}
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-sky-100
            bg-sky-50
            px-5
            py-2
            text-sm
            font-bold
            text-sky-600
            shadow-sm
          "
        >
          Explore Learning Domains
        </span>

        {/* Heading */}
        <h1
          className="
            mx-auto
            mt-8
            max-w-6xl
            text-5xl
            font-black
            leading-tight
            tracking-tight
            text-slate-900
            md:text-6xl
            lg:text-7xl
          "
        >
          Learn Today's{" "}
          <span className="text-sky-600">
            Most In-Demand Skills
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-7
            max-w-3xl
            text-lg
            leading-8
            text-slate-600
            md:text-xl
          "
        >
          Choose from carefully designed learning domains that prepare you
          for internships, placements, certifications, and real-world careers.
        </p>

      </div>

    </section>
  );
}