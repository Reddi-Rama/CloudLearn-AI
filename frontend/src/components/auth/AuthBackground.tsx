"use client";

export default function AuthBackground() {
  return (
    <>
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-300/30 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-300/30 blur-[160px]" />

      <div className="absolute left-1/2 top-40 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[100px]" />
    </>
  );
}