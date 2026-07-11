"use client";

const users = [
  {
    id: 1,
    name: "Rama",
    role: "Student",
    status: "Active",
  },
  {
    id: 2,
    name: "Akhil",
    role: "Instructor",
    status: "Active",
  },
  {
    id: 3,
    name: "Priya",
    role: "Student",
    status: "Inactive",
  },
];

export default function UsersTable() {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Users
      </h2>

      <table className="mt-8 w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">Name</th>
            <th className="text-left">Role</th>
            <th className="text-left">Status</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr
              key={user.id}
              className="border-b"
            >

              <td className="py-4">
                {user.name}
              </td>

              <td>
                {user.role}
              </td>

              <td>

                <span
                  className={`rounded-full px-4 py-1 text-sm ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}