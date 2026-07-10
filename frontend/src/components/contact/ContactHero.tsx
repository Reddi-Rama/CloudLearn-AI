"use client";

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
          Contact Us
        </span>

        <h1 className="mt-8 text-5xl font-extrabold text-slate-900 md:text-7xl">
          We'd Love <span className="text-sky-600">To Hear From You</span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-600">
          Have questions about CloudLearn AI?
          Need help with courses, certificates or assessments?
          Our team is always ready to help you.
        </p>

      </div>
    </section>
  );
}