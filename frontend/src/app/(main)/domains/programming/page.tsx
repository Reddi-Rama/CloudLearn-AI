import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProgrammingHero from "../../../../components/programming/ProgrammingHero";
import CourseGrid from "@/components/courses/CourseGrid";

export default function ProgrammingPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8FBFF] pt-28">
        <ProgrammingHero />
        <CourseGrid />
      </main>

      <Footer />
    </>
  );
}