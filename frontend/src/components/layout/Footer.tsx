import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ====================================================
              BRAND
          ==================================================== */}

          <div>
            <Link
              href="/"
              className="
                inline-block
                text-2xl
                font-extrabold
                tracking-tight
                text-sky-600
                transition
                hover:text-sky-700
              "
            >
              CloudLearn
            </Link>

            <p
              className="
                mt-5
                max-w-sm
                text-base
                leading-7
                text-slate-600
              "
            >
              Learn modern technology skills through structured
              cloud-based learning paths and hands-on projects.
            </p>
          </div>


          {/* ====================================================
              PLATFORM
          ==================================================== */}

          <div>
            <h3 className="text-base font-bold text-slate-900">
              Platform
            </h3>

            <nav className="mt-6 flex flex-col gap-4">

              <Link
                href="/courses"
                className="text-slate-600 transition hover:text-sky-600"
              >
                Courses
              </Link>

              <Link
                href="/domains"
                className="text-slate-600 transition hover:text-sky-600"
              >
                Domains
              </Link>

              <Link
                href="/learning-paths"
                className="text-slate-600 transition hover:text-sky-600"
              >
                Learning Paths
              </Link>

              <Link
                href="/certificate"
                className="text-slate-600 transition hover:text-sky-600"
              >
                Certificates
              </Link>

            </nav>
          </div>


          {/* ====================================================
              COMPANY
          ==================================================== */}

          <div>
            <h3 className="text-base font-bold text-slate-900">
              Company
            </h3>

            <nav className="mt-6 flex flex-col gap-4">

              <Link
                href="/about"
                className="text-slate-600 transition hover:text-sky-600"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-slate-600 transition hover:text-sky-600"
              >
                Contact
              </Link>

              <Link
                href="/coming-soon"
                className="text-slate-600 transition hover:text-sky-600"
              >
                Privacy Policy
              </Link>

              <Link
                href="/coming-soon"
                className="text-slate-600 transition hover:text-sky-600"
              >
                Terms of Service
              </Link>

            </nav>
          </div>


          {/* ====================================================
              SUPPORT
          ==================================================== */}

          <div>
            <h3 className="text-base font-bold text-slate-900">
              Support
            </h3>

            <nav className="mt-6 flex flex-col gap-4">

              <Link
                href="/coming-soon"
                className="text-slate-600 transition hover:text-sky-600"
              >
                Help Center
              </Link>

              <Link
                href="/#faq"
                className="text-slate-600 transition hover:text-sky-600"
              >
                FAQ
              </Link>

              <Link
                href="/coming-soon"
                className="text-slate-600 transition hover:text-sky-600"
              >
                Verify Certificate
              </Link>

              <Link
                href="/coming-soon"
                className="text-slate-600 transition hover:text-sky-600"
              >
                Feedback
              </Link>

            </nav>
          </div>

        </div>


        {/* ====================================================
            BOTTOM
        ==================================================== */}

        <div className="mt-12 border-t border-slate-200 pt-8">

          <p className="text-center text-sm text-slate-500">
            © 2026 CloudLearn. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}