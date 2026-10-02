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

  /* =========================================================
     PROGRAMMING FINAL ASSESSMENTS
     ========================================================= */

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

  /* =========================================================
     AI & MACHINE LEARNING FINAL ASSESSMENTS
     SAME AIMLExam.tsx FOR ALL FOUR COURSES
     ========================================================= */

  if (course === "ai-foundations") {
    return <AIMLExam course="ai-foundations" />;
  }

  if (course === "machine-learning") {
    return <AIMLExam course="machine-learning" />;
  }

  if (course === "deep-learning") {
    return <AIMLExam course="deep-learning" />;
  }

  if (course === "generative-ai") {
    return <AIMLExam course="generative-ai" />;
  }

  notFound();
}