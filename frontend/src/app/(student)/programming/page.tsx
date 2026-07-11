import StudentLayout from "@/components/layout/StudentLayout";

import {
  ProgrammingHeader,
  ProgrammingLayout,
  ProgrammingSidebar,
  ProblemDescription,
  CodeEditor,
  OutputPanel,
  TestCases,
  RunButton,
  SubmitButton,
  HintsPanel,
  ProgrammingStats,
} from "@/components/programming";

export default function ProgrammingPage() {
  return (
    <StudentLayout>

      <div className="space-y-8">

        <ProgrammingHeader />

        <ProgrammingLayout
          left={
            <div className="space-y-6">
              <ProgrammingSidebar />
              <ProgrammingStats />
            </div>
          }
          center={
            <div className="space-y-6">
              <ProblemDescription />

              <CodeEditor />

              <div className="flex gap-4">
                <RunButton />
                <SubmitButton />
              </div>
            </div>
          }
          right={
            <div className="space-y-6">
              <TestCases />
              <OutputPanel />
              <HintsPanel />
            </div>
          }
        />

      </div>

    </StudentLayout>
  );
}