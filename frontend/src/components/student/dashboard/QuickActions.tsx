"use client";

import Link from "next/link";

const actions = [
  {
    title: "Browse Courses",
    href: "/courses",
  },
  {
    title: "Programming Lab",
    href: "/programming",
  },
  {
    title: "Take Assessment",
    href: "/assessments",
  },
  {
    title: "View Certificates",
    href: "/certificates",
  },
];

export default function QuickActions() {
  return (
    <section>

      <h2 className="mb-6 text-3xl font-black">
        Quick Actions
      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        {actions.map((action) => (

          <Link
            key={action.title}
            href={action.href}
            className="rounded-2xl bg-sky-600 p-6 text-center font-semibold text-white transition hover:bg-sky-700"
          >
            {action.title}
          </Link>

        ))}

      </div>

    </section>
  );
}