"use client";

const lessons = [
  {
    id: 1,
    title: "Introduction to Python",
    course: "Python",
    duration: "30 min",
  },
  {
    id: 2,
    title: "Variables",
    course: "Python",
    duration: "40 min",
  },
  {
    id: 3,
    title: "Loops",
    course: "Python",
    duration: "45 min",
  },
];

export default function LessonTable() {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Lessons
      </h2>

      <table className="mt-8 w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">Lesson</th>
            <th className="text-left">Course</th>
            <th className="text-left">Duration</th>

          </tr>

        </thead>

        <tbody>

          {lessons.map((lesson) => (

            <tr
              key={lesson.id}
              className="border-b"
            >

              <td className="py-4">
                {lesson.title}
              </td>

              <td>
                {lesson.course}
              </td>

              <td>
                {lesson.duration}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}