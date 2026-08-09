"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
      w-full
      bg-white
      text-slate-700
      "
    >

      <div
        className="
        mx-auto
        w-full
        max-w-7xl
        px-6
        py-14
        "
      >

        <div
          className="
          grid
          w-full
          grid-cols-1
          gap-8
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >

          {/* Brand */}

          <div className="min-w-0">

            <h2
              className="
              text-2xl
              font-bold
              text-sky-600
              "
            >
              CloudLearn AI
            </h2>

            <p
              className="
              mt-4
              max-w-sm
              text-sm
              leading-7
              text-slate-600
              "
            >
              Learn modern technology skills through structured
              cloud-based learning paths and hands-on projects.
            </p>

          </div>


          {/* Platform */}

          <div>

            <h3
              className="
              text-lg
              font-semibold
              text-slate-900
              "
            >
              Platform
            </h3>

            <div
              className="
              mt-4
              flex
              flex-col
              gap-3
              text-slate-600
              "
            >

              <Link
                href="/courses"
                className="transition hover:text-sky-600"
              >
                Courses
              </Link>

              <Link
                href="/domains"
                className="transition hover:text-sky-600"
              >
                Domains
              </Link>

              <Link
                href="/learning-paths"
                className="transition hover:text-sky-600"
              >
                Learning Paths
              </Link>

              <Link
                href="/certificates"
                className="transition hover:text-sky-600"
              >
                Certificates
              </Link>

            </div>

          </div>


          {/* Company */}

          <div>

            <h3
              className="
              text-lg
              font-semibold
              text-slate-900
              "
            >
              Company
            </h3>

            <div
              className="
              mt-4
              flex
              flex-col
              gap-3
              text-slate-600
              "
            >

              <Link
                href="/about"
                className="transition hover:text-sky-600"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-sky-600"
              >
                Contact
              </Link>

              <Link
                href="/privacy-policy"
                className="transition hover:text-sky-600"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-sky-600"
              >
                Terms of Service
              </Link>

            </div>

          </div>


          {/* Support */}

          <div>

            <h3
              className="
              text-lg
              font-semibold
              text-slate-900
              "
            >
              Support
            </h3>

            <div
              className="
              mt-4
              flex
              flex-col
              gap-3
              text-slate-600
              "
            >

              <Link
                href="/help"
                className="transition hover:text-sky-600"
              >
                Help Center
              </Link>

              <Link
                href="/faq"
                className="transition hover:text-sky-600"
              >
                FAQ
              </Link>

              <Link
                href="/verify-certificate"
                className="transition hover:text-sky-600"
              >
                Verify Certificate
              </Link>

              <Link
                href="/feedback"
                className="transition hover:text-sky-600"
              >
                Feedback
              </Link>

            </div>

          </div>

        </div>


        {/* Copyright */}

        <div
          className="
          mt-10
          border-t
          border-slate-200
          pt-7
          text-center
          "
        >

          <p
            className="
            text-sm
            text-slate-500
            "
          >
            © {new Date().getFullYear()} CloudLearn AI. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}