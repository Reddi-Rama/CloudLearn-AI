export const API = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "",

  ENDPOINTS: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",

    PROFILE: "/profile",

    COURSES: "/courses",
    LESSONS: "/lessons",
    DOMAINS: "/domains",

    ASSESSMENTS: "/assessments",
    CERTIFICATES: "/certificates",

    BOOKMARKS: "/bookmarks",
    NOTIFICATIONS: "/notifications",

    PAYMENT: "/payment",
    SEARCH: "/search",
  },
};

export async function apiGet<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}

export async function apiPost<T>(
  url: string,
  body: unknown
): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Request failed.");
  }

  return response.json();
}