"use client";

export default function SocialLogin() {
  return (
    <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 py-3 transition hover:bg-slate-50">
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google"
        className="h-5 w-5"
      />
      <span className="font-medium">
        Continue with Google
      </span>
    </button>
  );
}