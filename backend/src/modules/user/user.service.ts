import bcrypt from "bcryptjs";
import { User } from "@prisma/client";
import { userRepository } from "./user.repository";
import {
  ChangePasswordInput,
  UpdateProfileInput,
} from "./user.validator";

function toPublicUser(user: User) {
  const { password, ...publicUser } = user;
  return publicUser;
}

export const userService = {
  async getMe(userId: string) {
    const user = await userRepository.findById(userId);

    if (!user) {
      throw new Error("User not found.");
    }

    return toPublicUser(user);
  },

  async updateMe(
    userId: string,
    data: UpdateProfileInput
  ) {
    const existing = await userRepository.findById(userId);

    if (!existing) {
      throw new Error("User not found.");
    }

    const updateData = {
      fullName: data.fullName,
      avatar: data.avatar,
    };

    const updated = await userRepository.updateById(
      userId,
      updateData
    );

    return toPublicUser(updated);
  },

  async changePassword(
    userId: string,
    data: ChangePasswordInput
  ) {
    const user = await userRepository.findById(userId);

    if (!user) {
      throw new Error("User not found.");
    }

    const isMatch = await bcrypt.compare(
      data.currentPassword,
      user.password
    );

    if (!isMatch) {
      throw new Error("Current password is incorrect.");
    }

    const hashedPassword = await bcrypt.hash(
      data.newPassword,
      10
    );

    await userRepository.updatePassword(
      userId,
      hashedPassword
    );

    return {
      message: "Password changed successfully.",
    };
  },

  async deleteMe(userId: string) {
    const existing = await userRepository.findById(userId);

    if (!existing) {
      throw new Error("User not found.");
    }

    await userRepository.deleteById(userId);

    return {
      message: "Account deleted successfully.",
    };
  },
};