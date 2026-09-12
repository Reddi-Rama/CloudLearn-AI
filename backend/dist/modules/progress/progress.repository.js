"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressRepository = void 0;
const prisma_1 = require("../../lib/prisma");
exports.progressRepository = {
    async upsertProgress(data) {
        return prisma_1.prisma.progress.upsert({
            where: {
                userId_lessonSlug: {
                    userId: data.userId,
                    lessonSlug: data.lessonSlug,
                },
            },
            update: {
                completed: data.completed,
                moduleSlug: data.moduleSlug,
                courseSlug: data.courseSlug,
                completedAt: data.completed ? new Date() : null,
            },
            create: {
                ...data,
                completedAt: data.completed ? new Date() : null,
            },
        });
    },
    async getCourseProgress(userId, courseSlug) {
        return prisma_1.prisma.progress.findMany({
            where: {
                userId,
                courseSlug,
            },
            orderBy: {
                updatedAt: "desc",
            },
        });
    },
    async getLastLesson(userId, courseSlug) {
        return prisma_1.prisma.progress.findFirst({
            where: {
                userId,
                courseSlug,
            },
            orderBy: {
                updatedAt: "desc",
            },
        });
    }
};
//# sourceMappingURL=progress.repository.js.map