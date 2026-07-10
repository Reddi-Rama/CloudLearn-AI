export const notificationService = {
  async getNotifications() {
    return [];
  },

  async markAsRead(id: string) {
    return {
      success: true,
      id,
    };
  },
};