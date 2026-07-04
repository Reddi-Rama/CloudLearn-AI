"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  Moon,
  Sun,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Domains", href: "/domains" },
  { label: "Learning Paths", href: "/learning-paths" },
  { label: "Certificates", href: "/certificates" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="fixed top-5 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2"
      >
        <div className="rounded-full border border-white/50 bg-white/45 backdrop-blur-2xl shadow-[0_20px_60px_rgba(59,130,246,0.12)]">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-sky-400 to-indigo-500 text-white shadow-xl"
              >
                <GraduationCap size={24} />
              </motion.div>

              <div>
                <h1 className="text-lg font-extrabold tracking-tight text-slate-900">
                  CloudLearn AI
                </h1>

                <p className="text-xs text-slate-500">
                  Smart Cloud Learning
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-slate-700 transition-colors hover:text-sky-600"
                  >
                    {item.label}

                    {item.label === "Domains" && (
                      <ChevronDown size={15} />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 text-slate-700 shadow-md transition hover:text-sky-600"
              >
                <Search size={19} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setDarkMode(!darkMode)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 text-slate-700 shadow-md"
              >
                {darkMode ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </motion.button>

              <Link
                href="/login"
                className="rounded-full border border-sky-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-600"
              >
                Login
              </Link>

              <motion.div
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link
                  href="/register"
                  className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-300/40 transition"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
              }}
              className="fixed right-0 top-0 z-[60] h-full w-[85%] max-w-sm border-l border-white/40 bg-[#F8FBFF]/95 backdrop-blur-2xl shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-200/60 px-6 py-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    CloudLearn AI
                  </h2>

                  <p className="text-sm text-slate-500">
                    Cloud Learning Platform
                  </p>
                </div>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-slate-200 bg-white p-2"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col px-6 py-8">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl px-4 py-4 text-base font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-4 px-6 pb-10">
                <Link
                  href="/login"
                  className="flex justify-center rounded-full border border-sky-200 bg-white py-3 font-semibold text-slate-700"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="flex justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 py-3 font-semibold text-white shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}