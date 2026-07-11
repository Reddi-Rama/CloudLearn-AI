"use client";

import { ErrorState } from "@/components/common";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <ErrorState
      title="Unable to load lesson"
      description="Something went wrong while loading this lesson."
      onRetry={reset}
    />
  );
}