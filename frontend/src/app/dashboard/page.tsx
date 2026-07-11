import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  DashboardNavbar,
  DashboardSidebar,
  WelcomeCard,
  Statistics,
  ContinueLearning,
  CurrentCourses,
  ProgressChart,
  UpcomingExam,
  RecentCertifications,
  CertificateGrid,
  Achievements,
  ActivityTimeline,
  NotificationPanel,
  ProfileCard,
  SettingsPanel,
} from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50 pt-36 pb-20">

        <div className="mx-auto max-w-7xl px-6">

          <DashboardNavbar />

          <div className="mt-8 grid gap-8 lg:grid-cols-4">

            {/* Sidebar */}

            <div className="lg:col-span-1">

              <DashboardSidebar />

            </div>

            {/* Main Content */}

            <div className="space-y-8 lg:col-span-3">

              <WelcomeCard />

              <Statistics />

              <ContinueLearning />

              <CurrentCourses />

              <ProgressChart />

              <UpcomingExam />

              <RecentCertifications />

              <CertificateGrid />

              <Achievements />

              <ActivityTimeline />

              <NotificationPanel />

              <ProfileCard />

              <SettingsPanel />

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </>
  );
}

