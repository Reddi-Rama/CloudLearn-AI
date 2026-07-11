import FeatureList from "./FeatureList";

interface Props {
  name: string;
  price: string;
  features: string[];
}

export default function PricingCard({
  name,
  price,
  features,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold">
        {name}
      </h2>

      <p className="mt-4 text-5xl font-bold text-sky-600">
        {price}
      </p>

      <div className="mt-8">
        <FeatureList
          features={features}
        />
      </div>

      <button className="mt-8 w-full rounded-2xl bg-sky-600 py-4 text-white">
        Choose Plan
      </button>

    </div>
  );
}