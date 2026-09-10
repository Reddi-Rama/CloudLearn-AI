import { notFound } from "next/navigation";

import PythonExam from "@/content/exams/PythonExam";

interface Props {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function ExamPage({
  params,
}: Props) {
  const { courseId } = await params;

  if (courseId !== "python-development") {
    notFound();
  }

  return <PythonExam />;
}
