import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  BookmarksHeader,
  BookmarkFilter,
  BookmarkList,
} from "@/components/bookmarks";

export default function BookmarksPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-20">

        <div className="mx-auto max-w-7xl px-6 space-y-8">

          <BookmarksHeader />

          <BookmarkFilter />

          <BookmarkList />

        </div>

      </main>

      <Footer />
    </>
  );
}