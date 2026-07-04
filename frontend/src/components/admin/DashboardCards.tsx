"use client";

const cards = [
  {
    title: "Students",
    value: "1,245",
  },
  {
    title: "Courses",
    value: "120",
  },
  {
    title: "Certificates",
    value: "864",
  },
  {
    title: "Revenue",
    value: "₹24,500",
  },
];

export default function DashboardCards() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-3xl bg-white p-8 shadow-lg"
        >

          <p className="text-gray-500">

            {card.title}

          </p>

          <h2 className="mt-3 text-5xl font-black text-sky-600">

            {card.value}

          </h2>

        </div>

      ))}

    </section>
  );
}