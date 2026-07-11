"use client";

interface FormErrorProps {
  message?: string;
}

export default function FormError({
  message,
}: FormErrorProps) {

  if (!message) return null;

  return (

    <div className="rounded-xl bg-red-100 p-4 text-red-700">

      {message}

    </div>

  );

}