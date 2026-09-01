"use client";

import {
  Award,
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";

export default function HeaderActions() {
  function handleCertificatesClick() {
    const token = localStorage.getItem(
      "cloudlearn-access-token"
    );

    if (token) {
      window.location.href = "/my-certificates";
    } else {
      window.location.href = "/login";
    }
  }

  return (
    <div className="flex items-center gap-4">

      <div
        className="
        hidden
        lg:flex
        items-center
        gap-3
        rounded-xl
        border
        border-slate-200
        bg-slate-50
        px-4
        py-2
        "
      >
        <Search size={18} />

        <input
          suppressHydrationWarning
          type="text"
          placeholder="Search..."
          className="
          bg-transparent
          outline-none
          "
        />
      </div>

      <button
        type="button"
        onClick={handleCertificatesClick}
        aria-label="My Certificates"
        title="My Certificates"
        className="
        rounded-xl
        p-2
        text-slate-700
        transition
        hover:bg-slate-100
        hover:text-sky-600
        "
      >
        <Award size={22} />
      </button>

      <button
        type="button"
        className="
        relative
        rounded-xl
        p-2
        hover:bg-slate-100
        "
        aria-label="Notifications"
      >
        <Bell size={22} />

        <span
          className="
          absolute
          right-2
          top-2
          h-2
          w-2
          rounded-full
          bg-red-500
          "
        />
      </button>

      <ThemeToggle />

      <button
        type="button"
        aria-label="Profile"
      >
        <UserCircle2
          size={36}
          className="text-sky-600"
        />
      </button>

    </div>
  );
}
