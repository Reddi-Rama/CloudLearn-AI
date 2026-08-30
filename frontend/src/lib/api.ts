export const API = {
  BASE_URL:
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api/v1",

  ENDPOINTS: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",

    PROFILE: "/users/profile",

    COURSES: "/courses",
    LESSONS: "/lessons",
    DOMAINS: "/domains",

    ASSESSMENTS: "/assessments",

    // IMPORTANT:
    // Backend route is /certificate (singular)
    CERTIFICATES: "/certificate",

    BOOKMARKS: "/bookmarks",
    NOTIFICATIONS: "/notifications",

    PAYMENT: "/payment",
    SEARCH: "/search",
  },
};

export async function apiGet<T>(
  url: string,
  token?: string
): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    method: "GET",
    headers,
    credentials: "include",
  });

  if (!response.ok) {
    let message = "Failed to fetch data.";

    try {
      const errorData = await response.json();

      if (errorData?.message) {
        message = errorData.message;
      }
    } catch {
      // Ignore JSON parsing errors
    }

    throw new Error(message);
  }

  return response.json();
}

export async function apiPost<T>(
  url: string,
  body: unknown,
  token?: string
): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    credentials: "include",
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    let message = "Request failed.";

    try {
      const errorData = await response.json();

      if (errorData?.message) {
        message = errorData.message;
      }
    } catch {
      // Ignore JSON parsing errors
    }

    throw new Error(message);
  }

  return response.json();
}

export async function apiDelete<T>(
  url: string,
  token?: string
): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    method: "DELETE",
    headers,
    credentials: "include",
  });

  if (!response.ok) {
    let message = "Request failed.";

    try {
      const errorData = await response.json();

      if (errorData?.message) {
        message = errorData.message;
      }
    } catch {
      // Ignore JSON parsing errors
    }

    throw new Error(message);
  }

  return response.json();
}