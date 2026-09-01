"use client";

import { useState } from "react";

import DomainHero from "@/components/domains/DomainHero";
import DomainSearch from "@/components/domains/DomainSearch";
import DomainFilter from "@/components/domains/DomainFilter";
import DomainGrid from "@/components/domains/DomainGrid";

export default function DomainsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <main className="domains-page min-h-screen overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <DomainHero />

      {/* =========================================================
          SEARCH
      ========================================================= */}
      <DomainSearch
        query={searchQuery}
        onQueryChange={setSearchQuery}
      />

      {/* =========================================================
          FILTER
      ========================================================= */}
      <DomainFilter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* =========================================================
          DOMAIN CARDS
      ========================================================= */}
      <DomainGrid
        query={searchQuery}
        selectedCategory={selectedCategory}
      />

    </main>
  );
}