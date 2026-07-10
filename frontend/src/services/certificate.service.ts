export const certificateService = {
  async getCertificates() {
    return [];
  },

  async downloadCertificate(id: string) {
    return {
      success: true,
      id,
    };
  },
};