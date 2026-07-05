"use client";

import BookmarkCard from "./BookmarkCard";

const bookmarks = [
  {
    title: "Python Fundamentals",
    category: "Course",
    duration: "8 Hours",
  },
  {
    title: "JavaScript ES6",
    category: "Lesson",
    duration: "45 Minutes",
  },
  {
    title: "Machine Learning Basics",
    category: "Course",
    duration: "12 Hours",
  },
];

export default function BookmarkList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {bookmarks.map((bookmark) => (

        <BookmarkCard
          key={bookmark.title}
          {...bookmark}
        />

      ))}

    </div>
  );
}