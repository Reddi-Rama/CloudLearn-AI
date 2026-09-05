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
      <main className="auth-page min-h-screen">

        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <AuthHero />

          {/* ==================================================
              RIGHT SIDE
          ================================================== */}

          <div className="flex items-center justify-center p-6 sm:p-8">

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

      </main>
    </AuthLayout>
  );
}