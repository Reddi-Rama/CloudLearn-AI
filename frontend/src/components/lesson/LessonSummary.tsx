"use client";

import { FileText } from "lucide-react";

export default function LessonSummary() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-6 flex items-center gap-3">

        <FileText className="text-sky-600" />

        <h2 className="text-2xl font-bold">

          Lesson Summary

        </h2>

      </div>

      <ul className="space-y-4 text-slate-600">

        <li>• Python supports multiple built-in data types.</li>

        <li>• Strings are immutable.</li>

        <li>• Lists are mutable.</li>

        <li>• Dictionaries store key-value pairs.</li>

        <li>• Sets contain unique values.</li>

      </ul>

    </section>
  );
}