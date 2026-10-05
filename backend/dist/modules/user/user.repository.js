"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
exports.createUser = createUser;
exports.findUserByEmail = findUserByEmail;
exports.findUserByGoogleId = findUserByGoogleId;
exports.createGoogleUser = createGoogleUser;
exports.findUserById = findUserById;
exports.findUserByPasswordResetToken = findUserByPasswordResetToken;
exports.savePasswordResetToken = savePasswordResetToken;
exports.clearPasswordResetToken = clearPasswordResetToken;
exports.findUserProfile = findUserProfile;
exports.saveRefreshToken = saveRefreshToken;
exports.clearRefreshToken = clearRefreshToken;
const prisma_1 = require("../../lib/prisma");
async function createUser(data) {
    return prisma_1.prisma.user.create({
        data,
    });
}
async function findUserByEmail(email) {
    return prisma_1.prisma.user.findUnique({
        where: { email },
    });
}
async function findUserByGoogleId(googleId) {
    return prisma_1.prisma.user.findUnique({
        where: { googleId },
    });
}
async function createGoogleUser(data) {
    return prisma_1.prisma.user.create({
        data: {
            fullName: data.fullName,
            email: data.email,
            password: null,
            googleId: data.googleId,
            avatar: data.avatar ?? null,
            isVerified: true,
        },
    });
}
async function findUserById(id) {
    return prisma_1.prisma.user.findUnique({
        where: { id },
    });
}
async function findUserByPasswordResetToken(passwordResetToken) {
    return prisma_1.prisma.user.findUnique({
        where: { passwordResetToken },
    });
}
async function savePasswordResetToken(id, passwordResetToken, passwordResetExpiry) {
    return prisma_1.prisma.user.update({
        where: { id },
        data: {
            passwordResetToken,
            passwordResetExpiry,
        },
    });
}
async function clearPasswordResetToken(id) {
    return prisma_1.prisma.user.update({
        where: { id },
        data: {
            passwordResetToken: null,
            passwordResetExpiry: null,
        },
    });
}
async function findUserProfile(id) {
    return prisma_1.prisma.user.findUnique({
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
async function saveRefreshToken(id, refreshToken, refreshTokenExpiry) {
    return prisma_1.prisma.user.update({
        where: { id },
        data: {
            refreshToken,
            refreshTokenExpiry,
        },
    });
}
async function clearRefreshToken(id) {
    return prisma_1.prisma.user.update({
        where: { id },
        data: {
            refreshToken: null,
            refreshTokenExpiry: null,
        },
    });
}
exports.userRepository = {
    async findById(id) {
        return prisma_1.prisma.user.findUnique({
            where: { id },
        });
    },
    async updateById(id, data) {
        return prisma_1.prisma.user.update({
            where: { id },
            data,
        });
    },
    async updatePassword(id, password) {
        return prisma_1.prisma.user.update({
            where: { id },
            data: {
                password,
            },
        });
    },
    async deleteById(id) {
        return prisma_1.prisma.user.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=user.repository.js.map