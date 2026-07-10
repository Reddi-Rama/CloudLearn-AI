import { create } from "zustand";

interface SearchStore {
  query: string;

  setQuery: (query: string) => void;

  clear: () => void;
}

export const useSearchStore =
  create<SearchStore>((set) => ({
    query: "",

    setQuery: (query) =>
      set({
        query,
      }),

    clear: () =>
      set({
        query: "",
      }),
  }));