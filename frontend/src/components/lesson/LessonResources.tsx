"use client";

import { Download, FileText, Link2 } from "lucide-react";

export default function LessonResources() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Lesson Resources
      </h2>

      <div className="mt-8 space-y-5">

        <button className="flex w-full items-center justify-between rounded-2xl border p-5 hover:bg-slate-50">

          <div className="flex items-center gap-3">

            <FileText className="text-sky-600" />

            HTML Notes PDF

          </div>

          <Download />

        </button>

        <button className="flex w-full items-center justify-between rounded-2xl border p-5 hover:bg-slate-50">

          <div className="flex items-center gap-3">

            <Link2 className="text-sky-600" />

            W3Schools Reference

          </div>

        </button>

      </div>

    </section>
  );
}