export function isAuthenticated() {
  if (typeof window === "undefined") {
    return false;
  }

  const token = localStorage.getItem(
    "cloudlearn-access-token"
  );

  return !!token;
}

export function login(data: any) {
  if (typeof window === "undefined") {
    return;
  }

  const accessToken = data?.accessToken;
  const refreshToken = data?.refreshToken;
  const user = data?.user;

  if (accessToken) {
    localStorage.setItem(
      "cloudlearn-access-token",
      accessToken
    );
  }

  if (refreshToken) {
    localStorage.setItem(
      "cloudlearn-refresh-token",
      refreshToken
    );
  }

  if (user) {
    localStorage.setItem(
      "cloudlearn-user",
      JSON.stringify(user)
    );
  }
}

export function logout() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(
    "cloudlearn-access-token"
  );

  localStorage.removeItem(
    "cloudlearn-refresh-token"
  );

  localStorage.removeItem(
    "cloudlearn-user"
  );
}

export function getUser() {
  if (typeof window === "undefined") {
    return null;
  }

  const user = localStorage.getItem(
    "cloudlearn-user"
  );

  return user ? JSON.parse(user) : null;
}