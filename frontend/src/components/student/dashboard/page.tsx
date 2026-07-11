"use client";

import StudentLayout from "../Layout/StudentLayout";

import {
  DashboardHeader,
  WelcomeBanner,
  QuickStats,
  ContinueLearning,
  RecentActivity,
  UpcomingAssessments,
  RecommendedCourses,
  LearningCalendar,
  NotificationsPanel,
  QuickActions,
} from "./index";

export default function DashboardPage() {
  return (
    <StudentLayout>
      <div className="space-y-8">

        <DashboardHeader />

        <WelcomeBanner />

        <QuickStats />

        <ContinueLearning />

        <div className="grid gap-8 lg:grid-cols-2">
          <RecentActivity />
          <UpcomingAssessments />
        </div>

        <RecommendedCourses />

        <div className="grid gap-8 lg:grid-cols-2">
          <LearningCalendar />
          <NotificationsPanel />
        </div>

        <QuickActions />

      </div>
    </StudentLayout>
  );
}