"use client";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  return (
    <div>

      <div className="mb-3 flex justify-between">

        <span className="font-medium">
          Progress
        </span>

        <span>
          {progress}%
        </span>

      </div>

      <div className="h-3 rounded-full bg-blue-100">

        <div
          className="h-full rounded-full bg-blue-600 transition-all"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}