"use client";

import {
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "@/components/theme/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
      title={
        theme === "light"
          ? "Dark mode"
          : "Light mode"
      }
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-slate-200
        bg-white
        text-slate-700
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-sky-300
        hover:bg-sky-50
        hover:text-sky-600
        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-200
        dark:hover:border-sky-500
        dark:hover:bg-slate-800
        dark:hover:text-sky-400
      "
    >
      {theme === "light" ? (
        <Moon size={19} />
      ) : (
        <Sun size={19} />
      )}
    </button>
  );
}