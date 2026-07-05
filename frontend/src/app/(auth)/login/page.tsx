import { AuthLayout } from "@/components/auth";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Login"
      subtitle="Welcome back to CloudLearn AI"
    >
      <div className="p-10 text-center">
        Hello CloudLearn
      </div>
    </AuthLayout>
  );
}