import { API } from "@/lib/api";

export const authService = {
  async login(email: string, password: string) {
    const response = await fetch(
      `${API.BASE_URL}${API.ENDPOINTS.LOGIN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || "Login failed"
      );
    }

    // Handle both possible backend response formats
    const result = data.data;

    if (result?.user) {
      return {
        ...result.user,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      };
    }

    return result;
  },

  async register(data: unknown) {
    const response = await fetch(
      `${API.BASE_URL}${API.ENDPOINTS.REGISTER}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Registration failed"
      );
    }

    return result.data;
  },

  async logout() {
    return {
      success: true,
    };
  },
};