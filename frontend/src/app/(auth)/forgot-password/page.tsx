import {
  AuthLayout,
  AuthCard,
  AuthHero,
  AuthLogo,
  ForgotPasswordHeader,
  ForgotPasswordForm,
} from "@/components/auth";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <AuthHero />

        <div className="flex items-center justify-center p-8">
          <AuthCard>
            <div className="space-y-8">
              <AuthLogo />

              <ForgotPasswordHeader />

              <ForgotPasswordForm />
            </div>
          </AuthCard>
        </div>
      </div>
    </AuthLayout>
  );
}