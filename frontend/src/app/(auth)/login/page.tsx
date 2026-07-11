import {
  AuthLayout,
  AuthCard,
  AuthHero,
  AuthLogo,
  LoginHeader,
  LoginForm,
  LoginFooter,
} from "@/components/auth";

export default function LoginPage() {
  return (
    <AuthLayout>

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

        <AuthHero />

        <div className="flex items-center justify-center p-8">

          <AuthCard>

            <div className="space-y-8">

              <AuthLogo />

              <LoginHeader />

              <LoginForm />

              <LoginFooter />

            </div>

          </AuthCard>

        </div>

      </div>

    </AuthLayout>
  );
}