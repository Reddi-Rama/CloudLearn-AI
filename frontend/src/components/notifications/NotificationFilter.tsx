"use client";

export default function NotificationFilter() {
  return (
    <div className="mb-8 flex gap-3 flex-wrap">

      <button className="rounded-full bg-sky-600 px-5 py-2 text-white">

        All

      </button>

      <button className="rounded-full bg-sky-100 px-5 py-2">

        Courses

      </button>

      <button className="rounded-full bg-sky-100 px-5 py-2">

        Assessments

      </button>

      <button className="rounded-full bg-sky-100 px-5 py-2">

        Certificates

      </button>

    </div>
  );
}