export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  videoUrl?: string;
}