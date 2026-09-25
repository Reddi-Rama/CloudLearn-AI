export const API = {
  BASE_URL:
    process.env.NEXT_PUBLIC_API_URL ||
    (typeof window !== "undefined"
      ? `http://${window.location.hostname}:5000/api/v1`
      : "http://localhost:5000/api/v1"),

  ENDPOINTS: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",

    PROFILE: "/users/profile",

    COURSES: "/courses",
    LESSONS: "/lessons",
    DOMAINS: "/domains",

    ASSESSMENTS: "/assessments",

    EXAM: "/exam",

    CERTIFICATES: "/certificate",

    BOOKMARKS: "/bookmarks",
    NOTIFICATIONS: "/notifications",

    PAYMENT: "/payment",
    SEARCH: "/search",
  },
};

let refreshPromise: Promise<string | null> | null = null;

async function refreshAccessToken(): Promise<string | null> {
  if (refreshPromise) {
    return refreshPromise;
  }

  refreshPromise = (async () => {
    if (typeof window === "undefined") {
      return null;
    }

    const refreshToken = localStorage.getItem(
      "cloudlearn-refresh-token"
    );

    if (!refreshToken) {
      return null;
    }

    try {
      const response = await fetch(
        `${API.BASE_URL}${API.ENDPOINTS.REFRESH}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            refreshToken,
          }),
        }
      );

      let result: any = null;

      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (!response.ok || !result?.success) {
        return null;
      }

      const data = result?.data ?? result;

      const newAccessToken =
        data?.accessToken ??
        data?.token ??
        null;

      const newRefreshToken =
        data?.refreshToken ??
        refreshToken;

      if (!newAccessToken) {
        return null;
      }

      localStorage.setItem(
        "cloudlearn-access-token",
        newAccessToken
      );

      if (newRefreshToken) {
        localStorage.setItem(
          "cloudlearn-refresh-token",
          newRefreshToken
        );
      }

      return newAccessToken;
    } catch {
      return null;
    }
  })().finally(() => {
    refreshPromise = null;
  });

  return refreshPromise;
}

async function requestWithAutoRefresh(
  url: string,
  init: RequestInit,
  token?: string
): Promise<Response> {
  const headers = new Headers(init.headers);

  if (token) {
    headers.set(
      "Authorization",
      `Bearer ${token}`
    );
  }

  const response = await fetch(url, {
    ...init,
    headers,
    credentials: "include",
  });

  if (
    response.status !== 401 ||
    !token ||
    url ===
      `${API.BASE_URL}${API.ENDPOINTS.REFRESH}`
  ) {
    return response;
  }

  const newAccessToken =
    await refreshAccessToken();

  if (!newAccessToken) {
    return response;
  }

  const retryHeaders =
    new Headers(init.headers);

  retryHeaders.set(
    "Authorization",
    `Bearer ${newAccessToken}`
  );

  return fetch(url, {
    ...init,
    headers: retryHeaders,
    credentials: "include",
  });
}

async function getErrorMessage(
  response: Response,
  fallback: string
): Promise<string> {
  try {
    const errorData = await response.json();

    if (errorData?.message) {
      return errorData.message;
    }
  } catch {
    // Ignore JSON parsing errors
  }

  return fallback;
}

export async function apiGet<T>(
  url: string,
  token?: string
): Promise<T> {
  const response =
    await requestWithAutoRefresh(
      url,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      token
    );

  if (!response.ok) {
    throw new Error(
      await getErrorMessage(
        response,
        "Failed to fetch data."
      )
    );
  }

  return response.json();
}

export async function apiPost<T>(
  url: string,
  body: unknown,
  token?: string
): Promise<T> {
  const response =
    await requestWithAutoRefresh(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
      token
    );

  if (!response.ok) {
    throw new Error(
      await getErrorMessage(
        response,
        "Request failed."
      )
    );
  }

  return response.json();
}

export async function apiDelete<T>(
  url: string,
  token?: string
): Promise<T> {
  const response =
    await requestWithAutoRefresh(
      url,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
      token
    );

  if (!response.ok) {
    throw new Error(
      await getErrorMessage(
        response,
        "Request failed."
      )
    );
  }

  return response.json();
}

export async function apiDownload(
  url: string,
  token?: string
): Promise<Blob> {
  const response =
    await requestWithAutoRefresh(
      url,
      {
        method: "GET",
      },
      token
    );

  if (!response.ok) {
    throw new Error(
      await getErrorMessage(
        response,
        "Unable to download file."
      )
    );
  }

  return response.blob();
}
