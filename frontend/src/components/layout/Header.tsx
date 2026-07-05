"use client";

import Link from "next/link";
import { useState } from "react";
import { GraduationCap, ChevronDown, Menu, X } from "lucide-react";
import DarkModeToggle from "@/components/common/DarkModeToggle";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Domains",
    href: "/domains",
    dropdown: true,
  },
  {
    title: "Learning Paths",
    href: "/learning-paths",
  },
  {
    title: "Certificates",
    href: "/certificates",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6">

      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between rounded-[28px] border border-white/40 bg-white/80 px-8 py-5 shadow-2xl backdrop-blur-xl">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-lg">

              <GraduationCap
                className="text-white"
                size={26}
              />

            </div>

            <div>

              <h1 className="text-3xl font-bold text-slate-900">
                CloudLearn AI
              </h1>

              <p className="text-sm text-slate-500">
                Smart Cloud Learning
              </p>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">

            {navLinks.map((item) => (

              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-1 text-base font-medium text-slate-700 transition hover:text-blue-600"
              >
                {item.title}

                {item.dropdown && (

                  <ChevronDown
                    size={17}
                  />

                )}

              </Link>

            ))}

          </nav>

          {/* Login Button */}

          <div className="hidden items-center gap-4 lg:flex">

  <button className="h-10 w-10 rounded-full bg-red-500 text-white">
  🌙
</button>

  <Link
    href="/login"
    className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
  >
    Login
  </Link>

</div>

          {/* Mobile Menu */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Navigation */}

      {mobileOpen && (

        <div className="mx-auto mt-4 max-w-7xl rounded-3xl border border-white/40 bg-white/90 p-6 shadow-2xl backdrop-blur-xl lg:hidden">

          <div className="flex flex-col gap-5">

            {navLinks.map((item) => (

              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-blue-600"
              >
                {item.title}
              </Link>

            ))}

            <Link
              href="/login"
              className="rounded-xl bg-blue-600 py-3 text-center font-medium text-white"
            >
              Login
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}