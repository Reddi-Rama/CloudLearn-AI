"use client";

interface Props {
  percentage: number;
}

export default function ScoreCircle({
  percentage,
}: Props) {
  return (
    <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border-[12px] border-sky-500 bg-white shadow-xl">

      <div className="text-center">

        <h2 className="text-5xl font-black">

          {percentage}%

        </h2>

        <p className="text-slate-500">

          Score

        </p>

      </div>

    </div>
  );
}