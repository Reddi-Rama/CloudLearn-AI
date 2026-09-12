"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordSchema = exports.updateProfileSchema = void 0;
const zod_1 = require("zod");
exports.updateProfileSchema = zod_1.z
    .object({
    fullName: zod_1.z
        .string()
        .trim()
        .min(2, "Full name must be at least 2 characters.")
        .max(100)
        .optional(),
    avatar: zod_1.z
        .string()
        .url("Avatar must be a valid URL.")
        .optional(),
})
    .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided.",
});
exports.changePasswordSchema = zod_1.z
    .object({
    currentPassword: zod_1.z.string().min(1),
    newPassword: zod_1.z
        .string()
        .min(8)
        .regex(/[A-Z]/)
        .regex(/[a-z]/)
        .regex(/[0-9]/),
})
    .refine((data) => data.currentPassword !== data.newPassword, {
    message: "New password must be different from current password.",
    path: ["newPassword"],
});
//# sourceMappingURL=user.validator.js.map