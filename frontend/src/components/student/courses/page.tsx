import StudentLayout from "@/components/layout/StudentLayout";

import {
  CourseHeader,
  CourseSearch,
  CourseFilter,
  CourseGrid,
} from  "@/components/student/courses";

export default function CoursesPage() {
  return (
    <StudentLayout>

      <div className="space-y-8">

        <CourseHeader />

        <CourseSearch />

        <CourseFilter />

        <CourseGrid />

      </div>

    </StudentLayout>
  );
}