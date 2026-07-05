import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CloudBackground from "@/components/layout/CloudBackground";

import {
  DomainHero,
  DomainGrid,
} from "@/components/domains";

export default function DomainsPage() {
  return (
    <>
      <CloudBackground />

      <Navbar />

      <main>

        <DomainHero />

        <DomainGrid />

      </main>

      <Footer />

    </>
  );
}