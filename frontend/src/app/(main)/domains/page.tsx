import DomainHero from "@/components/domains/DomainHero";
import SearchBar from "@/components/domains/SearchBar";
import CategoryFilter from "@/components/domains/CategoryFilter";
import DomainGrid from "@/components/domains/DomainGrid";
import CTA from "@/components/home/CTA";

export default function DomainsPage() {
  return (
    <main>

      <DomainHero />

      <SearchBar />

      <CategoryFilter />

      <DomainGrid />

      <CTA />

    </main>
  );
}