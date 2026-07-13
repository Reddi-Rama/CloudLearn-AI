import {
  createUser,
  findUserByEmail,
  findUserById,
  findUserProfile,
  saveRefreshToken,
  clearRefreshToken,
} from "../user/user.repository";

import { hashPassword, comparePassword } from "../../helpers/password";

import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../../lib/jwt";
export async function registerUser(
  fullName: string,
  email: string,
  password: string
) {
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hashPassword(password);

  const user = await createUser({
    fullName,
    email,
    password: hashedPassword,
  });

  return {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
  };
}

export async function loginUser(
  email: string,
  password: string
) {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordCorrect = await comparePassword(
    password,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new Error("Invalid email or password");
  }

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  const refreshExpiry = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000
  );

  await saveRefreshToken(
    user.id,
    refreshToken,
    refreshExpiry
  );

  return {
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
    accessToken,
    refreshToken,
  };
}

export async function getCurrentUser(
  userId: string
) {
  const user = await findUserProfile(userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

export async function getUserById(
  userId: string
) {
  return findUserById(userId);
}

export async function refreshAccessToken(
  refreshToken: string
) {
  const decoded = verifyRefreshToken(refreshToken);

  console.log("========== REFRESH DEBUG ==========");
  console.log("Decoded:", decoded);

  const user = await findUserById(decoded.userId);

  console.log("User Found:", !!user);

  if (!user) {
    throw new Error("User not found");
  }

  console.log("DB Refresh Token:");
  console.log(user.refreshToken);

  console.log("Incoming Refresh Token:");
  console.log(refreshToken);

  console.log(
    "Token Match:",
    user.refreshToken === refreshToken
  );

  console.log(
    "DB Expiry:",
    user.refreshTokenExpiry
  );

  console.log(
    "Current Time:",
    new Date()
  );

  console.log(
    "Expired:",
    !!user.refreshTokenExpiry &&
      user.refreshTokenExpiry < new Date()
  );

  console.log("===================================");

  if (
    user.refreshToken !== refreshToken ||
    !user.refreshTokenExpiry ||
    user.refreshTokenExpiry < new Date()
  ) {
    throw new Error("Invalid refresh token");
  }

  const accessToken = generateAccessToken(user.id);

  return {
    accessToken,
  };
}

export async function logoutUser(
  userId: string
) {
  await clearRefreshToken(userId);

  return {
    message: "Logged out successfully",
  };
}