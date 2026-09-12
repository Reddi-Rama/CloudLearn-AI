"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveProgress = saveProgress;
exports.getCourseProgress = getCourseProgress;
exports.resumeCourse = resumeCourse;
const progress_service_1 = require("./progress.service");
async function saveProgress(req, res) {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const courseSlug = String(req.params.courseSlug || "").trim();
        const moduleSlug = String(req.body?.moduleSlug || "").trim();
        const lessonSlug = String(req.body?.lessonSlug || "").trim();
        const completed = Boolean(req.body?.completed);
        if (!courseSlug) {
            return res.status(400).json({
                success: false,
                message: "Course slug is required",
            });
        }
        if (!moduleSlug) {
            return res.status(400).json({
                success: false,
                message: "Module slug is required",
            });
        }
        if (!lessonSlug) {
            return res.status(400).json({
                success: false,
                message: "Lesson slug is required",
            });
        }
        const progress = await progress_service_1.progressService.saveProgress(userId, courseSlug, moduleSlug, lessonSlug, completed);
        return res.status(200).json({
            success: true,
            message: "Progress saved successfully",
            data: progress,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to save progress";
        return res.status(400).json({
            success: false,
            message,
        });
    }
}
async function getCourseProgress(req, res) {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const courseSlug = String(req.params.courseSlug || "").trim();
        if (!courseSlug) {
            return res.status(400).json({
                success: false,
                message: "Course slug is required",
            });
        }
        const progress = await progress_service_1.progressService.getCourseProgress(userId, courseSlug);
        return res.status(200).json({
            success: true,
            data: progress,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to fetch course progress";
        return res.status(400).json({
            success: false,
            message,
        });
    }
}
async function resumeCourse(req, res) {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const courseSlug = String(req.params.courseSlug || "").trim();
        if (!courseSlug) {
            return res.status(400).json({
                success: false,
                message: "Course slug is required",
            });
        }
        const lesson = await progress_service_1.progressService.resumeCourse(userId, courseSlug);
        return res.status(200).json({
            success: true,
            data: lesson,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to resume course";
        return res.status(400).json({
            success: false,
            message,
        });
    }
}
//# sourceMappingURL=progress.controller.js.map