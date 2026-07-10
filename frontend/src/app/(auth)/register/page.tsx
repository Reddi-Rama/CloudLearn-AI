import {
  AuthLayout,
  AuthCard,
  AuthHero,
  AuthLogo,
  RegisterHeader,
  RegisterForm,
  RegisterFooter,
} from "@/components/auth";

export default function RegisterPage() {
  return (
    <AuthLayout>

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

        <AuthHero />

        <div className="flex items-center justify-center p-8">

          <AuthCard>

            <div className="space-y-8">

              <AuthLogo />

              <RegisterHeader />

              <RegisterForm />

              <RegisterFooter />

            </div>

          </AuthCard>

        </div>

      </div>

    </AuthLayout>
  );
}