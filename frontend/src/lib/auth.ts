import { storage } from "./storage";

export const AUTH_TOKEN = "cloudlearn_token";
export const USER_KEY = "cloudlearn_user";

export const auth = {
  login(token: string) {
    storage.set(AUTH_TOKEN, token);
  },

  logout() {
    storage.remove(AUTH_TOKEN);
    storage.remove(USER_KEY);
  },

  getToken() {
    return storage.get<string>(AUTH_TOKEN);
  },

  isAuthenticated() {
    return Boolean(storage.get(AUTH_TOKEN));
  },
};