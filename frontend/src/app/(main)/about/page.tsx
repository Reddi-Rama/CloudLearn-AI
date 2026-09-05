import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";
import Stats from "@/components/about/Stats";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Journey from "@/components/about/Journey";
import CTA from "@/components/home/CTA";
import BackButton from "@/components/layout/BackButton";

export default function AboutPage() {
  return (
    <main className="about-page min-h-screen overflow-hidden">

      {/* ======================================================
          BACK TO HOME
      ====================================================== */}

      <div className="px-6 pt-6">
        <BackButton
          href="/"
          label="Back to Home"
        />
      </div>

      <AboutHero />

      <Mission />

      <Vision />

      <Stats />

      <WhyChooseUs />

      <Journey />

      <CTA />

    </main>
  );
}