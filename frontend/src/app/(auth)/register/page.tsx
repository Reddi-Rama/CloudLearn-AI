import {
  AuthLayout,
  AuthHero,
  RegisterForm,
  SocialLogin,
  AuthFooter,
} from "@/components/auth";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your learning journey"
    >
      <AuthHero />

      <RegisterForm />

      <SocialLogin />

      <AuthFooter
        text="Already have an account?"
        linkText="Login"
        href="/login"
      />
    </AuthLayout>
  );
}