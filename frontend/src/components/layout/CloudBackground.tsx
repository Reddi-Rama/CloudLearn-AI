"use client";

export default function CloudBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-sky-200/30 blur-3xl animate-pulse" />

      <div className="absolute right-20 top-40 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl animate-pulse delay-700" />

      <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-indigo-200/20 blur-3xl animate-pulse delay-1000" />

      <div className="absolute bottom-20 right-10 h-44 w-44 rounded-full bg-sky-300/20 blur-3xl animate-pulse delay-500" />

    </div>
  );
}