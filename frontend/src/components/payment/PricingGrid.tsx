import PricingCard from "./PricingCard";
import { plans } from "./PaymentData";

export default function PricingGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">

      {plans.map((plan) => (
        <PricingCard
          key={plan.id}
          name={plan.name}
          price={plan.price}
          features={plan.features}
        />
      ))}

    </div>
  );
}