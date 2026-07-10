import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  AssessmentResult,
  ResultCard,
  ScoreCircle,
  PassBadge,
  WrongAnswers,
  ContinueButton,
} from "@/components/assessment";

export default function AssessmentResultPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50 pt-36 pb-20">

        <div className="mx-auto max-w-5xl space-y-8 px-6">

          <AssessmentResult
            score={85}
            passed={true}
          />

          <ScoreCircle score={85} />

          <PassBadge passed={true} />

          <ResultCard
            correct={17}
            incorrect={3}
            total={20}
          />

          <WrongAnswers />

          <ContinueButton />

        </div>

      </main>

      <Footer />

    </>
  );
}