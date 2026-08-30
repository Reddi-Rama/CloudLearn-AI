"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

import { isAuthenticated } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/login");
      return;
    }

    setCheckingAuth(false);
  }, [router]);

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-sky-200 border-t-sky-600" />

          <p className="mt-4 text-sm font-medium text-slate-600">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

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