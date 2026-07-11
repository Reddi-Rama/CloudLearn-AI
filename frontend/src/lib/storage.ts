export const storage = {
  get<T>(key: string): T | null {
    if (typeof window === "undefined") {
      return null;
    }

    const value = localStorage.getItem(key);

    if (!value) {
      return null;
    }

    return JSON.parse(value) as T;
  },

  set<T>(key: string, value: T) {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  },

  remove(key: string) {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.removeItem(key);
  },

  clear() {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.clear();
  },
};

export const session = {
  get(key: string) {
    return sessionStorage.getItem(key);
  },

  set(key: string, value: string) {
    sessionStorage.setItem(key, value);
  },

  remove(key: string) {
    sessionStorage.removeItem(key);
  },

  clear() {
    sessionStorage.clear();
  },
};