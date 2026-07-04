import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import DomainHero from "@/components/domains/DomainHero";
import DomainSearch from "@/components/domains/DomainSearch";
import DomainGrid from "@/components/domains/DomainGrid";

export default function DomainsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8FBFF] pt-28">

        <DomainHero />

        <DomainSearch />

        <DomainGrid />

      </main>

      <Footer />
    </>
  );
}