import { OAuth2Client } from "google-auth-library";
import {
  createUser,
  findUserByEmail,
  findUserById,
  findUserByGoogleId,
  createGoogleUser,
  findUserProfile,
  saveRefreshToken,
  clearRefreshToken,
  userRepository,
} from "../user/user.repository";

import {
  hashPassword,
  comparePassword,
} from "../../helpers/password";

import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../../lib/jwt";


const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

export async function loginWithGoogle(
  idToken: string
) {
  if (!idToken || !idToken.trim()) {
    throw new Error("Google ID token is required");
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;

  if (!clientId) {
    throw new Error(
      "Google authentication is not configured"
    );
  }

  const ticket = await googleClient.verifyIdToken({
    idToken: idToken.trim(),
    audience: clientId,
  });

  const payload = ticket.getPayload();

  if (!payload) {
    throw new Error("Invalid Google ID token");
  }

  const googleId = payload.sub;
  const email = payload.email?.trim().toLowerCase();
  const emailVerified =
    payload.email_verified === true;

  if (!googleId || !email || !emailVerified) {
    throw new Error(
      "Google account email is not verified"
    );
  }

  const fullName =
    payload.name?.trim() ||
    email.split("@")[0];

  const avatar = payload.picture || null;

  let user = await findUserByGoogleId(googleId);

  if (!user) {
    user = await findUserByEmail(email);

    if (user) {
      if (
        user.googleId &&
        user.googleId !== googleId
      ) {
        throw new Error(
          "This email is already linked to another Google account"
        );
      }

      user = await userRepository.updateById(
        user.id,
        {
          googleId,
          isVerified: true,
          avatar: user.avatar || avatar,
        }
      );
    } else {
      user = await createGoogleUser({
        fullName,
        email,
        googleId,
        avatar,
      });
    }
  }

  const accessToken =
    generateAccessToken(user.id);

  const refreshToken =
    generateRefreshToken(user.id);

  const refreshExpiry = new Date(
    Date.now() +
      7 * 24 * 60 * 60 * 1000
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
export async function registerUser(
  fullName: string,
  email: string,
  password: string
) {
  const existingUser =
    await findUserByEmail(email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword =
    await hashPassword(password);

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
  const user =
    await findUserByEmail(
      email.trim().toLowerCase()
    );

  if (!user) {
    throw new Error(
      "Invalid email or password"
    );
  }

  if (!user.password) {
    throw new Error(
      "This account uses Google Sign-In. Please continue with Google."
    );
  }

  const isPasswordCorrect =
    await comparePassword(
      password,
      user.password
    );

  if (!isPasswordCorrect) {
    throw new Error(
      "Invalid email or password"
    );
  }

  if (!user.isVerified) {
    throw new Error(
      "Please verify your email before logging in"
    );
  }

  const accessToken =
    generateAccessToken(user.id);

  const refreshToken =
    generateRefreshToken(user.id);

  const refreshExpiry = new Date(
    Date.now() +
      7 * 24 * 60 * 60 * 1000
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
  const user =
    await findUserProfile(userId);

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
  const decoded =
    verifyRefreshToken(refreshToken);

  const user =
    await findUserById(
      decoded.userId
    );

  if (!user) {
    throw new Error(
      "User not found"
    );
  }

  if (!user.isVerified) {
    throw new Error(
      "Email is not verified"
    );
  }

  if (
    user.refreshToken !==
      refreshToken ||
    !user.refreshTokenExpiry ||
    user.refreshTokenExpiry <
      new Date()
  ) {
    throw new Error(
      "Invalid refresh token"
    );
  }

  const accessToken =
    generateAccessToken(user.id);

  return {
    accessToken,
  };
}

export async function logoutUser(
  userId: string
) {
  await clearRefreshToken(userId);

  return {
    message:
      "Logged out successfully",
  };
}
