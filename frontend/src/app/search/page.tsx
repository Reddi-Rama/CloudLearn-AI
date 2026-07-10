import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  SearchHeader,
  SearchBar,
  SearchFilters,
  SearchResults,
  RecentSearches,
} from "@/components/search";

export default function SearchPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          <SearchHeader />
          <SearchBar />
          <SearchFilters />
          <RecentSearches />
          <SearchResults />
        </div>
      </main>

      <Footer />
    </>
  );
}