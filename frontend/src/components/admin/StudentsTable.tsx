"use client";

const students = [
  {
    id: 1,
    name: "Rama",
    course: "Python",
    progress: "82%",
  },
  {
    id: 2,
    name: "Teja",
    course: "Cloud Computing",
    progress: "65%",
  },
  {
    id: 3,
    name: "Rahul",
    course: "AI & ML",
    progress: "94%",
  },
];

export default function StudentsTable() {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Students
      </h2>

      <table className="mt-8 w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">Student</th>
            <th className="text-left">Course</th>
            <th className="text-left">Progress</th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr
              key={student.id}
              className="border-b"
            >

              <td className="py-4">
                {student.name}
              </td>

              <td>
                {student.course}
              </td>

              <td className="font-semibold text-sky-600">
                {student.progress}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}