export interface Assessment {
  id: string;
  title: string;
  description: string;
  type: "MCQ" | "Coding" | "Output Prediction" | "True / False";
  duration: number;
  totalMarks: number;
  totalQuestions: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  options?: string[];
  answer: string;
  explanation?: string;
}

export interface AssessmentResult {
  score: number;
  total: number;
  passed: boolean;
}