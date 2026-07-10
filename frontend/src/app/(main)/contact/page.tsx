import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQPreview from "@/components/contact/FAQPreview";
import MapSection from "@/components/contact/MapSection";

export default function ContactPage() {
  return (
    <main>

      <ContactHero />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">

        <ContactForm />

        <ContactInfo />

      </div>

      <FAQPreview />

      <MapSection />

    </main>
  );
}