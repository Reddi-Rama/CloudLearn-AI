"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4">

      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="rounded-full border border-slate-200 p-3 disabled:opacity-50"
      >
        <ChevronLeft size={18} />
      </button>

      <span className="font-semibold">

        Page {currentPage} of {totalPages}

      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="rounded-full border border-slate-200 p-3 disabled:opacity-50"
      >
        <ChevronRight size={18} />
      </button>

    </div>
  );
}