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

      <main className="w-full cloudlearn-page-content">
        {children}
      </main>

      <Footer />

    </div>
  );
}