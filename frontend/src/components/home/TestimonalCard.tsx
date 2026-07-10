"use client";

import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  message: string;
}

export default function TestimonialCard({
  name,
  role,
  message,
}: TestimonialCardProps) {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

      <div className="mb-4 flex">

        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}

      </div>

      <p className="leading-8 text-slate-600">
        "{message}"
      </p>

      <div className="mt-8">

        <h4 className="font-bold text-slate-900">
          {name}
        </h4>

        <p className="text-slate-500">
          {role}
        </p>

      </div>

    </div>
  );
}