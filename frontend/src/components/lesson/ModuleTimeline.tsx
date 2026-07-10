"use client";

const timeline = [
  "Introduction",
  "HTML Basics",
  "HTML Elements",
  "Lists",
  "Tables",
  "Forms",
  "Semantic HTML",
];

export default function ModuleTimeline() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-3xl font-black">

        Module Timeline

      </h2>

      <div className="mt-8 space-y-5">

        {timeline.map((item,index)=>(

          <div
          key={item}
          className="flex items-start gap-4"
          >

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">

              {index+1}

            </div>

            <div>

              <h3 className="font-semibold">

                {item}

              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}