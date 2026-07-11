"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
  disabled = false,
}: SearchBarProps) {
  return (
    <div
      className={`
        flex items-center
        gap-3
        rounded-full
        border
        border-sky-200
        bg-white/90
        px-5
        py-3
        shadow-sm
        transition-all
        duration-300
        focus-within:border-sky-500
        focus-within:shadow-lg
        ${className}
      `}
    >
      <Search
        size={20}
        className="text-sky-500"
      />

      <input
        type="text"
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-slate-700 placeholder:text-slate-400 outline-none"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="rounded-full p-1 transition hover:bg-slate-100"
        >
          <X
            size={18}
            className="text-slate-500"
          />
        </button>
      )}
    </div>
  );
}