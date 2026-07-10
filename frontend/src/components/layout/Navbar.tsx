"use client";

import Link from "next/link";

const links = [
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
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav className="hidden lg:flex items-center gap-8">

      {links.map((link) => (

        <Link
          key={link.title}
          href={link.href}
          className="font-medium text-slate-700 transition hover:text-sky-600"
        >

          {link.title}

        </Link>

      ))}

    </nav>
  );
}