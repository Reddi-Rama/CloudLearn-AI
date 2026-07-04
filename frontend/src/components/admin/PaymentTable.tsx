"use client";

const payments = [
  {
    student: "Reddi Rama",
    amount: "₹29",
    status: "Paid",
  },
  {
    student: "Rahul",
    amount: "₹29",
    status: "Pending",
  },
];

export default function PaymentsTable() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <h1 className="mb-8 text-3xl font-black">

        Payments

      </h1>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-4 text-left">Student</th>

            <th>Amount</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {payments.map((payment,index)=>(

            <tr
            key={index}
            className="border-b"
            >

              <td className="py-5">

                {payment.student}

              </td>

              <td>

                {payment.amount}

              </td>

              <td>

                <span className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  payment.status==="Paid"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-700"
                }`}>

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