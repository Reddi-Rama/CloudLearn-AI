"use client";

export default function Hero() {
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
          Learning Paths
        </span>

        {/* Main Heading */}
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
          Structured Roadmaps{" "}
          <span className="text-sky-600">
            for Every Student
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
          Master technologies step by step with industry-focused
          learning paths.
        </p>

      </div>

    </section>
  );
}