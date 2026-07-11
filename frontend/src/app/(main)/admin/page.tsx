import {
  AdminLayout,
  DashboardCards,
  DashboardStats,
  UsersTable,
  StudentsTable,
  CoursesTable,
  LessonTable,
  PaymentTable,
  QuestionEditor,
} from "@/components/admin";

export default function AdminPage() {
  return (
    <AdminLayout>

      <div className="space-y-8">

        <DashboardCards />

        <DashboardStats />

        <UsersTable />

        <StudentsTable />

        <CoursesTable />

        <LessonTable />

        <PaymentTable />

        <QuestionEditor />

      </div>

    </AdminLayout>
  );
}