import Footer from "./Footer";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Sidebar + Topbar */}

      <div className="flex-1">
        {children}
      </div>

      <Footer />

    </div>
  );
}