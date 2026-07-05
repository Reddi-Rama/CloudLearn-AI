import {
  BookmarksHeader,
  BookmarkFilter,
  BookmarkGrid,
} from "@/components/bookmarks";

import {
  CloudBackground,
  PageContainer,
} from "@/components/common";

export default function BookmarksPage() {
  return (
    <CloudBackground>

      <PageContainer>

        <BookmarksHeader />

        <BookmarkFilter />

        <BookmarkGrid />

      </PageContainer>

    </CloudBackground>
  );
}