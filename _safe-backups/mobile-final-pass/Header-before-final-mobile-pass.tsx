"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderActions from "./HeaderActions";

const publicLinks = [
  { title: "Home", href: "/" },
  { title: "Domains", href: "/domains" },
  { title: "Learning Paths", href: "/learning-paths" },
  { title: "My Certificates", href: "/my-certificates" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const studentLinks = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "My Courses", href: "/courses" },
  { title: "Programming", href: "/programming" },
  { title: "Assessments", href: "/assessments" },
  { title: "Certificates", href: "/certificates" },
  { title: "Bookmarks", href: "/bookmarks" },
  { title: "Profile", href: "/profile" },
  { title: "Settings", href: "/settings" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const studentPage =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/courses") ||
    pathname.startsWith("/lesson") ||
    pathname.startsWith("/programming") ||
    pathname.startsWith("/assessments") ||
    pathname.startsWith("/bookmarks") ||
    pathname.startsWith("/certificates") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/settings");

  const mobileLinks = studentPage ? studentLinks : publicLinks;

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {!studentPage && <Navbar />}

        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <HeaderActions />

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:bg-slate-800 dark:hover:text-sky-400"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-20 max-h-[calc(100vh-80px)] overflow-y-auto border-t border-slate-200 bg-white shadow-2xl lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <nav className="mx-auto max-w-2xl px-4 py-4 sm:px-6">
            <div className="space-y-2">
              {mobileLinks.map((link) => {
                const active =
                  pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={
                      active
                        ? "block rounded-2xl bg-sky-50 px-5 py-4 text-base font-semibold text-sky-700 dark:bg-sky-500/10 dark:text-sky-400"
                        : "block rounded-2xl px-5 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-sky-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-sky-400"
                    }
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}