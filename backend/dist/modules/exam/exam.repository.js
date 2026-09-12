"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.examRepository = {
    async findPublishedExamByCourseSlug(courseSlug) {
        return prisma.exam.findFirst({
            where: {
                isPublished: true,
                course: {
                    slug: courseSlug,
                },
            },
            include: {
                course: true,
                questions: {
                    orderBy: {
                        position: "asc",
                    },
                },
            },
        });
    },
    async findCourseBySlug(courseSlug) {
        return prisma.course.findUnique({
            where: {
                slug: courseSlug,
            },
            select: {
                id: true,
                slug: true,
                title: true,
            },
        });
    },
    async findEnrollment(userId, courseId) {
        return prisma.enrollment.findFirst({
            where: {
                userId,
                courseId,
            },
            select: {
                id: true,
                status: true,
            },
        });
    },
    async createAttempt(data) {
        return prisma.examAttempt.create({
            data,
        });
    },
    async findLatestAttempt(userId, examId) {
        return prisma.examAttempt.findFirst({
            where: {
                userId,
                examId,
            },
            orderBy: {
                submittedAt: "desc",
            },
        });
    },
};
//# sourceMappingURL=exam.repository.js.map