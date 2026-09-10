import { notFound } from "next/navigation";

import PythonExam from "@/content/exams/PythonExam";

interface Props {
  params: Promise<{
    course: string;
  }>;
}

export default async function ExamPage({
  params,
}: Props) {
  const { course } = await params;

  if (course !== "python-development") {
    notFound();
  }

  return <PythonExam />;
}