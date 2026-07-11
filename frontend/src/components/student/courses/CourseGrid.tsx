"use client";

import CourseCard from "./CourseCard";
import { courses } from "./courseData";

export default function CourseGrid() {
  return (
    <section>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">

        {courses.map((course) => (

          <CourseCard
            key={course.id}
            {...course}
          />

        ))}

      </div>

    </section>
  );
}