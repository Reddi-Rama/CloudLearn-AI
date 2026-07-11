"use client";

export default function VerificationForm() {
  return (
    <form className="glass-card rounded-3xl p-8">

      <h2 className="text-2xl font-bold">

        Verify Certificate

      </h2>

      <input
        placeholder="Enter Certificate ID"
        className="mt-6 w-full rounded-2xl border border-blue-100 p-4 outline-none"
      />

      <button className="btn-primary mt-6 w-full">

        Verify

      </button>

    </form>
  );
}