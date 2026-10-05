"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.certificateService = void 0;
const client_1 = require("@prisma/client");
const fs_1 = __importDefault(require("fs"));
const certificate_generator_1 = require("../../generators/certificate.generator");
const prisma = new client_1.PrismaClient();
function certificateFileExists(filePath) {
    return Boolean(filePath) && fs_1.default.existsSync(filePath);
}
exports.certificateService = {
    async generate(userId, courseSlug, courseTitle) {
        if (!userId) {
            throw new Error("User authentication required");
        }
        if (!courseSlug) {
            throw new Error("Course slug is required");
        }
        const passedAttempt = await prisma.examAttempt.findFirst({
            where: {
                userId,
                passed: true,
                exam: {
                    course: {
                        slug: courseSlug,
                    },
                },
            },
            orderBy: {
                submittedAt: "desc",
            },
            include: {
                exam: {
                    include: {
                        course: true,
                    },
                },
            },
        });
        if (!passedAttempt) {
            throw new Error("Certificate unavailable. You must pass the final exam with the required score first.");
        }
        const resolvedCourseTitle = passedAttempt.exam.course.title ||
            courseTitle ||
            courseSlug;
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                fullName: true,
            },
        });
        if (!user) {
            throw new Error("User not found");
        }
        const existingCertificate = await prisma.certificate.findFirst({
            where: {
                userId,
                courseSlug,
            },
        });
        /*
         * Existing certificate + existing PDF:
         * nothing to regenerate.
         */
        if (existingCertificate &&
            certificateFileExists(existingCertificate.filePath)) {
            return existingCertificate;
        }
        /*
         * Existing certificate record but missing PDF:
         * regenerate the PDF using the SAME certificate ID
         * and update the stored file path.
         */
        if (existingCertificate) {
            const issueDateText = new Date(existingCertificate.issuedAt).toLocaleDateString("en-IN");
            const filePath = await (0, certificate_generator_1.generateCertificate)({
                studentName: user.fullName,
                courseTitle: existingCertificate.courseTitle ||
                    resolvedCourseTitle,
                certificateId: existingCertificate.certificateId,
                issueDate: issueDateText,
            });
            return prisma.certificate.update({
                where: {
                    id: existingCertificate.id,
                },
                data: {
                    filePath,
                },
            });
        }
        /*
         * No certificate record:
         * create a completely new certificate.
         */
        const certificateId = await this.createUniqueCertificateId();
        const issueDate = new Date();
        const issueDateText = issueDate.toLocaleDateString("en-IN");
        const filePath = await (0, certificate_generator_1.generateCertificate)({
            studentName: user.fullName,
            courseTitle: resolvedCourseTitle,
            certificateId,
            issueDate: issueDateText,
        });
        return prisma.certificate.create({
            data: {
                certificateId,
                userId,
                courseSlug,
                courseTitle: resolvedCourseTitle,
                filePath,
                paymentStatus: true,
                issuedAt: issueDate,
            },
        });
    },
    async createUniqueCertificateId() {
        for (let attempt = 0; attempt < 10; attempt++) {
            const certificateId = `CL-${Date.now()
                .toString(36)
                .toUpperCase()}-` +
                Math.random()
                    .toString(36)
                    .slice(2, 8)
                    .toUpperCase();
            const existing = await prisma.certificate.findUnique({
                where: {
                    certificateId,
                },
            });
            if (!existing) {
                return certificateId;
            }
        }
        throw new Error("Unable to generate a unique certificate ID");
    },
    async getUserCertificates(userId) {
        return prisma.certificate.findMany({
            where: {
                userId,
            },
            orderBy: {
                issuedAt: "desc",
            },
        });
    },
    async verifyCertificate(certificateId) {
        const certificate = await prisma.certificate.findUnique({
            where: {
                certificateId,
            },
            select: {
                certificateId: true,
                courseSlug: true,
                courseTitle: true,
                issuedAt: true,
                user: {
                    select: {
                        fullName: true,
                    },
                },
            },
        });
        if (!certificate) {
            return null;
        }
        return {
            valid: true,
            certificateId: certificate.certificateId,
            studentName: certificate.user.fullName,
            courseSlug: certificate.courseSlug,
            courseTitle: certificate.courseTitle,
            issuedAt: certificate.issuedAt,
        };
    },
};
//# sourceMappingURL=certificate.service.js.map