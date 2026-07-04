import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  User,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function RegisterPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-36 flex items-center justify-center px-6">

        <div className="w-full max-w-lg rounded-[35px] bg-white p-10 shadow-2xl">

          <div className="text-center">

            <h1 className="text-4xl font-black text-slate-900">

              Create Your Account

            </h1>

            <p className="mt-4 text-slate-500">

              Start learning with CloudLearn AI today.

            </p>

          </div>

          <form className="mt-10 space-y-6">

            <div className="relative">

              <User
                className="absolute left-4 top-4 text-slate-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-4 outline-none focus:border-sky-500"
              />

            </div>

            <div className="relative">

              <Mail
                className="absolute left-4 top-4 text-slate-400"
                size={20}
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-4 outline-none focus:border-sky-500"
              />

            </div>

            <div className="relative">

              <Lock
                className="absolute left-4 top-4 text-slate-400"
                size={20}
              />

              <input
                type="password"
                placeholder="Create Password"
                className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-4 outline-none focus:border-sky-500"
              />

            </div>

            <div className="relative">

              <Lock
                className="absolute left-4 top-4 text-slate-400"
                size={20}
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-4 outline-none focus:border-sky-500"
              />

            </div>

            <button
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 py-4 font-semibold text-white transition hover:scale-105"
            >

              Create Account

              <ArrowRight size={18} />

            </button>

          </form>

          <div className="mt-8 text-center text-slate-500">

            Already have an account?{" "}

            <Link
              href="/login"
              className="font-semibold text-sky-600 hover:underline"
            >

              Login

            </Link>

          </div>

        </div>

      </main>

      <Footer />

    </>
  );
}