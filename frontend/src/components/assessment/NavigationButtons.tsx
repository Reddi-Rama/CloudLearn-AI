"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  onPrevious: () => void;
  onNext: () => void;
  disablePrevious?: boolean;
  disableNext?: boolean;
}

export default function NavigationButtons({
  onPrevious,
  onNext,
  disablePrevious,
  disableNext,
}: Props) {
  return (
    <div className="mt-10 flex justify-between">

      <button
        onClick={onPrevious}
        disabled={disablePrevious}
        className="btn-secondary"
      >
        <ArrowLeft size={18} />

        Previous
      </button>

      <button
        onClick={onNext}
        disabled={disableNext}
        className="btn-primary"
      >
        Next

        <ArrowRight size={18} />
      </button>

    </div>
  );
}