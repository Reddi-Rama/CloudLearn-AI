import { prisma } from "../lib/prisma";

export const findUserByEmail = (email: string) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const createUser = (data: {
  fullName: string;
  email: string;
  password: string;
}) => {
  return prisma.user.create({
    data,
  });
};

export const findUserById = (id: string) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const findUserProfile = (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      fullName: true,
      email: true,
      avatar: true,
      role: true,
      isVerified: true,
      createdAt: true,
    },
  });
};

export const saveRefreshToken = (
  userId: string,
  refreshToken: string,
  expiry: Date
) => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      refreshToken,
      refreshTokenExpiry: expiry,
    },
  });
};

export const clearRefreshToken = (userId: string) => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      refreshToken: null,
      refreshTokenExpiry: null,
    },
  });
};