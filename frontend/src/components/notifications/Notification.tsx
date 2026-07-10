"use client";

import NotificationHeader from "./NotificationHeader";
import NotificationFilter from "./NotificationFilter";
import NotificationList from "./NotificationList";

export default function Notification() {
  return (
    <section className="space-y-8">

      <NotificationHeader />

      <NotificationFilter />

      <NotificationList />

    </section>
  );
}