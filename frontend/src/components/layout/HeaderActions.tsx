"use client";

import {
  Award,
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

import ThemeToggle from "./ThemeToggle";
import { getUser, logout } from "@/lib/auth";

type UserData = {
  fullName?: string;
  email?: string;
};

export default function HeaderActions() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUser = getUser();

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(
          event.target as Node
        )
      ) {
        setProfileOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

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

  function handleLogout() {
    logout();
    setUser(null);
    setProfileOpen(false);
    window.location.href = "/login";
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

      <div
        ref={profileRef}
        className="relative"
      >
        <button
          type="button"
          onClick={() =>
            setProfileOpen((previous) => !previous)
          }
          aria-label="Profile"
          aria-expanded={profileOpen}
          className="
          rounded-full
          transition
          hover:scale-105
          "
        >
          <UserCircle2
            size={36}
            className="text-sky-600"
          />
        </button>

        {profileOpen && (
          <div
            className="
            absolute
            right-0
            top-12
            z-50
            w-72
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-2xl
            "
          >
            <div className="border-b border-slate-200 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Signed in as
              </p>

              <p className="mt-1 truncate text-lg font-bold text-slate-900">
                {user?.fullName || "User"}
              </p>

              <p className="mt-1 truncate text-sm text-slate-600">
                {user?.email || "No email available"}
              </p>
            </div>

            <div className="p-3">
              <button
                type="button"
                onClick={handleLogout}
                className="
                w-full
                rounded-xl
                px-4
                py-3
                text-left
                text-sm
                font-semibold
                text-red-600
                transition
                hover:bg-red-50
                "
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
