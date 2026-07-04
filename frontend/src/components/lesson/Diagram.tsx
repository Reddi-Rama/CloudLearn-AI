"use client";

import { Database, ArrowDown } from "lucide-react";

export default function Diagram() {
  return (
    <section className="rounded-3xl bg-white p-10 shadow-lg border">

      <h2 className="text-3xl font-bold mb-8">
        Variable Flow
      </h2>

      <div className="flex flex-col items-center gap-5">

        <div className="rounded-full bg-sky-500 p-6 text-white">

          <Database size={40} />

        </div>

        <ArrowDown className="text-sky-500" />

        <div className="rounded-3xl bg-sky-100 px-10 py-6">

          name = "Rama"

        </div>

        <ArrowDown className="text-sky-500" />

        <div className="rounded-3xl bg-green-100 px-10 py-6">

          Stored in Memory

        </div>

        <ArrowDown className="text-sky-500" />

        <div className="rounded-3xl bg-indigo-100 px-10 py-6">

          print(name)

        </div>

        <ArrowDown className="text-sky-500" />

        <div className="rounded-3xl bg-yellow-100 px-10 py-6">

          Output → Rama

        </div>

      </div>

    </section>
  );
}