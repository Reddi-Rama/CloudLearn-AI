"use client";

const steps = [
  "Choose a Learning Domain",
  "Follow Structured Lessons",
  "Practice Coding",
  "Complete Assessments",
  "Earn Certificates",
  "Become Industry Ready",
];

export default function Journey() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-black">

            Your Learning Journey

          </h2>

        </div>

        <div className="mt-16 space-y-6">

          {steps.map((step, index) => (

            <div
              key={step}
              className="flex items-center gap-6 rounded-[30px] bg-white p-8 shadow-lg"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-600 text-xl font-bold text-white">

                {index + 1}

              </div>

              <h3 className="text-2xl font-bold">

                {step}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}