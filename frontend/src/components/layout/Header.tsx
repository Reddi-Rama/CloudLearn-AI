"use client";

import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderActions from "./HeaderActions";

export default function Header() {

  const pathname = usePathname();

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

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white">

      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-8">

        <Logo />

        {!studentPage && <Navbar />}

        <HeaderActions />

      </div>

    </header>
  );
}