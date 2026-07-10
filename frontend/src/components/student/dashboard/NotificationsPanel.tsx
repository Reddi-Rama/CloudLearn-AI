"use client";

const notifications = [
  "Cloud Computing Assessment Tomorrow",
  "Python Course Updated",
  "Certificate Available",
  "New AI Course Released",
];

export default function NotificationsPanel() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Notifications
      </h2>

      <div className="mt-6 space-y-5">

        {notifications.map((item) => (

          <div
            key={item}
            className="rounded-2xl bg-slate-50 p-4"
          >

            {item}

          </div>

        ))}

      </div>

    </section>
  );
}