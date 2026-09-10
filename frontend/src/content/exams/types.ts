export type ExamOption = {
  id: string;
  text: string;
};

export type ExamQuestion = {
  id: string;
  question: string;
  options: ExamOption[];
  correctAnswer: string;
  explanation: string;
};

export type ExamResult = {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  unanswered: number;
  percentage: number;
  passed: boolean;
};