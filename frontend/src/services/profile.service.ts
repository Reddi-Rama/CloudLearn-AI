export const profileService = {
  async getProfile() {
    return {};
  },

  async updateProfile(data: unknown) {
    return {
      success: true,
      data,
    };
  },
};