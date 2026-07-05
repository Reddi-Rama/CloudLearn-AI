import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  LearningPathsHero,
  LearningPathsGrid,
} from "@/components/learningPaths";

export default function LearningPathsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F8FAFC] pt-36 pb-24">

        <div className="mx-auto max-w-7xl px-6">

          <LearningPathsHero />

          <div className="mt-16">
            <LearningPathsGrid />
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}