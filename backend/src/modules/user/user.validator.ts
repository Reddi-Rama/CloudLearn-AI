// src/modules/user/user.validator.ts
import { z } from 'zod';

export const updateProfileSchema = z
  .object({
    name: z.string().trim().min(2, 'Name must be at least 2 characters.').max(100).optional(),
    avatarUrl: z.string().url('Avatar URL must be a valid URL.').optional(),
    darkMode: z.boolean().optional(),
    notifPref: z.boolean().optional(),
    emailUpdatesPref: z.boolean().optional(),
    language: z.string().min(2).max(10).optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided to update.',
  });

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required.'),
    newPassword: z
      .string()
      .min(8, 'New password must be at least 8 characters long.')
      .regex(/[A-Z]/, 'New password must contain at least one uppercase letter.')
      .regex(/[a-z]/, 'New password must contain at least one lowercase letter.')
      .regex(/[0-9]/, 'New password must contain at least one number.'),
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: 'New password must be different from the current password.',
    path: ['newPassword'],
  });

export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;