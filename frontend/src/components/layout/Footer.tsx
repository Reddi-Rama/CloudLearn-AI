"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-sky-600">
              CloudLearn AI
            </h2>

            <p className="mt-4 text-sm text-slate-600 leading-7">
              Learn modern technology skills through structured
              cloud-based learning paths and hands-on projects.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Platform
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-slate-600">
              <Link href="/courses">Courses</Link>
              <Link href="/domains">Domains</Link>
              <Link href="/learning-paths">Learning Paths</Link>
              <Link href="/certificates">Certificates</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-slate-600">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Support
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-slate-600">
              <Link href="/help">Help Center</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/verify-certificate">
                Verify Certificate
              </Link>
              <Link href="/feedback">Feedback</Link>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} CloudLearn AI. All rights reserved.
        </div>

      </div>
    </footer>
  );
}