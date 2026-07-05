import {
  AuthLayout,
  ForgotPasswordForm,
} from "@/components/auth";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="We'll send you a verification code."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}