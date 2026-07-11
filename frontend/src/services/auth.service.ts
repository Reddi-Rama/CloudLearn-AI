import { auth } from "@/lib";

export const authService = {
  async login(email: string, password: string) {
    console.log("Login", email, password);

    auth.login("demo-token");

    return {
      success: true,
      token: "demo-token",
    };
  },

  async register(data: unknown) {
    console.log(data);

    return {
      success: true,
    };
  },

  async logout() {
    auth.logout();

    return {
      success: true,
    };
  },
};