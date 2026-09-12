"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.certificateRepository = void 0;
const prisma_1 = require("../../lib/prisma");
exports.certificateRepository = {
    async create(data) {
        return prisma_1.prisma.certificate.create({
            data: {
                certificateId: data.certificateId,
                userId: data.userId,
                courseSlug: data.courseSlug,
                courseTitle: data.courseTitle,
                filePath: data.filePath,
                paymentStatus: true,
            },
        });
    },
    async findByCertificateId(certificateId) {
        return prisma_1.prisma.certificate.findUnique({
            where: {
                certificateId,
            },
            include: {
                user: true,
            },
        });
    },
    async findUserCertificate(userId, courseSlug) {
        return prisma_1.prisma.certificate.findFirst({
            where: {
                userId,
                courseSlug,
            },
        });
    },
    async findUserCertificates(userId) {
        return prisma_1.prisma.certificate.findMany({
            where: {
                userId,
            },
            orderBy: {
                issuedAt: "desc",
            },
        });
    },
};
//# sourceMappingURL=certificate.repository.js.map