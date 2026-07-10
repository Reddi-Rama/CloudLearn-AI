"use client";

import PricingCard from "./PricingCard";
import { plans } from "./paymentData";

export default function PricingGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
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