export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  image: string;
  rating: number;
  students: number;
  lessons: number;
  category: string;
}