"use client";

interface Props {
  name: string;
  price: number;
  features: string[];
}

export default function PricingCard({
  name,
  price,
  features,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all">

      <h2 className="text-3xl font-bold">
        {name}
      </h2>

      <div className="mt-6">
        <span className="text-5xl font-black">
          ₹{price}
        </span>

        <span className="text-slate-500">
          /month
        </span>
      </div>

      <div className="mt-8 space-y-3">
        {features.map((feature) => (
          <p key={feature}>
            ✓ {feature}
          </p>
        ))}
      </div>

      <button className="mt-8 w-full rounded-2xl bg-sky-600 py-4 text-white font-semibold hover:bg-sky-700">
        Choose Plan
      </button>

    </div>
  );
}