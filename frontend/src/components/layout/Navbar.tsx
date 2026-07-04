"use client";

import Link from "next/link";
import { Menu, GraduationCap } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Domains",
    href: "/domains",
  },
  {
    title: "Learning Paths",
    href: "/learning-paths",
  },
  {
    title: "Courses",
    href: "/courses",
  },
  {
    title: "Practice",
    href: "/practice",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">

      <div className="container-custom py-5">

        <nav className="glass-card flex items-center justify-between rounded-full px-6 py-4">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <GraduationCap
              className="text-blue-600"
              size={34}
            />

            <div>

              <h1 className="text-xl font-bold text-slate-800">
                CloudLearn AI
              </h1>

              <p className="text-xs text-slate-500">
                Learn Beyond Limits
              </p>

            </div>

          </Link>

          {/* Desktop */}

          <div className="hidden items-center gap-8 lg:flex">

            {navItems.map((item) => (

              <Link
                key={item.title}
                href={item.href}
                className="font-medium text-slate-600 transition hover:text-blue-600"
              >
                {item.title}
              </Link>

            ))}

            <Link
              href="/login"
              className="btn-primary"
            >
              Get Started
            </Link>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 lg:hidden"
          >
            <Menu />
          </button>

        </nav>

        {open && (

          <div className="glass-card mt-4 rounded-3xl p-6 lg:hidden">

            <div className="flex flex-col gap-5">

              {navItems.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-medium text-slate-700"
                >
                  {item.title}
                </Link>

              ))}

              <Link
                href="/login"
                className="btn-primary mt-2"
              >
                Get Started
              </Link>

            </div>

          </div>

        )}

      </div>

    </header>
  );
}