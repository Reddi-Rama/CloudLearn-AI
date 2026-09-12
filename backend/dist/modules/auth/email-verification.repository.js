"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVerificationOtp = createVerificationOtp;
exports.findLatestVerificationOtp = findLatestVerificationOtp;
exports.incrementOtpAttempts = incrementOtpAttempts;
exports.markOtpAsUsed = markOtpAsUsed;
exports.deleteUserVerificationOtps = deleteUserVerificationOtps;
const prisma_1 = require("../../lib/prisma");
async function createVerificationOtp(data) {
    return prisma_1.prisma.emailVerificationOtp.create({
        data: {
            userId: data.userId,
            codeHash: data.codeHash,
            expiresAt: data.expiresAt,
        },
    });
}
async function findLatestVerificationOtp(userId) {
    return prisma_1.prisma.emailVerificationOtp.findFirst({
        where: {
            userId,
            usedAt: null,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}
async function incrementOtpAttempts(otpId) {
    return prisma_1.prisma.emailVerificationOtp.update({
        where: {
            id: otpId,
        },
        data: {
            attempts: {
                increment: 1,
            },
        },
    });
}
async function markOtpAsUsed(otpId) {
    return prisma_1.prisma.emailVerificationOtp.update({
        where: {
            id: otpId,
        },
        data: {
            usedAt: new Date(),
        },
    });
}
async function deleteUserVerificationOtps(userId) {
    return prisma_1.prisma.emailVerificationOtp.deleteMany({
        where: {
            userId,
        },
    });
}
//# sourceMappingURL=email-verification.repository.js.map