"use client";

import {
  Award,
  BadgeCheck,
  CreditCard,
  IndianRupee,
} from "lucide-react";

export default function PaymentCard() {
  return (
    <section className="grid gap-10 lg:grid-cols-2">

      {/* Left */}

      <div className="rounded-[40px] bg-white p-10 shadow-xl">

        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white">

          <Award size={40} />

        </div>

        <h1 className="mt-8 text-5xl font-black">

          Professional Certificate

        </h1>

        <p className="mt-5 text-lg text-slate-600 leading-8">

          Congratulations!

          You successfully completed the course.

          Unlock your verified CloudLearn Certificate.

        </p>

        <div className="mt-10 space-y-5">

          <div className="flex items-center gap-4">

            <BadgeCheck className="text-green-500"/>

            <span>Verified Certificate ID</span>

          </div>

          <div className="flex items-center gap-4">

            <BadgeCheck className="text-green-500"/>

            <span>QR Code Verification</span>

          </div>

          <div className="flex items-center gap-4">

            <BadgeCheck className="text-green-500"/>

            <span>Download PDF Anytime</span>

          </div>

          <div className="flex items-center gap-4">

            <BadgeCheck className="text-green-500"/>

            <span>Share on LinkedIn</span>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="rounded-[40px] bg-gradient-to-br from-sky-500 to-indigo-600 p-10 text-white shadow-2xl">

        <p className="text-sky-100">
          Certificate Fee
        </p>

        <div className="mt-4 flex items-center">

          <IndianRupee size={42} />

          <h2 className="text-7xl font-black">
            29
          </h2>

        </div>

        <p className="mt-6 text-sky-100">

          One-time payment

        </p>

        <button className="mt-12 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-5 text-xl font-bold text-indigo-600">

          <CreditCard />

          Proceed to Payment

        </button>

        <p className="mt-8 text-center text-sm text-sky-100">

          Razorpay • UPI • Card • Net Banking

        </p>

      </div>

    </section>
  );
}