import StudentLayout from "@/components/layout/StudentLayout";

import {
  NotificationHeader,
  NotificationList,
} from "@/components/notifications";

export default function NotificationsPage() {
  return (
    <StudentLayout>

      <div className="space-y-10">

        <NotificationHeader />

        <NotificationList />

      </div>

    </StudentLayout>
  );
}