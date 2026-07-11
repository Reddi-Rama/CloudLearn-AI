"use client";

export default function CourseCompleted() {
  return (
    <div className="rounded-3xl bg-green-50 border border-green-200 p-8 text-center">
      <h2 className="text-3xl font-bold text-green-700">
        Course Completed 🎉
      </h2>

      <p className="mt-4 text-green-600">
        Congratulations on completing this course.
      </p>
    </div>
  );
}