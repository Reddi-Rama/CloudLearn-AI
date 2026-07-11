import BookmarkCard from "./BookmarkCard";
import { bookmarks } from "./bookmarkData";

export default function BookmarkGrid() {
  return (
    <section className="grid gap-8 lg:grid-cols-3">

      {bookmarks.map((bookmark) => (
        <BookmarkCard
          key={bookmark.id}
          title={bookmark.title}
          lesson={bookmark.lesson}
          progress={bookmark.progress}
        />
      ))}

    </section>
  );
}