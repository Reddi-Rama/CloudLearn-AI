import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import WhyCloudLearn from "@/components/home/WhyCloudLearn";
import CloudDomains from "@/components/home/CloudDomains";
import { PathGrid as LearningPaths } from "@/components/learning-Paths";
import CertificatePreview from "@/components/home/CertificatePreview";
import Partners from "@/components/home/Partners";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="overflow-x-hidden bg-[#F8FAFC] pt-40">

        <Hero />

        <WhyCloudLearn />

        <CloudDomains />

        <LearningPaths />

        <CertificatePreview />

        <Partners />

        <Testimonials />

        <FAQ />

        <CTA />

      </main>

      <Footer />
    </>
  );
}