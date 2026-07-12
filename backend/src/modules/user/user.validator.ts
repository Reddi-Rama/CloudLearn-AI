import { z } from "zod";

export const updateProfileSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Full name must be at least 2 characters.")
      .max(100)
      .optional(),

    avatar: z
      .string()
      .url("Avatar must be a valid URL.")
      .optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided.",
  });

export type UpdateProfileInput = z.infer<
  typeof updateProfileSchema
>;

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1),

    newPassword: z
      .string()
      .min(8)
      .regex(/[A-Z]/)
      .regex(/[a-z]/)
      .regex(/[0-9]/),
  })
  .refine(
    (data) =>
      data.currentPassword !== data.newPassword,
    {
      message:
        "New password must be different from current password.",
      path: ["newPassword"],
    }
  );

export type ChangePasswordInput = z.infer<
  typeof changePasswordSchema
>;