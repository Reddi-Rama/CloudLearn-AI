"use client";

import {
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";


export default function HeaderActions() {
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
        className="
        relative
        rounded-xl
        p-2
        hover:bg-slate-100
        "
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



      <button>

        <UserCircle2
          size={36}
          className="text-sky-600"
        />

      </button>


    </div>
  );
}