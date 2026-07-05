"use client";

interface DiagramProps {
  image: string;
  title: string;
}

export default function Diagram({
  image,
  title,
}: DiagramProps) {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">

        <img
          src={image}
          alt={title}
          className="w-full object-cover"
        />

      </div>

    </section>
  );
}