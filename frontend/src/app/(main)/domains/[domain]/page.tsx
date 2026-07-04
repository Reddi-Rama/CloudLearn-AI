import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CloudDomains from "@/components/home/CloudDomains";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";

export default function DomainsPage() {
  return (
    <>
      <Header />

      <main className="pt-36">

        <section className="py-20 text-center">

          <span className="rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">
            ☁ Explore Learning Domains
          </span>

          <h1 className="mt-8 text-6xl font-black text-slate-900">
            Find Your Perfect Learning Path
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            Choose from Programming, Artificial Intelligence,
            Machine Learning, Data Science, Cloud Computing,
            Cyber Security, DevOps, Full Stack Development,
            AI Tools, B.Tech Subjects and much more.
          </p>

        </section>

        <CloudDomains />

        <FAQ />

        <CTA />

      </main>

      <Footer />
    </>
  );
}