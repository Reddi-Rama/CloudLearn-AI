"use client";

export default function MapSection() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[32px] shadow-xl">

          <iframe
            title="CloudLearn AI Location"
            src="https://www.google.com/maps?q=Andhra%20Pradesh&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          />

        </div>

      </div>

    </section>
  );
}