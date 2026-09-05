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

      <main className="home-page min-h-screen overflow-x-hidden">

        <Hero />

        <WhyCloudLearn />

        <CloudDomains />

        {/* ======================================================
            LEARNING PATHS
        ====================================================== */}

        <section className="home-learning-paths">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <span
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
              </span>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  tracking-tight
                  text-slate-900
                  md:text-5xl
                "
              >
                Choose Your Learning Path
              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-base
                  leading-8
                  text-slate-600
                  md:text-lg
                "
              >
                Follow a structured path from fundamentals to advanced
                industry-ready skills through practical learning,
                projects, and real-world development.
              </p>

            </div>

            <div className="mt-16">
              <LearningPaths />
            </div>

          </div>

        </section>

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