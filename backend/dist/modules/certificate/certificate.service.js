"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.certificateService = void 0;
const client_1 = require("@prisma/client");
const certificate_generator_1 = require("../../generators/certificate.generator");
const prisma = new client_1.PrismaClient();
exports.certificateService = {
    async generate(userId, courseSlug, courseTitle) {
        if (!userId) {
            throw new Error("User authentication required");
        }
        if (!courseSlug) {
            throw new Error("Course slug is required");
        }
        /*
         * SECURITY:
         * A certificate can only be generated when the student
         * has a passed final exam attempt for this course.
         */
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
        /*
         * Do not create duplicate certificates for the same
         * student and course.
         */
        const existingCertificate = await prisma.certificate.findFirst({
            where: {
                userId,
                courseSlug,
            },
        });
        if (existingCertificate) {
            return existingCertificate;
        }
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
        const certificateId = await this.createUniqueCertificateId();
        const issueDate = new Date();
        /*
         * The existing generator expects a string date.
         */
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
            const certificateId = `CL-${Date.now().toString(36).toUpperCase()}-` +
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
};
//# sourceMappingURL=certificate.service.js.map