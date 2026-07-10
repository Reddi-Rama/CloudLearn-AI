"use client";

interface FormSuccessProps {
  message?: string;
}

export default function FormSuccess({
  message,
}: FormSuccessProps) {

  if (!message) return null;

  return (

    <div className="rounded-xl bg-green-100 p-4 text-green-700">

      {message}

    </div>

  );

}