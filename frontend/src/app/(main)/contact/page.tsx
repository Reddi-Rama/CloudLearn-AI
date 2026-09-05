import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQPreview from "@/components/contact/FAQPreview";
import MapSection from "@/components/contact/MapSection";
import BackButton from "@/components/layout/BackButton";

export default function ContactPage() {
  return (
    <main className="contact-page min-h-screen overflow-hidden">

      {/* ======================================================
          BACK TO HOME
      ====================================================== */}

      <div className="px-6 pt-6">
        <BackButton
          href="/"
          label="Back to Home"
        />
      </div>

      <ContactHero />

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-12
          bg-transparent
          px-6
          py-24
          lg:grid-cols-2
        "
      >

        <ContactForm />

        <ContactInfo />

      </div>

      <FAQPreview />

      <MapSection />

    </main>
  );
}