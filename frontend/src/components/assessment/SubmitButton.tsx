"use client";

import { Send } from "lucide-react";

export default function SubmitButton() {
  return (
    <button
      className="
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-green-600
        py-4
        text-lg
        font-bold
        text-white
        shadow-lg
        transition
        hover:bg-green-700
        hover:shadow-xl
        dark:bg-green-600
        dark:hover:bg-green-500
      "
    >
      <Send size={22} />
      Submit Assessment
    </button>
  );
}