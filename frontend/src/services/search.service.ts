export const searchService = {
  async search(query: string) {
    return {
      query,
      results: [],
    };
  },

  async recentSearches() {
    return [];
  },
};