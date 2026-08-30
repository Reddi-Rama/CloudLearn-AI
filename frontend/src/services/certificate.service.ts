import { API, apiGet } from "@/lib/api";

export const certificateService = {
  async getCertificates() {
    if (typeof window === "undefined") {
      return [];
    }

    const token = localStorage.getItem(
      "cloudlearn-access-token"
    );

    if (!token) {
      throw new Error("Please login first.");
    }

    const response = await apiGet<{
      success: boolean;
      message: string;
      data: any[];
    }>(
      `${API.BASE_URL}${API.ENDPOINTS.CERTIFICATES}`,
      token
    );

    return response.data;
  },

  async downloadCertificate(
    certificateId: string
  ) {
    const token = localStorage.getItem(
      "cloudlearn-access-token"
    );

    if (!token) {
      throw new Error("Please login first.");
    }

    const response = await fetch(
      `${API.BASE_URL}${API.ENDPOINTS.CERTIFICATES}/download/${certificateId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        "Unable to download certificate."
      );
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `${certificateId}.pdf`;

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);
  },
};