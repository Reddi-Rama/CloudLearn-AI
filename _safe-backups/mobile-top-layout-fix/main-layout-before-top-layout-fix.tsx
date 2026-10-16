import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">

      <Header />

      <main className="w-full">
        {children}
      </main>

      <Footer />

    </div>
  );
}