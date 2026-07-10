import {
  PaymentHeader,
  PricingGrid,
} from "@/components/payment";

export default function PaymentPage() {
  return (
    <div className="space-y-10">
      <PaymentHeader />
      <PricingGrid />
    </div>
  );
}