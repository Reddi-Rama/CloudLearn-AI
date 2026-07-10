"use client";

const payments = [
  {
    id: "PAY001",
    student: "Rama",
    amount: "₹499",
    status: "Paid",
  },
  {
    id: "PAY002",
    student: "Teja",
    amount: "₹499",
    status: "Pending",
  },
  {
    id: "PAY003",
    student: "Rahul",
    amount: "₹999",
    status: "Paid",
  },
];

export default function PaymentTable() {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Payments
      </h2>

      <table className="mt-8 w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">Payment ID</th>
            <th className="text-left">Student</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Status</th>

          </tr>

        </thead>

        <tbody>

          {payments.map((payment) => (

            <tr
              key={payment.id}
              className="border-b"
            >

              <td className="py-4">
                {payment.id}
              </td>

              <td>
                {payment.student}
              </td>

              <td>
                {payment.amount}
              </td>

              <td>

                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    payment.status === "Paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {payment.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}