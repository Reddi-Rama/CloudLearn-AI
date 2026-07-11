import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  BookOpen,
  Users,
  GraduationCap,
  Award,
  DollarSign,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    title: "Courses",
    value: "24",
    href: "/admin/courses",
    icon: BookOpen,
    color: "bg-sky-500",
  },
  {
    title: "Students",
    value: "2,145",
    href: "/admin/students",
    icon: Users,
    color: "bg-indigo-500",
  },
  {
    title: "Lessons",
    value: "620",
    href: "/admin/lessons",
    icon: GraduationCap,
    color: "bg-green-500",
  },
  {
    title: "Certificates",
    value: "840",
    href: "/admin/certificates",
    icon: Award,
    color: "bg-yellow-500",
  },
  {
    title: "Payments",
    value: "₹2.8L",
    href: "/admin/payments",
    icon: DollarSign,
    color: "bg-emerald-500",
  },
  {
    title: "Analytics",
    value: "View",
    href: "/admin/analytics",
    icon: BarChart3,
    color: "bg-rose-500",
  },
];

export default function AdminDashboardPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50 pt-36">

        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-5xl font-black">
            Admin Dashboard
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Manage CloudLearn from one place.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {cards.map((card) => {

              const Icon = card.icon;

              return (

                <Link
                  key={card.title}
                  href={card.href}
                  className="rounded-[30px] bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.color}`}>

                    <Icon className="text-white" size={30} />

                  </div>

                  <h2 className="mt-6 text-2xl font-bold">

                    {card.title}

                  </h2>

                  <p className="mt-3 text-5xl font-black">

                    {card.value}

                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sky-600 font-semibold">

                    Open

                    <ArrowRight size={18} />

                  </div>

                </Link>

              );

            })}

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}