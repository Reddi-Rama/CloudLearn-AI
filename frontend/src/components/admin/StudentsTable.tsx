"use client";

import { Search, Eye, Pencil, Trash2 } from "lucide-react";

const students = [
  {
    id: "CL001",
    name: "Reddi Rama",
    email: "rama@email.com",
    course: "Python",
    progress: "62%",
  },
  {
    id: "CL002",
    name: "Rahul Kumar",
    email: "rahul@email.com",
    course: "Machine Learning",
    progress: "35%",
  },
  {
    id: "CL003",
    name: "Ananya",
    email: "ananya@email.com",
    course: "Cloud Computing",
    progress: "81%",
  },
];

export default function StudentsTable() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-3xl font-black">

          Students

        </h1>

        <div className="relative">

          <Search className="absolute left-4 top-3 text-slate-400"/>

          <input
            placeholder="Search Student..."
            className="rounded-xl border py-3 pl-12 pr-5"
          />

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-4 text-left">ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Progress</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {students.map((student)=>(

              <tr
                key={student.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="py-5">{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>{student.progress}</td>

                <td>

                  <div className="flex gap-3">

                    <button className="rounded-lg bg-blue-100 p-2">

                      <Eye size={18}/>

                    </button>

                    <button className="rounded-lg bg-green-100 p-2">

                      <Pencil size={18}/>

                    </button>

                    <button className="rounded-lg bg-red-100 p-2">

                      <Trash2 size={18}/>

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}