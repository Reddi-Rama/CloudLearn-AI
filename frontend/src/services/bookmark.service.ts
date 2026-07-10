export const bookmarkService = {
  async getBookmarks() {
    return [];
  },

  async addBookmark(id: string) {
    return {
      success: true,
      id,
    };
  },

  async removeBookmark(id: string) {
    return {
      success: true,
      id,
    };
  },
};