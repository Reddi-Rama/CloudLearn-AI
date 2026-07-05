import {
  NotificationHeader,
  NotificationFilter,
  NotificationList,
} from "@/components/notifications";

import {
  CloudBackground,
  PageContainer,
} from "@/components/common";

export default function NotificationsPage() {
  return (
    <CloudBackground>

      <PageContainer>

        <NotificationHeader />

        <NotificationFilter />

        <NotificationList />

      </PageContainer>

    </CloudBackground>
  );
}