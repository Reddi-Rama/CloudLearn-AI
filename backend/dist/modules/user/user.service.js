"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_repository_1 = require("./user.repository");
function toPublicUser(user) {
    const { password, ...publicUser } = user;
    return publicUser;
}
exports.userService = {
    async getMe(userId) {
        const user = await user_repository_1.userRepository.findById(userId);
        if (!user) {
            throw new Error("User not found.");
        }
        return toPublicUser(user);
    },
    async updateMe(userId, data) {
        const existing = await user_repository_1.userRepository.findById(userId);
        if (!existing) {
            throw new Error("User not found.");
        }
        const updateData = {
            fullName: data.fullName,
            avatar: data.avatar,
        };
        const updated = await user_repository_1.userRepository.updateById(userId, updateData);
        return toPublicUser(updated);
    },
    async changePassword(userId, data) {
        const user = await user_repository_1.userRepository.findById(userId);
        if (!user) {
            throw new Error("User not found.");
        }
        const isMatch = await bcryptjs_1.default.compare(data.currentPassword, user.password);
        if (!isMatch) {
            throw new Error("Current password is incorrect.");
        }
        const hashedPassword = await bcryptjs_1.default.hash(data.newPassword, 10);
        await user_repository_1.userRepository.updatePassword(userId, hashedPassword);
        return {
            message: "Password changed successfully.",
        };
    },
    async deleteMe(userId) {
        const existing = await user_repository_1.userRepository.findById(userId);
        if (!existing) {
            throw new Error("User not found.");
        }
        await user_repository_1.userRepository.deleteById(userId);
        return {
            message: "Account deleted successfully.",
        };
    },
};
//# sourceMappingURL=user.service.js.map