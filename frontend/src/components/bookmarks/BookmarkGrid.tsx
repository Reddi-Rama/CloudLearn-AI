"use client";

import BookmarkCard from "./BookmarkCard";

const bookmarks = [
  {
    title: "Python Programming",
    category: "Programming",
    progress: 72,
  },
  {
    title: "Cloud Computing",
    category: "Cloud",
    progress: 45,
  },
  {
    title: "Machine Learning",
    category: "AI",
    progress: 18,
  },
];

export default function BookmarkGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {bookmarks.map((bookmark) => (

        <BookmarkCard
          key={bookmark.title}
          {...bookmark}
        />

      ))}

    </div>
  );
}