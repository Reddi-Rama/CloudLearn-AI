import { create } from "zustand";

interface BookmarkStore {
  bookmarks: string[];

  add: (id: string) => void;

  remove: (id: string) => void;
}

export const useBookmarkStore =
  create<BookmarkStore>((set) => ({
    bookmarks: [],

    add: (id) =>
      set((state) => ({
        bookmarks: [...state.bookmarks, id],
      })),

    remove: (id) =>
      set((state) => ({
        bookmarks: state.bookmarks.filter(
          (item) => item !== id
        ),
      })),
  }));