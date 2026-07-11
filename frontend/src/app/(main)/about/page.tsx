import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";
import Stats from "@/components/about/Stats";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Journey from "@/components/about/Journey";
import CTA from "@/components/home/CTA";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">

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