export function isAuthenticated() {
  if (typeof window === "undefined") {
    return false;
  }

  const user = localStorage.getItem(
    "cloudlearn-user"
  );

  return !!user;
}

export function login(userData: unknown) {
  localStorage.setItem(
    "cloudlearn-user",
    JSON.stringify(userData)
  );
}

export function logout() {
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

  return user
    ? JSON.parse(user)
    : null;
}