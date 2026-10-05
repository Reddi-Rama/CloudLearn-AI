"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examRepository = void 0;
const prisma_1 = require("../../lib/prisma");
exports.examRepository = {
    async findPublishedExamByCourseSlug(courseSlug) {
        return prisma_1.prisma.exam.findFirst({
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
        return prisma_1.prisma.course.findUnique({
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
        return prisma_1.prisma.enrollment.findFirst({
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
        return prisma_1.prisma.examAttempt.create({
            data,
        });
    },
    async findLatestAttempt(userId, examId) {
        return prisma_1.prisma.examAttempt.findFirst({
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