import { Prisma, User } from "@prisma/client";
import { prisma } from "../../lib/prisma";

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