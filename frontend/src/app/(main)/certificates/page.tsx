import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CloudDomains from "@/components/home/CloudDomains";

export default function DomainsPage() {
  return (
    <>
      <Header />

      <main className="pt-36">

        <section className="py-24 text-center">

          <h1 className="text-6xl font-black text-slate-900">
            Explore Learning Domains
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
            Choose a technology domain and begin your complete learning journey
            with structured roadmaps, projects, quizzes and certifications.
          </p>

        </section>

        <CloudDomains />

      </main>

      <Footer />
    </>
  );
}