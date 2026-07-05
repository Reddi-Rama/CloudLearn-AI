import {
  AuthLayout,
  ResetPasswordForm,
} from "@/components/auth";

export default function ResetPasswordPage() {
  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Create a new password"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
}