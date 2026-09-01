"use client";

import { useState } from "react";

import {
  Hero,
  Search,
  Filter,
  PathGrid,
  CareerSection,
  CTA,
} from "@/components/learning-Paths";

export default function LearningPathsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[#f7fbff]
        text-slate-900
      "
    >
      <Hero />

      <Search
        query={searchQuery}
        onQueryChange={setSearchQuery}
      />

      <section className="px-6 pt-8 md:px-10">
        <div className="mx-auto max-w-[1400px] text-center">

          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-sky-100
              bg-sky-50
              px-5
              py-2
              text-sm
              font-bold
              text-sky-600
              shadow-sm
            "
          >
            Learning Paths
          </div>

          <h1
            className="
              mt-5
              text-4xl
              font-extrabold
              tracking-tight
              text-slate-900
              md:text-5xl
            "
          >
            Choose Your Learning Path
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-8
              text-slate-600
              md:text-lg
            "
          >
            Follow a structured path from fundamentals to advanced
            industry-ready skills through practical learning and projects.
          </p>

        </div>
      </section>

      <Filter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <PathGrid
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />

      <CareerSection />

      <CTA />
    </main>
  );
}