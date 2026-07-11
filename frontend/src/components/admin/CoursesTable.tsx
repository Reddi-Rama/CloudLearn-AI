"use client";

const courses = [
  {
    id: 1,
    title: "Python Programming",
    instructor: "John Doe",
    students: 325,
  },
  {
    id: 2,
    title: "Cloud Computing",
    instructor: "Jane Smith",
    students: 218,
  },
  {
    id: 3,
    title: "Machine Learning",
    instructor: "Alex Johnson",
    students: 412,
  },
];

export default function CoursesTable() {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Courses
      </h2>

      <table className="mt-8 w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">Course</th>
            <th className="text-left">Instructor</th>
            <th className="text-left">Students</th>

          </tr>

        </thead>

        <tbody>

          {courses.map((course) => (

            <tr
              key={course.id}
              className="border-b"
            >

              <td className="py-4">
                {course.title}
              </td>

              <td>
                {course.instructor}
              </td>

              <td className="font-semibold text-sky-600">
                {course.students}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}