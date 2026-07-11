export interface user {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "Student" | "Instructor" | "Admin";
}

export interface Student extends user {
  enrolledCourses: number;
  completedCourses: number;
}

export interface Instructor extends user {
  totalCourses: number;
  totalStudents: number;
}