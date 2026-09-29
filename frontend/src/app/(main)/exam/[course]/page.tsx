import { notFound } from "next/navigation";

import PythonExam from "@/content/exams/PythonExam";
import CppExam from "@/content/exams/CppExam";
import JavaExam from "@/content/exams/JavaExam";
import CExam from "@/content/exams/Cexam";
import AIMLExam from "@/content/exams/AIMLExam";

interface Props {
  params: Promise<{ course: string }>;
}

export default async function ExamPage({ params }: Props) {
  const { course } = await params;

  // Existing programming exams — PRESERVED
  if (course === "python-development") {
    return <PythonExam />;
  }

  if (course === "cpp-development") {
    return <CppExam />;
  }

  if (course === "java-development") {
    return <JavaExam />;
  }

  if (course === "c-development") {
    return <CExam />;
  }

  // AIML final assessments
  if (
    course === "ai-foundations" ||
    course === "machine-learning" ||
    course === "deep-learning" ||
    course === "generative-ai"
  ) {
    return <AIMLExam course={course} />;
  }

  notFound();
}