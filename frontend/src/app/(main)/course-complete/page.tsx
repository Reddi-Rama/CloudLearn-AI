import CourseCompleted from "@/components/courses/CourseCompleted";

interface Props {
  searchParams: Promise<{
    course?: string;
  }>;
}

export default async function CourseCompletePage({ searchParams }: Props) {
  const { course } = await searchParams;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
      <CourseCompleted courseId={course} />
    </main>
  );
}
