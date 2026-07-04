"use client";

import { Plus, Pencil, Trash2 } from "lucide-react";

const courses = [
  "Python Programming",
  "Machine Learning",
  "Cloud Computing",
  "Cyber Security",
  "Full Stack Development",
];

export default function CoursesTable() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-3xl font-black">

          Courses

        </h1>

        <button className="flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-white">

          <Plus size={18}/>

          Add Course

        </button>

      </div>

      <div className="space-y-5">

        {courses.map((course)=>(

          <div
            key={course}
            className="flex items-center justify-between rounded-2xl border p-5"
          >

            <h3 className="font-semibold">

              {course}

            </h3>

            <div className="flex gap-3">

              <button className="rounded-lg bg-green-100 p-2">

                <Pencil size={18}/>

              </button>

              <button className="rounded-lg bg-red-100 p-2">

                <Trash2 size={18}/>

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}