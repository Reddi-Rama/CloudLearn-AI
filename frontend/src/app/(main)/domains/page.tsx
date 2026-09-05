"use client";

import { useState } from "react";

import DomainHero from "@/components/domains/DomainHero";
import DomainSearch from "@/components/domains/DomainSearch";
import DomainFilter from "@/components/domains/DomainFilter";
import DomainGrid from "@/components/domains/DomainGrid";
import BackButton from "@/components/layout/BackButton";

export default function DomainsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  return (
    <main className="domains-page min-h-screen overflow-hidden">

      {/* ======================================================
          BACK TO HOME
      ====================================================== */}

      <div className="px-6 pt-6">
        <BackButton
          href="/"
          label="Back to Home"
        />
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <DomainHero />

      {/* ======================================================
          SEARCH
      ====================================================== */}

      <DomainSearch
        query={searchQuery}
        onQueryChange={setSearchQuery}
      />

      {/* ======================================================
          FILTER
      ====================================================== */}

      <DomainFilter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* ======================================================
          DOMAIN GRID
      ====================================================== */}

      <DomainGrid
        query={searchQuery}
        selectedCategory={selectedCategory}
      />

    </main>
  );
}