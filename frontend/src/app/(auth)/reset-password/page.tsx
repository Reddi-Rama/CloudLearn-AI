import {
  AuthLayout,
  AuthCard,
  AuthHero,
  AuthLogo,
  AuthHeader,
  ResetPasswordForm,
} from "@/components/auth";

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <AuthHero />

        <div className="flex items-center justify-center p-8">
          <AuthCard>
            <div className="space-y-8">
              <AuthLogo />

              <AuthHeader
                title="Reset Password"
                subtitle="Create a new secure password for your account."
              />

              <ResetPasswordForm />
            </div>
          </AuthCard>
        </div>
      </div>
    </AuthLayout>
  );
}