"use client";

import NotificationCard from "./NotificationCard";
import { notifications } from "./NotificationData";

export default function NotificationList() {
  return (
    <div className="space-y-5">

      {notifications.map((notification) => (

        <NotificationCard
          key={notification.id}
          title={notification.title}
          message={notification.message}
          time={notification.time}
          type={notification.type}
        />

      ))}

    </div>
  );
}