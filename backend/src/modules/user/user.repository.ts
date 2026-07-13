import { Prisma, User } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export async function createUser(data: {
  fullName: string;
  email: string;
  password: string;
}) {
  return prisma.user.create({
    data,
  });
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

export async function findUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
  });
}

export async function findUserProfile(id: string) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      fullName: true,
      email: true,
      avatar: true,
      role: true,
      createdAt: true,
    },
  });
}

export async function saveRefreshToken(
  id: string,
  refreshToken: string,
  refreshTokenExpiry: Date
) {
  return prisma.user.update({
    where: { id },
    data: {
      refreshToken,
      refreshTokenExpiry,
    },
  });
}

export async function clearRefreshToken(id: string) {
  return prisma.user.update({
    where: { id },
    data: {
      refreshToken: null,
      refreshTokenExpiry: null,
    },
  });
}

export const userRepository = {
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  async updateById(
    id: string,
    data: Prisma.UserUpdateInput
  ): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  async updatePassword(
    id: string,
    password: string
  ): Promise<User> {
    return prisma.user.update({
      where: { id },
      data: {
        password,
      },
    });
  },

  async deleteById(id: string): Promise<User> {
    return prisma.user.delete({
      where: { id },
    });
  },
};