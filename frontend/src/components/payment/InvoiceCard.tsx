const history = [
  {
    id: "INV-001",
    date: "01 Jul 2026",
    amount: "₹999",
    status: "Paid",
  },
  {
    id: "INV-002",
    date: "01 Jun 2026",
    amount: "₹999",
    status: "Paid",
  },
];

export default function BillingHistory() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Billing History
      </h2>

      <div className="mt-6 space-y-4">

        {history.map((item) => (
          <div
            key={item.id}
            className="flex justify-between rounded-xl border p-4"
          >
            <span>{item.id}</span>
            <span>{item.date}</span>
            <span>{item.amount}</span>
            <span>{item.status}</span>
          </div>
        ))}

      </div>

    </div>
  );
}