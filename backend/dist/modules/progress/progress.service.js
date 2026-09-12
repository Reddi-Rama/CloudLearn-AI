"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressService = void 0;
const progress_repository_1 = require("./progress.repository");
exports.progressService = {
    async saveProgress(userId, courseSlug, moduleSlug, lessonSlug, completed) {
        return progress_repository_1.progressRepository.upsertProgress({
            userId,
            courseSlug,
            moduleSlug,
            lessonSlug,
            completed,
        });
    },
    async getCourseProgress(userId, courseSlug) {
        const progress = await progress_repository_1.progressRepository.getCourseProgress(userId, courseSlug);
        const completedLessons = progress.filter((lesson) => lesson.completed).length;
        return {
            totalLessons: progress.length,
            completedLessons,
            percentage: progress.length === 0
                ? 0
                : Math.round((completedLessons / progress.length) * 100),
            lessons: progress,
        };
    },
    async resumeCourse(userId, courseSlug) {
        return progress_repository_1.progressRepository.getLastLesson(userId, courseSlug);
    },
};
//# sourceMappingURL=progress.service.js.map