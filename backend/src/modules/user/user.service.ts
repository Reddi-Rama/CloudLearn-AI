// src/modules/user/user.service.ts
import bcrypt from 'bcryptjs';
import { User } from '@prisma/client';
import { userRepository } from './user.repository';
import { AppError } from '../../shared/errors/AppError';
import { ChangePasswordInput, UpdateProfileInput } from './user.validator';

const SALT_ROUNDS = 10;

function toPublicUser(user: User) {
  const {
    passwordHash,
    emailVerifyToken,
    emailVerifyExpiry,
    resetToken,
    resetTokenExpiry,
    ...publicUser
  } = user;

  return publicUser;
}

export const userService = {
  async getMe(userId: string) {
    const user = await userRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    return toPublicUser(user);
  },

  async updateMe(userId: string, data: UpdateProfileInput) {
    const existing = await userRepository.findById(userId);

    if (!existing) {
      throw new AppError('User not found.', 404);
    }

    const updated = await userRepository.updateById(userId, data);

    return toPublicUser(updated);
  },

  async changePassword(userId: string, data: ChangePasswordInput) {
    const user = await userRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    if (!user.passwordHash) {
      throw new AppError(
        'This account signs in via a social provider and has no password to change.',
        400
      );
    }

    const isMatch = await bcrypt.compare(data.currentPassword, user.passwordHash);

    if (!isMatch) {
      throw new AppError('Current password is incorrect.', 401);
    }

    const passwordHash = await bcrypt.hash(data.newPassword, SALT_ROUNDS);

    await userRepository.updatePassword(userId, passwordHash);

    return { message: 'Password changed successfully.' };
  },

  async deleteMe(userId: string) {
    const existing = await userRepository.findById(userId);

    if (!existing) {
      throw new AppError('User not found.', 404);
    }

    await userRepository.deleteById(userId);

    return { message: 'Account deleted successfully.' };
  },
};