export const paymentService = {
  async getPlans() {
    return [];
  },

  async subscribe(plan: string) {
    return {
      success: true,
      plan,
    };
  },

  async paymentHistory() {
    return [];
  },
};