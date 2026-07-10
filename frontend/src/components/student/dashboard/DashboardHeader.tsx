"use client";

export default function DashboardHeader() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <section className="mb-8">

      <p className="text-sky-600 font-semibold">
        {greeting}
      </p>

      <h1 className="mt-2 text-5xl font-black text-slate-900">
        Welcome Back 👋
      </h1>

      <p className="mt-3 text-lg text-slate-600">
        Continue learning and complete your goals today.
      </p>

    </section>
  );
}