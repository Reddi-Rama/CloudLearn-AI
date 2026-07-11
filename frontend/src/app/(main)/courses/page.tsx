import {
  CourseHero,
  CourseSearch,
  CourseFilter,
  CourseGrid,
} from "@/components/courses";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <CourseHero />
      <CourseSearch />
      <CourseFilter />
      <CourseGrid />
    </main>
  );
}