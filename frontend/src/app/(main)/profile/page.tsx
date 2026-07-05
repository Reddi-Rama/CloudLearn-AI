import {
  ProfileHeader,
  ProfileBanner,
  UserCard,
  PersonalInfo,
  AcademicInfo,
  SkillsCard,
  AchievementsCard,
  CertificatesCard,
  ProgressSummary,
  LearningHistory,
  ProfileStats,
  SocialLinks,
} from "@/components/profile";

export default function ProfilePage() {
  return (
    <main className="container-custom py-10 space-y-10">

      <ProfileHeader />

      <ProfileBanner />

      <ProfileStats
        courses={12}
        certificates={5}
        assessments={42}
      />

      <UserCard
        name="John Doe"
        email="john@example.com"
        course="Artificial Intelligence"
      />

      <PersonalInfo
        phone="+91 9876543210"
        city="Hyderabad"
        country="India"
      />

      <AcademicInfo
        university="CloudLearn University"
        degree="B.Tech"
        year="3rd Year"
      />

      <SkillsCard
        skills={[
          "Python",
          "Machine Learning",
          "React",
          "SQL",
        ]}
      />

      <AchievementsCard
        achievements={[
          "Top Learner",
          "AI Explorer",
          "Python Master",
        ]}
      />

      <CertificatesCard
        totalCertificates={5}
      />

      <ProgressSummary
        completed={78}
      />

      <LearningHistory
        history={[
          {
            title: "Python Programming",
            completed: "June 2026",
          },
          {
            title: "Artificial Intelligence",
            completed: "July 2026",
          },
        ]}
      />

      <SocialLinks />

    </main>
  );
}