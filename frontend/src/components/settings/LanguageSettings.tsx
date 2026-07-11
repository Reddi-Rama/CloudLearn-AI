"use client";

export default function LanguageSettings() {
  return (
    <div className="glass-card rounded-3xl p-8">

      <h2 className="text-2xl font-bold">
        Language
      </h2>

      <select className="mt-8 w-full rounded-2xl border border-slate-200 p-4 outline-none">

        <option>English</option>
        <option>Hindi</option>
        <option>Telugu</option>

      </select>

    </div>
  );
}