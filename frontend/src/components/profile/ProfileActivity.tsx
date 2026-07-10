"use client";

const activities = [
  "Completed React Assessment",
  "Earned Frontend Certificate",
  "Completed Cloud Module",
];

export default function ProfileActivity() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        Recent Activity
      </h2>

      <ul className="mt-5 space-y-3">
        {activities.map((activity) => (
          <li
            key={activity}
            className="rounded-xl bg-slate-50 p-4"
          >
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}