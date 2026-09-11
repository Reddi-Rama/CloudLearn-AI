import { notFound } from "next/navigation";
import PythonExam from "@/content/exams/PythonExam";
import CppExam from "@/content/exams/CppExam";
import JavaExam from "@/content/exams/JavaExam";

interface Props {
  params: Promise<{ course: string }>;
}

export default async function ExamPage({ params }: Props) {
  const { course } = await params;

  if (course === "python-development") {
    return <PythonExam />;
  }

  if (course === "cpp-development") {
    return <CppExam />;
  }

  if (course === "java-development") {
    return <JavaExam />;
  }

  notFound();
}
